(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{361:function(e,t,n){"use strict";n.r(t);var o=n(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""}}}),c=(n(370),n(6)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DataView-DataSet"},[e.title?n("span",{staticClass:"DataView-DataSet-title"},[e._v(e._s(e.title))]):e._e(),e._v(" "),n("div",{staticClass:"DataView-DataSet-info"},[e.lText?[n("span",{staticClass:"DataView-DataSet-summary"},[e._v("\n        "+e._s(e.lText)+"\n        "),n("small",{staticClass:"DataView-DataSet-summary-unit"},[e._v(e._s(e.unit))])]),e._v(" "),n("br")]:e._e(),e._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[e._v(e._s(e.sText))]),e._v(" "),e.sTextUnder?[n("br"),e._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[e._v(e._s(e.sTextUnder))])]:e._e()],2)])}),[],!1,null,null,null);t.default=component.exports},365:function(e,t,n){var content=n(371);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("0e424632",content,!0,{sourceMap:!1})},366:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(48),r=o.default.extend({components:{AppLink:c.default},props:{url:{type:String,default:""}}}),l=(n(382),n(6)),component=Object(l.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("app-link",{attrs:{to:this.url}},[this._v("\n  "+this._s(this.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppLink:n(48).default})},367:function(e,t,n){"use strict";n(82),n(373);var o=n(13),c=n.n(o),r=n(127),l=n(364);function _(e,t){var n=t(e);switch(Math.sign(e)){case 1:return"+".concat(n);case-1:default:return"".concat(n)}}t.a=function(e){var t=e.displayData,n=e.dataIndex,o=void 0===n?0:n,d=e.digit,y=void 0===d?0:d,v=t.labels.slice(-1)[0],data=t.datasets[o].data,k=data.slice(-1)[0],w=k-data.slice(-2)[0],f=Object(l.a)(y);return{lastDay:c()(Object(r.d)(v)).toDate(),lastDayData:f(k),dayBeforeRatio:_(w,f)}}},370:function(e,t,n){"use strict";n(365)},371:function(e,t,n){(t=n(18)(!1)).push([e.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:10px}@media screen and (min-width:1171px){.DataView-DataSet{justify-content:space-between;flex-flow:row}}.DataView-DataSet-title{font-size:2rem;flex:1 1 50%;margin-bottom:10px}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;color:#4d4d4d;white-space:nowrap;font-family:Hiragino Sans,sans-serif;font-style:normal;line-height:30px;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;color:#707070;line-height:normal;font-size:1.2rem}",""]),e.exports=t},372:function(e,t,n){var content=n(383);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("be2676e6",content,!0,{sourceMap:!1})},373:function(e,t,n){n(4)({target:"Math",stat:!0},{sign:n(239)})},382:function(e,t,n){"use strict";n(372)},383:function(e,t,n){(t=n(18)(!1)).push([e.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),e.exports=t},385:function(e,t,n){var content=n(443);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("7e92fa11",content,!0,{sourceMap:!1})},402:function(e,t,n){"use strict";n.r(t);n(20),n(34),n(125),n(82);var o=n(3),c=n(102),r=n(13),l=n.n(r),_=n(0),d=n(360),y=n(361),v=n(363),k=n(366),w=n(362),f=n(126),h=n(367),x=n(368),m=n(364),D={created:function(){this.canvas=!0},components:{DataView:d.default,DataViewTable:v.default,DataViewDataSetPanel:y.default,ScrollableChart:w.default,OpenDataLink:k.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},infoTitles:{type:Array,required:!1,default:function(){return[]}},chartId:{type:String,default:"mixed-bar-and-line-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},getFormatter:{type:Function,required:!1,default:function(e){return Object(m.b)()}},date:{type:String,required:!0,default:""},url:{type:String,default:""},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""}},data:function(){return{displayLegends:[!0,!0],colors:[Object(x.a)("B"),Object(x.a)("A")],canvas:!0,yAxesBgPlugin:f.b}},computed:{displayInfo:function(){var e=Object(h.a)({displayData:this.displayData,dataIndex:1,digit:1}),t=e.lastDay,n=e.lastDayData,o=e.dayBeforeRatio;return[{lText:n,sText:"".concat(this.$t("{date} の数値",{date:this.$d(t,"date")}),"（").concat(this.$t("７日間移動平均"),"）"),sTextUnder:"（".concat(this.$t("前日比"),": ").concat(o," ").concat(this.unit,"）"),unit:this.unit}]},displayData:function(){return{labels:this.labels,datasets:[{type:"bar",label:this.dataLabels[0],data:this.chartData[0],backgroundColor:this.colors[0].fillColor,borderColor:this.colors[0].strokeColor,borderWidth:1,order:3},{type:"line",label:this.dataLabels[1],data:this.chartData[1],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:this.colors[1].fillColor,borderWidth:3,fill:!1,order:2,lineTension:0}]}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(c.a)(this.dataLabels.map((function(text,i){return{text:text,value:String(i),align:"end"}}))))},tableData:function(){var e=this;return this.labels.map((function(label,i){return Object.assign.apply(Object,[{text:label}].concat(Object(c.a)(e.dataLabels.map((function(t,n){var c;return null===e.chartData[n][i]?Object(o.a)({},n,""):Object(o.a)({},n,e.getFormatter(n)(parseFloat(null===(c=e.chartData[n][i])||void 0===c?void 0:c.toLocaleString())))})))))})).sort((function(a,b){return l()(a.text).unix()-l()(b.text).unix()})).reverse()},displayOption:function(){var e=this,t=this.unit,n={tooltips:{displayColors:!1,callbacks:{label:function(n){var o=e.getFormatter(n.datasetIndex)(parseFloat(n.value.toLocaleString()));return"".concat(e.dataLabels[n.datasetIndex]," : ").concat(o," ").concat(t)},title:function(t,data){var label=data.labels[t[0].index];return e.$d(new Date(label),"date")}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return l()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{position:"left",gridLines:{display:!0,drawOnChartArea:!0,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(n,{animation:{duration:0}}),n},displayDataHeader:function(){return{labels:["2020-01-01"],datasets:this.dataLabels.map((function(e){return{data:[],backgroundColor:"transparent",borderWidth:0}}))}},displayOptionHeader:function(){return{tooltips:{enabled:!1},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,callback:function(label){return l()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{position:"left",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){return this.chartData.reduce((function(e,data){return Math.max.apply(Math,[e].concat(Object(c.a)(data)))}),0)}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()},makeLineData:function(e){return this.chartData[0].map((function(t){return e}))}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),e="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",e))}},L=_.default.extend(D),C=n(442),S=n(6);var component=Object(S.a)(L,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("data-view",{attrs:{title:e.title,"title-id":e.titleId,date:e.date,"head-title":e.title+e.infoTitles.join(",")},scopedSlots:e._u([{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:e.tableHeaders,items:e.tableData}})],1)]},proxy:!0},{key:"additionalDescription",fn:function(){return[e._t("additionalDescription")]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:e.infoTitles[0],"l-text":e.displayInfo[0].lText,"s-text":e.displayInfo[0].sText,"s-text-under":e.displayInfo[0].sTextUnder,unit:e.displayInfo[0].unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:e.url,expression:"url"}],attrs:{url:e.url}})]},proxy:!0}],null,!0)},[n("ul",{class:e.$style.GraphLegend,style:{display:e.canvas?"block":"none"}},e._l(e.dataLabels,(function(t,i){return n("li",{key:i,on:{click:function(t){return e.onClickLegend(i)}}},[n("button",[n("div",1===i?{style:{backgroundColor:e.colors[i].fillColor,border:0,height:"3px"}}:{style:{backgroundColor:e.colors[i].fillColor,borderColor:e.colors[i].strokeColor}}),e._v(" "),n("span",{style:{textDecoration:e.displayLegends[i]?"none":"line-through"}},[e._v(e._s(t))])])])})),0),e._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:e.titleId+"-graph"}},[e._v("\n    "+e._s(e.$t("{title}のグラフ",{title:e.title}))+"\n  ")]),e._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:e.canvas,expression:"canvas"}],attrs:{"display-data":e.displayData},scopedSlots:e._u([{key:"chart",fn:function(t){var o=t.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":e.chartId,"chart-data":e.displayData,options:e.displayOption,"display-legends":e.displayLegends,height:240,width:o}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":e.chartId+"-header-right","chart-data":e.displayDataHeader,options:e.displayOptionHeader,plugins:e.yAxesBgPlugin,"display-legends":e.displayLegends,height:240}})]},proxy:!0}])})],1)}),[],!1,(function(e){this.$style=C.default.locals||C.default}),null,null);t.default=component.exports;installComponents(component,{ScrollableChart:n(362).default,DataViewTable:n(363).default,DataViewDataSetPanel:n(361).default,OpenDataLink:n(366).default,DataView:n(360).default})},442:function(e,t,n){"use strict";var o=n(385),c=n.n(o);n.d(t,"default",(function(){return c.a}))},443:function(e,t,n){(t=n(18)(!1)).push([e.i,".GraphLegend_UPG9T{text-align:center;list-style:none;padding:0!important}.GraphLegend_UPG9T li{display:inline-block;margin:0 3px}.GraphLegend_UPG9T li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_UPG9T li button{color:#707070;font-size:1.2rem}",""]),t.locals={GraphLegend:"GraphLegend_UPG9T"},e.exports=t},511:function(e){e.exports=JSON.parse('{"date":"2021/2/1 19:00","data":[{"date":"2020-03-01","count":47,"weekly_average_count":null},{"date":"2020-03-02","count":20,"weekly_average_count":null},{"date":"2020-03-03","count":25,"weekly_average_count":null},{"date":"2020-03-04","count":25,"weekly_average_count":null},{"date":"2020-03-05","count":23,"weekly_average_count":null},{"date":"2020-03-06","count":28,"weekly_average_count":null},{"date":"2020-03-07","count":34,"weekly_average_count":28.9},{"date":"2020-03-08","count":25,"weekly_average_count":25.7},{"date":"2020-03-09","count":38,"weekly_average_count":28.3},{"date":"2020-03-10","count":19,"weekly_average_count":27.4},{"date":"2020-03-11","count":19,"weekly_average_count":26.6},{"date":"2020-03-12","count":23,"weekly_average_count":26.6},{"date":"2020-03-13","count":25,"weekly_average_count":26.1},{"date":"2020-03-14","count":22,"weekly_average_count":24.4},{"date":"2020-03-15","count":32,"weekly_average_count":25.4},{"date":"2020-03-16","count":42,"weekly_average_count":26},{"date":"2020-03-17","count":15,"weekly_average_count":25.4},{"date":"2020-03-18","count":28,"weekly_average_count":26.7},{"date":"2020-03-19","count":24,"weekly_average_count":26.9},{"date":"2020-03-20","count":38,"weekly_average_count":28.7},{"date":"2020-03-21","count":29,"weekly_average_count":29.7},{"date":"2020-03-22","count":37,"weekly_average_count":30.4},{"date":"2020-03-23","count":24,"weekly_average_count":27.9},{"date":"2020-03-24","count":26,"weekly_average_count":29.4},{"date":"2020-03-25","count":27,"weekly_average_count":29.3},{"date":"2020-03-26","count":24,"weekly_average_count":29.3},{"date":"2020-03-27","count":41,"weekly_average_count":29.7},{"date":"2020-03-28","count":41,"weekly_average_count":31.4},{"date":"2020-03-29","count":39,"weekly_average_count":31.7},{"date":"2020-03-30","count":48,"weekly_average_count":35.1},{"date":"2020-03-31","count":43,"weekly_average_count":37.6},{"date":"2020-04-01","count":48,"weekly_average_count":40.6},{"date":"2020-04-02","count":53,"weekly_average_count":44.7},{"date":"2020-04-03","count":69,"weekly_average_count":48.7},{"date":"2020-04-04","count":76,"weekly_average_count":53.7},{"date":"2020-04-05","count":82,"weekly_average_count":59.9},{"date":"2020-04-06","count":78,"weekly_average_count":64.1},{"date":"2020-04-07","count":99,"weekly_average_count":72.1},{"date":"2020-04-08","count":81,"weekly_average_count":76.9},{"date":"2020-04-09","count":89,"weekly_average_count":82},{"date":"2020-04-10","count":69,"weekly_average_count":82},{"date":"2020-04-11","count":84,"weekly_average_count":83.1},{"date":"2020-04-12","count":108,"weekly_average_count":86.9},{"date":"2020-04-13","count":82,"weekly_average_count":87.4},{"date":"2020-04-14","count":79,"weekly_average_count":84.6},{"date":"2020-04-15","count":98,"weekly_average_count":87},{"date":"2020-04-16","count":53,"weekly_average_count":81.9},{"date":"2020-04-17","count":55,"weekly_average_count":79.9},{"date":"2020-04-18","count":88,"weekly_average_count":80.4},{"date":"2020-04-19","count":118,"weekly_average_count":81.9},{"date":"2020-04-20","count":67,"weekly_average_count":79.7},{"date":"2020-04-21","count":64,"weekly_average_count":77.6},{"date":"2020-04-22","count":69,"weekly_average_count":73.4},{"date":"2020-04-23","count":50,"weekly_average_count":73},{"date":"2020-04-24","count":78,"weekly_average_count":76.3},{"date":"2020-04-25","count":82,"weekly_average_count":75.4},{"date":"2020-04-26","count":100,"weekly_average_count":72.9},{"date":"2020-04-27","count":73,"weekly_average_count":73.7},{"date":"2020-04-28","count":85,"weekly_average_count":76.7},{"date":"2020-04-29","count":108,"weekly_average_count":82.3},{"date":"2020-04-30","count":80,"weekly_average_count":86.6},{"date":"2020-05-01","count":61,"weekly_average_count":84.1},{"date":"2020-05-02","count":121,"weekly_average_count":89.7},{"date":"2020-05-03","count":103,"weekly_average_count":90.1},{"date":"2020-05-04","count":115,"weekly_average_count":96.1},{"date":"2020-05-05","count":112,"weekly_average_count":100},{"date":"2020-05-06","count":70,"weekly_average_count":94.6},{"date":"2020-05-07","count":66,"weekly_average_count":92.6},{"date":"2020-05-08","count":68,"weekly_average_count":93.6},{"date":"2020-05-09","count":57,"weekly_average_count":84.4},{"date":"2020-05-10","count":81,"weekly_average_count":81.3},{"date":"2020-05-11","count":61,"weekly_average_count":73.6},{"date":"2020-05-12","count":46,"weekly_average_count":64.1},{"date":"2020-05-13","count":42,"weekly_average_count":60.1},{"date":"2020-05-14","count":45,"weekly_average_count":57.1},{"date":"2020-05-15","count":34,"weekly_average_count":52.3},{"date":"2020-05-16","count":37,"weekly_average_count":49.4},{"date":"2020-05-17","count":73,"weekly_average_count":48.3},{"date":"2020-05-18","count":44,"weekly_average_count":45.9},{"date":"2020-05-19","count":27,"weekly_average_count":43.1},{"date":"2020-05-20","count":20,"weekly_average_count":40},{"date":"2020-05-21","count":33,"weekly_average_count":38.3},{"date":"2020-05-22","count":30,"weekly_average_count":37.7},{"date":"2020-05-23","count":28,"weekly_average_count":36.4},{"date":"2020-05-24","count":35,"weekly_average_count":31},{"date":"2020-05-25","count":35,"weekly_average_count":29.7},{"date":"2020-05-26","count":30,"weekly_average_count":30.1},{"date":"2020-05-27","count":30,"weekly_average_count":31.6},{"date":"2020-05-28","count":30,"weekly_average_count":31.1},{"date":"2020-05-29","count":23,"weekly_average_count":30.1},{"date":"2020-05-30","count":33,"weekly_average_count":30.9},{"date":"2020-05-31","count":36,"weekly_average_count":31},{"date":"2020-06-01","count":32,"weekly_average_count":30.6},{"date":"2020-06-02","count":28,"weekly_average_count":30.3},{"date":"2020-06-03","count":38,"weekly_average_count":31.4},{"date":"2020-06-04","count":27,"weekly_average_count":31},{"date":"2020-06-05","count":30,"weekly_average_count":32},{"date":"2020-06-06","count":39,"weekly_average_count":32.9},{"date":"2020-06-07","count":41,"weekly_average_count":33.6},{"date":"2020-06-08","count":28,"weekly_average_count":33},{"date":"2020-06-09","count":28,"weekly_average_count":33},{"date":"2020-06-10","count":30,"weekly_average_count":31.9},{"date":"2020-06-11","count":30,"weekly_average_count":32.3},{"date":"2020-06-12","count":27,"weekly_average_count":31.9},{"date":"2020-06-13","count":31,"weekly_average_count":30.7},{"date":"2020-06-14","count":41,"weekly_average_count":30.7},{"date":"2020-06-15","count":41,"weekly_average_count":32.6},{"date":"2020-06-16","count":25,"weekly_average_count":32.1},{"date":"2020-06-17","count":21,"weekly_average_count":30.9},{"date":"2020-06-18","count":20,"weekly_average_count":29.4},{"date":"2020-06-19","count":22,"weekly_average_count":28.7},{"date":"2020-06-20","count":22,"weekly_average_count":27.4},{"date":"2020-06-21","count":64,"weekly_average_count":30.7},{"date":"2020-06-22","count":28,"weekly_average_count":28.9},{"date":"2020-06-23","count":30,"weekly_average_count":29.6},{"date":"2020-06-24","count":33,"weekly_average_count":31.3},{"date":"2020-06-25","count":27,"weekly_average_count":32.3},{"date":"2020-06-26","count":34,"weekly_average_count":34},{"date":"2020-06-27","count":32,"weekly_average_count":35.4},{"date":"2020-06-28","count":29,"weekly_average_count":30.4},{"date":"2020-06-29","count":27,"weekly_average_count":30.3},{"date":"2020-06-30","count":27,"weekly_average_count":29.9},{"date":"2020-07-01","count":25,"weekly_average_count":28.7},{"date":"2020-07-02","count":26,"weekly_average_count":28.6},{"date":"2020-07-03","count":11,"weekly_average_count":25.3},{"date":"2020-07-04","count":34,"weekly_average_count":25.6},{"date":"2020-07-05","count":35,"weekly_average_count":26.4},{"date":"2020-07-06","count":27,"weekly_average_count":26.4},{"date":"2020-07-07","count":29,"weekly_average_count":26.7},{"date":"2020-07-08","count":23,"weekly_average_count":26.4},{"date":"2020-07-09","count":27,"weekly_average_count":26.6},{"date":"2020-07-10","count":22,"weekly_average_count":28.1},{"date":"2020-07-11","count":38,"weekly_average_count":28.7},{"date":"2020-07-12","count":48,"weekly_average_count":30.6},{"date":"2020-07-13","count":33,"weekly_average_count":31.4},{"date":"2020-07-14","count":28,"weekly_average_count":31.3},{"date":"2020-07-15","count":23,"weekly_average_count":31.3},{"date":"2020-07-16","count":25,"weekly_average_count":31},{"date":"2020-07-17","count":25,"weekly_average_count":31.4},{"date":"2020-07-18","count":25,"weekly_average_count":29.6},{"date":"2020-07-19","count":39,"weekly_average_count":28.3},{"date":"2020-07-20","count":53,"weekly_average_count":31.1},{"date":"2020-07-21","count":27,"weekly_average_count":31},{"date":"2020-07-22","count":49,"weekly_average_count":34.7},{"date":"2020-07-23","count":49,"weekly_average_count":38.1},{"date":"2020-07-24","count":45,"weekly_average_count":41},{"date":"2020-07-25","count":51,"weekly_average_count":44.7},{"date":"2020-07-26","count":44,"weekly_average_count":45.4},{"date":"2020-07-27","count":38,"weekly_average_count":43.3},{"date":"2020-07-28","count":39,"weekly_average_count":45},{"date":"2020-07-29","count":43,"weekly_average_count":44.1},{"date":"2020-07-30","count":33,"weekly_average_count":41.9},{"date":"2020-07-31","count":34,"weekly_average_count":40.3},{"date":"2020-08-01","count":46,"weekly_average_count":39.6},{"date":"2020-08-02","count":49,"weekly_average_count":40.3},{"date":"2020-08-03","count":38,"weekly_average_count":40.3},{"date":"2020-08-04","count":50,"weekly_average_count":41.9},{"date":"2020-08-05","count":46,"weekly_average_count":42.3},{"date":"2020-08-06","count":46,"weekly_average_count":44.1},{"date":"2020-08-07","count":52,"weekly_average_count":46.7},{"date":"2020-08-08","count":61,"weekly_average_count":48.9},{"date":"2020-08-09","count":65,"weekly_average_count":51.1},{"date":"2020-08-10","count":82,"weekly_average_count":57.4},{"date":"2020-08-11","count":93,"weekly_average_count":63.6},{"date":"2020-08-12","count":69,"weekly_average_count":66.9},{"date":"2020-08-13","count":76,"weekly_average_count":71.1},{"date":"2020-08-14","count":55,"weekly_average_count":71.6},{"date":"2020-08-15","count":81,"weekly_average_count":74.4},{"date":"2020-08-16","count":101,"weekly_average_count":79.6},{"date":"2020-08-17","count":82,"weekly_average_count":79.6},{"date":"2020-08-18","count":67,"weekly_average_count":75.9},{"date":"2020-08-19","count":56,"weekly_average_count":74},{"date":"2020-08-20","count":51,"weekly_average_count":70.4},{"date":"2020-08-21","count":43,"weekly_average_count":68.7},{"date":"2020-08-22","count":48,"weekly_average_count":64},{"date":"2020-08-23","count":48,"weekly_average_count":56.4},{"date":"2020-08-24","count":49,"weekly_average_count":51.7},{"date":"2020-08-25","count":48,"weekly_average_count":49},{"date":"2020-08-26","count":36,"weekly_average_count":46.1},{"date":"2020-08-27","count":44,"weekly_average_count":45.1},{"date":"2020-08-28","count":51,"weekly_average_count":46.3},{"date":"2020-08-29","count":41,"weekly_average_count":45.3},{"date":"2020-08-30","count":61,"weekly_average_count":47.1},{"date":"2020-08-31","count":53,"weekly_average_count":47.7},{"date":"2020-09-01","count":45,"weekly_average_count":47.3},{"date":"2020-09-02","count":39,"weekly_average_count":47.7},{"date":"2020-09-03","count":36,"weekly_average_count":46.6},{"date":"2020-09-04","count":34,"weekly_average_count":44.1},{"date":"2020-09-05","count":49,"weekly_average_count":45.3},{"date":"2020-09-06","count":49,"weekly_average_count":43.6},{"date":"2020-09-07","count":38,"weekly_average_count":41.4},{"date":"2020-09-08","count":20,"weekly_average_count":37.9},{"date":"2020-09-09","count":41,"weekly_average_count":38.1},{"date":"2020-09-10","count":37,"weekly_average_count":38.3},{"date":"2020-09-11","count":46,"weekly_average_count":40},{"date":"2020-09-12","count":33,"weekly_average_count":37.7},{"date":"2020-09-13","count":47,"weekly_average_count":37.4},{"date":"2020-09-14","count":37,"weekly_average_count":37.3},{"date":"2020-09-15","count":47,"weekly_average_count":41.1},{"date":"2020-09-16","count":19,"weekly_average_count":38},{"date":"2020-09-17","count":32,"weekly_average_count":37.3},{"date":"2020-09-18","count":40,"weekly_average_count":36.4},{"date":"2020-09-19","count":43,"weekly_average_count":37.9},{"date":"2020-09-20","count":42,"weekly_average_count":37.1},{"date":"2020-09-21","count":40,"weekly_average_count":37.6},{"date":"2020-09-22","count":50,"weekly_average_count":38},{"date":"2020-09-23","count":30,"weekly_average_count":39.6},{"date":"2020-09-24","count":41,"weekly_average_count":40.9},{"date":"2020-09-25","count":29,"weekly_average_count":39.3},{"date":"2020-09-26","count":29,"weekly_average_count":37.3},{"date":"2020-09-27","count":42,"weekly_average_count":37.3},{"date":"2020-09-28","count":36,"weekly_average_count":36.7},{"date":"2020-09-29","count":34,"weekly_average_count":34.4},{"date":"2020-09-30","count":29,"weekly_average_count":34.3},{"date":"2020-10-01","count":36,"weekly_average_count":33.6},{"date":"2020-10-02","count":37,"weekly_average_count":34.7},{"date":"2020-10-03","count":29,"weekly_average_count":34.7},{"date":"2020-10-04","count":44,"weekly_average_count":35},{"date":"2020-10-05","count":41,"weekly_average_count":35.7},{"date":"2020-10-06","count":33,"weekly_average_count":35.6},{"date":"2020-10-07","count":31,"weekly_average_count":35.9},{"date":"2020-10-08","count":31,"weekly_average_count":35.1},{"date":"2020-10-09","count":32,"weekly_average_count":34.4},{"date":"2020-10-10","count":35,"weekly_average_count":35.3},{"date":"2020-10-11","count":47,"weekly_average_count":35.7},{"date":"2020-10-12","count":43,"weekly_average_count":36},{"date":"2020-10-13","count":38,"weekly_average_count":36.7},{"date":"2020-10-14","count":25,"weekly_average_count":35.9},{"date":"2020-10-15","count":27,"weekly_average_count":35.3},{"date":"2020-10-16","count":35,"weekly_average_count":35.7},{"date":"2020-10-17","count":30,"weekly_average_count":35},{"date":"2020-10-18","count":44,"weekly_average_count":34.6},{"date":"2020-10-19","count":35,"weekly_average_count":33.4},{"date":"2020-10-20","count":34,"weekly_average_count":32.9},{"date":"2020-10-21","count":39,"weekly_average_count":34.9},{"date":"2020-10-22","count":41,"weekly_average_count":36.9},{"date":"2020-10-23","count":36,"weekly_average_count":37},{"date":"2020-10-24","count":27,"weekly_average_count":36.6},{"date":"2020-10-25","count":52,"weekly_average_count":37.7},{"date":"2020-10-26","count":38,"weekly_average_count":38.1},{"date":"2020-10-27","count":28,"weekly_average_count":37.3},{"date":"2020-10-28","count":33,"weekly_average_count":36.4},{"date":"2020-10-29","count":32,"weekly_average_count":35.1},{"date":"2020-10-30","count":23,"weekly_average_count":33.3},{"date":"2020-10-31","count":33,"weekly_average_count":34.1},{"date":"2020-11-01","count":40,"weekly_average_count":32.4},{"date":"2020-11-02","count":34,"weekly_average_count":31.9},{"date":"2020-11-03","count":49,"weekly_average_count":34.9},{"date":"2020-11-04","count":33,"weekly_average_count":34.9},{"date":"2020-11-05","count":43,"weekly_average_count":36.4},{"date":"2020-11-06","count":31,"weekly_average_count":37.6},{"date":"2020-11-07","count":51,"weekly_average_count":40.1},{"date":"2020-11-08","count":46,"weekly_average_count":41},{"date":"2020-11-09","count":46,"weekly_average_count":42.7},{"date":"2020-11-10","count":44,"weekly_average_count":42},{"date":"2020-11-11","count":49,"weekly_average_count":44.3},{"date":"2020-11-12","count":30,"weekly_average_count":42.4},{"date":"2020-11-13","count":43,"weekly_average_count":44.1},{"date":"2020-11-14","count":53,"weekly_average_count":44.4},{"date":"2020-11-15","count":56,"weekly_average_count":45.9},{"date":"2020-11-16","count":46,"weekly_average_count":45.9},{"date":"2020-11-17","count":54,"weekly_average_count":47.3},{"date":"2020-11-18","count":25,"weekly_average_count":43.9},{"date":"2020-11-19","count":54,"weekly_average_count":47.3},{"date":"2020-11-20","count":49,"weekly_average_count":48.1},{"date":"2020-11-21","count":47,"weekly_average_count":47.3},{"date":"2020-11-22","count":74,"weekly_average_count":49.9},{"date":"2020-11-23","count":52,"weekly_average_count":50.7},{"date":"2020-11-24","count":47,"weekly_average_count":49.7},{"date":"2020-11-25","count":48,"weekly_average_count":53},{"date":"2020-11-26","count":45,"weekly_average_count":51.7},{"date":"2020-11-27","count":30,"weekly_average_count":49},{"date":"2020-11-28","count":36,"weekly_average_count":47.4},{"date":"2020-11-29","count":38,"weekly_average_count":42.3},{"date":"2020-11-30","count":48,"weekly_average_count":41.7},{"date":"2020-12-01","count":34,"weekly_average_count":39.9},{"date":"2020-12-02","count":43,"weekly_average_count":39.1},{"date":"2020-12-03","count":47,"weekly_average_count":39.4},{"date":"2020-12-04","count":42,"weekly_average_count":41.1},{"date":"2020-12-05","count":42,"weekly_average_count":42},{"date":"2020-12-06","count":43,"weekly_average_count":42.7},{"date":"2020-12-07","count":41,"weekly_average_count":41.7},{"date":"2020-12-08","count":43,"weekly_average_count":43},{"date":"2020-12-09","count":47,"weekly_average_count":43.6},{"date":"2020-12-10","count":47,"weekly_average_count":43.6},{"date":"2020-12-11","count":45,"weekly_average_count":44},{"date":"2020-12-12","count":51,"weekly_average_count":45.3},{"date":"2020-12-13","count":47,"weekly_average_count":45.9},{"date":"2020-12-14","count":39,"weekly_average_count":45.6},{"date":"2020-12-15","count":46,"weekly_average_count":46},{"date":"2020-12-16","count":51,"weekly_average_count":46.6},{"date":"2020-12-17","count":52,"weekly_average_count":47.3},{"date":"2020-12-18","count":63,"weekly_average_count":49.9},{"date":"2020-12-19","count":40,"weekly_average_count":48.3},{"date":"2020-12-20","count":60,"weekly_average_count":50.1},{"date":"2020-12-21","count":66,"weekly_average_count":54},{"date":"2020-12-22","count":56,"weekly_average_count":55.4},{"date":"2020-12-23","count":66,"weekly_average_count":57.6},{"date":"2020-12-24","count":56,"weekly_average_count":58.1},{"date":"2020-12-25","count":58,"weekly_average_count":57.4},{"date":"2020-12-26","count":54,"weekly_average_count":59.4},{"date":"2020-12-27","count":55,"weekly_average_count":58.7},{"date":"2020-12-28","count":81,"weekly_average_count":60.9},{"date":"2020-12-29","count":80,"weekly_average_count":64.3},{"date":"2020-12-30","count":64,"weekly_average_count":64},{"date":"2020-12-31","count":73,"weekly_average_count":66.4},{"date":"2021-01-01","count":68,"weekly_average_count":67.9},{"date":"2021-01-02","count":79,"weekly_average_count":71.4},{"date":"2021-01-03","count":74,"weekly_average_count":74.1},{"date":"2021-01-04","count":87,"weekly_average_count":75},{"date":"2021-01-05","count":112,"weekly_average_count":79.6},{"date":"2021-01-06","count":105,"weekly_average_count":85.4},{"date":"2021-01-07","count":98,"weekly_average_count":89},{"date":"2021-01-08","count":73,"weekly_average_count":89.7},{"date":"2021-01-09","count":121,"weekly_average_count":95.7},{"date":"2021-01-10","count":141,"weekly_average_count":105.3},{"date":"2021-01-11","count":122,"weekly_average_count":110.3},{"date":"2021-01-12","count":160,"weekly_average_count":117.1},{"date":"2021-01-13","count":141,"weekly_average_count":122.3},{"date":"2021-01-14","count":127,"weekly_average_count":126.4},{"date":"2021-01-15","count":110,"weekly_average_count":131.7},{"date":"2021-01-16","count":120,"weekly_average_count":131.6},{"date":"2021-01-17","count":108,"weekly_average_count":126.9},{"date":"2021-01-18","count":136,"weekly_average_count":128.9},{"date":"2021-01-19","count":115,"weekly_average_count":122.4},{"date":"2021-01-20","count":112,"weekly_average_count":118.3},{"date":"2021-01-21","count":116,"weekly_average_count":116.7},{"date":"2021-01-22","count":127,"weekly_average_count":119.1},{"date":"2021-01-23","count":108,"weekly_average_count":117.4},{"date":"2021-01-24","count":141,"weekly_average_count":122.1},{"date":"2021-01-25","count":121,"weekly_average_count":120},{"date":"2021-01-26","count":126,"weekly_average_count":121.6},{"date":"2021-01-27","count":116,"weekly_average_count":122.1},{"date":"2021-01-28","count":89,"weekly_average_count":118.3},{"date":"2021-01-29","count":97,"weekly_average_count":114},{"date":"2021-01-30","count":104,"weekly_average_count":113.4},{"date":"2021-01-31","count":106,"weekly_average_count":108.4}]}')},570:function(e,t,n){"use strict";n.r(t);n(34);var o=n(402),c=n(511),r=n(364),l={components:{MixedBarAndLineChart:o.default},data:function(){var data=c.data,e=data.map((function(e){return e.count})),t=data.map((function(e){return e.weekly_average_count})),n=data.map((function(e){return e.date})),o=[e,t],l=[this.$t("適用件数"),this.$t("７日間移動平均")];return{chartData:o,date:c.date,labels:n,dataLabels:l,getFormatter:function(e){return 1===e?Object(r.b)(1):Object(r.c)()}}}},_=n(6),d=n(33),y=n.n(d),v=n(592),component=Object(_.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("mixed-bar-and-line-chart",{attrs:{title:e.$t("モニタリング項目(5)"),"title-id":"number-of-tokyo-rules-applied","info-titles":[e.$t("救急医療の東京ルールの適用件数")],"chart-id":"mixed-bar-and-line-chart-tokyo-rules","chart-data":e.chartData,"get-formatter":e.getFormatter,date:e.date,labels:e.labels,"data-labels":e.dataLabels,unit:e.$t("件.reports")},scopedSlots:e._u([{key:"additionalDescription",fn:function(){return[n("span",[e._v(e._s(e.$t("（注）")))]),e._v(" "),n("ul",[n("li",[e._v("\n            "+e._s(e.$t("集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を折れ線グラフで示す（例えば、2020年5月7日の移動平均値は、2020年5月1日から5月7日までの実績値を平均したもの）"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;y()(component,{MixedBarAndLineChart:n(402).default}),y()(component,{VCol:v.a})}}]);