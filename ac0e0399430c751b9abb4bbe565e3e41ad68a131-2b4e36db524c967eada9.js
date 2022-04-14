"use strict";(self.webpackChunkjorge_room=self.webpackChunkjorge_room||[]).push([[317],{7264:function(e,t,n){n.d(t,{Yp:function(){return y}});var a=n(8408),r=n(7370),l=n(559),o=n(9818),i=n(7294),s=n(8426);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var d=["id","isRequired","isInvalid","isDisabled","isReadOnly"],m=["getRootProps","htmlProps"],p=(0,o.kr)({strict:!1,name:"FormControlContext"}),f=p[0],v=p[1];var h=(0,r.Gp)((function(e,t){var n=(0,r.jC)("Form",e),s=function(e){var t=e.id,n=e.isRequired,r=e.isInvalid,s=e.isDisabled,m=e.isReadOnly,p=c(e,d),f=(0,a.Me)(),v=t||"field-"+f,h=v+"-label",g=v+"-feedback",b=v+"-helptext",x=i.useState(!1),y=x[0],E=x[1],I=i.useState(!1),C=I[0],k=I[1],N=(0,a.kt)(),j=N[0],_=N[1],R=i.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),u({id:b},e,{ref:(0,o.lq)(t,(function(e){e&&k(!0)}))})}),[b]),w=i.useCallback((function(e,t){var n,a;return void 0===e&&(e={}),void 0===t&&(t=null),u({},e,{ref:t,"data-focus":(0,l.PB)(j),"data-disabled":(0,l.PB)(s),"data-invalid":(0,l.PB)(r),"data-readonly":(0,l.PB)(m),id:null!=(n=e.id)?n:h,htmlFor:null!=(a=e.htmlFor)?a:v})}),[v,s,j,r,m,h]),O=i.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),u({id:g},e,{ref:(0,o.lq)(t,(function(e){e&&E(!0)})),"aria-live":"polite"})}),[g]),T=i.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),u({},e,p,{ref:t,role:"group"})}),[p]),q=i.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),u({},e,{ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!m,isDisabled:!!s,isFocused:!!j,onFocus:_.on,onBlur:_.off,hasFeedbackText:y,setHasFeedbackText:E,hasHelpText:C,setHasHelpText:k,id:v,labelId:h,feedbackId:g,helpTextId:b,htmlProps:p,getHelpTextProps:R,getErrorMessageProps:O,getRootProps:T,getLabelProps:w,getRequiredIndicatorProps:q}}((0,r.Lr)(e)),p=s.getRootProps;s.htmlProps;var v=c(s,m),h=(0,l.cx)("chakra-form-control",e.className);return i.createElement(f,{value:v},i.createElement(r.Fo,{value:n},i.createElement(r.m$.div,u({},p({},t),{className:h,__css:n.container}))))}));l.Ts&&(h.displayName="FormControl");var g=(0,r.Gp)((function(e,t){var n=v(),a=(0,r.yK)(),o=(0,l.cx)("chakra-form__helper-text",e.className);return i.createElement(r.m$.div,u({},null==n?void 0:n.getHelpTextProps(e,t),{__css:a.helperText,className:o}))}));l.Ts&&(g.displayName="FormHelperText");var b=["isDisabled","isInvalid","isReadOnly","isRequired"],x=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function y(e){var t=function(e){var t,n,a,r=v(),o=e.id,i=e.disabled,s=e.readOnly,d=e.required,m=e.isRequired,p=e.isInvalid,f=e.isReadOnly,h=e.isDisabled,g=e.onFocus,b=e.onBlur,y=c(e,x),E=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=r&&r.hasFeedbackText&&null!=r&&r.isInvalid&&E.push(r.feedbackId);null!=r&&r.hasHelpText&&E.push(r.helpTextId);return u({},y,{"aria-describedby":E.join(" ")||void 0,id:null!=o?o:null==r?void 0:r.id,isDisabled:null!=(t=null!=i?i:h)?t:null==r?void 0:r.isDisabled,isReadOnly:null!=(n=null!=s?s:f)?n:null==r?void 0:r.isReadOnly,isRequired:null!=(a=null!=d?d:m)?a:null==r?void 0:r.isRequired,isInvalid:null!=p?p:null==r?void 0:r.isInvalid,onFocus:(0,l.v0)(null==r?void 0:r.onFocus,g),onBlur:(0,l.v0)(null==r?void 0:r.onBlur,b)})}(e),n=t.isDisabled,a=t.isInvalid,r=t.isReadOnly,o=t.isRequired;return u({},c(t,b),{disabled:n,readOnly:r,required:o,"aria-invalid":(0,l.Qm)(a),"aria-required":(0,l.Qm)(o),"aria-readonly":(0,l.Qm)(r)})}var E=(0,r.Gp)((function(e,t){var n=(0,r.jC)("FormError",e),a=(0,r.Lr)(e),o=v();return null!=o&&o.isInvalid?i.createElement(r.Fo,{value:n},i.createElement(r.m$.div,u({},null==o?void 0:o.getErrorMessageProps(a,t),{className:(0,l.cx)("chakra-form__error-message",e.className),__css:u({display:"flex",alignItems:"center"},n.text)}))):null}));l.Ts&&(E.displayName="FormErrorMessage");var I=(0,r.Gp)((function(e,t){var n=(0,r.yK)(),a=v();if(null==a||!a.isInvalid)return null;var o=(0,l.cx)("chakra-form__error-icon",e.className);return i.createElement(s.ZP,u({ref:t,"aria-hidden":!0},e,{__css:n.icon,className:o}),i.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));l.Ts&&(I.displayName="FormErrorIcon");var C=["className","children","requiredIndicator","optionalIndicator"],k=(0,r.Gp)((function(e,t){var n,a=(0,r.mq)("FormLabel",e),o=(0,r.Lr)(e);o.className;var s=o.children,d=o.requiredIndicator,m=void 0===d?i.createElement(N,null):d,p=o.optionalIndicator,f=void 0===p?null:p,h=c(o,C),g=v(),b=null!=(n=null==g?void 0:g.getLabelProps(h,t))?n:u({ref:t},h);return i.createElement(r.m$.label,u({},b,{className:(0,l.cx)("chakra-form__label",o.className),__css:u({display:"block",textAlign:"start"},a)}),s,null!=g&&g.isRequired?m:f)}));l.Ts&&(k.displayName="FormLabel");var N=(0,r.Gp)((function(e,t){var n=v(),a=(0,r.yK)();if(null==n||!n.isRequired)return null;var o=(0,l.cx)("chakra-form__required-indicator",e.className);return i.createElement(r.m$.span,u({},null==n?void 0:n.getRequiredIndicatorProps(e,t),{__css:a.requiredIndicator,className:o}))}));l.Ts&&(N.displayName="RequiredIndicator")},601:function(e,t,n){n.d(t,{II:function(){return d}});var a=n(7264),r=n(7370),l=n(559),o=n(7294),i=n(9818);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var c=["htmlSize"],d=(0,r.Gp)((function(e,t){var n=e.htmlSize,i=u(e,c),d=(0,r.jC)("Input",i),m=(0,r.Lr)(i),p=(0,a.Yp)(m),f=(0,l.cx)("chakra-input",e.className);return o.createElement(r.m$.input,s({size:n},p,{__css:d.field,ref:t,className:f}))}));l.Ts&&(d.displayName="Input"),d.id="Input";var m=["placement"],p={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},f=(0,r.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),v=(0,r.Gp)((function(e,t){var n,a=e.placement,l=void 0===a?"left":a,i=u(e,m),c=null!=(n=p[l])?n:{},d=(0,r.yK)();return o.createElement(f,s({ref:t},i,{__css:s({},d.addon,c)}))}));l.Ts&&(v.displayName="InputAddon");var h=(0,r.Gp)((function(e,t){return o.createElement(v,s({ref:t,placement:"left"},e,{className:(0,l.cx)("chakra-input__left-addon",e.className)}))}));l.Ts&&(h.displayName="InputLeftAddon"),h.id="InputLeftAddon";var g=(0,r.Gp)((function(e,t){return o.createElement(v,s({ref:t,placement:"right"},e,{className:(0,l.cx)("chakra-input__right-addon",e.className)}))}));l.Ts&&(g.displayName="InputRightAddon"),g.id="InputRightAddon";var b=["children","className"],x=(0,r.Gp)((function(e,t){var n=(0,r.jC)("Input",e),a=(0,r.Lr)(e),c=a.children,d=a.className,m=u(a,b),p=(0,l.cx)("chakra-input__group",d),f={},v=(0,i.WR)(c),h=n.field;v.forEach((function(e){if(n){var t,a;if(h&&"InputLeftElement"===e.type.id)f.paddingStart=null!=(t=h.height)?t:h.h;if(h&&"InputRightElement"===e.type.id)f.paddingEnd=null!=(a=h.height)?a:h.h;"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0)}}));var g=v.map((function(t){var n,a,r=(0,l.YU)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(a=t.props)?void 0:a.variant)||e.variant});return"Input"!==t.type.id?o.cloneElement(t,r):o.cloneElement(t,Object.assign(r,f,t.props))}));return o.createElement(r.m$.div,s({className:p,ref:t,__css:{width:"100%",display:"flex",position:"relative"}},m),o.createElement(r.Fo,{value:n},g))}));l.Ts&&(x.displayName="InputGroup");var y=["placement"],E=["className"],I=["className"],C=(0,r.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),k=(0,r.Gp)((function(e,t){var n,a,l,i=e.placement,c=void 0===i?"left":i,d=u(e,y),m=(0,r.yK)(),p=m.field,f=s(((l={})["left"===c?"insetStart":"insetEnd"]="0",l.width=null!=(n=null==p?void 0:p.height)?n:null==p?void 0:p.h,l.height=null!=(a=null==p?void 0:p.height)?a:null==p?void 0:p.h,l.fontSize=null==p?void 0:p.fontSize,l),m.element);return o.createElement(C,s({ref:t,__css:f},d))}));k.id="InputElement",l.Ts&&(k.displayName="InputElement");var N=(0,r.Gp)((function(e,t){var n=e.className,a=u(e,E),r=(0,l.cx)("chakra-input__left-element",n);return o.createElement(k,s({ref:t,placement:"left",className:r},a))}));N.id="InputLeftElement",l.Ts&&(N.displayName="InputLeftElement");var j=(0,r.Gp)((function(e,t){var n=e.className,a=u(e,I),r=(0,l.cx)("chakra-input__right-element",n);return o.createElement(k,s({ref:t,placement:"right",className:r},a))}));j.id="InputRightElement",l.Ts&&(j.displayName="InputRightElement")},4617:function(e,t,n){n.d(t,{g:function(){return u}});var a=n(7264),r=n(7370),l=n(559),o=n(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var s=["className","rows"],u=(0,r.Gp)((function(e,t){var n=(0,r.mq)("Textarea",e),u=(0,r.Lr)(e),c=u.className,d=u.rows,m=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(u,s),p=(0,a.Yp)(m),f=d?(0,l.CE)(n,["h","minH","height","minHeight"]):n;return o.createElement(r.m$.textarea,i({ref:t,rows:d},p,{className:(0,l.cx)("chakra-textarea",c),__css:f}))}));l.Ts&&(u.displayName="Textarea")},4247:function(e,t,n){var a=n(6459),r=n(7294),l=n(6541),o=n(45),i=n(8262),s=n(601),u=n(4617),c=n(9317),d=n(7278),m=n(2523);t.Z=function(e){(0,a.Z)(e);var t=(0,r.useState)({name:"",email:"",numero_telefone:"",assunto:"",mensagem:""}),n=t[0],p=t[1];return r.createElement(l.kC,{justifyContent:"center",flexDirection:"column"},r.createElement(l.kC,{justifyContent:"center"},r.createElement(o.Ee,{alt:"Ícone de Contato",boxSize:"42px",objectFit:"contain",src:m.Z})),r.createElement(l.kC,{justifyContent:"center",textTransform:"uppercase",m:"15px",textAlign:"center"},r.createElement(l.xu,null,r.createElement(l.X6,{fontWeight:"light",size:"lg"},r.createElement(l.xv,{as:"span"},"Entre em"),r.createElement(l.xv,{as:"span",fontWeight:"bold"}," ","Contato")))),r.createElement(l.kC,{justifyContent:"center"},r.createElement(l.xu,{maxW:"450px",textAlign:"center",color:(0,i.ff)("#666","#CCC"),m:["15px","0"]},r.createElement(l.xv,null,"Vamos conversar sobre o nosso próximo projeto?"))),r.createElement(l.kC,{justifyContent:"space-evenly",mt:"100px",flexDirection:["column","column","column","row"],m:["15px","15px","15px","0"]},r.createElement("form",{name:"contato",method:"POST",action:"https://jorgenjr.netlify.app/sucesso/","data-netlify":"true",onSubmit:function(){fetch("https://jorgenjr.netlify.app/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(Object.assign({"form-name":"contato","data-envio":(new Date).toLocaleString()},n)).toString()}).then((function(){return console.log("Form successfully submitted")})).catch((function(e){return console.error(e)}))}},r.createElement("input",{type:"hidden",name:"form-name",value:"contato"}),r.createElement(l.kC,{flexDirection:"column",maxW:"800px",m:["auto","auto","auto","unset"]},r.createElement(s.II,{"aria-label":"Seu name para contato.",name:"name",placeholder:"Seu Nome*",m:["5px","20px"],minHeight:"50px",focusBorderColor:"lightblue",backgroundColor:(0,i.ff)("white","#053a63"),color:(0,i.ff)("#053a63","#eaeaea"),borderColor:"lightgray",flex:1,value:n.name,onChange:function(e){p(Object.assign({},n,{name:e.target.value}))},w:"auto"}),r.createElement(l.kC,{flexDirection:["column","row"]},r.createElement(s.II,{"aria-label":"Seu endereço de email.",name:"email",placeholder:"Seu Email*",type:"email",m:["5px","20px"],minHeight:"50px",backgroundColor:(0,i.ff)("white","#053a63"),color:(0,i.ff)("#053a63","#eaeaea"),focusBorderColor:"lightblue",borderColor:"lightgray",flex:1,value:n.email,onChange:function(e){p(Object.assign({},n,{email:e.target.value}))},w:"auto"}),r.createElement(s.II,{"aria-label":"Numero para Contato.",name:"numero-telefone",type:"phone",placeholder:"Numero para contato",m:["5px","20px"],minHeight:"50px",backgroundColor:(0,i.ff)("white","#053a63"),color:(0,i.ff)("#053a63","#eaeaea"),focusBorderColor:"lightblue",borderColor:"lightgray",flex:1,value:n.numero_telefone,onChange:function(e){p(Object.assign({},n,{numero_telefone:e.target.value}))},w:"auto"})),r.createElement(l.kC,{flexDirection:"column"},r.createElement(s.II,{"aria-label":"Assunto do email",name:"assunto",placeholder:"Assunto...",m:["5px","20px"],height:"50px",focusBorderColor:"lightblue",backgroundColor:(0,i.ff)("white","#053a63"),color:(0,i.ff)("#053a63","#eaeaea"),borderColor:"lightgray",value:n.assunto,onChange:function(e){p(Object.assign({},n,{assunto:e.target.value}))},w:"auto"}),r.createElement(u.g,{"aria-label":"Conteúdo do email",name:"mensagem",placeholder:"Conteudo...",m:["5px","20px"],focusBorderColor:"lightblue",borderColor:"lightgray",backgroundColor:(0,i.ff)("white","#053a63"),color:(0,i.ff)("#053a63","#eaeaea"),w:"auto",minH:"150px",value:n.conteudo,onChange:function(e){p(Object.assign({},n,{conteudo:e.target.value}))}})),r.createElement(l.kC,{justifyContent:"end",mt:["5px","0"],mr:["5px","20px"]},r.createElement(c.zx,{leftIcon:r.createElement(d.LQ,null),colorScheme:"blue",size:"lg",border:"none",type:"submit"},"Enviar Mensagem"))))))}},2523:function(e,t){t.Z="data:image/webp;base64,UklGRvYBAABXRUJQVlA4TOoBAAAvKUAKEJXIsm27bRtOUp/ufue5psxAcwcIPKb+vkXI7apFQAEAwJA0Z9vqfjvZ/43RzbZt20a1bdu2bU5A9t7zzZlqZrnh68y1z1ilO95yJ7CoGVkXv/w38uMdbhCHjGF1W79JYiYIHnwqkA9cIjYwitXIt+YkCrJrb5Wqs0DEvcYTe78/7TySxZq8fN9DlKosmFE2mgmLFVlYx70uvxVL2EKzeQMjqcLPg3bTK4otSVrNbgLdbs+fJLH5imoxd5UEZyChhdy1YQvnqKBlH7GnrRgb2JybStK7izMUId/8SzKjOUoLqjKY6oLiOfYKM49yi4KdmVeiJPF6jY76idlJ4u+WUEOpYCnDWZYkU6jd6xbeEUdn8aBdw6ygNm4U+5qZS+LX4+I+V0m7BlZcPhf8YrWJkxtGLnrcz5UT5JMbyWz7VumL2H12rlKUZNYzxGcm4RNIspewrEzCic9MSeJxAknBEl+ZO83+b3A0xmBludMYY2SdgCXwy85HCutxrF2Te/IajSFW65OgT+uK4TV6Ar8vZu5lWq/EXwUhf/zTtIVWnmmewZjPDBvxZEhxSa3kzai/oiaQWzhzqjJxiLsmM69e04rLW4Ll89Xhegtk3jDcEk/3//jgrMbBBW6R+r0cw2eJd+91cfYD"},6459:function(e,t,n){function a(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=ac0e0399430c751b9abb4bbe565e3e41ad68a131-2b4e36db524c967eada9.js.map