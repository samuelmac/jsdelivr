/*! Qoopido.js library 3.6.8, 2015-07-09 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(n){window.qoopido.register("jquery/plugins/shrinkimage",n,["../../dom/element/shrinkimage","jquery"])}(function(n,t,e,r,o,i,c){"use strict";var u,a=n.jquery||o.jQuery,g=e.pop(),s="queued",f="cached",d="loaded",h="failed",l="".concat(s,".",g),m="".concat(f,".",g),p="".concat(d,".",g),q="".concat(h,".",g);return a.fn[g]=function(n){return this.each(function(){u.create(this,n)})},u=n["dom/element/shrinkimage"].extend({_constructor:function(n,t){var e=this,r=a(n);u._parent._constructor.call(e,n,t),e.on(s,function(){r.trigger(l)}),e.on(f,function(){r.trigger(m)}),e.on(d,function(){r.trigger(p)}),e.on(h,function(){r.trigger(q)})}})});