(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+kg1":function(e,t,a){"use strict";a.r(t);var r=a("0SSZ"),n=a("aqhL"),c=a("v7Hm"),i=a("tofy"),l=a("flX4"),o=a("rGDf"),m=a("+p43"),s=a("vG+z"),u=a("MAJE"),d=a("wZsY"),p=a("Wbzz"),f=a("q1tI"),g=a.n(f),b=a("VXBa"),h=a("hizP");t.default=function(e){var t=e.data,a=t.markdownRemark,f=t.previous,x=t.next;return g.a.createElement(b.a,{slide:-1},a?g.a.createElement(g.a.Fragment,null,g.a.createElement(h.a,{title:"Jorge's Room - "+a.frontmatter.title,description:a.excerpt,lang:"pt-BR",image:"https://joujiroom.netlify.app"+a.frontmatter.cover,meta:[{name:"og:url",content:a.slug},{name:"twitter:title",content:"Jorge's Room - "+a.frontmatter.title},{name:"twitter:card",content:"summary_large_image"}]}),g.a.createElement(c.a,{className:"wrapper",mt:"80px",mb:"80px",p:["0 10px","0 30px","0 100px"]},g.a.createElement(i.a,{flexDir:"column",mb:"35px"},g.a.createElement(i.a,{h:"50px",alignItems:"center"},g.a.createElement(l.a,{separator:g.a.createElement(r.a,{color:"gray.500"}),fontWeight:"medium",fontSize:"md"},g.a.createElement(l.b,null,g.a.createElement(p.Link,{to:"/#"},"Início")),g.a.createElement(l.b,null,g.a.createElement(p.Link,{to:"/blog"},"Blog")),g.a.createElement(l.b,{isCurrentPage:!0},g.a.createElement(l.c,null,a.frontmatter.title))))),g.a.createElement(i.a,{flexDir:["column"],justifyContent:"center",alignItems:"center",maxW:"800px",m:"auto"},g.a.createElement(o.a,{fontSize:"xl",color:Object(m.c)("#12466e","#4a97ef"),mb:"10px"},a.frontmatter.title),g.a.createElement(s.a,{alt:"Capa do informativo "+a.frontmatter.title,src:a.frontmatter.cover,borderRadius:"md",boxShadow:"md",mb:"30px",minH:"350px"}),g.a.createElement("div",{className:"aviso-content-full",dangerouslySetInnerHTML:{__html:a.html}}),g.a.createElement(u.a,{textAlign:"right",fontSize:"medium",fontWeight:"bolder",w:"100%"},a.frontmatter.date))),g.a.createElement(d.a,{w:"100%",justifyContent:"space-around",p:"30px"},null!==x?g.a.createElement(p.Link,{to:x.fields.slug,rel:"Anterior"},g.a.createElement(u.a,{textAlign:"left",ml:"10px"},"Próximo Post"),g.a.createElement(i.a,{alignItems:"center"},g.a.createElement(n.a,{boxSize:"30px",color:Object(m.c)("#053a63","#5c9fed")}),"  ",g.a.createElement(u.a,{as:"span",height:"30px",fontWeight:"bolder",fontSize:["0.9rem","1.1rem"],display:"flex",alignItems:"center",color:Object(m.c)("#053a63","#5c9fed"),paddingTop:"2px",lineHeight:"1"},x.frontmatter.title))):g.a.createElement(c.a,null),null!==f?g.a.createElement(p.Link,{to:f.fields.slug,rel:"Próximo"},g.a.createElement(u.a,{textAlign:"right",mr:"10px"},"Post Anterior"),g.a.createElement(i.a,{alignItems:"center"},g.a.createElement(u.a,{as:"span",height:"30px",fontWeight:"bolder",fontSize:["0.9rem","1.1rem"],display:"flex",alignItems:"center",color:Object(m.c)("#053a63","#5c9fed"),paddingTop:"2px",lineHeight:"1"},f.frontmatter.title),"  ",g.a.createElement(r.a,{boxSize:"30px",color:Object(m.c)("#053a63","#5c9fed")}))):g.a.createElement(c.a,null))):null)}},aqhL:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("6qu1"),n=Object(r.a)({d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",displayName:"ChevronLeftIcon"})},flX4:function(e,t,a){"use strict";a.d(t,"c",(function(){return g})),a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return h}));var r=a("sKyC"),n=a("5+Am"),c=a("U6LL"),i=a("4jWa"),l=a("CRla"),o=a("pr4h"),m=a("epLR"),s=a("DNJr"),u=a("q1tI");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}var f=Object(r.a)((function(e,t){var a=e.spacing,r=p(e,["spacing"]),i=d({mx:a},Object(n.d)().separator);return u.createElement(c.a.span,d({ref:t,role:"presentation"},r,{__css:i}))}));o.a&&(f.displayName="BreadcrumbSeparator");var g=Object(r.a)((function(e,t){var a=e.isCurrentPage,r=e.as,i=e.className,l=p(e,["isCurrentPage","as","className"]),o=Object(n.d)(),s=d({ref:t,as:r,className:Object(m.b)("chakra-breadcrumb__link",i)},l);return a?u.createElement(c.a.span,d({"aria-current":"page",__css:o.link},s)):u.createElement(c.a.a,d({__css:o.link},s))}));o.a&&(g.displayName="BreadcrumbLink");var b=Object(r.a)((function(e,t){var a=e.isCurrentPage,r=e.separator,i=e.isLastChild,l=e.spacing,o=e.children,b=e.className,h=p(e,["isCurrentPage","separator","isLastChild","spacing","children","className"]),x=Object(s.a)(o).map((function(e){return e.type===g?u.cloneElement(e,{isCurrentPage:a}):e.type===f?u.cloneElement(e,{spacing:l,children:e.props.children||r}):e})),E=d({display:"inline-flex",alignItems:"center"},Object(n.d)().item),v=Object(m.b)("chakra-breadcrumb__list-item",b);return u.createElement(c.a.li,d({ref:t,className:v},h,{__css:E}),x,!i&&u.createElement(f,{spacing:l},r))}));o.a&&(b.displayName="BreadcrumbItem");var h=Object(r.a)((function(e,t){var a=Object(i.a)("Breadcrumb",e),r=Object(l.b)(e),o=r.children,f=r.spacing,g=void 0===f?"0.5rem":f,b=r.separator,h=void 0===b?"/":b,x=r.className,E=p(r,["children","spacing","separator","className"]),v=Object(s.a)(o),j=v.length,y=v.map((function(e,t){return u.cloneElement(e,{separator:h,spacing:g,isLastChild:j===t+1})})),O=Object(m.b)("chakra-breadcrumb",x);return u.createElement(c.a.nav,d({ref:t,"aria-label":"breadcrumb",className:O,__css:a.container},E),u.createElement(n.b,{value:a},u.createElement(c.a.ol,{className:"chakra-breadcrumb__list"},y)))}));o.a&&(h.displayName="Breadcrumb")},wZsY:function(e,t,a){"use strict";a.d(t,"b",(function(){return g})),a.d(t,"a",(function(){return b}));var r=a("rePB"),n=a("U6LL"),c=a("sKyC"),i=a("epLR"),l=a("pr4h"),o=a("DNJr"),m=a("q1tI"),s=(a("ypkU"),a("BXwj"));Object.freeze(["base","sm","md","lg","xl","2xl"]);function u(e,t){return Object(l.c)(e)?e.map((function(e){return null===e?null:t(e)})):Object(l.h)(e)?Object(s.e)(e).reduce((function(a,r){return a[r]=t(e[r]),a}),{}):null!=e?t(e):null}var d="& > *:not(style) ~ *:not(style)";function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var f=function(e){return m.createElement(n.a.div,p({className:"chakra-stack__item"},e,{__css:p({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},g=Object(c.a)((function(e,t){var a=e.isInline,c=e.direction,l=e.align,s=e.justify,g=e.spacing,b=void 0===g?"0.5rem":g,h=e.wrap,x=e.children,E=e.divider,v=e.className,j=e.shouldWrapChildren,y=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),O=a?"row":null!=c?c:"column",k=m.useMemo((function(){return function(e){var t=e.spacing,a=e.direction,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return Object(r.a)({flexDirection:a},d,u(a,(function(e){return n[e]})))}({direction:O,spacing:b})}),[O,b]),_=m.useMemo((function(){return function(e){var t=e.spacing,a=e.direction,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":u(a,(function(e){return r[e]}))}}({spacing:b,direction:O})}),[b,O]),w=!!E,N=!j&&!w,L=Object(o.a)(x),C=N?L:L.map((function(e,t){var a=t+1===L.length,r=j?m.createElement(f,{key:t},e):e;if(!w)return r;var n=a?null:m.cloneElement(E,{__css:_});return m.createElement(m.Fragment,{key:t},r,n)})),S=Object(i.b)("chakra-stack",v);return m.createElement(n.a.div,p({ref:t,display:"flex",alignItems:l,justifyContent:s,flexDirection:k.flexDirection,flexWrap:h,className:S,__css:w?{}:Object(r.a)({},d,k[d])},y),C)}));l.a&&(g.displayName="Stack");var b=Object(c.a)((function(e,t){return m.createElement(g,p({align:"center"},e,{direction:"row",ref:t}))}));l.a&&(b.displayName="HStack");var h=Object(c.a)((function(e,t){return m.createElement(g,p({align:"center"},e,{direction:"column",ref:t}))}));l.a&&(h.displayName="VStack")}}]);
//# sourceMappingURL=component---src-templates-post-tsx-a3a7a0b1b03be75f279c.js.map