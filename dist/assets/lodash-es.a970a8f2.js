var q=typeof global=="object"&&global&&global.Object===Object&&global;const V=q;var Q=typeof self=="object"&&self&&self.Object===Object&&self,tt=V||Q||Function("return this")();const S=tt;var et=S.Symbol;const d=et;var U=Object.prototype,nt=U.hasOwnProperty,rt=U.toString,m=d?d.toStringTag:void 0;function it(t){var e=nt.call(t,m),n=t[m];try{t[m]=void 0;var r=!0}catch{}var i=rt.call(t);return r&&(e?t[m]=n:delete t[m]),i}var at=Object.prototype,ot=at.toString;function st(t){return ot.call(t)}var ct="[object Null]",ut="[object Undefined]",D=d?d.toStringTag:void 0;function K(t){return t==null?t===void 0?ut:ct:D&&D in Object(t)?it(t):st(t)}function ft(t){return t!=null&&typeof t=="object"}var lt="[object Symbol]";function $(t){return typeof t=="symbol"||ft(t)&&K(t)==lt}function ht(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var dt=Array.isArray;const E=dt;var pt=1/0,H=d?d.prototype:void 0,R=H?H.toString:void 0;function B(t){if(typeof t=="string")return t;if(E(t))return ht(t,B)+"";if($(t))return R?R.call(t):"";var e=t+"";return e=="0"&&1/t==-pt?"-0":e}var gt=/\s/;function _t(t){for(var e=t.length;e--&&gt.test(t.charAt(e)););return e}var yt=/^\s+/;function mt(t){return t&&t.slice(0,_t(t)+1).replace(yt,"")}function b(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var G=0/0,bt=/^[-+]0x[0-9a-f]+$/i,vt=/^0b[01]+$/i,Tt=/^0o[0-7]+$/i,St=parseInt;function L(t){if(typeof t=="number")return t;if($(t))return G;if(b(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=b(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=mt(t);var n=vt.test(t);return n||Tt.test(t)?St(t.slice(2),n?2:8):bt.test(t)?G:+t}var $t="[object AsyncFunction]",Ot="[object Function]",xt="[object GeneratorFunction]",Ct="[object Proxy]";function It(t){if(!b(t))return!1;var e=K(t);return e==Ot||e==xt||e==$t||e==Ct}var Pt=S["__core-js_shared__"];const j=Pt;var W=function(){var t=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function jt(t){return!!W&&W in t}var wt=Function.prototype,Et=wt.toString;function Nt(t){if(t!=null){try{return Et.call(t)}catch{}try{return t+""}catch{}}return""}var zt=/[\\^$.*+?()[\]{}|]/g,At=/^\[object .+?Constructor\]$/,Ft=Function.prototype,Mt=Object.prototype,Dt=Ft.toString,Ht=Mt.hasOwnProperty,Rt=RegExp("^"+Dt.call(Ht).replace(zt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Gt(t){if(!b(t)||jt(t))return!1;var e=It(t)?Rt:At;return e.test(Nt(t))}function Lt(t,e){return t==null?void 0:t[e]}function X(t,e){var n=Lt(t,e);return Gt(n)?n:void 0}function Wt(t,e){return t===e||t!==t&&e!==e}var Ut=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Kt=/^\w*$/;function Bt(t,e){if(E(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||$(t)?!0:Kt.test(t)||!Ut.test(t)||e!=null&&t in Object(e)}var Xt=X(Object,"create");const v=Xt;function Jt(){this.__data__=v?v(null):{},this.size=0}function Yt(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Zt="__lodash_hash_undefined__",kt=Object.prototype,qt=kt.hasOwnProperty;function Vt(t){var e=this.__data__;if(v){var n=e[t];return n===Zt?void 0:n}return qt.call(e,t)?e[t]:void 0}var Qt=Object.prototype,te=Qt.hasOwnProperty;function ee(t){var e=this.__data__;return v?e[t]!==void 0:te.call(e,t)}var ne="__lodash_hash_undefined__";function re(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=v&&e===void 0?ne:e,this}function l(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=Jt;l.prototype.delete=Yt;l.prototype.get=Vt;l.prototype.has=ee;l.prototype.set=re;function ie(){this.__data__=[],this.size=0}function O(t,e){for(var n=t.length;n--;)if(Wt(t[n][0],e))return n;return-1}var ae=Array.prototype,oe=ae.splice;function se(t){var e=this.__data__,n=O(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():oe.call(e,n,1),--this.size,!0}function ce(t){var e=this.__data__,n=O(e,t);return n<0?void 0:e[n][1]}function ue(t){return O(this.__data__,t)>-1}function fe(t,e){var n=this.__data__,r=O(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function p(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}p.prototype.clear=ie;p.prototype.delete=se;p.prototype.get=ce;p.prototype.has=ue;p.prototype.set=fe;var le=X(S,"Map");const he=le;function de(){this.size=0,this.__data__={hash:new l,map:new(he||p),string:new l}}function pe(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function x(t,e){var n=t.__data__;return pe(e)?n[typeof e=="string"?"string":"hash"]:n.map}function ge(t){var e=x(this,t).delete(t);return this.size-=e?1:0,e}function _e(t){return x(this,t).get(t)}function ye(t){return x(this,t).has(t)}function me(t,e){var n=x(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function h(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}h.prototype.clear=de;h.prototype.delete=ge;h.prototype.get=_e;h.prototype.has=ye;h.prototype.set=me;var be="Expected a function";function N(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(be);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var c=t.apply(this,r);return n.cache=o.set(i,c)||o,c};return n.cache=new(N.Cache||h),n}N.Cache=h;var ve=500;function Te(t){var e=N(t,function(r){return n.size===ve&&n.clear(),r}),n=e.cache;return e}var Se=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$e=/\\(\\)?/g,Oe=Te(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Se,function(n,r,i,o){e.push(i?o.replace($e,"$1"):r||n)}),e});const xe=Oe;function Ce(t){return t==null?"":B(t)}function Ie(t,e){return E(t)?t:Bt(t,e)?[t]:xe(Ce(t))}var Pe=1/0;function je(t){if(typeof t=="string"||$(t))return t;var e=t+"";return e=="0"&&1/t==-Pe?"-0":e}function we(t,e){e=Ie(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[je(e[n++])];return n&&n==r?t:void 0}function Fe(t,e,n){var r=t==null?void 0:we(t,e);return r===void 0?n:r}var Ee=function(){return S.Date.now()};const w=Ee;var Ne="Expected a function",ze=Math.max,Ae=Math.min;function Me(t,e,n){var r,i,o,c,s,f,g=0,z=!1,_=!1,C=!0;if(typeof t!="function")throw new TypeError(Ne);e=L(e)||0,b(n)&&(z=!!n.leading,_="maxWait"in n,o=_?ze(L(n.maxWait)||0,e):o,C="trailing"in n?!!n.trailing:C);function I(a){var u=r,y=i;return r=i=void 0,g=a,c=t.apply(y,u),c}function J(a){return g=a,s=setTimeout(T,e),z?I(a):c}function Y(a){var u=a-f,y=a-g,M=e-u;return _?Ae(M,o-y):M}function A(a){var u=a-f,y=a-g;return f===void 0||u>=e||u<0||_&&y>=o}function T(){var a=w();if(A(a))return F(a);s=setTimeout(T,Y(a))}function F(a){return s=void 0,C&&r?I(a):(r=i=void 0,c)}function Z(){s!==void 0&&clearTimeout(s),g=0,r=f=i=s=void 0}function k(){return s===void 0?c:F(w())}function P(){var a=w(),u=A(a);if(r=arguments,i=this,f=a,u){if(s===void 0)return J(f);if(_)return clearTimeout(s),s=setTimeout(T,e),I(f)}return s===void 0&&(s=setTimeout(T,e)),c}return P.cancel=Z,P.flush=k,P}function De(t){for(var e=-1,n=t==null?0:t.length,r={};++e<n;){var i=t[e];r[i[0]]=i[1]}return r}function He(t){return t==null}export{Me as d,De as f,Fe as g,He as i};