(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+QmB":function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("155x"),r=t("sKyC"),l=t("4jWa"),o=t("CRla"),c=t("U6LL"),i=t("epLR"),s=t("pr4h"),u=t("q1tI");function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var d=Object(r.a)((function(e,a){var t=Object(l.a)("Input",e),r=Object(o.b)(e),s=Object(n.a)(r),d=Object(i.b)("chakra-input",e.className);return u.createElement(c.a.input,m({},s,{__css:t.field,ref:a,className:d}))}));s.a&&(d.displayName="Input"),d.id="Input"},"155x":function(e,a,t){"use strict";t.d(a,"a",(function(){return I}));var n=t("BXwj"),r=t("epLR"),l=t("KwD7"),o=t("ODXe"),c=t("t6h6"),i=t("q1tI");function s(e){void 0===e&&(e=!1);var a=Object(i.useState)(e),t=Object(o.a)(a,2),n=t[0],r=t[1];return[n,{on:Object(i.useCallback)((function(){r(!0)}),[]),off:Object(i.useCallback)((function(){r(!1)}),[]),toggle:Object(i.useCallback)((function(){r((function(e){return!e}))}),[])}]}var u=t("zlS4"),m=t("sKyC"),d=t("4jWa"),b=t("CRla"),p=t("5+Am"),f=t("U6LL"),h=t("JX03"),j=t("pr4h");function O(){return(O=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function v(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}var g=Object(h.a)({strict:!1,name:"FormControlContext"}),x=Object(o.a)(g,2),y=x[0],E=x[1];var C=Object(m.a)((function(e,a){var t=Object(d.a)("Form",e),n=function(e){var a=e.id,t=e.isRequired,n=e.isInvalid,r=e.isDisabled,l=e.isReadOnly,i=v(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),u=Object(c.a)(),m=a||"field-"+u,d=m+"-label",b=m+"-feedback",p=m+"-helptext",f=s(),h=Object(o.a)(f,2),j=h[0],O=h[1],g=s(),x=Object(o.a)(g,2),y=x[0],E=x[1],C=s(),w=Object(o.a)(C,2),k=w[0],I=w[1];return{isRequired:!!t,isInvalid:!!n,isReadOnly:!!l,isDisabled:!!r,isFocused:!!k,onFocus:I.on,onBlur:I.off,hasFeedbackText:j,setHasFeedbackText:O,hasHelpText:y,setHasHelpText:E,id:m,labelId:d,feedbackId:b,helpTextId:p,htmlProps:i}}(Object(b.b)(e)),l=n.htmlProps,u=v(n,["htmlProps"]),m=Object(r.b)("chakra-form-control",e.className);return i.createElement(y,{value:u},i.createElement(p.b,{value:t},i.createElement(f.a.div,O({role:"group",ref:a},l,{className:m,__css:{width:"100%",position:"relative"}}))))}));j.a&&(C.displayName="FormControl");var w=Object(m.a)((function(e,a){var t,n=E(),l=Object(p.c)();Object(u.a)((function(){return null==n||n.setHasHelpText.on(),function(){return null==n?void 0:n.setHasHelpText.off()}}),[]);var o=Object(r.b)("chakra-form__helper-text",e.className);return i.createElement(f.a.div,O({ref:a,__css:l.helperText},e,{className:o,id:null!=(t=e.id)?t:null==n?void 0:n.helpTextId}))}));function k(){return(k=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function I(e){var a,t=E(),o=[];null!=t&&t.hasFeedbackText&&o.push(t.feedbackId),null!=t&&t.hasHelpText&&o.push(t.helpTextId);var c=o.join(" ");return k({},Object(n.h)(e,["isInvalid","isDisabled","isReadOnly","isRequired"]),{id:null!=(a=e.id)?a:null==t?void 0:t.id,disabled:e.disabled||e.isDisabled||(null==t?void 0:t.isDisabled),readOnly:e.readOnly||e.isReadOnly||(null==t?void 0:t.isReadOnly),required:e.required||e.isRequired||(null==t?void 0:t.isRequired),"aria-invalid":Object(r.a)(e.isInvalid||(null==t?void 0:t.isInvalid)),"aria-required":Object(r.a)(e.isRequired||(null==t?void 0:t.isRequired)),"aria-readonly":Object(r.a)(e.isReadOnly||(null==t?void 0:t.isReadOnly)),"aria-describedby":c||void 0,onFocus:Object(l.a)(null==t?void 0:t.onFocus,e.onFocus),onBlur:Object(l.a)(null==t?void 0:t.onBlur,e.onBlur)})}j.a&&(w.displayName="FormHelperText")},"8KUX":function(e,a,t){"use strict";t.r(a);var n=t("0SSZ"),r=t("v7Hm"),l=t("tofy"),o=t("flX4"),c=t("q1tI"),i=t("VXBa"),s=t("hizP"),u=t("9dJj"),m=t("Wbzz");a.default=function(){return c.createElement(i.a,{slide:4},c.createElement(s.a,{title:"Contato",description:"Jorge.room - Entre em contato",lang:"pt-BR"}),c.createElement(r.a,{className:"wrapper",mt:"80px",mb:"80px",p:["0 10px","0 30px","0 100px"]},c.createElement(l.a,{flexDir:"column",mb:"35px"},c.createElement(l.a,{h:"50px",alignItems:"center"},c.createElement(o.a,{separator:c.createElement(n.a,{color:"gray.500"}),fontWeight:"medium",fontSize:"md"},c.createElement(o.b,null,c.createElement(m.Link,{to:"/#"},"Início")),c.createElement(o.b,{isCurrentPage:!0},c.createElement(o.c,{href:"#"},"Contato"))))),c.createElement(u.a,null)))}},"9dJj":function(e,a,t){"use strict";var n=t("hGi/"),r=t("q1tI"),l=t.n(r),o=t("tofy"),c=t("vG+z"),i=t("v7Hm"),s=t("rGDf"),u=t("MAJE"),m=t("+p43"),d=t("+QmB"),b=t("PwBK"),p=t("3L07"),f=t("HJKw"),h=t("A4L9"),j=t.n(h);a.a=function(e){Object(n.a)(e);var a=Object(r.useState)({name:"",email:"",numero_telefone:"",assunto:"",conteudo:""}),t=a[0],h=a[1];return l.a.createElement(o.a,{justifyContent:"center",flexDirection:"column"},l.a.createElement(o.a,{justifyContent:"center"},l.a.createElement(c.a,{alt:"Ícone de Contato",boxSize:"42px",objectFit:"contain",src:j.a})),l.a.createElement(o.a,{justifyContent:"center",textTransform:"uppercase",m:"15px",textAlign:"center"},l.a.createElement(i.a,null,l.a.createElement(s.a,{fontWeight:"light",size:"lg"},l.a.createElement(u.a,{as:"span"},"Entre em"),l.a.createElement(u.a,{as:"span",fontWeight:"bold"}," ","Contato")))),l.a.createElement(o.a,{justifyContent:"center"},l.a.createElement(i.a,{maxW:"450px",textAlign:"center",color:Object(m.c)("#666","#CCC"),m:["15px","0"]},l.a.createElement(u.a,null,"Vamos conversar sobre o nosso próximo projeto?"))),l.a.createElement(o.a,{justifyContent:"space-evenly",mt:"100px",flexDirection:["column","column","column","row"],m:["15px","15px","15px","0"]},l.a.createElement("form",{name:"contato",method:"POST",action:"https://joujiroom.netlify.app/","data-netlify":"true",onSubmit:function(){fetch("https://joujiroom.netlify.app/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(Object.assign({"form-name":"contato","data-envio":(new Date).toLocaleString()},t)).toString()}).then((function(){return console.log("Form successfully submitted")})).catch((function(e){return console.error(e)}))}},l.a.createElement("input",{type:"hidden",name:"form-name",value:"contato"}),l.a.createElement(o.a,{flexDirection:"column",maxW:"800px",m:["auto","auto","auto","unset"]},l.a.createElement(d.a,{"aria-label":"Seu name para contato.",name:"name",placeholder:"Seu Nome*",m:["5px","20px"],minHeight:"50px",focusBorderColor:"lightblue",backgroundColor:Object(m.c)("white","#053a63"),color:Object(m.c)("#053a63","#eaeaea"),borderColor:"lightgray",flex:1,value:t.name,onChange:function(e){h(Object.assign({},t,{name:e.target.value}))},w:"auto"}),l.a.createElement(o.a,{flexDirection:["column","row"]},l.a.createElement(d.a,{"aria-label":"Seu endereço de email.",name:"email",placeholder:"Seu Email*",type:"email",m:["5px","20px"],minHeight:"50px",backgroundColor:Object(m.c)("white","#053a63"),color:Object(m.c)("#053a63","#eaeaea"),focusBorderColor:"lightblue",borderColor:"lightgray",flex:1,value:t.email,onChange:function(e){h(Object.assign({},t,{email:e.target.value}))},w:"auto"}),l.a.createElement(d.a,{"aria-label":"Numero para Contato.",name:"numero-telefone",type:"phone",placeholder:"Numero para contato",m:["5px","20px"],minHeight:"50px",backgroundColor:Object(m.c)("white","#053a63"),color:Object(m.c)("#053a63","#eaeaea"),focusBorderColor:"lightblue",borderColor:"lightgray",flex:1,value:t.numero_telefone,onChange:function(e){h(Object.assign({},t,{numero_telefone:e.target.value}))},w:"auto"})),l.a.createElement(o.a,{flexDirection:"column"},l.a.createElement(d.a,{"aria-label":"Assunto do email",name:"assunto",placeholder:"Assunto...",m:["5px","20px"],height:"50px",focusBorderColor:"lightblue",backgroundColor:Object(m.c)("white","#053a63"),color:Object(m.c)("#053a63","#eaeaea"),borderColor:"lightgray",value:t.assunto,onChange:function(e){h(Object.assign({},t,{assunto:e.target.value}))},w:"auto"}),l.a.createElement(b.a,{"aria-label":"Conteúdo do email",name:"conteudo",placeholder:"Conteudo...",m:["5px","20px"],focusBorderColor:"lightblue",borderColor:"lightgray",backgroundColor:Object(m.c)("white","#053a63"),color:Object(m.c)("#053a63","#eaeaea"),w:"auto",minH:"150px",value:t.conteudo,onChange:function(e){h(Object.assign({},t,{conteudo:e.target.value}))}})),l.a.createElement(o.a,{justifyContent:"end",mt:["5px","0"],mr:["5px","20px"]},l.a.createElement(p.a,{leftIcon:l.a.createElement(f.a,null),colorScheme:"blue",size:"lg",border:"none",type:"submit"},"Enviar Mensagem"))))))}},A4L9:function(e,a){e.exports="data:image/webp;base64,UklGRvYBAABXRUJQVlA4TOoBAAAvKUAKEJXIsm27bRtOUp/ufue5psxAcwcIPKb+vkXI7apFQAEAwJA0Z9vqfjvZ/43RzbZt20a1bdu2bU5A9t7zzZlqZrnh68y1z1ilO95yJ7CoGVkXv/w38uMdbhCHjGF1W79JYiYIHnwqkA9cIjYwitXIt+YkCrJrb5Wqs0DEvcYTe78/7TySxZq8fN9DlKosmFE2mgmLFVlYx70uvxVL2EKzeQMjqcLPg3bTK4otSVrNbgLdbs+fJLH5imoxd5UEZyChhdy1YQvnqKBlH7GnrRgb2JybStK7izMUId/8SzKjOUoLqjKY6oLiOfYKM49yi4KdmVeiJPF6jY76idlJ4u+WUEOpYCnDWZYkU6jd6xbeEUdn8aBdw6ygNm4U+5qZS+LX4+I+V0m7BlZcPhf8YrWJkxtGLnrcz5UT5JMbyWz7VumL2H12rlKUZNYzxGcm4RNIspewrEzCic9MSeJxAknBEl+ZO83+b3A0xmBludMYY2SdgCXwy85HCutxrF2Te/IajSFW65OgT+uK4TV6Ar8vZu5lWq/EXwUhf/zTtIVWnmmewZjPDBvxZEhxSa3kzai/oiaQWzhzqjJxiLsmM69e04rLW4Ll89Xhegtk3jDcEk/3//jgrMbBBW6R+r0cw2eJd+91cfYD"},HJKw:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("6qu1"),r=t("q1tI"),l=Object(n.a)({displayName:"EmailIcon",path:r.createElement("g",{fill:"currentColor"},r.createElement("path",{d:"M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"}),r.createElement("path",{d:"M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"}))})},PwBK:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t("155x"),r=t("sKyC"),l=t("4jWa"),o=t("CRla"),c=t("U6LL"),i=t("BXwj"),s=t("epLR"),u=t("pr4h"),m=t("q1tI");function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var b=Object(r.a)((function(e,a){var t=Object(l.b)("Textarea",e),r=Object(o.b)(e),u=r.className,b=r.rows,p=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(r,["className","rows"]),f=Object(n.a)(p),h=b?Object(i.h)(t,["h","minH","height","minHeight"]):t;return m.createElement(c.a.textarea,d({ref:a,rows:b},f,{className:Object(s.b)("chakra-textarea",u),__css:h}))}));u.a&&(b.displayName="Textarea")},flX4:function(e,a,t){"use strict";t.d(a,"c",(function(){return f})),t.d(a,"b",(function(){return h})),t.d(a,"a",(function(){return j}));var n=t("sKyC"),r=t("5+Am"),l=t("U6LL"),o=t("4jWa"),c=t("CRla"),i=t("pr4h"),s=t("epLR"),u=t("JX03"),m=t("q1tI");function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}var p=Object(n.a)((function(e,a){var t=e.spacing,n=b(e,["spacing"]),o=d({mx:t},Object(r.c)().separator);return m.createElement(l.a.span,d({ref:a,role:"presentation"},n,{__css:o}))}));i.a&&(p.displayName="BreadcrumbSeparator");var f=Object(n.a)((function(e,a){var t=e.isCurrentPage,n=e.as,o=e.className,c=b(e,["isCurrentPage","as","className"]),i=Object(r.c)(),u=d({ref:a,as:n,className:Object(s.b)("chakra-breadcrumb__link",o)},c);return t?m.createElement(l.a.span,d({"aria-current":"page"},u)):m.createElement(l.a.a,d({__css:i.link},u))}));i.a&&(f.displayName="BreadcrumbLink");var h=Object(n.a)((function(e,a){var t=e.isCurrentPage,n=e.separator,r=e.isLastChild,o=e.spacing,c=e.children,i=e.className,h=b(e,["isCurrentPage","separator","isLastChild","spacing","children","className"]),j=Object(u.b)(c).map((function(e){return e.type===f?m.cloneElement(e,{isCurrentPage:t}):e.type===p?m.cloneElement(e,{spacing:o,children:e.props.children||n}):e})),O=Object(s.b)("chakra-breadcrumb__list-item",i);return m.createElement(l.a.li,d({ref:a,className:O},h,{__css:{display:"inline-flex",alignItems:"center"}}),j,!r&&m.createElement(p,{spacing:o},n))}));i.a&&(h.displayName="BreadcrumbItem");var j=Object(n.a)((function(e,a){var t=Object(o.a)("Breadcrumb",e),n=Object(c.b)(e),i=n.children,p=n.spacing,f=void 0===p?"0.5rem":p,h=n.separator,j=void 0===h?"/":h,O=n.className,v=b(n,["children","spacing","separator","className"]),g=Object(u.b)(i),x=g.length,y=g.map((function(e,a){return m.cloneElement(e,{separator:j,spacing:f,isLastChild:x===a+1})})),E=Object(s.b)("chakra-breadcrumb",O);return m.createElement(l.a.nav,d({ref:a,"aria-label":"breadcrumb",className:E},v),m.createElement(r.b,{value:t},m.createElement(l.a.ol,{className:"chakra-breadcrumb__list"},y)))}));i.a&&(j.displayName="Breadcrumb")},"hGi/":function(e,a,t){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}t.d(a,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-contato-tsx-eaa90376bde6e260b9ad.js.map