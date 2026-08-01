(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();class c{constructor(t){this.root=t}render(){this.root.innerHTML=`

<div id="dashboard">

    <main id="content"></main>

</div>

`}get content(){return document.querySelector("#content")}}class a{constructor(){this.state={page:"home",connected:!1,entities:{},theme:"relay",notifications:[],services:{homeassistant:"online",mqtt:"offline",simhub:"offline",crewchief:"offline",tradingpaints:"offline",internet:"online"},race:{session:null,countdown:null,flag:"green"}},this.listeners=new Set}getState(){return this.state}subscribe(t){return this.listeners.add(t),t(this.state),()=>{this.listeners.delete(t)}}setState(t){this.state={...this.state,...t},this.emit()}setPage(t){this.state.page=t,this.emit()}updateEntity(t,e){this.state.entities={...this.state.entities,[t]:e},this.emit()}getEntity(t){return this.state.entities[t]}emit(){this.listeners.forEach(t=>{t(this.state)})}}const h=new a;class u{constructor(){this.events=new Map}on(t,e){return this.events.has(t)||this.events.set(t,new Set),this.events.get(t).add(e),()=>this.off(t,e)}off(t,e){this.events.get(t)?.delete(e)}emit(t,e={}){const i=this.events.get(t);i&&i.forEach(s=>{try{s(e)}catch(n){console.error(`[Relay] Event '${t}' failed`,n)}})}once(t,e){const i=this.on(t,s=>{i(),e(s)})}}const l=new u,d={PAGE_CHANGED:"page.changed"};class f{constructor(t){this.container=t,this.routes=new Map,this.current=null}register(t,e){this.routes.set(t,e)}navigate(t){if(!this.routes.has(t)){console.warn(`Unknown page: ${t}`);return}this.current?.unmount&&this.current.unmount(),this.container.innerHTML="",h.setPage(t),l.emit(d.PAGE_CHANGED,{page:t}),this.current.mount?this.current.mount(this.container):this.current.render&&this.current.render(this.container),history.replaceState({},"","#"+t)}start(t="home"){const e=window.location.hash.replace("#","");if(e&&this.routes.has(e)){this.navigate(e);return}this.navigate(t)}start(t="home"){this.navigate(t)}}router.register("simrig",new SimRigPage(layout.content));class g{constructor(t){this.container=t}render(){this.container.innerHTML=`

<section class="glass">

    <h1>

        Relay Mission Control

    </h1>

    <p>

        Application booted successfully.

    </p>

</section>

`}}window.addEventListener("DOMContentLoaded",()=>{const r=new c(document.body);r.render();const t=new f(r.content),e=new g(r.content);t.register("home",e),t.start("home")});
//# sourceMappingURL=index-BoKCUPqb.js.map
