$u=_.noConflict();jQuery.urldecode=function(a){return decodeURIComponent(a).replace(/\+/g," ")};jQuery.urlencode=encodeURIComponent;jQuery.getQueryParameters=function(e){if(typeof e=="undefined"){e=document.location.search}var g=e.substr(e.indexOf("?")+1).split("&");var a={};for(var d=0;d<g.length;d++){var c=g[d].split("=",2);var b=jQuery.urldecode(c[0]);var f=jQuery.urldecode(c[1]);if(b in a){a[b].push(f)}else{a[b]=[f]}}return a};jQuery.fn.highlightText=function(c,b){function a(e){if(e.nodeType==3){var f=e.nodeValue;var g=f.toLowerCase().indexOf(c);if(g>=0&&!jQuery(e.parentNode).hasClass(b)){var d=document.createElement("span");d.className=b;d.appendChild(document.createTextNode(f.substr(g,c.length)));e.parentNode.insertBefore(d,e.parentNode.insertBefore(document.createTextNode(f.substr(g+c.length)),e.nextSibling));e.nodeValue=f.substr(0,g)}}else{if(!jQuery(e).is("button, select, textarea")){jQuery.each(e.childNodes,function(){a(this)})}}}return this.each(function(){a(this)})};if(!jQuery.browser){jQuery.uaMatch=function(b){b=b.toLowerCase();var a=/(chrome)[ \/]([\w.]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||b.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[];return{browser:a[1]||"",version:a[2]||"0"}};jQuery.browser={};jQuery.browser[jQuery.uaMatch(navigator.userAgent).browser]=true}var Documentation={init:function(){this.fixFirefoxAnchorBug();this.highlightSearchWords();this.initIndexTable()},TRANSLATIONS:{},PLURAL_EXPR:function(a){return a==1?0:1},LOCALE:"unknown",gettext:function(a){var b=Documentation.TRANSLATIONS[a];if(typeof b=="undefined"){return a}return(typeof b=="string")?b:b[0]},ngettext:function(b,a,d){var c=Documentation.TRANSLATIONS[b];if(typeof c=="undefined"){return(d==1)?b:a}return c[Documentation.PLURALEXPR(d)]},addTranslations:function(a){for(var b in a.messages){this.TRANSLATIONS[b]=a.messages[b]}this.PLURAL_EXPR=new Function("n","return +("+a.plural_expr+")");this.LOCALE=a.locale},addContextElements:function(){$("div[id] > :header:first").each(function(){$('<a class="headerlink">\u00B6</a>').attr("href","#"+this.id).attr("title",_("Permalink to this headline")).appendTo(this)});$("dt[id]").each(function(){$('<a class="headerlink">\u00B6</a>').attr("href","#"+this.id).attr("title",_("Permalink to this definition")).appendTo(this)})},fixFirefoxAnchorBug:function(){if(document.location.hash){window.setTimeout(function(){document.location.href+=""},10)}},highlightSearchWords:function(){var c=$.getQueryParameters();var b=(c.highlight)?c.highlight[0].split(/\s+/):[];if(b.length){var a=$("div.body");if(!a.length){a=$("body")}window.setTimeout(function(){$.each(b,function(){a.highlightText(this.toLowerCase(),"highlighted")})},10);$('<p class="highlight-link"><a href="javascript:Documentation.hideSearchWords()">'+_("Hide Search Matches")+"</a></p>").appendTo($("#searchbox"))}},initIndexTable:function(){var a=$("img.toggler").click(function(){var c=$(this).attr("src");var b=$(this).attr("id").substr(7);$("tr.cg-"+b).toggle();if(c.substr(-9)=="minus.png"){$(this).attr("src",c.substr(0,c.length-9)+"plus.png")}else{$(this).attr("src",c.substr(0,c.length-8)+"minus.png")}}).css("display","");if(DOCUMENTATION_OPTIONS.COLLAPSE_INDEX){a.click()}},hideSearchWords:function(){$("#searchbox .highlight-link").fadeOut(300);$("span.highlighted").removeClass("highlighted")},makeURL:function(a){return DOCUMENTATION_OPTIONS.URL_ROOT+"/"+a},getCurrentURL:function(){var c=document.location.pathname;var b=c.split(/\//);$.each(DOCUMENTATION_OPTIONS.URL_ROOT.split(/\//),function(){if(this==".."){b.pop()}});var a=b.join("/");return c.substring(a.lastIndexOf("/")+1,c.length-1)},initOnKeyListeners:function(){$(document).keyup(function(b){var a=document.activeElement.tagName;if(a!=="TEXTAREA"&&a!=="INPUT"&&a!=="SELECT"){switch(b.keyCode){case 37:var d=$('link[rel="prev"]').prop("href");if(d){window.location.href=d;return false}case 39:var c=$('link[rel="next"]').prop("href");if(c){window.location.href=c;return false}}}})}};_=Documentation.gettext;$(document).ready(function(){Documentation.init()});