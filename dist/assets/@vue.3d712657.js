const y=()=>{},v=Object.prototype.hasOwnProperty,V=(t,e)=>v.call(t,e),E=Array.isArray,h=t=>typeof t=="function",B=t=>typeof t=="string",k=t=>t!==null&&typeof t=="object",C=t=>k(t)&&h(t.then)&&h(t.catch),R=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},m=/-(\w)/g,F=R(t=>t.replace(m,(e,s)=>s?s.toUpperCase():""));let S;function b(t,e=S){e&&e.active&&e.effects.push(t)}const T=t=>{const e=new Set(t);return e.w=0,e.n=0,e},g=t=>(t.w&r)>0,_=t=>(t.n&r)>0,x=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=r},j=t=>{const{deps:e}=t;if(e.length){let s=0;for(let i=0;i<e.length;i++){const n=e[i];g(n)&&!_(n)?n.delete(t):e[s++]=n,n.w&=~r,n.n&=~r}e.length=s}};let a=0,r=1;const l=30;let c;class D{constructor(e,s=null,i){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,b(this,i)}run(){if(!this.active)return this.fn();let e=c,s=f;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=c,c=this,f=!0,r=1<<++a,a<=l?x(this):d(this),this.fn()}finally{a<=l&&j(this),r=1<<--a,c=this.parent,f=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){c===this?this.deferStop=!0:this.active&&(d(this),this.onStop&&this.onStop(),this.active=!1)}}function d(t){const{deps:e}=t;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(t);e.length=0}}let f=!0;function I(t,e){let s=!1;a<=l?_(t)||(t.n|=r,s=!g(t)):s=!t.has(c),s&&(t.add(c),c.deps.push(t))}function O(t,e){const s=E(t)?t:[...t];for(const i of s)i.computed&&p(i);for(const i of s)i.computed||p(i)}function p(t,e){(t!==c||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function o(t){const e=t&&t.__v_raw;return e?o(e):t}function P(t){f&&c&&(t=o(t),I(t.dep||(t.dep=T())))}function z(t,e){t=o(t),t.dep&&O(t.dep)}var w;class A{constructor(e,s,i,n){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[w]=!1,this._dirty=!0,this.effect=new D(e,()=>{this._dirty||(this._dirty=!0,z(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=i}get value(){const e=o(this);return P(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}w="__v_isReadonly";function N(t,e,s=!1){let i,n;const u=h(t);return u?(i=t,n=y):(i=t.get,n=t.set),new A(i,n,u||!n,s)}export{y as N,k as a,h as b,F as c,N as d,E as e,C as f,V as h,B as i};