"use strict";const l=require("./core-DArGEo65.cjs"),f={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:r,truncate:i}){return t.length<=e+r?t:i==="end"?`${t.substring(0,e)}...`:i==="start"?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(t){const r=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),i=this.hexToRgb(r),s=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=100-3*Number(s?.replace("px","")),a=`${n}% ${n}% at 65% 40%`,u=[];for(let v=0;v<5;v+=1){const p=this.tintColor(i,.15*v);u.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(t){const e=parseInt(t,16),r=e>>16&255,i=e>>8&255,s=e&255;return[r,i,s]},tintColor(t,e){const[r,i,s]=t,o=Math.round(r+(255-r)*e),n=Math.round(i+(255-i)*e),a=Math.round(s+(255-s)*e);return[o,n,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,r){return t.toString().length>=e?Number(t).toFixed(r):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function W(t,e){const{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(s){customElements.get(t)||customElements.define(t,s)}}}function H(t,e){return customElements.get(t)||customElements.define(t,e),e}function m(t){return function(r){return typeof r=="function"?H(t,r):W(t,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F={attribute:!0,type:String,converter:l.u,reflect:!1,hasChanged:l.f},G=(t=F,e,r)=>{const{kind:i,metadata:s}=r;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),i==="accessor"){const{name:n}=r;return{set(a){const u=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,u,t)},init(a){return a!==void 0&&this.C(n,void 0,t,a),a}}}if(i==="setter"){const{name:n}=r;return function(a){const u=this[n];e.call(this,a),this.requestUpdate(n,u,t)}}throw Error("Unsupported decorator location: "+i)};function c(t){return(e,r)=>typeof r=="object"?G(t,e,r):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(t){return c({...t,state:!0,attribute:!1})}const V=l.i`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var d=function(t,e,r,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,r,o):n(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let h=class extends l.i$1{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&f.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&f.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&f.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&f.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&f.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&f.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&f.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&f.getSpacingStyles(this.margin,3)};
    `,l.x`<slot></slot>`}};h.styles=[l.resetStyles,V];d([c()],h.prototype,"flexDirection",void 0);d([c()],h.prototype,"flexWrap",void 0);d([c()],h.prototype,"flexBasis",void 0);d([c()],h.prototype,"flexGrow",void 0);d([c()],h.prototype,"flexShrink",void 0);d([c()],h.prototype,"alignItems",void 0);d([c()],h.prototype,"justifyContent",void 0);d([c()],h.prototype,"columnGap",void 0);d([c()],h.prototype,"rowGap",void 0);d([c()],h.prototype,"gap",void 0);d([c()],h.prototype,"padding",void 0);d([c()],h.prototype,"margin",void 0);h=d([m("wui-flex")],h);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=t=>t??l.E;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=t=>t===null||typeof t!="object"&&typeof t!="function",K=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M={ATTRIBUTE:1,CHILD:2},R=t=>(...e)=>({_$litDirective$:t,values:e});let L=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=(t,e)=>{const r=t._$AN;if(r===void 0)return!1;for(const i of r)i._$AO?.(e,!1),S(i,e);return!0},_=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},D=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),J(e)}};function Z(t){this._$AN!==void 0?(_(this),this._$AM=t,D(this)):this._$AM=t}function Q(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let o=r;o<i.length;o++)S(i[o],!1),_(i[o]);else i!=null&&(S(i,!1),_(i));else S(this,t)}const J=t=>{t.type==M.CHILD&&(t._$AP??=Q,t._$AQ??=Z)};class U extends L{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),D(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(S(this,e),_(this))}setValue(e){if(K(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ee{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class te{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=t=>!X(t)&&typeof t.then=="function",B=1073741823;class re extends U{constructor(){super(...arguments),this._$Cwt=B,this._$Cbt=[],this._$CK=new ee(this),this._$CX=new te}render(...e){return e.find(r=>!O(r))??l.T}update(e,r){const i=this._$Cbt;let s=i.length;this._$Cbt=r;const o=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<r.length&&!(a>this._$Cwt);a++){const u=r[a];if(!O(u))return this._$Cwt=a,u;a<s&&u===i[a]||(this._$Cwt=B,s=0,Promise.resolve(u).then(async v=>{for(;n.get();)await n.get();const p=o.deref();if(p!==void 0){const k=p._$Cbt.indexOf(u);k>-1&&k<p._$Cwt&&(p._$Cwt=k,p.setValue(v))}}))}return l.T}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ie=R(re);class oe{constructor(){this.cache=new Map}set(e,r){this.cache.set(e,r)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const j=new oe,se=l.i`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var C=function(t,e,r,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,r,o):n(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};const I={add:async()=>(await Promise.resolve().then(()=>require("./add-BO895KdG.cjs"))).addSvg,allWallets:async()=>(await Promise.resolve().then(()=>require("./all-wallets-D2NcuO2y.cjs"))).allWalletsSvg,arrowBottomCircle:async()=>(await Promise.resolve().then(()=>require("./arrow-bottom-circle-B6oNI-Sx.cjs"))).arrowBottomCircleSvg,appStore:async()=>(await Promise.resolve().then(()=>require("./app-store-COHkKiIa.cjs"))).appStoreSvg,apple:async()=>(await Promise.resolve().then(()=>require("./apple-WJvdUrM8.cjs"))).appleSvg,arrowBottom:async()=>(await Promise.resolve().then(()=>require("./arrow-bottom-CD6xSNv4.cjs"))).arrowBottomSvg,arrowLeft:async()=>(await Promise.resolve().then(()=>require("./arrow-left-izvNVFXL.cjs"))).arrowLeftSvg,arrowRight:async()=>(await Promise.resolve().then(()=>require("./arrow-right-B8zw9-xC.cjs"))).arrowRightSvg,arrowTop:async()=>(await Promise.resolve().then(()=>require("./arrow-top-BuJqboUa.cjs"))).arrowTopSvg,bank:async()=>(await Promise.resolve().then(()=>require("./bank-CHt98psv.cjs"))).bankSvg,browser:async()=>(await Promise.resolve().then(()=>require("./browser-BhvkEBG7.cjs"))).browserSvg,card:async()=>(await Promise.resolve().then(()=>require("./card-tGJdLakJ.cjs"))).cardSvg,checkmark:async()=>(await Promise.resolve().then(()=>require("./checkmark-Btuj25L9.cjs"))).checkmarkSvg,checkmarkBold:async()=>(await Promise.resolve().then(()=>require("./checkmark-bold-DmwHKHkY.cjs"))).checkmarkBoldSvg,chevronBottom:async()=>(await Promise.resolve().then(()=>require("./chevron-bottom-0QdBl27K.cjs"))).chevronBottomSvg,chevronLeft:async()=>(await Promise.resolve().then(()=>require("./chevron-left-Cc0yZPMK.cjs"))).chevronLeftSvg,chevronRight:async()=>(await Promise.resolve().then(()=>require("./chevron-right-CcQtNd3_.cjs"))).chevronRightSvg,chevronTop:async()=>(await Promise.resolve().then(()=>require("./chevron-top-Ba99wVrr.cjs"))).chevronTopSvg,chromeStore:async()=>(await Promise.resolve().then(()=>require("./chrome-store-Dv3nQaQf.cjs"))).chromeStoreSvg,clock:async()=>(await Promise.resolve().then(()=>require("./clock-C6APEXEG.cjs"))).clockSvg,close:async()=>(await Promise.resolve().then(()=>require("./close-D4Ya4c7u.cjs"))).closeSvg,compass:async()=>(await Promise.resolve().then(()=>require("./compass-yuyJJHJQ.cjs"))).compassSvg,coinPlaceholder:async()=>(await Promise.resolve().then(()=>require("./coinPlaceholder-i1G2a278.cjs"))).coinPlaceholderSvg,copy:async()=>(await Promise.resolve().then(()=>require("./copy-ChAgG9lX.cjs"))).copySvg,cursor:async()=>(await Promise.resolve().then(()=>require("./cursor-Dyoqrn7J.cjs"))).cursorSvg,cursorTransparent:async()=>(await Promise.resolve().then(()=>require("./cursor-transparent-DqB6gSS_.cjs"))).cursorTransparentSvg,desktop:async()=>(await Promise.resolve().then(()=>require("./desktop-BUrhNEV5.cjs"))).desktopSvg,disconnect:async()=>(await Promise.resolve().then(()=>require("./disconnect-D0tAGvjN.cjs"))).disconnectSvg,discord:async()=>(await Promise.resolve().then(()=>require("./discord-DG4u0jdu.cjs"))).discordSvg,etherscan:async()=>(await Promise.resolve().then(()=>require("./etherscan-BSe1UQmb.cjs"))).etherscanSvg,extension:async()=>(await Promise.resolve().then(()=>require("./extension-DiAuBAuj.cjs"))).extensionSvg,externalLink:async()=>(await Promise.resolve().then(()=>require("./external-link-C-m3JqzO.cjs"))).externalLinkSvg,facebook:async()=>(await Promise.resolve().then(()=>require("./facebook-BcO8zL0G.cjs"))).facebookSvg,farcaster:async()=>(await Promise.resolve().then(()=>require("./farcaster-DTOONjEn.cjs"))).farcasterSvg,filters:async()=>(await Promise.resolve().then(()=>require("./filters-Cm5tRyCk.cjs"))).filtersSvg,github:async()=>(await Promise.resolve().then(()=>require("./github-GlgQNSJH.cjs"))).githubSvg,google:async()=>(await Promise.resolve().then(()=>require("./google-CPxQHJ1u.cjs"))).googleSvg,helpCircle:async()=>(await Promise.resolve().then(()=>require("./help-circle-VoV84e8x.cjs"))).helpCircleSvg,image:async()=>(await Promise.resolve().then(()=>require("./image-rkFDpIc9.cjs"))).imageSvg,id:async()=>(await Promise.resolve().then(()=>require("./id-DUuPhMS-.cjs"))).idSvg,infoCircle:async()=>(await Promise.resolve().then(()=>require("./info-circle-BVAvxdCl.cjs"))).infoCircleSvg,lightbulb:async()=>(await Promise.resolve().then(()=>require("./lightbulb-DBoEneIU.cjs"))).lightbulbSvg,mail:async()=>(await Promise.resolve().then(()=>require("./mail-CIWOA0FM.cjs"))).mailSvg,mobile:async()=>(await Promise.resolve().then(()=>require("./mobile-CLOM3xnD.cjs"))).mobileSvg,more:async()=>(await Promise.resolve().then(()=>require("./more-DgdJMGw7.cjs"))).moreSvg,networkPlaceholder:async()=>(await Promise.resolve().then(()=>require("./network-placeholder-Bo64pNL5.cjs"))).networkPlaceholderSvg,nftPlaceholder:async()=>(await Promise.resolve().then(()=>require("./nftPlaceholder-CGUw4ZaV.cjs"))).nftPlaceholderSvg,off:async()=>(await Promise.resolve().then(()=>require("./off-BUEANb00.cjs"))).offSvg,playStore:async()=>(await Promise.resolve().then(()=>require("./play-store-CodaRAJE.cjs"))).playStoreSvg,plus:async()=>(await Promise.resolve().then(()=>require("./plus-MvxQulmX.cjs"))).plusSvg,qrCode:async()=>(await Promise.resolve().then(()=>require("./qr-code-D1KmSSAE.cjs"))).qrCodeIcon,recycleHorizontal:async()=>(await Promise.resolve().then(()=>require("./recycle-horizontal-BV50Nq2P.cjs"))).recycleHorizontalSvg,refresh:async()=>(await Promise.resolve().then(()=>require("./refresh-4JIpU3QY.cjs"))).refreshSvg,search:async()=>(await Promise.resolve().then(()=>require("./search-67pn6mD0.cjs"))).searchSvg,send:async()=>(await Promise.resolve().then(()=>require("./send-CCv9RpRb.cjs"))).sendSvg,swapHorizontal:async()=>(await Promise.resolve().then(()=>require("./swapHorizontal-DXdWqrVG.cjs"))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await Promise.resolve().then(()=>require("./swapHorizontalMedium-D30BVopk.cjs"))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await Promise.resolve().then(()=>require("./swapHorizontalBold-BKNZrDWE.cjs"))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await Promise.resolve().then(()=>require("./swapHorizontalRoundedBold-DjRDWzfP.cjs"))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await Promise.resolve().then(()=>require("./swapVertical-CnWmPBCc.cjs"))).swapVerticalSvg,telegram:async()=>(await Promise.resolve().then(()=>require("./telegram-BLm528Sf.cjs"))).telegramSvg,threeDots:async()=>(await Promise.resolve().then(()=>require("./three-dots-0oeTyB1I.cjs"))).threeDotsSvg,twitch:async()=>(await Promise.resolve().then(()=>require("./twitch-BbTqdKwT.cjs"))).twitchSvg,twitter:async()=>(await Promise.resolve().then(()=>require("./x-Dxvl3M_w.cjs"))).xSvg,twitterIcon:async()=>(await Promise.resolve().then(()=>require("./twitterIcon-C9FjHHoC.cjs"))).twitterIconSvg,verify:async()=>(await Promise.resolve().then(()=>require("./verify-C5NoM8kM.cjs"))).verifySvg,verifyFilled:async()=>(await Promise.resolve().then(()=>require("./verify-filled-DnPaJySW.cjs"))).verifyFilledSvg,wallet:async()=>(await Promise.resolve().then(()=>require("./wallet-BtW2x95F.cjs"))).walletSvg,walletConnect:async()=>(await Promise.resolve().then(()=>require("./walletconnect-C123ujx3.cjs"))).walletConnectSvg,walletConnectLightBrown:async()=>(await Promise.resolve().then(()=>require("./walletconnect-C123ujx3.cjs"))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await Promise.resolve().then(()=>require("./walletconnect-C123ujx3.cjs"))).walletConnectBrownSvg,walletPlaceholder:async()=>(await Promise.resolve().then(()=>require("./wallet-placeholder-DWo8qDyC.cjs"))).walletPlaceholderSvg,warningCircle:async()=>(await Promise.resolve().then(()=>require("./warning-circle-L3LQyu6V.cjs"))).warningCircleSvg,x:async()=>(await Promise.resolve().then(()=>require("./x-Dxvl3M_w.cjs"))).xSvg,info:async()=>(await Promise.resolve().then(()=>require("./info-CvZFN3vN.cjs"))).infoSvg,exclamationTriangle:async()=>(await Promise.resolve().then(()=>require("./exclamation-triangle-DXJN2k2X.cjs"))).exclamationTriangleSvg,reown:async()=>(await Promise.resolve().then(()=>require("./reown-logo-Zc9d9HXb.cjs"))).reownSvg};async function ne(t){if(j.has(t))return j.get(t);const r=(I[t]??I.copy)();return j.set(t,r),r}let y=class extends l.i$1{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,l.x`${ie(ne(this.name),l.x`<div class="fallback"></div>`)}`}};y.styles=[l.resetStyles,l.colorStyles,se];C([c()],y.prototype,"size",void 0);C([c()],y.prototype,"name",void 0);C([c()],y.prototype,"color",void 0);C([c()],y.prototype,"aspectRatio",void 0);y=C([m("wui-icon")],y);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=R(class extends L{constructor(t){if(super(t),t.type!==M.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const r=t.element.classList;for(const i of this.st)i in e||(r.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||this.nt?.has(i)||(s?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return l.T}}),ae=l.i`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var q=function(t,e,r,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,r,o):n(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let b=class extends l.i$1{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,l.x`<slot class=${E(e)}></slot>`}};b.styles=[l.resetStyles,ae];q([c()],b.prototype,"variant",void 0);q([c()],b.prototype,"color",void 0);q([c()],b.prototype,"align",void 0);q([c()],b.prototype,"lineClamp",void 0);b=q([m("wui-text")],b);const le=l.i`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var w=function(t,e,r,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,r,o):n(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let g=class extends l.i$1{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,r=this.size==="lg",i=this.size==="xl",s=r?"12%":"16%",o=r?"xxs":i?"s":"3xl",n=this.background==="gray",a=this.background==="opaque",u=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let v=`var(--wui-color-${this.backgroundColor})`;return u?v=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(v=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${v};
       --local-bg-mix: ${u||n?"100%":s};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,l.x` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};g.styles=[l.resetStyles,l.elementStyles,le];w([c()],g.prototype,"size",void 0);w([c()],g.prototype,"backgroundColor",void 0);w([c()],g.prototype,"iconColor",void 0);w([c()],g.prototype,"iconSize",void 0);w([c()],g.prototype,"background",void 0);w([c({type:Boolean})],g.prototype,"border",void 0);w([c()],g.prototype,"borderColor",void 0);w([c()],g.prototype,"icon",void 0);g=w([m("wui-icon-box")],g);const ce=l.i`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var z=function(t,e,r,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,r,o):n(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let $=class extends l.i$1{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,l.x`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};$.styles=[l.resetStyles,l.colorStyles,ce];z([c()],$.prototype,"src",void 0);z([c()],$.prototype,"alt",void 0);z([c()],$.prototype,"size",void 0);$=z([m("wui-image")],$);const ue=l.i`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var T=function(t,e,r,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,r,o):n(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let x=class extends l.i$1{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return l.x`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};x.styles=[l.resetStyles,ue];T([c()],x.prototype,"variant",void 0);T([c()],x.prototype,"size",void 0);x=T([m("wui-tag")],x);const he=l.i`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var A=function(t,e,r,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,r,o):n(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let P=class extends l.i$1{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,l.x`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};P.styles=[l.resetStyles,he];A([c()],P.prototype,"color",void 0);A([c()],P.prototype,"size",void 0);P=A([m("wui-loading-spinner")],P);exports.UiHelperUtil=f;exports.customElement=m;exports.e=R;exports.e$1=E;exports.f=U;exports.n=c;exports.o=Y;exports.r=N;
