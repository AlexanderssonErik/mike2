!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.earcut=e()}}(function(){return function e(n,t,r){function x(u,f){if(!t[u]){if(!n[u]){var o="function"==typeof require&&require;if(!f&&o)return o(u,!0);if(i)return i(u,!0);var v=new Error("Cannot find module '"+u+"'");throw v.code="MODULE_NOT_FOUND",v}var l=t[u]={exports:{}};n[u][0].call(l.exports,function(e){var t=n[u][1][e];return x(t?t:e)},l,l.exports,e,n,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)x(r[u]);return x}({1:[function(e,n,t){"use strict";function r(e,n,t){t=t||2;var r=n&&n.length,i=r?n[0]*t:e.length,f=x(e,0,i,t,!0),o=[];if(!f)return o;var v,l,p,a,h,s,c;if(r&&(f=y(e,n,f,t)),e.length>80*t){v=p=e[0],l=a=e[1];for(var d=t;i>d;d+=t)h=e[d],s=e[d+1],v>h&&(v=h),l>s&&(l=s),h>p&&(p=h),s>a&&(a=s);c=Math.max(p-v,a-l)}return u(f,o,t,v,l,c),o}function x(e,n,t,r,x){var i,u;if(x===_(e,n,t,r)>0)for(i=n;t>i;i+=r)u=E(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=E(i,e[i],e[i+1],u);return u&&z(u,u.next)&&(N(u),u=u.next),u}function i(e,n){if(!e)return e;n||(n=e);var t,r=e;do if(t=!1,r.steiner||!z(r,r.next)&&0!==b(r.prev,r,r.next))r=r.next;else{if(N(r),r=n=r.prev,r===r.next)return null;t=!0}while(t||r!==n);return n}function u(e,n,t,r,x,y,p){if(e){!p&&y&&s(e,r,x,y);for(var a,h,c=e;e.prev!==e.next;)if(a=e.prev,h=e.next,y?o(e,r,x,y):f(e))n.push(a.i/t),n.push(e.i/t),n.push(h.i/t),N(e),e=h.next,c=h.next;else if(e=h,e===c){p?1===p?(e=v(e,n,t),u(e,n,t,r,x,y,2)):2===p&&l(e,n,t,r,x,y):u(i(e),n,t,r,x,y,1);break}}}function f(e){var n=e.prev,t=e,r=e.next;if(b(n,t,r)>=0)return!1;for(var x=e.next.next;x!==e.prev;){if(g(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&b(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function o(e,n,t,r){var x=e.prev,i=e,u=e.next;if(b(x,i,u)>=0)return!1;for(var f=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,o=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,v=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,l=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,y=d(f,o,n,t,r),p=d(v,l,n,t,r),a=e.nextZ;a&&a.z<=p;){if(a!==e.prev&&a!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,a.x,a.y)&&b(a.prev,a,a.next)>=0)return!1;a=a.nextZ}for(a=e.prevZ;a&&a.z>=y;){if(a!==e.prev&&a!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,a.x,a.y)&&b(a.prev,a,a.next)>=0)return!1;a=a.prevZ}return!0}function v(e,n,t){var r=e;do{var x=r.prev,i=r.next.next;!z(x,i)&&M(x,r,r.next,i)&&q(x,i)&&q(i,x)&&(n.push(x.i/t),n.push(r.i/t),n.push(i.i/t),N(r),N(r.next),r=e=i),r=r.next}while(r!==e);return r}function l(e,n,t,r,x,f){var o=e;do{for(var v=o.next.next;v!==o.prev;){if(o.i!==v.i&&w(o,v)){var l=D(o,v);return o=i(o,o.next),l=i(l,l.next),u(o,n,t,r,x,f),void u(l,n,t,r,x,f)}v=v.next}o=o.next}while(o!==e)}function y(e,n,t,r){var u,f,o,v,l,y=[];for(u=0,f=n.length;f>u;u++)o=n[u]*r,v=f-1>u?n[u+1]*r:e.length,l=x(e,o,v,r,!1),l===l.next&&(l.steiner=!0),y.push(Z(l));for(y.sort(p),u=0;u<y.length;u++)a(y[u],t),t=i(t,t.next);return t}function p(e,n){return e.x-n.x}function a(e,n){if(n=h(e,n)){var t=D(n,e);i(t,t.next)}}function h(e,n){var t,r=n,x=e.x,i=e.y,u=-(1/0);do{if(i<=r.y&&i>=r.next.y){var f=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(x>=f&&f>u){if(u=f,f===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===u)return t.prev;var o,v=t,l=t.x,y=t.y,p=1/0;for(r=t.next;r!==v;)x>=r.x&&r.x>=l&&g(y>i?x:u,i,l,y,y>i?u:x,i,r.x,r.y)&&(o=Math.abs(i-r.y)/(x-r.x),(p>o||o===p&&r.x>t.x)&&q(r,e)&&(t=r,p=o)),r=r.next;return t}function s(e,n,t,r){var x=e;do null===x.z&&(x.z=d(x.x,x.y,n,t,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next;while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,c(x)}function c(e){var n,t,r,x,i,u,f,o,v=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,f=0,n=0;v>n&&(f++,r=r.nextZ,r);n++);for(o=v;f>0||o>0&&r;)0===f?(x=r,r=r.nextZ,o--):0!==o&&r?t.z<=r.z?(x=t,t=t.nextZ,f--):(x=r,r=r.nextZ,o--):(x=t,t=t.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,v*=2}while(u>1);return e}function d(e,n,t,r,x){return e=32767*(e-t)/x,n=32767*(n-r)/x,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),n=16711935&(n|n<<8),n=252645135&(n|n<<4),n=858993459&(n|n<<2),n=1431655765&(n|n<<1),e|n<<1}function Z(e){var n=e,t=e;do n.x<t.x&&(t=n),n=n.next;while(n!==e);return t}function g(e,n,t,r,x,i,u,f){return(x-u)*(n-f)-(e-u)*(i-f)>=0&&(e-u)*(r-f)-(t-u)*(n-f)>=0&&(t-u)*(i-f)-(x-u)*(r-f)>=0}function w(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!m(e,n)&&q(e,n)&&q(n,e)&&O(e,n)}function b(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function z(e,n){return e.x===n.x&&e.y===n.y}function M(e,n,t,r){return z(e,n)&&z(t,r)||z(e,r)&&z(t,n)?!0:b(e,n,t)>0!=b(e,n,r)>0&&b(t,r,e)>0!=b(t,r,n)>0}function m(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&M(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function q(e,n){return b(e.prev,e,e.next)<0?b(e,n,e.next)>=0&&b(e,e.prev,n)>=0:b(e,n,e.prev)<0||b(e,e.next,n)<0}function O(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do t.y>i!=t.next.y>i&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==e);return r}function D(e,n){var t=new U(e.i,e.x,e.y),r=new U(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function E(e,n,t,r){var x=new U(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function N(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function U(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _(e,n,t,r){for(var x=0,i=n,u=t-r;t>i;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}n.exports=r,r.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(_(e,0,i,t));if(x)for(var f=0,o=n.length;o>f;f++){var v=n[f]*t,l=o-1>f?n[f+1]*t:e.length;u-=Math.abs(_(e,v,l,t))}var y=0;for(f=0;f<r.length;f+=3){var p=r[f]*t,a=r[f+1]*t,h=r[f+2]*t;y+=Math.abs((e[p]-e[h])*(e[a+1]-e[p+1])-(e[p]-e[a])*(e[h+1]-e[p+1]))}return 0===u&&0===y?0:Math.abs((y-u)/u)},r.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;n>u;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t}},{}]},{},[1])(1)});