define(["avalon"],function(t){function e(t){return!t||t===window.name||"_self"===t||"top"===t&&window==window.top?!0:!1}function i(t){for(var e,i=0;e=t[i++];)if("A"===e.nodeName)return e}function o(t,e){(e=document.getElementById(t))?e.scrollIntoView():(e=i(document.getElementsByName(t)))?e.scrollIntoView():window.scrollTo(0,0)}var r=document.createElement("a"),n=t.History=function(){this.location=location};n.started=!1,n.IEVersion=function(){var t=document.documentMode;return t?t:window.XMLHttpRequest?7:6}(),n.defaults={basepath:"/",html5Mode:!1,hashPrefix:"!",iframeID:null,interval:50,fireAnchor:!0,routeElementJudger:t.noop};var a=window.VBArray&&n.IEVersion<=7,s=!!window.history.pushState,h=!(!("onhashchange"in window)||window.VBArray&&a);return n.prototype={constructor:n,getFragment:function(t){return null==t&&(t="popstate"===this.monitorMode?this.getPath():this.getHash()),t.replace(/^[#\/]|\s+$/g,"")},getHash:function(t){var e=(t||this).location.href;return this._getHash(e.slice(e.indexOf("#")))},_getHash:function(t){return 0===t.indexOf("#/")?decodeURIComponent(t.slice(2)):0===t.indexOf("#!/")?decodeURIComponent(t.slice(3)):""},getPath:function(){var t=decodeURIComponent(this.location.pathname+this.location.search),e=this.basepath.slice(0,-1);return t.indexOf(e)||(t=t.slice(e.length)),t.slice(1)},_getAbsolutePath:function(t){return t.hasAttribute?t.href:t.getAttribute("href",4)},start:function(e){function i(t){var e=o.iframe;if("iframepoll"===o.monitorMode&&!e)return!1;var i,r=o.getFragment();if(e){var n=o.getHash(e);r!==o.fragment?(o._setIframeHistory(o.prefix+r),i=r):n!==o.fragment&&(o.location.hash=o.prefix+n,i=n)}else r!==o.fragment&&(i=r);void 0!==i&&(o.fragment=i,o.fireRouteChange(i,{fromHistory:!0}))}if(n.started)throw new Error("avalon.history has already been started");n.started=!0,this.options=t.mix({},n.defaults,e),this.html5Mode=!!this.options.html5Mode,this.monitorMode=this.html5Mode?"popstate":"hashchange",s||(this.html5Mode&&(t.log("如果浏览器不支持HTML5 pushState，强制使用hash hack!"),this.html5Mode=!1),this.monitorMode="hashchange"),h||(this.monitorMode="iframepoll"),this.prefix="#"+this.options.hashPrefix+"/",this.basepath=("/"+this.options.basepath+"/").replace(/^\/+|\/+$/g,"/"),this.fragment=this.getFragment(),r.href=this.basepath,this.rootpath=this._getAbsolutePath(r);var o=this,a="<!doctype html><html><body>@</body></html>";switch(this.options.domain&&(a=a.replace("<body>","<script>document.domain ="+this.options.domain+"</script><body>")),this.iframeHTML=a,"iframepoll"===this.monitorMode&&t.ready(function(){if(!o.iframe){var t=o.iframe||document.getElementById(o.iframeID)||document.createElement("iframe");t.src="javascript:0",t.style.display="none",t.tabIndex=-1,document.body.appendChild(t),o.iframe=t.contentWindow,o._setIframeHistory(o.prefix+o.fragment)}}),this.monitorMode){case"popstate":this.checkUrl=t.bind(window,"popstate",i),this._fireLocationChange=i;break;case"hashchange":this.checkUrl=t.bind(window,"hashchange",i);break;case"iframepoll":this.checkUrl=setInterval(i,this.options.interval)}t.ready(function(){o.fireRouteChange(o.fragment||"/",{replace:!0})})},fireRouteChange:function(e,i){var r=t.router;r&&r.navigate&&(r.setLastPath(e),r.navigate("/"===e?e:"/"+e,i)),this.options.fireAnchor&&o(e.replace(/\?.*/g,""))},stop:function(){t.unbind(window,"popstate",this.checkUrl),t.unbind(window,"hashchange",this.checkUrl),clearInterval(this.checkUrl),n.started=!1},updateLocation:function(t,e,i){var e=e||{},o=e.replace,r=e.silent;if("popstate"===this.monitorMode){var n=this.rootpath+t+(i||"");n!=this.location.href.split("#")[0]&&history[o?"replaceState":"pushState"]({path:n},document.title,n),r||this._fireLocationChange()}else{var a=this.prefix+t;r&&t!=this.getHash()&&(this._setIframeHistory(a,o),this.fragment=this._getHash(a)),this._setHash(this.location,a,o)}},_setHash:function(t,e,i){var o=t.href.replace(/(javascript:|#).*$/,"");i?t.replace(o+e):t.hash=e},_setIframeHistory:function(t,e){if(this.iframe){var i=this.iframe.document;i.open(),i.write(this.iframeHTML),i.close(),this._setHash(i.location,t,e)}}},t.history=new n,t.bind(document,"click",function(i){var o="defaultPrevented"in i?i.defaultPrevented:i.returnValue===!1,r=t.history.options.routeElementJudger;if(!(o||i.ctrlKey||i.metaKey||2===i.which)){for(var n=i.target;"A"!==n.nodeName;)if(n=n.parentNode,!n||"BODY"===n.tagName)return;if(e(n.target)){var s=a?n.getAttribute("href",2):n.getAttribute("href")||n.getAttribute("xlink:href"),h=t.history.prefix;if(null===s)return;var c=s.replace(h,"").trim();(0!==s.indexOf(h)||""===c)&&(c=r(n,s),c===!0&&(c=s)),c&&(i.preventDefault(),t.router&&t.router.navigate(c))}}}),t});