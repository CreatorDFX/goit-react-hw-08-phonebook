/*! For license information please see 643.af6518ef.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[643],{1372:function(e,t){"use strict";var r=60103,n=60106,i=60107,o=60108,a=60114,s=60109,c=60110,l=60112,u=60113,d=60120,h=60115,f=60116,p=60121,g=60122,m=60117,v=60129,y=60131;if("function"===typeof Symbol&&Symbol.for){var S=Symbol.for;r=S("react.element"),n=S("react.portal"),i=S("react.fragment"),o=S("react.strict_mode"),a=S("react.profiler"),s=S("react.provider"),c=S("react.context"),l=S("react.forward_ref"),u=S("react.suspense"),d=S("react.suspense_list"),h=S("react.memo"),f=S("react.lazy"),p=S("react.block"),g=S("react.server.block"),m=S("react.fundamental"),v=S("react.debug_trace_mode"),y=S("react.legacy_hidden")}function b(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case a:case o:case u:case d:return e;default:switch(e=e&&e.$$typeof){case c:case l:case f:case h:case s:return e;default:return t}}case n:return t}}}t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===a||e===v||e===o||e===u||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===h||e.$$typeof===s||e.$$typeof===c||e.$$typeof===l||e.$$typeof===m||e.$$typeof===p||e[0]===g)},t.typeOf=b},7441:function(e,t,r){"use strict";e.exports=r(1372)},643:function(e,t,r){"use strict";r.d(t,{iT:function(){return Me}});var n=r(2791),i="#4fa94d",o={"aria-busy":!0,role:"status"},a=r(7441),s=r(9613),c=r.n(s);var l=function(e){function t(e,n,c,l,h){for(var f,p,g,m,b,C=0,w=0,_=0,A=0,E=0,I=0,N=g=f=0,H=0,L=0,W=0,F=0,$=c.length,z=$-1,K="",U="",B="",M="";H<$;){if(p=c.charCodeAt(H),H===z&&0!==w+A+_+C&&(0!==w&&(p=47===w?10:47),A=_=C=0,$++,z++),0===w+A+_+C){if(H===z&&(0<L&&(K=K.replace(d,"")),0<K.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:K+=c.charAt(H)}p=59}switch(p){case 123:for(f=(K=K.trim()).charCodeAt(0),g=1,F=++H;H<$;){switch(p=c.charCodeAt(H)){case 123:g++;break;case 125:g--;break;case 47:switch(p=c.charCodeAt(H+1)){case 42:case 47:e:{for(N=H+1;N<z;++N)switch(c.charCodeAt(N)){case 47:if(42===p&&42===c.charCodeAt(N-1)&&H+2!==N){H=N+1;break e}break;case 10:if(47===p){H=N+1;break e}}H=N}}break;case 91:p++;case 40:p++;case 34:case 39:for(;H++<z&&c.charCodeAt(H)!==p;);}if(0===g)break;H++}if(g=c.substring(F,H),0===f&&(f=(K=K.replace(u,"").trim()).charCodeAt(0)),64===f){switch(0<L&&(K=K.replace(d,"")),p=K.charCodeAt(1)){case 100:case 109:case 115:case 45:L=n;break;default:L=P}if(F=(g=t(n,L,g,p,h+1)).length,0<D&&(b=s(3,g,L=r(P,K,W),n,x,O,F,p,h,l),K=L.join(""),void 0!==b&&0===(F=(g=b.trim()).length)&&(p=0,g="")),0<F)switch(p){case 115:K=K.replace(k,a);case 100:case 109:case 45:g=K+"{"+g+"}";break;case 107:g=(K=K.replace(v,"$1 $2"))+"{"+g+"}",g=1===R||2===R&&o("@"+g,3)?"@-webkit-"+g+"@"+g:"@"+g;break;default:g=K+g,112===l&&(U+=g,g="")}else g=""}else g=t(n,r(n,K,W),g,l,h+1);B+=g,g=W=L=N=f=0,K="",p=c.charCodeAt(++H);break;case 125:case 59:if(1<(F=(K=(0<L?K.replace(d,""):K).trim()).length))switch(0===N&&(f=K.charCodeAt(0),45===f||96<f&&123>f)&&(F=(K=K.replace(" ",":")).length),0<D&&void 0!==(b=s(1,K,n,e,x,O,U.length,l,h,l))&&0===(F=(K=b.trim()).length)&&(K="\0\0"),f=K.charCodeAt(0),p=K.charCodeAt(1),f){case 0:break;case 64:if(105===p||99===p){M+=K+c.charAt(H);break}default:58!==K.charCodeAt(F-1)&&(U+=i(K,f,p,K.charCodeAt(2)))}W=L=N=f=0,K="",p=c.charCodeAt(++H)}}switch(p){case 13:case 10:47===w?w=0:0===1+f&&107!==l&&0<K.length&&(L=1,K+="\0"),0<D*j&&s(0,K,n,e,x,O,U.length,l,h,l),O=1,x++;break;case 59:case 125:if(0===w+A+_+C){O++;break}default:switch(O++,m=c.charAt(H),p){case 9:case 32:if(0===A+C+w)switch(E){case 44:case 58:case 9:case 32:m="";break;default:32!==p&&(m=" ")}break;case 0:m="\\0";break;case 12:m="\\f";break;case 11:m="\\v";break;case 38:0===A+w+C&&(L=W=1,m="\f"+m);break;case 108:if(0===A+w+C+T&&0<N)switch(H-N){case 2:112===E&&58===c.charCodeAt(H-3)&&(T=E);case 8:111===I&&(T=I)}break;case 58:0===A+w+C&&(N=H);break;case 44:0===w+_+A+C&&(L=1,m+="\r");break;case 34:case 39:0===w&&(A=A===p?0:0===A?p:A);break;case 91:0===A+w+_&&C++;break;case 93:0===A+w+_&&C--;break;case 41:0===A+w+C&&_--;break;case 40:if(0===A+w+C){if(0===f)if(2*E+3*I===533);else f=1;_++}break;case 64:0===w+_+A+C+N+g&&(g=1);break;case 42:case 47:if(!(0<A+C+_))switch(w){case 0:switch(2*p+3*c.charCodeAt(H+1)){case 235:w=47;break;case 220:F=H,w=42}break;case 42:47===p&&42===E&&F+2!==H&&(33===c.charCodeAt(F+2)&&(U+=c.substring(F,H+1)),m="",w=0)}}0===w&&(K+=m)}I=E,E=p,H++}if(0<(F=U.length)){if(L=n,0<D&&(void 0!==(b=s(2,U,L,e,x,O,F,l,h,l))&&0===(U=b).length))return M+U+B;if(U=L.join(",")+"{"+U+"}",0!==R*T){switch(2!==R||o(U,2)||(T=0),T){case 111:U=U.replace(S,":-moz-$1")+U;break;case 112:U=U.replace(y,"::-webkit-input-$1")+U.replace(y,"::-moz-$1")+U.replace(y,":-ms-input-$1")+U}T=0}}return M+U+B}function r(e,t,r){var i=t.trim().split(g);t=i;var o=i.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<o;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<o;++s)for(var l=0;l<a;++l)t[c++]=n(e[l]+" ",i[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,r,n){var a=e+";",s=2*t+3*r+4*n;if(944===s){e=a.indexOf(":",9)+1;var c=a.substring(e,a.length-1).trim();return c=a.substring(0,e).trim()+c+";",1===R||2===R&&o(c,1)?"-webkit-"+c+c:c}if(0===R||2===R&&!o(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(E,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(c=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+c+a;case 1005:return f.test(a)?a.replace(h,":-webkit-")+a.replace(h,":-moz-")+a:a;case 1e3:switch(t=(c=a.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=a.replace(b,"tb");break;case 232:c=a.replace(b,"tb-rl");break;case 220:c=a.replace(b,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+c+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(c=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:a=a.replace(c,"-webkit-"+c)+";"+a;break;case 207:case 102:a=a.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(c,"-webkit-"+c)+";"+a.replace(c,"-ms-"+c+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return c=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+c+"-ms-flex-"+c+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(w,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(w,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===A.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):a.replace(c,"-webkit-"+c)+a.replace(c,"-moz-"+c.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===r+n&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+a}return a}function o(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),N(2!==t?n:n.replace(_,"$1"),r,t)}function a(e,t){var r=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(C," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,i,o,a,s,c,u){for(var d,h=0,f=t;h<D;++h)switch(d=I[h].call(l,e,f,r,n,i,o,a,s,c,u)){case void 0:case!1:case!0:case null:break;default:f=d}if(f!==t)return f}function c(e){return void 0!==(e=e.prefix)&&(N=null,e?"function"!==typeof e?R=1:(R=2,N=e):R=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<D){var i=s(-1,r,n,n,x,O,0,0,0,0);void 0!==i&&"string"===typeof i&&(r=i)}var o=t(P,n,r,0,0);return 0<D&&(void 0!==(i=s(-2,o,n,n,x,O,o.length,0,0,0))&&(o=i)),"",T=0,O=x=1,o}var u=/^\0+/g,d=/[\0\r\f]/g,h=/: */g,f=/zoo|gra/,p=/([,: ])(transform)/g,g=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,w=/-self|flex-/g,_=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,O=1,x=1,T=0,R=1,P=[],I=[],D=0,N=null,j=0;return l.use=function e(t){switch(t){case void 0:case null:D=I.length=0;break;default:if("function"===typeof t)I[D++]=t;else if("object"===typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else j=0|!!t}return e},l.set=c,void 0!==e&&c(e),l},u={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var d=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,h=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return d.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),f=h,p=r(2110),g=r.n(p);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var v=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},y=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,a.typeOf)(e)},S=Object.freeze([]),b=Object.freeze({});function k(e){return"function"==typeof e}function C(e){return e.displayName||e.name||"Component"}function w(e){return e&&"string"==typeof e.styledComponentId}var _="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",A="undefined"!=typeof window&&"HTMLElement"in window,E=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)));function O(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var x=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)(i<<=1)<0&&O(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+=this.tag.getRule(o)+"/*!sc*/\n";return t},e}(),T=new Map,R=new Map,P=1,I=function(e){if(T.has(e))return T.get(e);for(;R.has(P);)P++;var t=P++;return T.set(e,t),R.set(t,e),t},D=function(e){return R.get(e)},N=function(e,t){t>=P&&(P=t+1),T.set(e,t),R.set(t,e)},j="style["+_+'][data-styled-version="5.3.9"]',H=new RegExp("^"+_+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L=function(e,t,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&e.registerName(t,n)},W=function(e,t){for(var r=(t.textContent||"").split("/*!sc*/\n"),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match(H);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(N(l,c),L(e,l,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(a)}}},F=function(){return r.nc},$=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(_))return n}}(r),o=void 0!==i?i.nextSibling:null;n.setAttribute(_,"active"),n.setAttribute("data-styled-version","5.3.9");var a=F();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},z=function(){function e(e){var t=this.element=$(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}O(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),K=function(){function e(e){var t=this.element=$(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),B=A,M={isServer:!A,useCSSOMInjection:!E},V=function(){function e(e,t,r){void 0===e&&(e=b),void 0===t&&(t={}),this.options=m({},M,{},e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&A&&B&&(B=!1,function(e){for(var t=document.querySelectorAll(j),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(_)&&(W(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return I(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(m({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,i=t.target,e=r?new U(i):n?new z(i):new K(i),new x(e)));var e,t,r,n,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(I(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(I(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(I(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++){var o=D(i);if(void 0!==o){var a=e.names.get(o),s=t.getGroup(i);if(a&&s&&a.size){var c=_+".g"+i+'[id="'+o+'"]',l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+=e+",")})),n+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},e}(),G=/(a)(d)/gi,Y=function(e){return String.fromCharCode(e+(e>25?39:97))};function q(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Y(t%52)+r;return(Y(t%52)+r).replace(G,"$1-$2")}var X=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Z=function(e){return X(5381,e)};function J(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(k(r)&&!w(r))return!1}return!0}var Q=Z("5.3.9"),ee=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&J(e),this.componentId=t,this.baseHash=X(Q,t),this.baseStyle=r,V.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var o=ye(this.rules,e,t,r).join(""),a=q(X(this.baseHash,o)>>>0);if(!t.hasNameForId(n,a)){var s=r(o,"."+a,void 0,n);t.insertRules(n,a,s)}i.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,l=X(this.baseHash,r.hash),u="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)u+=h;else if(h){var f=ye(h,e,t,r),p=Array.isArray(f)?f.join(""):f;l=X(l,p+d),u+=p}}if(u){var g=q(l>>>0);if(!t.hasNameForId(n,g)){var m=r(u,"."+g,void 0,n);t.insertRules(n,g,m)}i.push(g)}}return i.join(" ")},e}(),te=/^\s*\/\/.*$/gm,re=[":","[",".","#"];function ne(e){var t,r,n,i,o=void 0===e?b:e,a=o.options,s=void 0===a?b:a,c=o.plugins,u=void 0===c?S:c,d=new l(s),h=[],f=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,i,o,a,s,c,l,u,d){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(i[0]+n),"";default:return n+(0===d?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){h.push(e)})),p=function(e,n,o){return 0===n&&-1!==re.indexOf(o[r.length])||o.match(i)?e:"."+t};function g(e,o,a,s){void 0===s&&(s="&");var c=e.replace(te,""),l=o&&a?a+" "+o+" { "+c+" }":c;return t=s,r=o,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),d(a||!o?"":o,l)}return d.use([].concat(u,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,p))},f,function(e){if(-2===e){var t=h;return h=[],t}}])),g.hash=u.length?u.reduce((function(e,t){return t.name||O(15),X(e,t.name)}),5381).toString():"",g}var ie=n.createContext(),oe=(ie.Consumer,n.createContext()),ae=(oe.Consumer,new V),se=ne();function ce(){return(0,n.useContext)(ie)||ae}function le(){return(0,n.useContext)(oe)||se}function ue(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],i=t[1],o=ce(),a=(0,n.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),s=(0,n.useMemo)((function(){return ne({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,n.useEffect)((function(){c()(r,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),n.createElement(ie.Provider,{value:a},n.createElement(oe.Provider,{value:s},e.children))}var de=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=se);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return O(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=se),this.name+e.hash},e}(),he=/([A-Z])/,fe=/([A-Z])/g,pe=/^ms-/,ge=function(e){return"-"+e.toLowerCase()};function me(e){return he.test(e)?e.replace(fe,ge).replace(pe,"-ms-"):e}var ve=function(e){return null==e||!1===e||""===e};function ye(e,t,r,n){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)""!==(i=ye(e[a],t,r,n))&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}return ve(e)?"":w(e)?"."+e.styledComponentId:k(e)?"function"!=typeof(c=e)||c.prototype&&c.prototype.isReactComponent||!t?e:ye(e(t),t,r,n):e instanceof de?r?(e.inject(r,n),e.getName(n)):e:y(e)?function e(t,r){var n,i,o=[];for(var a in t)t.hasOwnProperty(a)&&!ve(t[a])&&(Array.isArray(t[a])&&t[a].isCss||k(t[a])?o.push(me(a)+":",t[a],";"):y(t[a])?o.push.apply(o,e(t[a],a)):o.push(me(a)+": "+(n=a,(null==(i=t[a])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in u?String(i).trim():i+"px")+";")));return r?[r+" {"].concat(o,["}"]):o}(e):e.toString();var c}var Se=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function be(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return k(e)||y(e)?Se(ye(v(S,[e].concat(r)))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:Se(ye(v(e,r)))}new Set;var ke=function(e,t,r){return void 0===r&&(r=b),e.theme!==r.theme&&e.theme||t||r.theme},Ce=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function _e(e){return e.replace(Ce,"-").replace(we,"")}var Ae=function(e){return q(Z(e)>>>0)};function Ee(e){return"string"==typeof e&&!0}var Oe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},xe=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Te(e,t,r){var n=e[r];Oe(t)&&Oe(n)?Re(n,t):e[r]=t}function Re(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,o=r;i<o.length;i++){var a=o[i];if(Oe(a))for(var s in a)xe(s)&&Te(e,a[s],s)}return e}var Pe=n.createContext();Pe.Consumer;var Ie={};function De(e,t,r){var i=w(e),o=!Ee(e),a=t.attrs,s=void 0===a?S:a,c=t.componentId,l=void 0===c?function(e,t){var r="string"!=typeof e?"sc":_e(e);Ie[r]=(Ie[r]||0)+1;var n=r+"-"+Ae("5.3.9"+r+Ie[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):c,u=t.displayName,d=void 0===u?function(e){return Ee(e)?"styled."+e:"Styled("+C(e)+")"}(e):u,h=t.displayName&&t.componentId?_e(t.displayName)+"-"+t.componentId:t.componentId||l,p=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,v=t.shouldForwardProp;i&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(r,n,i){return e.shouldForwardProp(r,n,i)&&t.shouldForwardProp(r,n,i)}:e.shouldForwardProp);var y,_=new ee(r,h,i?e.componentStyle:void 0),A=_.isStatic&&0===s.length,E=function(e,t){return function(e,t,r,i){var o=e.attrs,a=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,u=e.styledComponentId,d=e.target,h=function(e,t,r){void 0===e&&(e=b);var n=m({},t,{theme:e}),i={};return r.forEach((function(e){var t,r,o,a=e;for(t in k(a)&&(a=a(n)),a)n[t]=i[t]="className"===t?(r=i[t],o=a[t],r&&o?r+" "+o:r||o):a[t]})),[n,i]}(ke(t,(0,n.useContext)(Pe),s)||b,t,o),p=h[0],g=h[1],v=function(e,t,r,n){var i=ce(),o=le();return t?e.generateAndInjectStyles(b,i,o):e.generateAndInjectStyles(r,i,o)}(a,i,p),y=r,S=g.$as||t.$as||g.as||t.as||d,C=Ee(S),w=g!==t?m({},t,{},g):t,_={};for(var A in w)"$"!==A[0]&&"as"!==A&&("forwardedAs"===A?_.as=w[A]:(l?l(A,f,S):!C||f(A))&&(_[A]=w[A]));return t.style&&g.style!==t.style&&(_.style=m({},t.style,{},g.style)),_.className=Array.prototype.concat(c,u,v!==u?v:null,t.className,g.className).filter(Boolean).join(" "),_.ref=y,(0,n.createElement)(S,_)}(y,e,t,A)};return E.displayName=d,(y=n.forwardRef(E)).attrs=p,y.componentStyle=_,y.displayName=d,y.shouldForwardProp=v,y.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,y.styledComponentId=h,y.target=i?e.target:e,y.withComponent=function(e){var n=t.componentId,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(t,["componentId"]),o=n&&n+"-"+(Ee(e)?e:_e(C(e)));return De(e,m({},i,{attrs:p,componentId:o}),r)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=i?Re({},e.defaultProps,t):t}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),o&&g()(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Ne=function(e){return function e(t,r,n){if(void 0===n&&(n=b),!(0,a.isValidElementType)(r))return O(1,String(r));var i=function(){return t(r,n,be.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,r,m({},n,{},i))},i.attrs=function(i){return e(t,r,m({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i}(De,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Ne[e]=Ne(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=J(e),V.registerId(this.componentId+1)}var t=e.prototype;t.createStyles=function(e,t,r,n){var i=n(ye(this.rules,t,r,n).join(""),""),o=this.componentId+e;r.insertRules(o,o,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&V.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();function je(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=be.apply(void 0,[e].concat(r)).join(""),o=Ae(i);return new de(o,i)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=F();return"<style "+[r&&'nonce="'+r+'"',_+'="true"','data-styled-version="5.3.9"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?O(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return O(2);var r=((t={})[_]="",t["data-styled-version"]="5.3.9",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),i=F();return i&&(r.nonce=i),[n.createElement("style",m({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new V({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?O(2):n.createElement(ue,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return O(3)}}();var He,Le,We=Ne,Fe=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},$e=242.776657104492,ze=je(He||(He=Fe(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),.14*$e,$e,.11*$e,.35*$e,$e,.35*$e,.01*$e,$e,.99*$e),Ke=(We.path(Le||(Le=Fe(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),.01*$e,$e,ze,1.6),function(e){return{display:e?"flex":"none"}}),Ue=function(){return Ue=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Ue.apply(this,arguments)},Be=function(e,t,r){var n=Math.max(e,t),i=-r-n/2+1,o=2*r+n;return[i,i,o,o].join(" ")},Me=function(e){var t,r=e.height,a=void 0===r?80:r,s=e.width,c=void 0===s?80:s,l=e.color,u=void 0===l?i:l,d=e.secondaryColor,h=void 0===d?i:d,f=e.ariaLabel,p=void 0===f?"oval-loading":f,g=e.wrapperStyle,m=e.wrapperClass,v=e.visible,y=void 0===v||v,S=e.strokeWidth,b=void 0===S?2:S,k=e.strokeWidthSecondary;return n.createElement("div",Ue({style:Ue(Ue(Ue({},Ke(y)),g),{padding:3}),className:m,"data-testid":"oval-loading","aria-label":p},o),n.createElement("svg",{width:c,height:a,viewBox:Be(Number(b),Number(k||b),20),xmlns:"http://www.w3.org/2000/svg",stroke:u,"data-testid":"oval-svg"},n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",{transform:"translate(1 1)",strokeWidth:Number(k||b),"data-testid":"oval-secondary-group"},n.createElement("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:20,stroke:h,strokeWidth:b}),n.createElement("path",{d:(t=20,["M"+t+" 0c0-9.94-8.06",t,t,t].join("-"))},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"}))))))},Ve=function(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof r[e])return r[e];if(e&&e.indexOf(".")>0){for(var n=e.split("."),i=n.length,o=r[n[0]],a=1;null!=o&&a<i;)o=o[n[a]],a+=1;if("undefined"!==typeof o)return o}return t}};var Ge,Ye,qe,Xe=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ze=je(Ge||(Ge=Xe(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])));We.svg(Ye||(Ye=Xe(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),Ze,Ve("speed","0.75")),We.polyline(qe||(qe=Xe(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(e){return e.width}));var Je,Qe,et,tt=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},rt=je(Je||(Je=tt(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));We.polygon(Qe||(Qe=tt(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),rt),We.svg(et||(et=tt(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"])))},9613:function(e){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var l=o[c];if(!s(l))return!1;var u=e[l],d=t[l];if(!1===(i=r?r.call(n,u,d,l):void 0)||void 0===i&&u!==d)return!1}return!0}}}]);
//# sourceMappingURL=643.af6518ef.chunk.js.map