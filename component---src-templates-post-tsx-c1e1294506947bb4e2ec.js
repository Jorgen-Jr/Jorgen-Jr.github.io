(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+kg1":function(e,t,a){"use strict";a.r(t);var r=a("0SSZ"),n=a("aqhL"),c=a("v7Hm"),i=a("tofy"),l=a("flX4"),o=a("rGDf"),m=a("+p43"),s=a("vG+z"),u=a("MAJE"),p=a("wZsY"),d=a("Wbzz"),f=a("q1tI"),b=a.n(f),g=a("VXBa"),h=a("hizP");a("2nBW");t.default=function(e){var t=e.data,a=t.markdownRemark,f=t.previous,x=t.next;return b.a.createElement(g.a,{slide:-1},a?b.a.createElement(b.a.Fragment,null,b.a.createElement(h.a,{title:"Jorge's Room - "+a.frontmatter.title,description:a.excerpt,lang:"pt-BR",image:"https://joujiroom.netlify.app"+a.frontmatter.cover,meta:[{name:"og:url",content:a.slug},{name:"twitter:title",content:"Jorge's Room - "+a.frontmatter.title},{name:"twitter:card",content:"summary_large_image"}]}),b.a.createElement(c.a,{className:"wrapper",mt:"80px",mb:"80px",p:["0 10px","0 30px","0 100px"]},b.a.createElement(i.a,{flexDir:"column",mb:"35px"},b.a.createElement(i.a,{h:"50px",alignItems:"center"},b.a.createElement(l.a,{separator:b.a.createElement(r.a,{color:"gray.500"}),fontWeight:"medium",fontSize:"md"},b.a.createElement(l.b,null,b.a.createElement(d.Link,{to:"/#"},"Início")),b.a.createElement(l.b,null,b.a.createElement(d.Link,{to:"/blog"},"Blog")),b.a.createElement(l.b,{isCurrentPage:!0},b.a.createElement(l.c,null,a.frontmatter.title))))),b.a.createElement(i.a,{flexDir:["column"],justifyContent:"center",alignItems:"center",maxW:"800px",m:"auto"},b.a.createElement(o.a,{fontSize:"xl",color:Object(m.c)("#12466e","#4a97ef"),mb:"10px"},a.frontmatter.title),b.a.createElement(s.a,{alt:"Capa do informativo "+a.frontmatter.title,src:a.frontmatter.cover,borderRadius:"md",boxShadow:"md",mb:"30px",minH:"350px"}),b.a.createElement("div",{className:"post-content-full",dangerouslySetInnerHTML:{__html:a.html}}),b.a.createElement(u.a,{textAlign:"right",fontSize:"medium",fontWeight:"bolder",mt:"20px",w:"100%"},a.frontmatter.date))),b.a.createElement(p.a,{w:"100%",justifyContent:"space-around",p:"30px"},null!==x?b.a.createElement(d.Link,{to:x.fields.slug,rel:"Anterior"},b.a.createElement(u.a,{textAlign:"left",ml:"10px"},"Próximo Post"),b.a.createElement(i.a,{alignItems:"center"},b.a.createElement(n.a,{boxSize:"30px",color:Object(m.c)("#053a63","#5c9fed")}),"  ",b.a.createElement(u.a,{as:"span",height:"30px",fontWeight:"bolder",fontSize:["0.9rem","1.1rem"],display:"flex",alignItems:"center",color:Object(m.c)("#053a63","#5c9fed"),paddingTop:"2px",lineHeight:"1"},x.frontmatter.title))):b.a.createElement(c.a,null),null!==f?b.a.createElement(d.Link,{to:f.fields.slug,rel:"Próximo"},b.a.createElement(u.a,{textAlign:"right",mr:"10px"},"Post Anterior"),b.a.createElement(i.a,{alignItems:"center"},b.a.createElement(u.a,{as:"span",height:"30px",fontWeight:"bolder",fontSize:["0.9rem","1.1rem"],display:"flex",alignItems:"center",color:Object(m.c)("#053a63","#5c9fed"),paddingTop:"2px",lineHeight:"1"},f.frontmatter.title),"  ",b.a.createElement(r.a,{boxSize:"30px",color:Object(m.c)("#053a63","#5c9fed")}))):b.a.createElement(c.a,null))):null)}},"2nBW":function(e,t,a){},aqhL:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("6qu1"),n=Object(r.a)({d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",displayName:"ChevronLeftIcon"})},flX4:function(e,t,a){"use strict";a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return g})),a.d(t,"a",(function(){return h}));var r=a("sKyC"),n=a("5+Am"),c=a("U6LL"),i=a("4jWa"),l=a("CRla"),o=a("pr4h"),m=a("epLR"),s=a("JX03"),u=a("q1tI");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}var f=Object(r.a)((function(e,t){var a=e.spacing,r=d(e,["spacing"]),i=p({mx:a},Object(n.c)().separator);return u.createElement(c.a.span,p({ref:t,role:"presentation"},r,{__css:i}))}));o.a&&(f.displayName="BreadcrumbSeparator");var b=Object(r.a)((function(e,t){var a=e.isCurrentPage,r=e.as,i=e.className,l=d(e,["isCurrentPage","as","className"]),o=Object(n.c)(),s=p({ref:t,as:r,className:Object(m.b)("chakra-breadcrumb__link",i)},l);return a?u.createElement(c.a.span,p({"aria-current":"page"},s)):u.createElement(c.a.a,p({__css:o.link},s))}));o.a&&(b.displayName="BreadcrumbLink");var g=Object(r.a)((function(e,t){var a=e.isCurrentPage,r=e.separator,n=e.isLastChild,i=e.spacing,l=e.children,o=e.className,g=d(e,["isCurrentPage","separator","isLastChild","spacing","children","className"]),h=Object(s.b)(l).map((function(e){return e.type===b?u.cloneElement(e,{isCurrentPage:a}):e.type===f?u.cloneElement(e,{spacing:i,children:e.props.children||r}):e})),x=Object(m.b)("chakra-breadcrumb__list-item",o);return u.createElement(c.a.li,p({ref:t,className:x},g,{__css:{display:"inline-flex",alignItems:"center"}}),h,!n&&u.createElement(f,{spacing:i},r))}));o.a&&(g.displayName="BreadcrumbItem");var h=Object(r.a)((function(e,t){var a=Object(i.a)("Breadcrumb",e),r=Object(l.b)(e),o=r.children,f=r.spacing,b=void 0===f?"0.5rem":f,g=r.separator,h=void 0===g?"/":g,x=r.className,E=d(r,["children","spacing","separator","className"]),v=Object(s.b)(o),y=v.length,j=v.map((function(e,t){return u.cloneElement(e,{separator:h,spacing:b,isLastChild:y===t+1})})),O=Object(m.b)("chakra-breadcrumb",x);return u.createElement(c.a.nav,p({ref:t,"aria-label":"breadcrumb",className:O},E),u.createElement(n.b,{value:a},u.createElement(c.a.ol,{className:"chakra-breadcrumb__list"},j)))}));o.a&&(h.displayName="Breadcrumb")},wZsY:function(e,t,a){"use strict";a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return b}));var r=a("rePB"),n=a("U6LL"),c=a("sKyC"),i=a("JX03"),l=a("epLR"),o=a("pr4h"),m=a("q1tI"),s=a("x9W9"),u="& > *:not(style) ~ *:not(style)";function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var d=function(e){return m.createElement(n.a.div,p({className:"chakra-stack__item"},e,{__css:p({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},f=Object(c.a)((function(e,t){var a=e.isInline,c=e.direction,o=e.align,f=e.justify,b=e.spacing,g=void 0===b?"0.5rem":b,h=e.wrap,x=e.children,E=e.divider,v=e.className,y=e.shouldWrapChildren,j=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),O=a?"row":null!=c?c:"column",k=m.useMemo((function(){return function(e){var t=e.spacing,a=e.direction,n={column:{mt:t,ml:0},row:{ml:t,mt:0},"column-reverse":{mb:t,mr:0},"row-reverse":{mr:t,mb:0}};return Object(r.a)({flexDirection:a},u,Object(s.b)(a,(function(e){return n[e]})))}({direction:O,spacing:g})}),[O,g]),_=m.useMemo((function(){return function(e){var t=e.spacing,a=e.direction,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Object(s.b)(a,(function(e){return r[e]}))}}({spacing:g,direction:O})}),[g,O]),w=!!E,L=!y&&!w,N=Object(i.b)(x),W=L?N:N.map((function(e,t){var a=t+1===N.length,r=y?m.createElement(d,{key:t},e):e;if(!w)return r;var n=a?null:m.cloneElement(E,{__css:_});return m.createElement(m.Fragment,{key:t},r,n)})),C=Object(l.b)("chakra-stack",v);return m.createElement(n.a.div,p({ref:t,display:"flex",alignItems:o,justifyContent:f,flexDirection:k.flexDirection,flexWrap:h,className:C,__css:w?{}:Object(r.a)({},u,k[u])},j),W)}));o.a&&(f.displayName="Stack");var b=Object(c.a)((function(e,t){return m.createElement(f,p({align:"center"},e,{direction:"row",ref:t}))}));o.a&&(b.displayName="HStack");var g=Object(c.a)((function(e,t){return m.createElement(f,p({align:"center"},e,{direction:"column",ref:t}))}));o.a&&(g.displayName="VStack")}}]);
//# sourceMappingURL=component---src-templates-post-tsx-c1e1294506947bb4e2ec.js.map