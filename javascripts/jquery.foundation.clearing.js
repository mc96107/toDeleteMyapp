/*
 * jQuery Foundation Clearing 1.2.1
 * http://foundation.zurb.com
 * Copyright 2012, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

// @weblinc, @jsantell, (c) 2012

(function(e,t,n,r){var i={templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><img src="#"><p class="clearing-caption"></p><a href="#" class="clearing-main-left"></a><a href="#" class="clearing-main-right"></a></div>'},close_selectors:"a.clearing-close",initialized:!1,locked:!1},s={init:function(t,r){return this.find("ul[data-clearing]").each(function(){var t=e(n),r=e(this),o=o||{},u=u||{},a=r.data("fndtn.clearing.settings");a||(o.$parent=r.parent(),r.data("fndtn.clearing.settings",e.extend({},i,o)),s.assemble(r.find("li")),i.initialized||(s.events(r),Modernizr.touch&&s.swipe_events()))})},events:function(r){var o=r.data("fndtn.clearing.settings");e(n).on("click.fndtn.clearing","ul[data-clearing] li",function(t,n,r){var n=n||e(this),r=r||n,i=n.parent().data("fndtn.clearing.settings");t.preventDefault(),i||n.parent().foundationClearing(),s.open(e(t.target),n,r),s.update_paddles(r)}).on("click.fndtn.clearing",".clearing-main-right",function(e){s.nav(e,"next")}).on("click.fndtn.clearing",".clearing-main-left",function(e){s.nav(e,"prev")}).on("click.fndtn.clearing",o.close_selectors,this.close).on("keydown.fndtn.clearing",this.keydown),e(t).on("resize.fndtn.clearing",this.resize),i.initialized=!0},swipe_events:function(){e(n).bind("swipeleft","ul[data-clearing]",function(e){s.nav(e,"next")}).bind("swiperight","ul[data-clearing]",function(e){s.nav(e,"prev")}).bind("movestart","ul[data-clearing]",function(e){(e.distX>e.distY&&e.distX<-e.distY||e.distX<e.distY&&e.distX>-e.distY)&&e.preventDefault()})},assemble:function(e){var t=e.parent(),n=t.data("fndtn.clearing.settings"),r=t.detach(),i={grid:'<div class="carousel">'+this.outerHTML(r[0])+"</div>",viewing:n.templates.viewing},s='<div class="clearing-assembled"><div>'+i.viewing+i.grid+"</div></div>";return n.$parent.append(s)},open:function(e,t,n){var r=n.closest(".clearing-assembled"),i=r.find("div:first"),o=i.find(".visible-img"),u=o.find("img").not(e);s.locked()||(u.attr("src",this.load(e)),u.loaded(function(){r.addClass("clearing-blackout"),i.addClass("clearing-container"),this.caption(o.find(".clearing-caption"),e),o.show(),this.fix_height(n),this.center(u),this.shift(t,n,function(){n.siblings().removeClass("visible"),n.addClass("visible")})}.bind(this)))},close:function(t){t.preventDefault();var n=function(e){return/blackout/.test(e.selector)?e:e.closest(".clearing-blackout")}(e(this)),r,s;return this===t.target&&n&&(r=n.find("div:first"),s=r.find(".visible-img"),i.prev_index=0,n.find("ul[data-clearing]").attr("style",""),n.removeClass("clearing-blackout"),r.removeClass("clearing-container"),s.hide()),!1},keydown:function(t){var n=e(".clearing-blackout").find("ul[data-clearing]");t.which===39&&s.go(n,"next"),t.which===37&&s.go(n,"prev"),t.which===27&&e("a.clearing-close").trigger("click")},nav:function(t,n){var r=e(".clearing-blackout").find("ul[data-clearing]");t.preventDefault(),this.go(r,n)},resize:function(){var t=e(".clearing-blackout .visible-img").find("img");t.length>0&&s.center(t)},fix_height:function(t){var n=t.siblings();n.each(function(){var t=e(this),n=t.find("img");t.height()>n.outerHeight()&&t.addClass("fix-height")}).closest("ul").width(n.length*100+"%")},update_paddles:function(e){var t=e.closest(".carousel").siblings(".visible-img");e.next().length>0?t.find(".clearing-main-right").removeClass("disabled"):t.find(".clearing-main-right").addClass("disabled"),e.prev().length>0?t.find(".clearing-main-left").removeClass("disabled"):t.find(".clearing-main-left").addClass("disabled")},load:function(e){var t=e.parent().attr("href");return this.preload(e),t?t:e.attr("src")},preload:function(e){this.img(e.closest("li").next()),this.img(e.closest("li").prev())},img:function(e){if(e.length>0){var t=new Image,n=e.find("a");n.length>0?t.src=n.attr("href"):t.src=e.find("img").attr("src")}},caption:function(e,t){var n=t.data("caption");n?e.text(n).show():e.text("").hide()},go:function(e,t){var n=e.find(".visible"),r=n[t]();r.length>0&&r.find("img").trigger("click",[n,r])},shift:function(e,t,n){var r=t.parent(),s=i.prev_index,o=this.direction(r,e,t),u=parseInt(r.css("left"),10),a=t.outerWidth(),f;t.index()!==s&&!/skip/.test(o)?/left/.test(o)?(this.lock(),r.animate({left:u+a},300,this.unlock)):/right/.test(o)&&(this.lock(),r.animate({left:u-a},300,this.unlock)):/skip/.test(o)&&(f=t.index()-i.up_count,this.lock(),f>0?r.animate({left:-(f*a)},300,this.unlock):r.animate({left:0},300,this.unlock)),n()},lock:function(){i.locked=!0},unlock:function(){i.locked=!1},locked:function(){return i.locked},direction:function(t,n,r){var s=t.find("li"),o=s.outerWidth()+s.outerWidth()/4,u=Math.floor(e(".clearing-container").outerWidth()/o)-1,a=s.index(r),f;return i.up_count=u,this.adjacent(i.prev_index,a)?a>u&&a>i.prev_index?f="right":a>u-1&&a<=i.prev_index?f="left":f=!1:f="skip",i.prev_index=a,f},adjacent:function(e,t){for(var n=t+1;n>=t-1;n--)if(n===e)return!0;return!1},center:function(e){e.css({marginLeft:-(e.outerWidth()/2),marginTop:-(e.outerHeight()/2)})},outerHTML:function(e){return e.outerHTML||(new XMLSerializer).serializeToString(e)}};e.fn.foundationClearing=function(t){if(s[t])return s[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return s.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.foundationClearing")},function(e){e.fn.loaded=function(t,n){function o(){s-=1,!s&&t()}function u(){this.one("load",o);if(e.browser.msie){var t=this.attr("src"),n=t.match(/\?/)?"&":"?";n+=r.cachePrefix+"="+(new Date).getTime(),this.attr("src",t+n)}}var r=e.extend({},e.fn.loaded.defaults,n),i=this.find("img").add(this.filter("img")),s=i.length;return i.each(function(){var t=e(this);if(!t.attr("src")){o();return}this.complete||this.readyState===4?o():u.call(t)})},e.fn.loaded.defaults={cachePrefix:"random"}}(jQuery)})(jQuery,this,this.document)