(self.webpackChunkjorge_room=self.webpackChunkjorge_room||[]).push([[317],{6814:function(e,t,n){"use strict";function a(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,{Z:function(){return a}})},5463:function(e,t,n){"use strict";n.d(t,{Y:function(){return I}});var a=n(5587),r=n(4238),o=n(8481),l=n(4207),i=n(7294);var u=n(2543),s=n(3888),c=n(7487),d=n(9735),m=n(9265),f=n(4667),p=n(8308),h=n(7);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var g=(0,p.k)({strict:!1,name:"FormControlContext"}),x=(0,o.Z)(g,2),C=x[0],y=x[1];function E(e){var t=e.id,n=e.isRequired,u=e.isInvalid,s=e.isDisabled,c=e.isReadOnly,d=b(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),m=(0,l.Me)(),f=t||"field-"+m,p=f+"-label",g=f+"-feedback",x=f+"-helptext",C=i.useState(!1),y=(0,o.Z)(C,2),E=y[0],k=y[1],j=i.useState(!1),O=(0,o.Z)(j,2),w=O[0],I=O[1],T=function(e){void 0===e&&(e=!1);var t=(0,i.useState)(e),n=(0,o.Z)(t,2),a=n[0],r=n[1];return[a,{on:(0,i.useCallback)((function(){r(!0)}),[]),off:(0,i.useCallback)((function(){r(!1)}),[]),toggle:(0,i.useCallback)((function(){r((function(e){return!e}))}),[])}]}(),R=(0,o.Z)(T,2),Z=R[0],M=R[1],P=i.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({id:x},e,{ref:(0,h.l)(t,(function(e){e&&I(!0)}))})}),[x]),q=i.useCallback((function(e,t){var n,r;return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:t,"data-focus":(0,a.PB)(Z),"data-disabled":(0,a.PB)(s),"data-invalid":(0,a.PB)(u),"data-readonly":(0,a.PB)(c),id:null!=(n=e.id)?n:p,htmlFor:null!=(r=e.htmlFor)?r:f})}),[f,s,Z,u,c,p]),B=i.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({id:g},e,{ref:(0,h.l)(t,(function(e){e&&k(!0)})),"aria-live":"polite"})}),[g]),F=i.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,d,{ref:t,role:"group"})}),[d]),S=i.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]),A=i.useCallback((function(){(0,r.A4)(M.on)}),[M]);return{isRequired:!!n,isInvalid:!!u,isReadOnly:!!c,isDisabled:!!s,isFocused:!!Z,onFocus:A,onBlur:M.off,hasFeedbackText:E,setHasFeedbackText:k,hasHelpText:w,setHasHelpText:I,id:f,labelId:p,feedbackId:g,helpTextId:x,htmlProps:d,getHelpTextProps:P,getErrorMessageProps:B,getRootProps:F,getLabelProps:q,getRequiredIndicatorProps:S}}var k=(0,u.G)((function(e,t){var n=(0,s.j)("Form",e),r=E((0,c.Lr)(e)),o=r.getRootProps,l=b(r,["getRootProps","htmlProps"]),u=(0,a.cx)("chakra-form-control",e.className),f=i.useMemo((function(){return l}),[l]);return i.createElement(C,{value:f},i.createElement(d.Fo,{value:n},i.createElement(m.m$.div,v({},o({},t),{className:u,__css:{width:"100%",position:"relative"}}))))}));f.Ts&&(k.displayName="FormControl");var j=(0,u.G)((function(e,t){var n=y(),r=(0,d.yK)(),o=(0,a.cx)("chakra-form__helper-text",e.className);return i.createElement(m.m$.div,v({},null==n?void 0:n.getHelpTextProps(e,t),{__css:r.helperText,className:o}))}));function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function I(e){var t=function(e){var t,n,a,o=y(),l=e.id,i=e.disabled,u=e.readOnly,s=e.required,c=e.isRequired,d=e.isInvalid,m=e.isReadOnly,f=e.isDisabled,p=e.onFocus,h=e.onBlur,v=w(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),b=[];null!=o&&o.hasFeedbackText&&null!=o&&o.isInvalid&&b.push(o.feedbackId);null!=o&&o.hasHelpText&&b.push(o.helpTextId);return O({},v,{"aria-describedby":b.join(" ")||void 0,id:null!=l?l:null==o?void 0:o.id,isDisabled:null!=(t=null!=i?i:f)?t:null==o?void 0:o.isDisabled,isReadOnly:null!=(n=null!=u?u:m)?n:null==o?void 0:o.isReadOnly,isRequired:null!=(a=null!=s?s:c)?a:null==o?void 0:o.isRequired,isInvalid:null!=d?d:null==o?void 0:o.isInvalid,onFocus:(0,r.v0)(null==o?void 0:o.onFocus,p),onBlur:(0,r.v0)(null==o?void 0:o.onBlur,h)})}(e),n=t.isDisabled,o=t.isInvalid,l=t.isReadOnly,i=t.isRequired;return O({},w(t,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:n,readOnly:l,required:i,"aria-invalid":(0,a.Qm)(o),"aria-required":(0,a.Qm)(i),"aria-readonly":(0,a.Qm)(l)})}f.Ts&&(j.displayName="FormHelperText")},8611:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var a=n(4982),r=n(7294),o=(0,a.I)({displayName:"EmailIcon",path:r.createElement("g",{fill:"currentColor"},r.createElement("path",{d:"M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"}),r.createElement("path",{d:"M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"}))})},2747:function(e,t,n){"use strict";n.d(t,{I:function(){return m}});var a=n(5463),r=n(2543),o=n(3888),l=n(7487),i=n(9265),u=n(5587),s=n(4667),c=n(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=(0,r.G)((function(e,t){var n=(0,o.j)("Input",e),r=(0,l.Lr)(e),s=(0,a.Y)(r),m=(0,u.cx)("chakra-input",e.className);return c.createElement(i.m$.input,d({},s,{__css:n.field,ref:t,className:m}))}));s.Ts&&(m.displayName="Input"),m.id="Input"},4446:function(e,t,n){"use strict";n.d(t,{g:function(){return f}});var a=n(5463),r=n(2543),o=n(3888),l=n(7487),i=n(9265),u=n(4526),s=n(5587),c=n(4667),d=n(7294);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=(0,r.G)((function(e,t){var n=(0,o.m)("Textarea",e),r=(0,l.Lr)(e),c=r.className,f=r.rows,p=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(r,["className","rows"]),h=(0,a.Y)(p),v=f?(0,u.CE)(n,["h","minH","height","minHeight"]):n;return d.createElement(i.m$.textarea,m({ref:t,rows:f},h,{className:(0,s.cx)("chakra-textarea",c),__css:v}))}));c.Ts&&(f.displayName="Textarea")},4247:function(e,t,n){"use strict";var a=n(6814),r=n(7294),o=n(7361),l=n(1531),i=n(7690),u=n(2331),s=n(2200),c=n(5230),d=n(2747),m=n(4446),f=n(7717),p=n(8611),h=n(2523);t.Z=function(e){(0,a.Z)(e);var t=(0,r.useState)({name:"",email:"",numero_telefone:"",assunto:"",conteudo:""}),n=t[0],v=t[1];return r.createElement(o.k,{justifyContent:"center",flexDirection:"column"},r.createElement(o.k,{justifyContent:"center"},r.createElement(l.E,{alt:"Ícone de Contato",boxSize:"42px",objectFit:"contain",src:h.Z})),r.createElement(o.k,{justifyContent:"center",textTransform:"uppercase",m:"15px",textAlign:"center"},r.createElement(i.xu,null,r.createElement(u.X,{fontWeight:"light",size:"lg"},r.createElement(s.x,{as:"span"},"Entre em"),r.createElement(s.x,{as:"span",fontWeight:"bold"}," ","Contato")))),r.createElement(o.k,{justifyContent:"center"},r.createElement(i.xu,{maxW:"450px",textAlign:"center",color:(0,c.useColorModeValue)("#666","#CCC"),m:["15px","0"]},r.createElement(s.x,null,"Vamos conversar sobre o nosso próximo projeto?"))),r.createElement(o.k,{justifyContent:"space-evenly",mt:"100px",flexDirection:["column","column","column","row"],m:["15px","15px","15px","0"]},r.createElement("form",{name:"contato",method:"POST",action:"https://joujiroom.netlify.app/","data-netlify":"true",onSubmit:function(){fetch("https://jorgenjr.netlify.app/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(Object.assign({"form-name":"contato","data-envio":(new Date).toLocaleString()},n)).toString()}).then((function(){return console.log("Form successfully submitted")})).catch((function(e){return console.error(e)}))}},r.createElement("input",{type:"hidden",name:"form-name",value:"contato"}),r.createElement(o.k,{flexDirection:"column",maxW:"800px",m:["auto","auto","auto","unset"]},r.createElement(d.I,{"aria-label":"Seu name para contato.",name:"name",placeholder:"Seu Nome*",m:["5px","20px"],minHeight:"50px",focusBorderColor:"lightblue",backgroundColor:(0,c.useColorModeValue)("white","#053a63"),color:(0,c.useColorModeValue)("#053a63","#eaeaea"),borderColor:"lightgray",flex:1,value:n.name,onChange:function(e){v(Object.assign({},n,{name:e.target.value}))},w:"auto"}),r.createElement(o.k,{flexDirection:["column","row"]},r.createElement(d.I,{"aria-label":"Seu endereço de email.",name:"email",placeholder:"Seu Email*",type:"email",m:["5px","20px"],minHeight:"50px",backgroundColor:(0,c.useColorModeValue)("white","#053a63"),color:(0,c.useColorModeValue)("#053a63","#eaeaea"),focusBorderColor:"lightblue",borderColor:"lightgray",flex:1,value:n.email,onChange:function(e){v(Object.assign({},n,{email:e.target.value}))},w:"auto"}),r.createElement(d.I,{"aria-label":"Numero para Contato.",name:"numero-telefone",type:"phone",placeholder:"Numero para contato",m:["5px","20px"],minHeight:"50px",backgroundColor:(0,c.useColorModeValue)("white","#053a63"),color:(0,c.useColorModeValue)("#053a63","#eaeaea"),focusBorderColor:"lightblue",borderColor:"lightgray",flex:1,value:n.numero_telefone,onChange:function(e){v(Object.assign({},n,{numero_telefone:e.target.value}))},w:"auto"})),r.createElement(o.k,{flexDirection:"column"},r.createElement(d.I,{"aria-label":"Assunto do email",name:"assunto",placeholder:"Assunto...",m:["5px","20px"],height:"50px",focusBorderColor:"lightblue",backgroundColor:(0,c.useColorModeValue)("white","#053a63"),color:(0,c.useColorModeValue)("#053a63","#eaeaea"),borderColor:"lightgray",value:n.assunto,onChange:function(e){v(Object.assign({},n,{assunto:e.target.value}))},w:"auto"}),r.createElement(m.g,{"aria-label":"Conteúdo do email",name:"conteudo",placeholder:"Conteudo...",m:["5px","20px"],focusBorderColor:"lightblue",borderColor:"lightgray",backgroundColor:(0,c.useColorModeValue)("white","#053a63"),color:(0,c.useColorModeValue)("#053a63","#eaeaea"),w:"auto",minH:"150px",value:n.conteudo,onChange:function(e){v(Object.assign({},n,{conteudo:e.target.value}))}})),r.createElement(o.k,{justifyContent:"end",mt:["5px","0"],mr:["5px","20px"]},r.createElement(f.z,{leftIcon:r.createElement(p.L,null),colorScheme:"blue",size:"lg",border:"none",type:"submit"},"Enviar Mensagem"))))))}},2523:function(e,t){"use strict";t.Z="data:image/webp;base64,UklGRvYBAABXRUJQVlA4TOoBAAAvKUAKEJXIsm27bRtOUp/ufue5psxAcwcIPKb+vkXI7apFQAEAwJA0Z9vqfjvZ/43RzbZt20a1bdu2bU5A9t7zzZlqZrnh68y1z1ilO95yJ7CoGVkXv/w38uMdbhCHjGF1W79JYiYIHnwqkA9cIjYwitXIt+YkCrJrb5Wqs0DEvcYTe78/7TySxZq8fN9DlKosmFE2mgmLFVlYx70uvxVL2EKzeQMjqcLPg3bTK4otSVrNbgLdbs+fJLH5imoxd5UEZyChhdy1YQvnqKBlH7GnrRgb2JybStK7izMUId/8SzKjOUoLqjKY6oLiOfYKM49yi4KdmVeiJPF6jY76idlJ4u+WUEOpYCnDWZYkU6jd6xbeEUdn8aBdw6ygNm4U+5qZS+LX4+I+V0m7BlZcPhf8YrWJkxtGLnrcz5UT5JMbyWz7VumL2H12rlKUZNYzxGcm4RNIspewrEzCic9MSeJxAknBEl+ZO83+b3A0xmBludMYY2SdgCXwy85HCutxrF2Te/IajSFW65OgT+uK4TV6Ar8vZu5lWq/EXwUhf/zTtIVWnmmewZjPDBvxZEhxSa3kzai/oiaQWzhzqjJxiLsmM69e04rLW4Ll89Xhegtk3jDcEk/3//jgrMbBBW6R+r0cw2eJd+91cfYD"}}]);
//# sourceMappingURL=ac0e0399430c751b9abb4bbe565e3e41ad68a131-cd0ce133eefe9d8b8a2e.js.map