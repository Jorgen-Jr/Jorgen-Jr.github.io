(self.webpackChunkjorge_room=self.webpackChunkjorge_room||[]).push([[623,562],{5118:function(e,t,r){"use strict";r.d(t,{At:function(){return g},gN:function(){return x},aG:function(){return h}});var n=r(2543),a=r(9735),o=r(9265),l=r(3888),i=r(7487),c=r(4667),s=r(5587),m=r(2299),u=r(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var f=(0,n.G)((function(e,t){var r=e.spacing,n=p(e,["spacing"]),l=d({mx:r},(0,a.yK)().separator);return u.createElement(o.m$.span,d({ref:t,role:"presentation"},n,{__css:l}))}));c.Ts&&(f.displayName="BreadcrumbSeparator");var g=(0,n.G)((function(e,t){var r=e.isCurrentPage,n=e.as,l=e.className,i=p(e,["isCurrentPage","as","className"]),c=(0,a.yK)(),m=d({ref:t,as:n,className:(0,s.cx)("chakra-breadcrumb__link",l)},i);return r?u.createElement(o.m$.span,d({"aria-current":"page",__css:c.link},m)):u.createElement(o.m$.a,d({__css:c.link},m))}));c.Ts&&(g.displayName="BreadcrumbLink");var x=(0,n.G)((function(e,t){var r=e.isCurrentPage,n=e.separator,l=e.isLastChild,i=e.spacing,c=e.children,x=e.className,h=p(e,["isCurrentPage","separator","isLastChild","spacing","children","className"]),E=(0,m.W)(c).map((function(e){return e.type===g?u.cloneElement(e,{isCurrentPage:r}):e.type===f?u.cloneElement(e,{spacing:i,children:e.props.children||n}):e})),v=d({display:"inline-flex",alignItems:"center"},(0,a.yK)().item),b=(0,s.cx)("chakra-breadcrumb__list-item",x);return u.createElement(o.m$.li,d({ref:t,className:b},h,{__css:v}),E,!l&&u.createElement(f,{spacing:i},n))}));c.Ts&&(x.displayName="BreadcrumbItem");var h=(0,n.G)((function(e,t){var r=(0,l.j)("Breadcrumb",e),n=(0,i.Lr)(e),c=n.children,f=n.spacing,g=void 0===f?"0.5rem":f,x=n.separator,h=void 0===x?"/":x,E=n.className,v=p(n,["children","spacing","separator","className"]),b=(0,m.W)(c),y=b.length,k=b.map((function(e,t){return u.cloneElement(e,{separator:h,spacing:g,isLastChild:y===t+1})})),C=(0,s.cx)("chakra-breadcrumb",E);return u.createElement(o.m$.nav,d({ref:t,"aria-label":"breadcrumb",className:C,__css:r.container},v),u.createElement(a.Fo,{value:r},u.createElement(o.m$.ol,{className:"chakra-breadcrumb__list"},k)))}));c.Ts&&(h.displayName="Breadcrumb")},1131:function(e,t,r){"use strict";r.d(t,{w:function(){return n}});var n=(0,r(4982).I)({d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",displayName:"ChevronLeftIcon"})},8206:function(e,t,r){"use strict";r.d(t,{Ug:function(){return x},Kq:function(){return g}});var n=r(6156),a=r(9265),o=r(2543),l=r(5587),i=r(4667),c=r(2299),s=r(7294),m=r(4526);Object.freeze(["base","sm","md","lg","xl","2xl"]);function u(e,t){return(0,i.kJ)(e)?e.map((function(e){return null===e?null:t(e)})):(0,i.Kn)(e)?(0,m.Yd)(e).reduce((function(r,n){return r[n]=t(e[n]),r}),{}):null!=e?t(e):null}var d="& > *:not(style) ~ *:not(style)";function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=function(e){return s.createElement(a.m$.div,p({className:"chakra-stack__item"},e,{__css:p({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},g=(0,o.G)((function(e,t){var r=e.isInline,o=e.direction,i=e.align,m=e.justify,g=e.spacing,x=void 0===g?"0.5rem":g,h=e.wrap,E=e.children,v=e.divider,b=e.className,y=e.shouldWrapChildren,k=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),C=r?"row":null!=o?o:"column",_=s.useMemo((function(){return function(e){var t=e.spacing,r=e.direction,a={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return(0,n.Z)({flexDirection:r},d,u(r,(function(e){return a[e]})))}({direction:C,spacing:x})}),[C,x]),w=s.useMemo((function(){return function(e){var t=e.spacing,r=e.direction,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":u(r,(function(e){return n[e]}))}}({spacing:x,direction:C})}),[x,C]),N=!!v,B=!y&&!N,W=(0,c.W)(E),S=B?W:W.map((function(e,t){var r=t+1===W.length,n=y?s.createElement(f,{key:t},e):e;if(!N)return n;var a=r?null:s.cloneElement(v,{__css:w});return s.createElement(s.Fragment,{key:t},n,a)})),j=(0,l.cx)("chakra-stack",b);return s.createElement(a.m$.div,p({ref:t,display:"flex",alignItems:i,justifyContent:m,flexDirection:_.flexDirection,flexWrap:h,className:j,__css:N?{}:(0,n.Z)({},d,_[d])},k),S)}));i.Ts&&(g.displayName="Stack");var x=(0,o.G)((function(e,t){return s.createElement(g,p({align:"center"},e,{direction:"row",ref:t}))}));i.Ts&&(x.displayName="HStack");var h=(0,o.G)((function(e,t){return s.createElement(g,p({align:"center"},e,{direction:"column",ref:t}))}));i.Ts&&(h.displayName="VStack")},5813:function(e,t,r){"use strict";r.r(t),r.d(t,{PostCard:function(){return d}});var n=r(8206),a=r(5230),o=r(1531),l=r(7690),i=r(2200),c=r(2331),s=r(7361),m=r(5444),u=r(7294),d=function(e){var t=e.post,r=e.fullWidth,d=null==t?void 0:t.special;return u.createElement(u.Fragment,null,t?u.createElement(n.Kq,{borderRadius:"5px",w:d||r?"100%":["100%","100%","100%","29%"],m:"20px",overflow:"hidden",background:d&&t.isBanner?"unset":(0,a.useColorModeValue)("white","#102435"),position:"relative",direction:r?["column","column","row","row"]:"column",justifyContent:d?"center":"auto",shadow:d?"none":"xl"},u.createElement(m.Link,{to:t.slug},u.createElement(o.E,{src:t.cover,alt:t.title,loading:t.isBanner?"eager":"lazy",style:{margin:0,width:"100%"},borderRadius:d?"7px":"unset",shadow:d?"md":"none"})),u.createElement(m.Link,{to:t.slug},u.createElement(l.xu,Object.assign({},t.isBanner?{display:"none"}:null,{p:"0 20px"}),u.createElement(i.x,{as:"span",fontSize:"12px",color:(0,a.useColorModeValue)("#666","#CCC"),fontWeight:"bolder"},""+t.category.toUpperCase())," • ",u.createElement(i.x,{as:"span",fontSize:"12px",color:(0,a.useColorModeValue)("#666","#CCC")},""+t.post_date),u.createElement(c.X,{fontSize:"25px"},t.title),u.createElement(s.k,{flexGrow:1,justifyContent:"space-between",flexDir:"row"},u.createElement(l.xu,{mt:"10px",pb:"25px",color:(0,a.useColorModeValue)("#666","#CCC"),zIndex:0},u.createElement("div",{className:"aviso-content-list",dangerouslySetInnerHTML:{__html:t.content}})," ",u.createElement(i.x,{style:{color:(0,a.useColorModeValue)("darkblue","lightblue")}},"ler mais")))))):null)};t.default=d},5322:function(e,t,r){"use strict";r.r(t);var n=r(9063),a=r(1131),o=r(7690),l=r(7361),i=r(5118),c=r(8206),s=r(5230),m=r(2200),u=r(5444),d=r(7294),p=r(5813),f=r(8774),g=r(5167);t.default=function(e){var t=e.data,r=e.pageContext,x=r.currentPage,h=r.numPages,E=t.allMarkdownRemark.edges,v=1===x,b=x===h,y=x-1==1?"/blog/":"/blog/"+(x-1).toString(),k="/blog/"+(x+1).toString(),C=E.map((function(e){return{post_date:e.node.frontmatter.date,slug:e.node.fields.slug,title:e.node.frontmatter.title,cover:e.node.frontmatter.cover,content:e.node.excerpt,isBanner:e.node.frontmatter.isBanner,special:e.node.frontmatter.special,category:e.node.frontmatter.category}}));return d.createElement(f.Z,{slide:-1},d.createElement(g.Z,{title:"Blog",description:"Jorge's Room - Blog posts e comunicados. Veja o conteudo postado.",lang:"pt-BR"}),d.createElement(o.xu,{className:"wrapper",mt:"80px",mb:"80px",p:["0 10px","0","0","0","0 100px"]},d.createElement(l.k,{flexDir:"column",mb:"35px",ml:"15px"},d.createElement(l.k,{h:"50px",alignItems:"center"},d.createElement(i.aG,{separator:d.createElement(n.X,{color:"gray.500"}),fontWeight:"medium",fontSize:"md"},d.createElement(i.gN,null,d.createElement(u.Link,{to:"/#"},"Início")),d.createElement(i.gN,{isCurrentPage:!0},d.createElement(u.Link,{to:"/blog"},"Blog"))))),d.createElement(l.k,{p:["0","0","0","0","0","0 100px"],justifyContent:"space-between",alignSelf:"center",flexWrap:"wrap"},C.map((function(e,t){return d.createElement(p.PostCard,{key:"aviso"+t,post:e,fullWidth:0===t})})))),d.createElement(c.Ug,{w:"100%",justifyContent:"space-evenly",p:"30px"},v?d.createElement(o.xu,null):d.createElement(u.Link,{to:y,rel:"Anterior"},d.createElement(l.k,{alignItems:"center"},d.createElement(a.w,{boxSize:"30px",color:(0,s.useColorModeValue)("#053a63","#e1e1e1")}),"  ",d.createElement(m.x,{as:"span",height:"30px",fontWeight:"bolder",fontSize:"1.1rem",display:"flex",alignItems:"center",color:(0,s.useColorModeValue)("#053a63","#e1e1e1"),paddingTop:"2px"},"Página Anterior"))),b?d.createElement(o.xu,null):d.createElement(u.Link,{to:k,rel:"Próximo"},d.createElement(l.k,{alignItems:"center"},d.createElement(m.x,{as:"span",height:"30px",fontWeight:"bolder",fontSize:"1.1rem",display:"flex",alignItems:"center",color:(0,s.useColorModeValue)("#053a63","#e1e1e1"),paddingTop:"2px"},"Próxima Página"),"  ",d.createElement(n.X,{boxSize:"30px",color:(0,s.useColorModeValue)("#053a63","#e1e1e1")})))))}}}]);
//# sourceMappingURL=component---src-templates-post-list-tsx-672bb91a8c09b83eedea.js.map