import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import logo from "./../assets/image/brand_logo.png";

function SEO({ description, lang, meta, title, image, url }: IProps) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author {
                            name
                        }
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const metaUrl = url || "";

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                // Open Graph Meta Tags
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:type`,
                    content: `article`,
                },
                {
                    name: `og:url`,
                    content: metaUrl,
                },
                {
                    name: `og:image`,
                    content: image ? image : logo,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:site_name`,
                    content: site.siteMetadata.title,
                },
                {
                    property: `article:section`,
                    content: metaDescription,
                },
                {
                    property: `article:tag`,
                    content: site.siteMetadata.keywords,
                },
                // Twitter Meta Tags
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:site`,
                    content: `@jorgesnjr`,
                },
                {
                    name: `twitter:title`,
                    content: `${title}`,
                },
                {
                    name: `twitter:description`,
                    content: `${metaDescription}`,
                },
                {
                    name: `twitter:image:src`,
                    content: image ? image : logo,
                },
                {
                    name: `twitter:image`,
                    content: image ? image : logo,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author.name,
                },
            ].concat(meta)}
        />
    );
}

interface IProps {
    lang: string;
    meta: any[];
    description: string;
    title: string;
    image?: string;
    url: string;
}

SEO.defaultProps = {
    lang: `pt-BR`,
    meta: [],
    description: ``,
    url: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO;
