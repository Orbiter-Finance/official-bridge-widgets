"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./core-CFF9Cijf.cjs"),l=require("./index-CzOU5qPq.cjs"),d=e.proxy({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),K={state:d,subscribe(a){return e.subscribe(d,()=>a(d))},subscribeKey(a,t){return e.subscribeKey(d,a,t)},showTooltip({message:a,triggerRect:t,variant:o}){d.open=!0,d.message=a,d.triggerRect=t,d.variant=o},hide(){d.open=!1,d.message="",d.triggerRect={width:0,height:0,top:0,left:0}}},x=e.withErrorBoundary(K),P={isUnsupportedChainView(){return e.RouterController.state.view==="UnsupportedChain"||e.RouterController.state.view==="SwitchNetwork"&&e.RouterController.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){e.ModalController.shake();return}if(await e.SIWXUtil.isSIWXCloseDisabled()){e.ModalController.shake();return}e.ModalController.close()}},V=e.i`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;var X=function(a,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,o,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let E=class extends e.i$1{render(){return e.x`<slot></slot>`}};E.styles=[e.resetStyles,V];E=X([l.customElement("wui-card")],E);const Y=e.i`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var C=function(a,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,o,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let v=class extends e.i$1{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,e.x`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){e.AlertController.close()}};v.styles=[e.resetStyles,Y];C([l.n()],v.prototype,"message",void 0);C([l.n()],v.prototype,"backgroundColor",void 0);C([l.n()],v.prototype,"iconColor",void 0);C([l.n()],v.prototype,"icon",void 0);v=C([l.customElement("wui-alertbar")],v);const q=e.i`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var _=function(a,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,o,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};const G={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let N=class extends e.i$1{constructor(){super(),this.unsubscribe=[],this.open=e.AlertController.state.open,this.onOpen(!0),this.unsubscribe.push(e.AlertController.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:o}=e.AlertController.state,r=G[o];return e.x`
      <wui-alertbar
        message=${t}
        backgroundColor=${r?.backgroundColor}
        iconColor=${r?.iconColor}
        icon=${r?.icon}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};N.styles=q;_([l.r()],N.prototype,"open",void 0);N=_([l.customElement("w3m-alertbar")],N);const F=e.i`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var k=function(a,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,o,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let f=class extends e.i$1{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const t=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",o=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${t});
    --local-padding: var(${o});
`,e.x`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};f.styles=[e.resetStyles,e.elementStyles,e.colorStyles,F];k([l.n()],f.prototype,"size",void 0);k([l.n({type:Boolean})],f.prototype,"disabled",void 0);k([l.n()],f.prototype,"icon",void 0);k([l.n()],f.prototype,"iconColor",void 0);f=k([l.customElement("wui-icon-link")],f);const J=e.i`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var B=function(a,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,o,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let $=class extends e.i$1{constructor(){super(...arguments),this.imageSrc=""}render(){return e.x`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?e.x`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:e.x`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};$.styles=[e.resetStyles,e.elementStyles,e.colorStyles,J];B([l.n()],$.prototype,"imageSrc",void 0);$=B([l.customElement("wui-select")],$);const Q=e.i`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var m=function(a,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,o,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};const Z=["SmartSessionList"];function W(){const a=e.RouterController.state.data?.connector?.name,t=e.RouterController.state.data?.wallet?.name,o=e.RouterController.state.data?.network?.name,r=t??a,n=e.ConnectorController.getConnectors();return{Connect:`Connect ${n.length===1&&n[0]?.id==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:r?`Get ${r}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:o??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:e.AccountController.state.socialProvider?e.AccountController.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let w=class extends e.i$1{constructor(){super(),this.unsubscribe=[],this.heading=W()[e.RouterController.state.view],this.network=e.ChainController.state.activeCaipNetwork,this.networkImage=e.AssetUtil.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=e.RouterController.state.view,this.viewDirection="",this.headerText=W()[e.RouterController.state.view],this.unsubscribe.push(e.AssetController.subscribeNetworkImages(()=>{this.networkImage=e.AssetUtil.getNetworkImage(this.network)}),e.RouterController.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.headerText=W()[t]},e.ConstantsUtil.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),e.ChainController.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=e.AssetUtil.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return e.x`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){e.EventsController.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),e.RouterController.push("WhatIsAWallet")}async onClose(){await P.safeClose()}rightHeaderTemplate(){const t=e.OptionsController?.state?.features?.smartSessions;return e.RouterController.state.view!=="Account"||!t?this.closeButtonTemplate():e.x`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>e.RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return e.x`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const t=Z.includes(this.view);return e.x`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${t?e.x`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:t}=e.RouterController.state,o=t==="Connect",r=e.OptionsController.state.enableEmbedded,n=t==="ApproveTransaction",i=t==="ConnectingSiwe",s=t==="Account",c=e.OptionsController.state.enableNetworkSwitch,O=n||i||o&&r;return s&&c?e.x`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${l.o(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${l.o(this.networkImage)}
      ></wui-select>`:this.showBack&&!O?e.x`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:e.x`<wui-icon-link
      data-hidden=${!o}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(e.EventsController.sendEvent({type:"track",event:"CLICK_NETWORKS"}),e.RouterController.push("Networks"))}isAllowedNetworkSwitch(){const t=e.ChainController.getAllRequestedCaipNetworks(),o=t?t.length>1:!1,r=t?.find(({id:n})=>n===this.network?.id);return o||!r}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:t}=e.RouterController.state;let o=e.ConstantsUtil.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(o=e.ConstantsUtil.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=o}async onHistoryChange(){const{history:t}=e.RouterController.state,o=this.shadowRoot?.querySelector("#dynamic");t.length>1&&!this.showBack&&o?(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&o&&(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){e.RouterController.goBack()}};w.styles=Q;m([l.r()],w.prototype,"heading",void 0);m([l.r()],w.prototype,"network",void 0);m([l.r()],w.prototype,"networkImage",void 0);m([l.r()],w.prototype,"showBack",void 0);m([l.r()],w.prototype,"prevHistoryLength",void 0);m([l.r()],w.prototype,"view",void 0);m([l.r()],w.prototype,"viewDirection",void 0);m([l.r()],w.prototype,"headerText",void 0);w=m([l.customElement("w3m-header")],w);const ee=e.i`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var b=function(a,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,o,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let p=class extends e.i$1{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return e.x`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?e.x`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?e.x`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:e.x`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};p.styles=[e.resetStyles,ee];b([l.n()],p.prototype,"backgroundColor",void 0);b([l.n()],p.prototype,"iconColor",void 0);b([l.n()],p.prototype,"icon",void 0);b([l.n()],p.prototype,"message",void 0);b([l.n()],p.prototype,"loading",void 0);b([l.n()],p.prototype,"iconType",void 0);p=b([l.customElement("wui-snackbar")],p);const te=e.i`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var U=function(a,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,o,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};const oe={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let A=class extends e.i$1{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=e.SnackController.state.open,this.unsubscribe.push(e.SnackController.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:o,svg:r}=e.SnackController.state,n=oe[o],{icon:i,iconColor:s}=r??n??{};return e.x`
      <wui-snackbar
        message=${t}
        backgroundColor=${n?.backgroundColor}
        iconColor=${s}
        icon=${i}
        .loading=${o==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),e.SnackController.state.autoClose&&(this.timeout=setTimeout(()=>e.SnackController.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};A.styles=te;U([l.r()],A.prototype,"open",void 0);A=U([l.customElement("w3m-snackbar")],A);const ie=e.i`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var S=function(a,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,o,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let g=class extends e.i$1{constructor(){super(),this.unsubscribe=[],this.open=x.state.open,this.message=x.state.message,this.triggerRect=x.state.triggerRect,this.variant=x.state.variant,this.unsubscribe.push(x.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,o=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${o}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,e.x`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};g.styles=[ie];S([l.r()],g.prototype,"open",void 0);S([l.r()],g.prototype,"message",void 0);S([l.r()],g.prototype,"triggerRect",void 0);S([l.r()],g.prototype,"variant",void 0);g=S([l.customElement("w3m-tooltip"),l.customElement("w3m-tooltip")],g);const re=e.i`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var T=function(a,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,o,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let y=class extends e.i$1{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=e.RouterController.state.view,this.viewDirection="",this.unsubscribe.push(e.RouterController.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([t])=>{const o=`${t?.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",o),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=o,this.style.animation="unset"},e.ConstantsUtil.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return e.x`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return e.x`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return e.x`<w3m-account-view></w3m-account-view>`;case"AllWallets":return e.x`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return e.x`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return e.x`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return e.x`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return e.x`<w3m-connect-view></w3m-connect-view>`;case"Create":return e.x`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return e.x`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return e.x`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return e.x`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return e.x`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return e.x`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return e.x`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return e.x`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return e.x`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return e.x`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return e.x`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return e.x`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return e.x`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return e.x`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return e.x`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return e.x`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return e.x`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return e.x`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return e.x`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return e.x`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return e.x`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return e.x`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return e.x`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return e.x`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return e.x`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return e.x`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return e.x`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return e.x`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return e.x`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return e.x`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return e.x`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return e.x`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return e.x`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return e.x`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return e.x`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return e.x`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return e.x`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return e.x`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return e.x`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return e.x`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return e.x`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return e.x`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return e.x`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return e.x`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return e.x`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return e.x`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return e.x`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return e.x`<w3m-pay-loading-view></w3m-pay-loading-view>`;default:return e.x`<w3m-connect-view></w3m-connect-view>`}}onViewChange(t){x.hide();let o=e.ConstantsUtil.VIEW_DIRECTION.Next;const{history:r}=e.RouterController.state;r.length<this.prevHistoryLength&&(o=e.ConstantsUtil.VIEW_DIRECTION.Prev),this.prevHistoryLength=r.length,this.viewDirection=o,setTimeout(()=>{this.view=t},e.ConstantsUtil.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};y.styles=re;T([l.r()],y.prototype,"view",void 0);T([l.r()],y.prototype,"viewDirection",void 0);y=T([l.customElement("w3m-router")],y);const ne=e.i`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var h=function(a,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,o,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};const I="scroll-lock";class u extends e.i$1{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=e.OptionsController.state.enableEmbedded,this.open=e.ModalController.state.open,this.caipAddress=e.ChainController.state.activeCaipAddress,this.caipNetwork=e.ChainController.state.activeCaipNetwork,this.shake=e.ModalController.state.shake,this.filterByNamespace=e.ConnectorController.state.filterByNamespace,this.initializeTheming(),e.ApiController.prefetchAnalyticsConfig(),this.unsubscribe.push(e.ModalController.subscribeKey("open",t=>t?this.onOpen():this.onClose()),e.ModalController.subscribeKey("shake",t=>this.shake=t),e.ChainController.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),e.ChainController.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),e.OptionsController.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),e.ConnectorController.subscribeKey("filterByNamespace",t=>{this.filterByNamespace!==t&&!e.ChainController.getAccountData(t)?.caipAddress&&(e.ApiController.fetchRecommendedWallets(),this.filterByNamespace=t)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){e.ModalController.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?e.x`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?e.x`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return e.x` <wui-card
      shake="${this.shake}"
      data-embedded="${l.o(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){t.target===t.currentTarget&&await this.handleClose()}async handleClose(){await P.safeClose()}initializeTheming(){const{themeVariables:t,themeMode:o}=e.ThemeController.state,r=l.UiHelperUtil.getColorTheme(o);e.initializeTheming(t,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),e.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=I,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${I}"]`);t&&t.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const t=this.shadowRoot?.querySelector("wui-card");t?.focus(),window.addEventListener("keydown",o=>{if(o.key==="Escape")this.handleClose();else if(o.key==="Tab"){const{tagName:r}=o.target;r&&!r.includes("W3M-")&&!r.includes("WUI-")&&t?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(t){const o=e.ChainController.state.isSwitchingNamespace,r=e.CoreHelperUtil.getPlainAddress(t);!r&&!o?e.ModalController.close():o&&r&&e.RouterController.goBack(),await e.SIWXUtil.initializeIfEnabled(),this.caipAddress=t,e.ChainController.setIsSwitchingNamespace(!1)}onNewNetwork(t){const o=this.caipNetwork,r=o?.caipNetworkId?.toString(),n=o?.chainNamespace,i=t?.caipNetworkId?.toString(),s=t?.chainNamespace,c=r!==i,D=c&&!(n!==s),j=o?.name===e.ConstantsUtil$1.UNSUPPORTED_NETWORK_NAME,L=e.RouterController.state.view==="ConnectingExternal",M=!e.ChainController.getAccountData(t?.chainNamespace)?.caipAddress,z=e.RouterController.state.view==="UnsupportedChain",H=e.ModalController.state.open;let R=!1;H&&!L&&(M?c&&(R=!0):(z||D&&!j)&&(R=!0)),R&&e.RouterController.state.view!=="SIWXSignMessage"&&e.RouterController.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(e.ApiController.prefetch(),e.ApiController.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}u.styles=ne;h([l.n({type:Boolean})],u.prototype,"enableEmbedded",void 0);h([l.r()],u.prototype,"open",void 0);h([l.r()],u.prototype,"caipAddress",void 0);h([l.r()],u.prototype,"caipNetwork",void 0);h([l.r()],u.prototype,"shake",void 0);h([l.r()],u.prototype,"filterByNamespace",void 0);exports.W3mModal=class extends u{};exports.W3mModal=h([l.customElement("w3m-modal")],exports.W3mModal);exports.AppKitModal=class extends u{};exports.AppKitModal=h([l.customElement("appkit-modal")],exports.AppKitModal);exports.W3mModalBase=u;
