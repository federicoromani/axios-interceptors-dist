import{p as A,I as o,m as k,f as V,g as B,h as X,i as T,j as D,k as L,l as f,n as _,q as p,r as R,s as z,t as Y,v as C,a as n,x as E,V as Z,y as F,z as ee,A as b,B as ae,C as te,D as ne,E as se,F as le,G as ie,H as de,R as ce,J as re,K as ve,L as ue,M as oe,N as me,O as ge,P as ye,Q as S,S as ke,T as fe,U as Ce}from"./index-9aa8e27d.js";import{c as I}from"./createSimpleFunctional-bc100a92.js";const be=A({start:Boolean,end:Boolean,icon:o,image:String,...k(),...V(),...B(),...X(),...T(),...D(),...L({variant:"flat"})},"v-avatar"),x=f()({name:"VAvatar",props:be(),setup(e,l){let{slots:t}=l;const{themeClasses:a}=_(e),{colorClasses:c,colorStyles:i,variantClasses:r}=p(e),{densityClasses:v}=R(e),{roundedClasses:u}=z(e),{sizeClasses:d,sizeStyles:s}=Y(e);return C(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,v.value,u.value,d.value,r.value,e.class],style:[i.value,s.value,e.style]},{default:()=>{var m;return[e.image?n(E,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(Z,{key:"icon",icon:e.icon},null):(m=t.default)==null?void 0:m.call(t),F(!1,"v-avatar")]}})),{}}});const Ae=f()({name:"VCardActions",props:k(),setup(e,l){let{slots:t}=l;return ee({VBtn:{variant:"text"}}),C(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ve=I("v-card-subtitle"),Ie=I("v-card-title"),he=A({appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:String,title:String,...k(),...V()},"v-card-item"),Pe=f()({name:"VCardItem",props:he(),setup(e,l){let{slots:t}=l;return C(()=>{var d;const a=!!(e.prependAvatar||e.prependIcon),c=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),r=!!(i||t.append),v=!!(e.title||t.title),u=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(b,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(x,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[v&&n(Ie,{key:"title"},{default:()=>{var s;return[((s=t.title)==null?void 0:s.call(t))??e.title]}}),u&&n(Ve,{key:"subtitle"},{default:()=>{var s;return[((s=t.subtitle)==null?void 0:s.call(t))??e.subtitle]}}),(d=t.default)==null?void 0:d.call(t)]),r&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(b,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):i&&n(x,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Se=I("v-card-text"),xe=A({appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...ae(),...k(),...V(),...te(),...ne(),...se(),...le(),...ie(),...B(),...de(),...T(),...D(),...L({variant:"elevated"})},"v-card"),De=f()({name:"VCard",directives:{Ripple:ce},props:xe(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:c}=_(e),{borderClasses:i}=re(e),{colorClasses:r,colorStyles:v,variantClasses:u}=p(e),{densityClasses:d}=R(e),{dimensionStyles:s}=ve(e),{elevationClasses:m}=ue(e),{loaderClasses:M}=oe(e),{locationStyles:H}=me(e),{positionClasses:N}=ge(e),{roundedClasses:O}=z(e),g=ye(e,t),$=S(()=>e.link!==!1&&g.isLink.value),y=S(()=>!e.disabled&&e.link!==!1&&(e.link||g.isClickable.value));return C(()=>{const j=$.value?"a":e.tag,q=!!(a.title||e.title),w=!!(a.subtitle||e.subtitle),G=q||w,J=!!(a.append||e.appendAvatar||e.appendIcon),K=!!(a.prepend||e.prependAvatar||e.prependIcon),Q=!!(a.image||e.image),U=G||K||J,W=!!(a.text||e.text);return ke(n(j,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":y.value},c.value,i.value,r.value,d.value,m.value,M.value,N.value,O.value,u.value,e.class],style:[v.value,s.value,H.value,e.style],href:g.href.value,onClick:y.value&&g.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var h;return[Q&&n("div",{key:"image",class:"v-card__image"},[a.image?n(b,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(E,{key:"image-img",cover:!0,src:e.image},null)]),n(Ce,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),U&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),W&&n(Se,{key:"text"},{default:()=>{var P;return[((P=a.text)==null?void 0:P.call(a))??e.text]}}),(h=a.default)==null?void 0:h.call(a),a.actions&&n(Ae,null,{default:a.actions}),F(y.value,"v-card")]}}),[[fe("ripple"),y.value&&e.ripple]])}),{}}});export{Ie as V,Ve as a,Ae as b,De as c};
