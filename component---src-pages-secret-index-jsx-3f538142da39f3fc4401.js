(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{l53i:function(e,t,n){"use strict";n.r(t);var a=n("zzhW"),o=n("/tuq"),r=n("q1tI"),i=n.n(r),l=function(e){var t=e.interval,n=void 0===t?1e3:t,a=e.color,o=void 0===a?"black":a,r=i.a.useCallback((function(e,t){return new Array(e).fill(null).map((function(){return new Array(t).fill(null).map((function(){return Math.floor(2*Math.random())}))}))}),[]),l=i.a.useCallback((function(e,t){return 1===e&&(t<2||t>3)?0:0===e&&3===t?1:e}),[]),u=i.a.useCallback((function(e,t,n){for(var a=e.map((function(e){return[].concat(e)})),o=0;o<e.length;o++)for(var r=0;r<e[o].length;r++){for(var i=e[o][r],u=0,c=-1;c<2;c++)for(var d=-1;d<2;d++)if(0!==c||0!==d){var s=o+c,f=r+d;if(s>=0&&f>=0&&s<t&&f<n)u+=e[o+c][r+d]}a[o][r]=l(i,u)}return a}),[l]),c=i.a.useCallback((function(e,t){for(var n=0;n<t.length;n++)for(var a=0;a<t[n].length;a++){var r=t[n][a];e.beginPath(),e.rect(8*n,8*a,8,8),e.fillStyle=r?o:"#FFF",e.fill()}}),[]);return i.a.useEffect((function(){var e=document.getElementById("game-of-life"),t=e.getContext("2d"),a=window.screen;e.width=a.width,e.height=a.height;var o,i=Math.round(e.width/8),l=Math.round(e.height/8),d=r(i,l);window.requestAnimationFrame((function e(a){o||(o=a),a-o>n&&(o=a,d=u(d,i,l),c(t,d)),window.requestAnimationFrame(e)}))}),[r,n,u,c]),i.a.createElement("canvas",{id:"game-of-life",style:{position:"absolute",left:0,bottom:0,zIndex:-1}})},u=n("txSG"),c=(n("qKvR"),function(e){var t=e.children,n=e.delay;return Object(u.k)("marquee",{direction:"down",width:"30px",height:"100%",hspace:"20px",vspace:-n},t)});t.default=function(){return Object(u.k)(a.a,null,Object(u.k)(o.a,{title:"0х00"}),Object(u.k)(l,{delay:1e3,color:"#EEE"}),Object(u.k)(u.d,{sx:{fontFamily:"monospace",backgroundColor:"transparent",fontSize:5,height:"100vh",boxSizing:"padding-box",alignItems:"center",justifyContent:"center"}},Object(u.k)(c,null,"🤔 Rebqta, ne stoit vskryvatь etu temu. Vy molodye, wutlivye, vam vse legko."),Object(u.k)(c,{delay:"8px"},"Eto ne to. Eto ne Hikatilo i daжe ne arxivy specsluжb. Sюda luhwe ne leztь."),Object(u.k)(c,{delay:"-30px"},Object(u.k)("acronym",{title:"Серьёзно"},"Serьezno"),", lюboj iz vas budet жaletь. Luhwe zakrojte temu i zabudьte, hto tut pisalosь."),Object(u.k)(c,{delay:"10px"},"Я vpolne ponimaю, hto dannym soobщeniem vyzovu dopolnitelьnyj interes, no xohu srazu predosterehь pytlivyx - stop."),Object(u.k)(c,{delay:"100px"},"Ostalьnye prosto ne najdut 🤔")))}}}]);
//# sourceMappingURL=component---src-pages-secret-index-jsx-3f538142da39f3fc4401.js.map