/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/post.tsx`);

  // Get all markdown blog posts sorted by date
  const posts = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {frontmatter: {layout: {eq: "post"}}}
          sort: {frontmatter: {date: ASC}}
        ) {
          nodes {
            id
            html
            frontmatter {
              cover
              date(formatString: "DD/MM/YYYY HH:mm")
              isBanner
              layout
              special
              title
            }
            fields {
              slug
            }
          }
        }
      }
    `
  );

  if (posts.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      posts.errors
    );
    return;
  }

  const post_list = posts.data.allMarkdownRemark.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (post_list.length > 0) {
    post_list.forEach((post, index) => {
      const previousPostId = index === 0 ? null : post_list[index - 1].id;
      const nextPostId =
        index === post_list.length - 1 ? null : post_list[index + 1].id;

      const date = post.frontmatter.date;
      const day = date.substring(0, 2);
      const month = date.substring(3, 5);
      const year = date.substring(6, 10);

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          date: `${year}-${month}-${day}`,
          previousPostId,
          nextPostId,
        },
      });
    });
  }

  // Create post feed pages
  await graphql(
    `
      {
        allMarkdownRemark(
          sort: {frontmatter: {date: DESC}}
          filter: {frontmatter: {layout: {eq: "post"}}}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(() => {
      // Create blog post list pages
      const postsPerPage = 25;
      const numPages = Math.ceil(posts.length / postsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
          component: path.resolve("./src/templates/post-list.tsx"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        });
      });
    });
  });

  // Define a template for blog post
  const projectPost = path.resolve(`./src/templates/project.tsx`);

  // Get all markdown blog posts sorted by date
  await graphql(
    `
    {
      allMarkdownRemark(
        filter: {frontmatter: {layout: {eq: "project"}, active: {eq: true}}}
        sort: {frontmatter: {date: ASC}}
      ) {
        nodes {
          id
          html
          frontmatter {
            layout
            description
            short_description
            icon
            name
            title
            active
          }
          fields {
            slug
          }
        }
      }
    }
    
    `
  ).then((result) => {
    if (result.errors) {
      reporter.panicOnBuild(
        `There was an error loading your blog posts`,
        projectResult.errors
      );
      return;
    }

    const projects = result.data.allMarkdownRemark.nodes;

    // Create blog posts pages
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL
    if (projects.length > 0) {
      projects.forEach((project, index) => {
        // const previousPostId = index === 0 ? null : project[index - 1].id;
        // const nextPostId = index === project.length - 1 ? null : project[index + 1].id;


        createPage({
          path: project.fields.slug,
          component: projectPost,
          context: {
            id: project.id,
            // previousPostId,
            // nextPostId,
          },
        });
      });
    }
  });

};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/projects/)) {
    page.matchPath = "/projects/*";
    createPage(page);
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
