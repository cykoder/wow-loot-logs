(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{XU8Z:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/player",function(){return n("XZjT")}])},XZjT:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var o=n("o0o1"),a=n.n(o),s=n("q1tI"),r=n.n(s),c=n("ofer"),u=n("hlFM"),l=n("dmAv"),i=n("iBVQ"),m=r.a.createElement,p={player:"Player Name",date:"Date",item:"Item",itemID:"Item ID",itemString:"Item String",votes:"Votes",response:"Response",class:"Class",instance:"Instance",boss:"Boss Name",gear1:"Prev Gear (slot 1)",gear2:"Prev Gear (slot 2)",subType:"Item Type",equipLoc:"Slot Type",note:"Reward Reasoning",logid:"Unique Log ID"};function d(){var e=Object(s.useState)(),t=e[0],n=e[1],o=Object(s.useState)("date"),d=o[0],f=o[1],g=Object(s.useState)("DESC"),E=g[0],S=g[1],w="Magi";function y(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e=i.a.execQuery('SELECT date,item,response,class,instance,boss FROM lootlogs WHERE player LIKE "%'.concat(w,'%" ORDER BY ').concat(d," ").concat(E,";")),n(e[0]);case 2:case"end":return t.stop()}}),null,null,null,Promise)}return Object(s.useEffect)((function(){t||y()}),[]),m(u.a,{my:4},m(c.a,{variant:"h4",component:"h1",gutterBottom:!0},"Player: ",w),m("br",null),m(r.a.Fragment,null,t?m(l.a,{onRequestSort:function(e,t){d===t?S("ASC"===E?"DESC":"ASC"):(f(t),S("DESC")),n(null),y()},columns:t.columns,values:t.values,columnMaps:p,orderBy:d,order:E}):"Loading logs..."))}}},[["XU8Z",0,2,5,1,3,4,8]]]);