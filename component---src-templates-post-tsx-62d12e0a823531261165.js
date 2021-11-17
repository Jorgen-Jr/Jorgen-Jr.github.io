"use strict";(self.webpackChunkjorge_room=self.webpackChunkjorge_room||[]).push([[186],{9535:function(e,t,r){r.d(t,{aG:function(){return x},gN:function(){return d},At:function(){return g}});var a=r(7370),n=r(559),l=r(9818),c=r(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}var o=["spacing"],s=["isCurrentPage","as","className","href"],p=["isCurrentPage","separator","isLastChild","spacing","children","className"],u=["children","spacing","separator","className"],f=(0,a.Gp)((function(e,t){var r=e.spacing,n=m(e,o),l=i({mx:r},(0,a.yK)().separator);return c.createElement(a.m$.span,i({ref:t,role:"presentation"},n,{__css:l}))}));n.Ts&&(f.displayName="BreadcrumbSeparator");var g=(0,a.Gp)((function(e,t){var r=e.isCurrentPage,l=e.as,o=e.className,p=e.href,u=m(e,s),f=(0,a.yK)(),g=i({ref:t,as:l,className:(0,n.cx)("chakra-breadcrumb__link",o)},u);return r?c.createElement(a.m$.span,i({"aria-current":"page",__css:f.link},g)):c.createElement(a.m$.a,i({__css:f.link,href:p},g))}));n.Ts&&(g.displayName="BreadcrumbLink");var d=(0,a.Gp)((function(e,t){var r=e.isCurrentPage,o=e.separator,s=e.isLastChild,u=e.spacing,d=e.children,x=e.className,E=m(e,p),h=(0,l.WR)(d).map((function(e){return e.type===g?c.cloneElement(e,{isCurrentPage:r}):e.type===f?c.cloneElement(e,{spacing:u,children:e.props.children||o}):e})),b=i({display:"inline-flex",alignItems:"center"},(0,a.yK)().item),v=(0,n.cx)("chakra-breadcrumb__list-item",x);return c.createElement(a.m$.li,i({ref:t,className:v},E,{__css:b}),h,!s&&c.createElement(f,{spacing:u},o))}));n.Ts&&(d.displayName="BreadcrumbItem");var x=(0,a.Gp)((function(e,t){var r=(0,a.jC)("Breadcrumb",e),o=(0,a.Lr)(e),s=o.children,p=o.spacing,f=void 0===p?"0.5rem":p,g=o.separator,d=void 0===g?"/":g,x=o.className,E=m(o,u),h=(0,l.WR)(s),b=h.length,v=h.map((function(e,t){return c.cloneElement(e,{separator:d,spacing:f,isLastChild:b===t+1})})),k=(0,n.cx)("chakra-breadcrumb",x);return c.createElement(a.m$.nav,i({ref:t,"aria-label":"breadcrumb",className:k,__css:r.container},E),c.createElement(a.Fo,{value:r},c.createElement(a.m$.ol,{className:"chakra-breadcrumb__list"},v)))}));n.Ts&&(x.displayName="Breadcrumb")},5193:function(e,t,r){r.r(t);var a=r(7278),n=r(6541),l=r(9535),c=r(8262),i=r(45),m=r(5444),o=r(7294),s=r(8271),p=r(5167);t.default=function(e){var t=e.data,r=t.markdownRemark,u=t.previous,f=t.next;return o.createElement(s.Z,{slide:-1},r?o.createElement(o.Fragment,null,o.createElement(p.Z,{title:r.frontmatter.title,description:r.excerpt,lang:"pt-BR",image:"https://jorgenjr.netlify.app"+r.frontmatter.cover,meta:[{name:"og:url",content:r.slug},{name:"twitter:title",content:"Jorge's Room - "+r.frontmatter.title},{name:"twitter:card",content:"summary_large_image"}]}),o.createElement(n.xu,{className:"wrapper",mt:"80px",mb:"80px",p:["0 10px","0 30px","0 100px"]},o.createElement(n.kC,{flexDir:"column",mb:"35px"},o.createElement(n.kC,{h:"50px",alignItems:"center"},o.createElement(l.aG,{separator:o.createElement(a.XC,{color:"gray.500"}),fontWeight:"medium",fontSize:"md"},o.createElement(l.gN,null,o.createElement(m.Link,{to:"/#"},"Início")),o.createElement(l.gN,null,o.createElement(m.Link,{to:"/blog"},"Blog")),o.createElement(l.gN,{isCurrentPage:!0},o.createElement(l.At,null,r.frontmatter.title))))),o.createElement(n.kC,{flexDir:["column"],justifyContent:"center",alignItems:"center",maxW:"800px",m:"auto"},o.createElement(n.X6,{fontSize:"xl",color:(0,c.ff)("#12466e","#4a97ef"),mb:"10px"},r.frontmatter.title),o.createElement(i.Ee,{alt:"Capa do informativo "+r.frontmatter.title,src:r.frontmatter.cover,borderRadius:"md",boxShadow:"md",mb:"30px",minH:"350px"}),o.createElement("div",{className:"post-content-full",dangerouslySetInnerHTML:{__html:r.html}}),o.createElement(n.xv,{textAlign:"right",fontSize:"medium",fontWeight:"bolder",mt:"20px",w:"100%"},r.frontmatter.date))),o.createElement(n.Ug,{w:"100%",justifyContent:"space-around",p:"30px"},null!==f?o.createElement(m.Link,{to:f.fields.slug,rel:"Anterior"},o.createElement(n.xv,{textAlign:"left",ml:"10px"},"Próximo Post"),o.createElement(n.kC,{alignItems:"center"},o.createElement(a.wy,{boxSize:"30px",color:(0,c.ff)("#053a63","#5c9fed")}),"  ",o.createElement(n.xv,{as:"span",height:"30px",fontWeight:"bolder",fontSize:["0.9rem","1.1rem"],display:"flex",alignItems:"center",color:(0,c.ff)("#053a63","#5c9fed"),paddingTop:"2px",lineHeight:"1"},f.frontmatter.title))):o.createElement(n.xu,null),null!==u?o.createElement(m.Link,{to:u.fields.slug,rel:"Próximo"},o.createElement(n.xv,{textAlign:"right",mr:"10px"},"Post Anterior"),o.createElement(n.kC,{alignItems:"center"},o.createElement(n.xv,{as:"span",height:"30px",fontWeight:"bolder",fontSize:["0.9rem","1.1rem"],display:"flex",alignItems:"center",color:(0,c.ff)("#053a63","#5c9fed"),paddingTop:"2px",lineHeight:"1"},u.frontmatter.title),"  ",o.createElement(a.XC,{boxSize:"30px",color:(0,c.ff)("#053a63","#5c9fed")}))):o.createElement(n.xu,null))):null)}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-62d12e0a823531261165.js.map