(function(){if(!Array.isArray)Array.isArray=function(f){return Object.prototype.toString.call(f)=="[object Array]"};if(!Array.prototype.forEach)Array.prototype.forEach=function(f,g){for(var d=this.length>>>0,b=0;b<d;b++)b in this&&f.call(g,this[b],b,this)};if(!Array.prototype.map)Array.prototype.map=function(f,g){var d=this.length>>>0;if(typeof f!="function")throw new TypeError;for(var b=Array(d),c=0;c<d;c++)if(c in this)b[c]=f.call(g,this[c],c,this);return b};if(!Array.prototype.filter)Array.prototype.filter=
function(f,g){for(var d=[],b=0;b<this.length;b++)f.call(g,this[b])&&d.push(this[b]);return d};if(!Array.prototype.every)Array.prototype.every=function(f,g){for(var d=0;d<this.length;d++)if(!f.call(g,this[d]))return false;return true};if(!Array.prototype.some)Array.prototype.some=function(f,g){for(var d=0;d<this.length;d++)if(f.call(g,this[d]))return true;return false};if(!Array.prototype.reduce)Array.prototype.reduce=function(f){var g=this.length>>>0;if(typeof f!="function")throw new TypeError;if(g==
0&&arguments.length==1)throw new TypeError;var d=0;if(arguments.length>=2)var b=arguments[1];else{do{if(d in this){b=this[d++];break}if(++d>=g)throw new TypeError;}while(1)}for(;d<g;d++)if(d in this)b=f.call(null,b,this[d],d,this);return b};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(f){var g=this.length>>>0;if(typeof f!="function")throw new TypeError;if(g==0&&arguments.length==1)throw new TypeError;g=g-1;if(arguments.length>=2)var d=arguments[1];else{do{if(g in this){d=this[g--];
break}if(--g<0)throw new TypeError;}while(1)}for(;g>=0;g--)if(g in this)d=f.call(null,d,this[g],g,this);return d};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(f,g){var d=this.length;if(!d)return-1;var b=g||0;if(b>=d)return-1;if(b<0)b+=d;for(;b<d;b++)if(Object.prototype.hasOwnProperty.call(this,b))if(f===this[b])return b;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(f,g){var d=this.length;if(!d)return-1;var b=g||d;if(b<0)b+=d;for(b=Math.min(b,d-1);b>=
0;b--)if(Object.prototype.hasOwnProperty.call(this,b))if(f===this[b])return b;return-1};if(!Object.getPrototypeOf)Object.getPrototypeOf=function(f){return f.__proto__};if(!Object.getOwnPropertyDescriptor)Object.getOwnPropertyDescriptor=function(){return{}};if(!Object.getOwnPropertyNames)Object.getOwnPropertyNames=function(f){return Object.keys(f)};if(!Object.create)Object.create=function(f,g){var d;if(f===null)d={__proto__:null};else{if(typeof f!="object")throw new TypeError("typeof prototype["+typeof f+
"] != 'object'");d=function(){};d.prototype=f;d=new d}typeof g!=="undefined"&&Object.defineProperties(d,g);return d};if(!Object.defineProperty)Object.defineProperty=function(f,g,d){var b=Object.prototype.hasOwnProperty;if(typeof d=="object"&&f.__defineGetter__){if(b.call(d,"value")){if(!f.__lookupGetter__(g)&&!f.__lookupSetter__(g))f[g]=d.value;if(b.call(d,"get")||b.call(d,"set"))throw new TypeError("Object doesn't support this action");}else typeof d.get=="function"&&f.__defineGetter__(g,d.get);
typeof d.set=="function"&&f.__defineSetter__(g,d.set)}return f};if(!Object.defineProperties)Object.defineProperties=function(f,g){for(var d in g)Object.prototype.hasOwnProperty.call(g,d)&&Object.defineProperty(f,d,g[d]);return f};if(!Object.seal)Object.seal=function(f){return f};if(!Object.freeze)Object.freeze=function(f){return f};try{Object.freeze(function(){})}catch(a){Object.freeze=function(f){return function(g){return typeof g=="function"?g:f(g)}}(Object.freeze)}if(!Object.preventExtensions)Object.preventExtensions=
function(f){return f};if(!Object.isSealed)Object.isSealed=function(){return false};if(!Object.isFrozen)Object.isFrozen=function(){return false};if(!Object.isExtensible)Object.isExtensible=function(){return true};if(!Object.keys)Object.keys=function(f){var g=[];for(var d in f)Object.prototype.hasOwnProperty.call(f,d)&&g.push(d);return g};if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){return this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()+"T"+this.getHours()+":"+
this.getMinutes()+":"+this.getSeconds()+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if(typeof this.toISOString!="function")throw new TypeError;return this.toISOString()};if(isNaN(Date.parse("T00:00")))Date=function(f){var g=function(c,e,i,m,r,q,s){var h=arguments.length;if(this instanceof f){h=h===1&&String(c)===c?new f(g.parse(c)):h>=7?new f(c,e,i,m,r,q,s):h>=6?new f(c,e,i,m,r,q):h>=5?new f(c,e,i,m,r):h>=4?new f(c,e,
i,m):h>=3?new f(c,e,i):h>=2?new f(c,e):h>=1?new f(c):new f;h.constructor=g;return h}return f.apply(this,arguments)},d=RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");for(var b in f)g[b]=f[b];g.now=f.now;g.UTC=f.UTC;g.prototype=f.prototype;g.prototype.constructor=g;g.parse=function(c){var e=d.exec(c);if(e){e.shift();for(var i=e[0]===undefined,m=0;m<10;m++)if(m!==7){e[m]=+(e[m]||(m<3?1:0));
m===1&&e[m]--}if(i)return((e[3]*60+e[4])*60+e[5])*1E3+e[6];i=(e[8]*60+e[9])*60*1E3;if(e[6]==="-")i=-i;return f.UTC.apply(this,e.slice(0,7))+i}return f.parse.apply(this,arguments)};return g}(Date);var l=Array.prototype.slice;if(!Function.prototype.bind)Function.prototype.bind=function(f){var g=this;if(typeof g.apply!="function"||typeof g.call!="function")return new TypeError;var d=l.call(arguments),b=function(){if(this instanceof b){var c=Object.create(g.prototype);g.apply(c,d.concat(l.call(arguments)));
return c}else return g.call.apply(g,d.concat(l.call(arguments)))};b.bound=g;b.boundTo=f;b.boundArgs=d;b.length=typeof g=="function"?Math.max(g.length-d.length,0):0;return b};if(!String.prototype.trim){var j=/^\s\s*/,n=/\s\s*$/;String.prototype.trim=function(){return String(this).replace(j,"").replace(n,"")}}})();
jQuery.webshims.ready("es5",function(a){a.extend(a.expr.filters,{valid:function(l){return(a.attr(l,"validity")||{valid:true}).valid},invalid:function(l){return!a.expr.filters.valid(l)},willValidate:function(l){return a.attr(l,"willValidate")}});a.webshims.triggerInlineForm=function(){var l=function(j){if(typeof j!="string"||j.indexOf("-")!==-1||j.indexOf(".")!==-1||j.indexOf('"')!==-1)return"";return"var "+j+' = this.form["'+j+'"];'};return function(j,n){var f=j["on"+n]||j.getAttribute("on"+n)||"";
n=a.Event({type:n,target:j[0],currentTarget:j[0]});if(f&&typeof f=="string"&&j.form&&j.form.elements){var g="";a(j.form.elements).each(function(){var d=this.name,b=this.id;if(b||d){if(d)g+=l(d);if(b&&b!==d)g+=l(b)}});(function(){eval(g+f)}).call(j,n)}a(j).trigger(n)}}();a.webshims.validityAlert=function(){var l=!a.browser.msie||parseInt(a.browser.version,10)>7?"span":"label",j={hideDelay:5E3,showFor:function(c,e,i){c=a(c);var m=(c.data("inputUIReplace")||{visual:c}).visual;b();j.clear();this.getMessage(c,
e);this.position(m);this.show();if(this.hideDelay)f=setTimeout(g,this.hideDelay);if(!i){c=a("input, select, textarea, .ui-slider-handle",m).filter(":visible:first");c[0]||(c=m);n.attr("for",a.webshims.getID(c));c.focus();a(document).bind("focusout.validityalert",g)}},getMessage:function(c,e){a("> span",n).html(e||c.attr("validationMessage"))},position:function(c){var e=c.offset();e.top+=c.outerHeight();n.css(e)},show:function(){n.css("display")==="none"?n.fadeIn():n.fadeTo(400,1)},hide:function(){j.clear();
n.fadeOut()},clear:function(){clearTimeout(f);a(document).unbind("focusout.validityalert");n.stop().removeAttr("for")},alert:a("<"+l+' class="validity-alert" role="alert"><span class="va-box" /></'+l+">").css({position:"absolute",display:"none"})},n=j.alert,f=false,g=a.proxy(j,"hide"),d=false,b=function(){if(!d){d=true;a(function(){n.appendTo("body")})}};return j}();a.webshims.validityMessages.en=a.webshims.validityMessages.en||a.webshims.validityMessages["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",
url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",
patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};a.webshims.validityMessages["en-US"]=a.webshims.validityMessages["en-US"]||a.webshims.validityMessages.en;a.webshims.validityMessages[""]=a.webshims.validityMessages[""]||a.webshims.validityMessages.en;a.webshims.validityMessages.de=a.webshims.validityMessages.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",
number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",
tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};(function(){var l,j=[],n,f,g,d;if(a.support.validity===true&&window.addEventListener&&!window.noHTMLExtFixes){var b={timer:undefined,prevented:false};window.addEventListener("submit",function(e){if(!b.prevented&&e.target.checkValidity&&a.attr(e.target,
"novalidate")===undefined&&!e.target.checkValidity())g=true},true);var c=function(e){if(a.attr(e.target,"formnovalidate")!==undefined){b.timer&&clearTimeout(b.timer);b.prevented=true;b.timer=setTimeout(function(){b.prevented=false},20)}};window.addEventListener("click",c,true);window.addEventListener("touchstart",c,true);window.addEventListener("touchend",c,true)}a(document).bind("invalid",function(e){if(!l){f=e.target.form;if(a.support.validity===true&&f&&!window.noHTMLExtFixes){var i=a(f).bind("submit.preventInvalidSubmit",
function(m){if(a.attr(f,"novalidate")===undefined){m.stopImmediatePropagation();return false}}).data("events").submit;i&&i.length>1&&i.unshift(i.pop())}l=a.Event("firstinvalid");a(e.target).trigger(l)}l&&l.isDefaultPrevented()&&e.preventDefault();if(a.support.validity!==true||j.indexOf(e.target)==-1)j.push(e.target);else if(!window.noHTMLExtFixes){d=true;e.stopImmediatePropagation()}e.extraData="fix";clearTimeout(n);n=setTimeout(function(){var m={type:"lastinvalid",cancelable:false,invalidlist:a(j)};
g&&!d&&l.target!==document.activeElement&&document.activeElement&&!a.data(l.target,"maybePreventedinvalid")&&a.webshims.validityAlert.showFor(l.target);g=l=d=false;j=[];a(f).unbind("submit.preventInvalidSubmit");a(e.target).trigger(m,m)},0)})})();(function(){if(!(a.support.validity!==true||a.support.fieldsetValidation||window.noHTMLExtFixes)){a.support.fieldsetValidation="shim";a.webshims.addMethod("checkValidity",function(){if(a.nodeName(this,"fieldset")){var l=true;a(this.elements||"input, textarea, select",
this).each(function(){if(this.checkValidity)this.checkValidity()||(l=false)});return l}else if(this.checkValidity)return this.checkValidity()})}})();(function(){var l=a.support.validity===true&&a.webshims.overrideValidationMessages,j=true,n=true;if(a.support.validity===true){j=!!("required"in document.createElement("select")||window.noHTMLExtFixes);n=!!(a('<input type="datetime-local" />')[0].type=="datetime-local"&&a('<input type="range" />')[0].type=="range")}var f=!j||!n||l,g=a.webshims.inputTypes,
d={},b=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],c=a.attr,e=a.fn.val,i=l?{value:1,checked:1}:{value:1},m=l?["textarea"]:[],r={radio:1,checkbox:1},q=function(h,o){if(h.form){var k=(h.getAttribute&&h.getAttribute("type")||h.type||"").toLowerCase();if(!l)if(!(!j&&k=="select-one")&&!g[k])return;l&&!o&&r[k]&&h.name?a(document.getElementsByName(h.name)).each(function(){a.attr(this,"validity")}):a.attr(h,"validity")}};
if(!j||l){a.extend(i,{required:1,size:1,multiple:1,selectedIndex:1});m.push("select")}if(!n||l){a.extend(i,{min:1,max:1,step:1});m.push("input")}select=null;var s=a.webshims.validityMessages[""];a(document).bind("htmlExtLangChange",function(){a.webshims.activeLang(a.webshims.validityMessages,"validation-base",function(h){s=h})});a.webshims.createValidationMessage=function(h,o){var k=s[o];if(k&&typeof k!=="string")k=k[(h.getAttribute("type")||"").toLowerCase()]||k.defaultMessage;k&&["value","min",
"max","title","maxlength","label"].forEach(function(p){if(k.indexOf("{%"+p)!==-1){var t=(p=="label"?a.trim(a("label[for="+h.id+"]",h.form).text()).replace(/\*$|:$/,""):a.attr(h,p))||"";k=k.replace("{%"+p+"}",t);if("value"==p)k=k.replace("{%valueLen}",t.length)}});return k||""};a.each(a.support.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(h,o){a.webshims.attr(o,{elementNames:["input","select","textarea"],getter:function(k){var p="";if(!a.attr(k,
"willValidate"))return p;var t=a.attr(k,"validity")||{valid:1};if(t.valid)return p;if(t.customError||o==="validationMessage")if(p="validationMessage"in k?k.validationMessage:a.data(k,"customvalidationMessage"))return p;a.each(t,function(v,w){if(!(v=="valid"||!w))if(p=a.webshims.createValidationMessage(k,v))return false});return p||""}})});a.support.validationMessage=a.support.validationMessage||"shim";a.webshims.addMethod("setCustomValidity",function(h){h+="";if(this.setCustomValidity){this.setCustomValidity(h);
if(f){a.data(this,"hasCustomError",!!h);q(this)}}else a.data(this,"customvalidationMessage",""+h)});if(a.support.validity===true){a.webshims.addInputType=function(h,o){g[h]=o};a.webshims.addValidityRule=function(h,o){d[h]=o};a.webshims.addValidityRule("typeMismatch",function(h,o,k,p){if(o==="")return false;p=p.typeMismatch;if(!("type"in k))k.type=(h[0].getAttribute("type")||"").toLowerCase();if(g[k.type]&&g[k.type].mismatch)p=g[k.type].mismatch(o,h);return p})}if(!j){a.webshims.createBooleanAttrs("required",
["select"]);a.webshims.addValidityRule("valueMissing",function(h,o,k,p){if(k.nodeName=="select"&&!o&&h.attr("required")&&h[0].size<2){if(!k.type)k.type=h[0].type;if(k.type=="select-one"&&a("> option:first-child:not(:disabled)",h).attr("selected"))return true}return p.valueMissing})}if(f){a.webshims.attr("validity",{elementNames:m,getter:function(h){var o=h.validity;if(!o)return o;var k={};b.forEach(function(u){k[u]=o[u]});if(!a.attr(h,"willValidate"))return k;var p=a(h),t={type:(h.getAttribute&&h.getAttribute("type")||
"").toLowerCase(),nodeName:(h.nodeName||"").toLowerCase()},v=e.call(p),w=!!a.data(h,"hasCustomError"),y;k.customError=w;if(k.valid&&k.customError)k.valid=false;else if(!k.valid){var z=true;a.each(k,function(u,x){if(x)return z=false});if(z)k.valid=true}a.each(d,function(u,x){k[u]=x(p,v,t,k);if(k[u]&&(k.valid||!y&&l)){h.setCustomValidity(a.webshims.createValidationMessage(h,u));k.valid=false;y=true}});k.valid&&h.setCustomValidity("");return k}});a.fn.val=function(){var h=e.apply(this,arguments);this.each(function(){q(this)});
return h};a.attr=function(h,o,k){var p=c.apply(this,arguments);i[o]&&k!==undefined&&h.form&&q(h);return p};if(document.addEventListener){document.addEventListener("change",function(h){q(h.target)},true);n||document.addEventListener("input",function(h){q(h.target)},true)}a.webshims.addReady(function(h){h===document?a(m.join(",")).each(function(){q(this,true)}):a(m.join(","),h).each(function(){q(this,true)})})}})();a.webshims.createReadyEvent("validation-base")},true);
jQuery.webshims.ready("validation-base",function(a){if(!a.support.validity){a.webshims.inputTypes=a.webshims.inputTypes||{};var l=a.webshims.inputTypes,j={radio:1,checkbox:1};a.webshims.addInputType=function(b,c){l[b]=c};var n={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},f={valueMissing:function(b,c,e){if(!b.attr("required"))return false;var i=false;if(!("type"in e))e.type=(b[0].getAttribute("type")||
b[0].type||"").toLowerCase();return i=e.nodeName=="select"?!c&&b[0].type=="select-one"&&b[0].size<2&&a("> option:first-child:not(:disabled)",b).attr("selected"):j[e.type]?!a(b[0].form&&b[0].name?b[0].form[b[0].name]:[]).filter(":checked")[0]:!c},tooLong:function(b,c,e){if(c===""||e.nodeName=="select")return false;b=b.attr("maxlength");e=false;var i=c.length;if(i&&b>=0&&c.replace&&(typeof b=="number"||b&&b==b*1))e=i>b;return e},typeMismatch:function(b,c,e){if(c===""||e.nodeName=="select")return false;
var i=false;if(!("type"in e))e.type=(b[0].getAttribute("type")||b[0].type||"").toLowerCase();if(l[e.type]&&l[e.type].mismatch)i=l[e.type].mismatch(c,b);return i},patternMismatch:function(b,c,e){if(c===""||e.nodeName=="select")return false;b=b.attr("pattern");if(!b)return false;return!RegExp("^(?:"+b+")$").test(c)}};a.webshims.addValidityRule=function(b,c){f[b]=c};a.webshims.addMethod("checkValidity",function(){var b,c=function(e){var i,m=a.attr(e,"validity");if(m)a.data(e,"cachedValidity",m);else return true;
if(!m.valid){i=a.Event("invalid");var r=a(e).trigger(i);if(!b&&!i.isDefaultPrevented()){a.webshims.validityAlert.showFor(r);b=true}}a.data(e,"cachedValidity",false);return m.valid};return function(){b=false;if(a.nodeName(this,"form")||a.nodeName(this,"fieldset")){for(var e=true,i=this.elements||a("input, textarea, select",this),m=0,r=i.length;m<r;m++)c(i[m])||(e=false);return e}else return this.form?c(this):true}}());a.event.special.invalid={add:function(){a.data(this,"invalidEventShim")||a.event.special.invalid.setup.call(this)},
setup:function(){a(this).bind("submit",a.event.special.invalid.handler).data("invalidEventShim",true);var b=a(this).data("events").submit;b&&b.length>1&&b.unshift(b.pop())},teardown:function(){a(this).unbind("submit",a.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(b){if(!(b.type!="submit"||!a.nodeName(b.target,"form")||a.attr(b.target,"novalidate")!==undefined||a.data(b.target,"novalidate")))if(!a(b.target).checkValidity()){!b.originalEvent&&!window.debugValidityShim&&
window.console&&console.log&&console.log("submit");b.stopImmediatePropagation();return false}}};a.webshims.attr("validity",{elementNames:["input","select","textarea"],getter:function(b){var c=a.data(b,"cachedValidity");if(c)return c;c=a.extend({},n);if(!a.attr(b,"willValidate"))return c;var e=a(b),i=e.val(),m={nodeName:b.nodeName.toLowerCase()};c.customError=!!a.data(b,"customvalidationMessage");if(c.customError)c.valid=false;a.each(f,function(r,q){if(q(e,i,m)){c[r]=true;c.valid=false}});return c}});
a.webshims.createBooleanAttrs("required",["input","textarea","select"]);a.webshims.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var b={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(c){return!!(c.name&&c.form&&!c.disabled&&!c.readOnly&&!b[c.type]&&a.attr(c.form,"novalidate")===undefined)}}()});a.webshims.addInputType("email",{mismatch:function(){var b=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(c){return!b.test(c)}}()});a.webshims.addInputType("url",{mismatch:function(){var b=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!b.test(c)}}()});var g=function(){var b=this;if(b.form){a.data(b.form,"novalidate",true);setTimeout(function(){a.data(b.form,"novalidate",false)},1)}},d={submit:1,button:1};a(document).bind("click",function(b){b.target&&b.target.form&&d[b.target.type]&&a.attr(b.target,"formnovalidate")!==undefined&&g.call(b.target)});a.webshims.addReady(function(b){b=a("form",b).bind("invalid",a.noop).find("button[formnovalidate]").bind("click",g).end();if(!document.activeElement||!document.activeElement.form)a("input, select, textarea",
b).filter("[autofocus]:first").focus()});(function(){if(a.support.validity!==true){a.support.validity="shim";var b={input:1,textarea:1},c={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},e=function(i){var m,r=i.attr("value"),q=function(h){if(i){var o=i.attr("value");if(o!==r){r=o;if(!h||h.type!="input")a.webshims.triggerInlineForm(i[0],"input")}}},s=function(){i.unbind("focusout",s).unbind("input",q);clearInterval(m);q();i=null};clearInterval(m);m=setInterval(q,a.browser.mozilla?250:
111);setTimeout(q,9);i.bind("focusout",s).bind("input",q)};a(document).bind("focusin",function(i){if(i.target&&i.target.type&&!i.target.readonly&&!i.target.readOnly&&!i.target.disabled&&b[(i.target.nodeName||"").toLowerCase()]&&!c[i.target.type])e(a(i.target))})}})();a.webshims.createReadyEvent("validity")}},true);
jQuery.webshims.ready("validation-base",function(a){if(!("value"in document.createElement("output"))){var l=function(j){if(!j.getAttribute("aria-live")){j=a(j);var n=(j.text()||"").trim(),f=j.attr("id"),g=j.attr("for"),d=a('<input class="output-shim" type="hidden" name="'+(j.attr("name")||"")+'" value="'+n+'" style="display: none !important;" />').insertAfter(j),b=d[0].form||document,c=function(e){d[0].value=e;e=d[0].value;j.text(e);j[0].value=e};j[0].defaultValue=n;j[0].value=n;j.attr({"aria-live":"polite"});
if(f){d.attr("id",f);j.attr("aria-labeldby",a.webshims.getID(a("label[for="+f+"]",b)))}if(g){f=a.webshims.getID(j);g.split(" ").forEach(function(e){(e=b.getElementById(e))&&e.setAttribute("aria-controls",f)})}j.data("outputShim",c);d.data("outputShim",c);return c}};a.webshims.attr("value",{elementNames:["output","input"],getter:true,setter:function(j,n,f){var g=a.data(j,"outputShim");if(!g)if(a.nodeName(j,"output"))g=l(j);else return f();g(n)}});a.webshims.addReady(function(j){a("output",j).each(function(){l(this)})});
a.webshims.createReadyEvent("output")}},true);
(function(a){if(!a.support.placeholder){a.support.placeholder="shim";var l=function(d,b,c,e,i){if(!e){e=a.data(d,"placeHolder");if(!e)return}if(i=="focus"||!i&&d===document.activeElement)e.box.removeClass("placeholder-visible");else{if(b===false)b=a.attr(d,"value");if(b)e.box.removeClass("placeholder-visible");else{if(c===false)c=a.attr(d,"placeholder");e.box[c&&!b?"addClass":"removeClass"]("placeholder-visible")}}},j=function(d){d=a(d);var b=d.attr("id"),c=!!(d.attr("title")||d.attr("aria-labeledby"));
if(!c&&b)c=!!a("label[for="+b+"]",d[0].form)[0];return a(c?'<span class="placeholder-text"></span>':'<label for="'+(b||a.webshims.getID(d))+'" class="placeholder-text"></label>')},n=function(){var d=/\n|\r|\f|\t/g,b={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(c){var e=a.data(c,"placeHolder");if(e)return e;e=a.data(c,"placeHolder",{text:j(c)});e.box=a(c).wrap('<span class="placeholder-box placeholder-box-'+(c.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(q){l(this,false,false,e,q.type)}).parent();e.text.insertAfter(c).bind("mousedown.placeholder",function(){l(this,false,false,e,"focus");c.focus();return false});a.each(["Left","Top"],function(q,s){var h=(parseInt(a.curCSS(c,"padding"+s),10)||0)+Math.max(parseInt(a.curCSS(c,"margin"+s),10)||0,0)+(parseInt(a.curCSS(c,"border"+s+"Width"),10)||0);e.text.css("padding"+s,h)});var i=a.curCSS(c,"lineHeight"),m={width:a(c).getwidth(),height:a(c).getheight()},r=a.curCSS(c,"float");e.text.css("lineHeight")!==
i&&e.text.css("lineHeight",i);m.width&&m.height&&e.text.css(m);r!=="none"&&e.box.addClass("placeholder-box-"+r);return e},update:function(c,e){if(b[a.attr(c,"type")]||a.nodeName(c,"textarea")){if(a.nodeName(c,"input"))e=e.replace(d,"");var i=n.create(c);c.setAttribute("placeholder",e);i.text.text(e);l(c,false,e,i)}}}}();a.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(d,b){n.update(d,b)},getter:function(d){return d.getAttribute("placeholder")||""}});var f={elementNames:["input",
"textarea"],setter:function(d,b,c){var e=d.getAttribute("placeholder");e&&"value"in d&&l(d,b,e);c()},getter:true};a.webshims.attr("value",f);var g=a.fn.val;a.fn.val=function(d){d!==undefined&&this.each(function(){this.nodeType===1&&f.setter(this,d,a.noop)});return g.apply(this,arguments)};a.webshims.addReady(function(d){a("input[placeholder], textarea[placeholder]",d).attr("placeholder",function(b,c){return c})})}})(jQuery);
