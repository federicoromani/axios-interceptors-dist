import{p as A,m as h,f as G,g as _,h as J,i as I,a as n,j as k,S as K,k as ce,s as V,r as ue,l as E,n as de,q as oe,t as F,v as Q,F as ve,x as me,y as ge,M as $,I as P,z as j,A as X,B as fe,C as Y,D as Z,E as p,G as ee,H as ae,J as te,K as ne,L as ye,V as Se,N as se,O as be,P as W,Q as ke,R as he,T as _e,U as Ie,W as Ce,X as Ve,Y as Pe,Z as Ae,$ as ze,a0 as Re,a1 as Te,a2 as Be,a3 as xe,a4 as Le}from"./index-43bb8069.js";import{c as M}from"./createSimpleFunctional-00b9eab3.js";function $e(e){return{aspectStyles:k(()=>{const r=Number(e.aspectRatio);return r?{paddingBottom:String(1/r*100)+"%"}:void 0})}}const le=A({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...h(),...G()},"v-responsive"),q=_()({name:"VResponsive",props:le(),setup(e,r){let{slots:t}=r;const{aspectStyles:a}=$e(e),{dimensionStyles:o}=J(e);return I(()=>{var l;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[n("div",{class:"v-responsive__sizer",style:a.value},null),(l=t.additional)==null?void 0:l.call(t),t.default&&n("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}});function De(e,r){if(!K)return;const t=r.modifiers||{},a=r.value,{handler:o,options:l}=typeof a=="object"?a:{handler:a,options:{}},c=new IntersectionObserver(function(){var g;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],m=arguments.length>1?arguments[1]:void 0;const i=(g=e._observe)==null?void 0:g[r.instance.$.uid];if(!i)return;const u=v.some(S=>S.isIntersecting);o&&(!t.quiet||i.init)&&(!t.once||u||i.init)&&o(u,v,m),u&&t.once?ie(e,r):i.init=!0},l);e._observe=Object(e._observe),e._observe[r.instance.$.uid]={init:!1,observer:c},c.observe(e)}function ie(e,r){var a;const t=(a=e._observe)==null?void 0:a[r.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[r.instance.$.uid])}const we={mounted:De,unmounted:ie},Ne=we,Oe=A({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...le(),...h(),...ce()},"v-img"),re=_()({name:"VImg",directives:{intersect:Ne},props:Oe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,r){let{emit:t,slots:a}=r;const o=V(""),l=ue(),c=V(e.eager?"loading":"idle"),v=V(),m=V(),i=k(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),u=k(()=>i.value.aspect||v.value/m.value||0);E(()=>e.src,()=>{g(c.value!=="idle")}),E(u,(s,d)=>{!s&&d&&l.value&&y(l.value)}),de(()=>g());function g(s){if(!(e.eager&&s)&&!(K&&!s&&!e.eager)){if(c.value="loading",i.value.lazySrc){const d=new Image;d.src=i.value.lazySrc,y(d,null)}i.value.src&&oe(()=>{var d,f;if(t("loadstart",((d=l.value)==null?void 0:d.currentSrc)||i.value.src),(f=l.value)!=null&&f.complete){if(l.value.naturalWidth||z(),c.value==="error")return;u.value||y(l.value,null),S()}else u.value||y(l.value),R()})}}function S(){var s;R(),c.value="loaded",t("load",((s=l.value)==null?void 0:s.currentSrc)||i.value.src)}function z(){var s;c.value="error",t("error",((s=l.value)==null?void 0:s.currentSrc)||i.value.src)}function R(){const s=l.value;s&&(o.value=s.currentSrc||s.src)}let T=-1;function y(s){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const f=()=>{clearTimeout(T);const{naturalHeight:L,naturalWidth:C}=s;L||C?(v.value=C,m.value=L):!s.complete&&c.value==="loading"&&d!=null?T=window.setTimeout(f,d):(s.currentSrc.endsWith(".svg")||s.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,m.value=1)};f()}const B=k(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),b=()=>{var f;if(!i.value.src||c.value==="idle")return null;const s=n("img",{class:["v-img__img",B.value],src:i.value.src,srcset:i.value.srcset,alt:e.alt,sizes:e.sizes,ref:l,onLoad:S,onError:z},null),d=(f=a.sources)==null?void 0:f.call(a);return n($,{transition:e.transition,appear:!0},{default:()=>[F(d?n("picture",{class:"v-img__picture"},[d,s]):s,[[ge,c.value==="loaded"]])]})},D=()=>n($,{transition:e.transition},{default:()=>[i.value.lazySrc&&c.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",B.value],src:i.value.lazySrc,alt:e.alt},null)]}),w=()=>a.placeholder?n($,{transition:e.transition,appear:!0},{default:()=>[(c.value==="loading"||c.value==="error"&&!a.error)&&n("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,N=()=>a.error?n($,{transition:e.transition,appear:!0},{default:()=>[c.value==="error"&&n("div",{class:"v-img__error"},[a.error()])]}):null,O=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,x=V(!1);{const s=E(u,d=>{d&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{x.value=!0})}),s())})}return I(()=>{const[s]=q.filterProps(e);return F(n(q,me({class:["v-img",{"v-img--booting":!x.value},e.class],style:e.style},s,{aspectRatio:u.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(ve,null,[n(b,null,null),n(D,null,null),n(O,null,null),n(w,null,null),n(N,null,null)]),default:a.default}),[[Q("intersect"),{handler:g,options:e.options},null,{once:!0}]])}),{currentSrc:o,image:l,state:c,naturalWidth:v,naturalHeight:m}}});const Ee=A({start:Boolean,end:Boolean,icon:P,image:String,...h(),...j(),...X(),...fe(),...Y(),...Z(),...p({variant:"flat"})},"v-avatar"),U=_()({name:"VAvatar",props:Ee(),setup(e,r){let{slots:t}=r;const{themeClasses:a}=ee(e),{colorClasses:o,colorStyles:l,variantClasses:c}=ae(e),{densityClasses:v}=te(e),{roundedClasses:m}=ne(e),{sizeClasses:i,sizeStyles:u}=ye(e);return I(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,o.value,v.value,m.value,i.value,c.value,e.class],style:[l.value,u.value,e.style]},{default:()=>{var g;return[e.image?n(re,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(Se,{key:"icon",icon:e.icon},null):(g=t.default)==null?void 0:g.call(t),se(!1,"v-avatar")]}})),{}}});const Fe=_()({name:"VCardActions",props:h(),setup(e,r){let{slots:t}=r;return be({VBtn:{variant:"text"}}),I(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),We=M("v-card-subtitle"),je=M("v-card-title"),Me=A({appendAvatar:String,appendIcon:P,prependAvatar:String,prependIcon:P,subtitle:String,title:String,...h(),...j()},"v-card-item"),He=_()({name:"VCardItem",props:Me(),setup(e,r){let{slots:t}=r;return I(()=>{var i;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),c=!!(l||t.append),v=!!(e.title||t.title),m=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(W,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(U,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[v&&n(je,{key:"title"},{default:()=>{var u;return[((u=t.title)==null?void 0:u.call(t))??e.title]}}),m&&n(We,{key:"subtitle"},{default:()=>{var u;return[((u=t.subtitle)==null?void 0:u.call(t))??e.subtitle]}}),(i=t.default)==null?void 0:i.call(t)]),c&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(W,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):l&&n(U,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),qe=M("v-card-text"),Ue=A({appendAvatar:String,appendIcon:P,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:P,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...ke(),...h(),...j(),...G(),...he(),..._e(),...Ie(),...Ce(),...X(),...Ve(),...Y(),...Z(),...p({variant:"elevated"})},"v-card"),Ke=_()({name:"VCard",directives:{Ripple:Pe},props:Ue(),setup(e,r){let{attrs:t,slots:a}=r;const{themeClasses:o}=ee(e),{borderClasses:l}=Ae(e),{colorClasses:c,colorStyles:v,variantClasses:m}=ae(e),{densityClasses:i}=te(e),{dimensionStyles:u}=J(e),{elevationClasses:g}=ze(e),{loaderClasses:S}=Re(e),{locationStyles:z}=Te(e),{positionClasses:R}=Be(e),{roundedClasses:T}=ne(e),y=xe(e,t),B=k(()=>e.link!==!1&&y.isLink.value),b=k(()=>!e.disabled&&e.link!==!1&&(e.link||y.isClickable.value));return I(()=>{const D=B.value?"a":e.tag,w=!!(a.title||e.title),N=!!(a.subtitle||e.subtitle),O=w||N,x=!!(a.append||e.appendAvatar||e.appendIcon),s=!!(a.prepend||e.prependAvatar||e.prependIcon),d=!!(a.image||e.image),f=O||s||x,L=!!(a.text||e.text);return F(n(D,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":b.value},o.value,l.value,c.value,i.value,g.value,S.value,R.value,T.value,m.value,e.class],style:[v.value,u.value,z.value,e.style],href:y.href.value,onClick:b.value&&y.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[d&&n("div",{key:"image",class:"v-card__image"},[a.image?n(W,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(re,{key:"image-img",cover:!0,src:e.image},null)]),n(Le,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),f&&n(He,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),L&&n(qe,{key:"text"},{default:()=>{var H;return[((H=a.text)==null?void 0:H.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(Fe,null,{default:a.actions}),se(b.value,"v-card")]}}),[[Q("ripple"),b.value&&e.ripple]])}),{}}});export{je as V,We as a,Fe as b,Ke as c};
