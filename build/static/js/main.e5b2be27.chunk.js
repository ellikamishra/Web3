(this.webpackJsonpmydao=this.webpackJsonpmydao||[]).push([[1],{162:function(e,t,n){},168:function(e,t){},216:function(e,t){},242:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(140),o=n.n(s),a=(n(162),n(85)),i=n(59),l=n(4),d=n.n(l),u=n(26),b=n(99),j=n(141),p=n(67),h=n(19),f=new j.a("rinkeby"),O=f.getBundleDropModule("0xA147969A02B7Ab46364E8399aeb3396Ad0a6134a"),m=f.getTokenModule("0x3418AA364aAddbFF91Ed0d74D415C4c4D2Fe6324"),x=f.getVoteModule("0x449bABD357d84a7Fe3FFe3D6182f9439BdeCbd6A"),v=function(){var e=Object(b.b)(),t=e.connectWallet,n=e.address,c=e.error,s=e.provider;console.log("\ud83d\udc4b Address:",n);var o=s?s.getSigner():void 0,l=Object(r.useState)(!1),j=Object(i.a)(l,2),v=j[0],g=j[1],y=Object(r.useState)(!1),k=Object(i.a)(y,2),A=k[0],w=k[1],M=Object(r.useState)({}),I=Object(i.a)(M,2),S=I[0],C=I[1],E=Object(r.useState)([]),F=Object(i.a)(E,2),N=F[0],T=F[1],D=Object(r.useState)([]),B=Object(i.a)(D,2),P=B[0],V=(B[1],Object(r.useState)(!1)),R=Object(i.a)(V,2),J=R[0],K=R[1],L=Object(r.useState)(!1),W=Object(i.a)(L,2),H=W[0],U=W[1];Object(r.useEffect)((function(){v&&O.getAllClaimerAddresses("0").then((function(e){console.log("\ud83d\ude80 Members addresses",e),T(e)})).catch((function(e){console.error("failed to get member list",e)}))}),[v]),Object(r.useEffect)((function(){v&&m.getAllHolderBalances().then((function(e){console.log("\ud83d\udc5c Amounts",e),C(e)})).catch((function(e){console.error("failed to get token amounts",e)}))}),[v]);var Y=Object(r.useMemo)((function(){return N.map((function(e){return{address:e,tokenAmount:u.a.utils.formatUnits(S[e]||0,18)}}))}),[N,S]);if(Object(r.useEffect)((function(){f.setProviderOrSigner(o)}),[o]),Object(r.useEffect)((function(){if(n)return O.balanceOf(n,"0").then((function(e){e.gt(0)?(g(!0),console.log("\ud83c\udf1f this user has a membership NFT!")):(g(!1),console.log("\ud83d\ude2d this user doesn't have a membership NFT."))})).catch((function(e){g(!1),console.error("failed to nft balance",e)}))}),[n]),c instanceof p.a)return Object(h.jsxs)("div",{className:"unsupported-network",children:[Object(h.jsx)("h2",{children:"Please connect to Rinkeby"}),Object(h.jsx)("p",{children:"This dapp only works on the Rinkeby network, please switch networks in your connected wallet."})]});if(!n)return Object(h.jsxs)("div",{className:"landing",children:[Object(h.jsx)("h1",{children:"Welcome to Chai Ki Tapri DAO"}),Object(h.jsx)("button",{onClick:function(){return t("injected")},className:"btn-hero",children:"Connect your wallet"})]});if(v)return Object(h.jsxs)("div",{className:"member-page",children:[Object(h.jsx)("h1",{children:"\ud83c\udf6aChai Ki Tapri Members Page"}),Object(h.jsx)("p",{children:"Congratulations on being a member"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Member List"}),Object(h.jsxs)("table",{className:"card",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Address"}),Object(h.jsx)("th",{children:"Token Amount"})]})}),Object(h.jsx)("tbody",{children:Y.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:(t=e.address,t.substring(0,6)+"..."+t.substring(t.length-4))}),Object(h.jsx)("td",{children:e.tokenAmount})]},e.address);var t}))})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Active Proposals"}),Object(h.jsxs)("form",{onSubmit:function(){var e=Object(a.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),K(!0),r=P.map((function(e){var t={proposalId:e.proposalId,vote:2};return e.votes.forEach((function(n){document.getElementById(e.proposalId+"-"+n.type).checked&&(t.vote=n.type)})),t})),e.prev=4,e.next=7,m.getDelegationOf(n);case 7:if(e.sent!==u.a.constants.AddressZero){e.next=11;break}return e.next=11,m.delegateTo(n);case 11:return e.prev=11,e.next=14,Promise.all(r.map(function(){var e=Object(a.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get(t.proposalId);case 2:if(1!==e.sent.state){e.next=5;break}return e.abrupt("return",x.vote(t.proposalId,t.vote));case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 14:return e.prev=14,e.next=17,Promise.all(r.map(function(){var e=Object(a.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get(t.proposalId);case 2:if(4!==e.sent.state){e.next=5;break}return e.abrupt("return",x.execute(t.proposalId));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 17:U(!0),console.log("successfully voted"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(14),console.error("failed to execute votes",e.t0);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(11),console.error("failed to vote",e.t1);case 29:e.next=34;break;case 31:e.prev=31,e.t2=e.catch(4),console.error("failed to delegate tokens");case 34:return e.prev=34,K(!1),e.finish(34);case 37:case"end":return e.stop()}}),e,null,[[4,31,34,37],[11,26],[14,21]])})));return function(t){return e.apply(this,arguments)}}(),children:[P.map((function(e,t){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("h5",{children:e.description}),Object(h.jsx)("div",{children:e.votes.map((function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"radio",id:e.proposalId+"-"+t.type,name:e.proposalId,value:t.type,defaultChecked:2===t.type}),Object(h.jsx)("label",{htmlFor:e.proposalId+"-"+t.type,children:t.label})]},t.type)}))})]},e.proposalId)})),Object(h.jsx)("button",{disabled:J||H,type:"submit",children:J?"Voting...":H?"You Already Voted":"Submit Votes"}),Object(h.jsx)("small",{children:"This will trigger multiple transactions that you will need to sign."})]})]})]})]});return Object(h.jsxs)("div",{className:"mint-nft",children:[Object(h.jsx)("h1",{children:"Mint your free \ud83c\udf6aDAO Membership NFT"}),Object(h.jsx)("button",{disabled:A,onClick:function(){return w(!0),void O.claim("0",1).then((function(){g(!0),console.log("\ud83c\udf0a Successfully Minted! Check it our on OpenSea: https://testnets.opensea.io/assets/".concat(O.address.toLowerCase(),"/0"))})).catch((function(e){console.error("failed to claim",e)})).finally((function(){w(!1)}))},children:A?"Minting...":"Mint your nft (FREE)"})]})};"undefined"==typeof window.ethereum&&console.log("MetaMask is uninstalled!"),o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(b.a,{connectors:{injected:{}},supportedChainIds:[4],children:Object(h.jsx)(v,{})})}),document.getElementById("root"))}},[[242,2,3]]]);
//# sourceMappingURL=main.e5b2be27.chunk.js.map