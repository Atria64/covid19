(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{373:function(e,d,t){t(4)({target:"Math",stat:!0},{sign:t(239)})},397:function(e,d,t){var content=t(398);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(19).default)("01907af4",content,!0,{sourceMap:!1})},398:function(e,d,t){(d=t(18)(!1)).push([e.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),e.exports=d},455:function(e,d,t){"use strict";t.r(d);var o=t(361).default.extend({props:{lText:{type:String,default:"{num}"},num:{type:String,default:""}}}),n=t(6),component=Object(n.a)(o,(function(){var e=this,d=e.$createElement,t=e._self._c||d;return t("div",{staticClass:"DataView-DataSet-info"},[t("i18n",{staticClass:"DataView-DataSet-summary-unit",attrs:{tag:"small",path:e.lText},scopedSlots:e._u([{key:"num",fn:function(){return[t("span",{staticClass:"DataView-DataSet-summary"},[e._v("\n        "+e._s(e.num)+"\n      ")])]},proxy:!0}])}),e._v(" "),t("small",{staticClass:"DataView-DataSet-date"},[e._v(e._s(e.sText))])],1)}),[],!1,null,null,null);d.default=component.exports},464:function(e,d,t){"use strict";var o=t(3),n=(t(397),t(388)),l=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}}),c=t(103),v=t(72);function _(object,e){var d=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),d.push.apply(d,t)}return d}function r(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(d){Object(o.a)(e,d,source[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(d){Object.defineProperty(e,d,Object.getOwnPropertyDescriptor(source,d))}))}return e}d.a=Object(v.a)(l,c.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return r(r({},l.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,r({},l.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},519:function(e){e.exports=JSON.parse('{"date":"2021/2/1 19:00","unknown_count":36660,"data":[{"developed_date":"2020-01-14","count":1},{"developed_date":"2020-01-15","count":0},{"developed_date":"2020-01-16","count":0},{"developed_date":"2020-01-17","count":1},{"developed_date":"2020-01-18","count":0},{"developed_date":"2020-01-19","count":0},{"developed_date":"2020-01-20","count":2},{"developed_date":"2020-01-21","count":0},{"developed_date":"2020-01-22","count":1},{"developed_date":"2020-01-23","count":2},{"developed_date":"2020-01-24","count":1},{"developed_date":"2020-01-25","count":0},{"developed_date":"2020-01-26","count":1},{"developed_date":"2020-01-27","count":0},{"developed_date":"2020-01-28","count":1},{"developed_date":"2020-01-29","count":1},{"developed_date":"2020-01-30","count":0},{"developed_date":"2020-01-31","count":0},{"developed_date":"2020-02-01","count":1},{"developed_date":"2020-02-02","count":2},{"developed_date":"2020-02-03","count":2},{"developed_date":"2020-02-04","count":1},{"developed_date":"2020-02-05","count":1},{"developed_date":"2020-02-06","count":1},{"developed_date":"2020-02-07","count":2},{"developed_date":"2020-02-08","count":0},{"developed_date":"2020-02-09","count":0},{"developed_date":"2020-02-10","count":4},{"developed_date":"2020-02-11","count":0},{"developed_date":"2020-02-12","count":1},{"developed_date":"2020-02-13","count":0},{"developed_date":"2020-02-14","count":1},{"developed_date":"2020-02-15","count":0},{"developed_date":"2020-02-16","count":0},{"developed_date":"2020-02-17","count":0},{"developed_date":"2020-02-18","count":1},{"developed_date":"2020-02-19","count":0},{"developed_date":"2020-02-20","count":3},{"developed_date":"2020-02-21","count":0},{"developed_date":"2020-02-22","count":0},{"developed_date":"2020-02-23","count":1},{"developed_date":"2020-02-24","count":2},{"developed_date":"2020-02-25","count":3},{"developed_date":"2020-02-26","count":2},{"developed_date":"2020-02-27","count":2},{"developed_date":"2020-02-28","count":3},{"developed_date":"2020-02-29","count":0},{"developed_date":"2020-03-01","count":2},{"developed_date":"2020-03-02","count":1},{"developed_date":"2020-03-03","count":5},{"developed_date":"2020-03-04","count":3},{"developed_date":"2020-03-05","count":1},{"developed_date":"2020-03-06","count":6},{"developed_date":"2020-03-07","count":2},{"developed_date":"2020-03-08","count":4},{"developed_date":"2020-03-09","count":4},{"developed_date":"2020-03-10","count":9},{"developed_date":"2020-03-11","count":3},{"developed_date":"2020-03-12","count":7},{"developed_date":"2020-03-13","count":6},{"developed_date":"2020-03-14","count":6},{"developed_date":"2020-03-15","count":14},{"developed_date":"2020-03-16","count":17},{"developed_date":"2020-03-17","count":18},{"developed_date":"2020-03-18","count":23},{"developed_date":"2020-03-19","count":25},{"developed_date":"2020-03-20","count":34},{"developed_date":"2020-03-21","count":18},{"developed_date":"2020-03-22","count":36},{"developed_date":"2020-03-23","count":61},{"developed_date":"2020-03-24","count":47},{"developed_date":"2020-03-25","count":63},{"developed_date":"2020-03-26","count":67},{"developed_date":"2020-03-27","count":91},{"developed_date":"2020-03-28","count":95},{"developed_date":"2020-03-29","count":99},{"developed_date":"2020-03-30","count":158},{"developed_date":"2020-03-31","count":106},{"developed_date":"2020-04-01","count":158},{"developed_date":"2020-04-02","count":121},{"developed_date":"2020-04-03","count":164},{"developed_date":"2020-04-04","count":149},{"developed_date":"2020-04-05","count":118},{"developed_date":"2020-04-06","count":137},{"developed_date":"2020-04-07","count":125},{"developed_date":"2020-04-08","count":100},{"developed_date":"2020-04-09","count":78},{"developed_date":"2020-04-10","count":124},{"developed_date":"2020-04-11","count":89},{"developed_date":"2020-04-12","count":69},{"developed_date":"2020-04-13","count":87},{"developed_date":"2020-04-14","count":63},{"developed_date":"2020-04-15","count":61},{"developed_date":"2020-04-16","count":64},{"developed_date":"2020-04-17","count":58},{"developed_date":"2020-04-18","count":52},{"developed_date":"2020-04-19","count":40},{"developed_date":"2020-04-20","count":53},{"developed_date":"2020-04-21","count":43},{"developed_date":"2020-04-22","count":41},{"developed_date":"2020-04-23","count":30},{"developed_date":"2020-04-24","count":28},{"developed_date":"2020-04-25","count":33},{"developed_date":"2020-04-26","count":23},{"developed_date":"2020-04-27","count":28},{"developed_date":"2020-04-28","count":32},{"developed_date":"2020-04-29","count":34},{"developed_date":"2020-04-30","count":17},{"developed_date":"2020-05-01","count":25},{"developed_date":"2020-05-02","count":15},{"developed_date":"2020-05-03","count":21},{"developed_date":"2020-05-04","count":16},{"developed_date":"2020-05-05","count":11},{"developed_date":"2020-05-06","count":7},{"developed_date":"2020-05-07","count":5},{"developed_date":"2020-05-08","count":5},{"developed_date":"2020-05-09","count":6},{"developed_date":"2020-05-10","count":5},{"developed_date":"2020-05-11","count":3},{"developed_date":"2020-05-12","count":5},{"developed_date":"2020-05-13","count":4},{"developed_date":"2020-05-14","count":3},{"developed_date":"2020-05-15","count":6},{"developed_date":"2020-05-16","count":7},{"developed_date":"2020-05-17","count":4},{"developed_date":"2020-05-18","count":5},{"developed_date":"2020-05-19","count":5},{"developed_date":"2020-05-20","count":9},{"developed_date":"2020-05-21","count":5},{"developed_date":"2020-05-22","count":7},{"developed_date":"2020-05-23","count":10},{"developed_date":"2020-05-24","count":15},{"developed_date":"2020-05-25","count":7},{"developed_date":"2020-05-26","count":19},{"developed_date":"2020-05-27","count":13},{"developed_date":"2020-05-28","count":21},{"developed_date":"2020-05-29","count":13},{"developed_date":"2020-05-30","count":10},{"developed_date":"2020-05-31","count":13},{"developed_date":"2020-06-01","count":14},{"developed_date":"2020-06-02","count":13},{"developed_date":"2020-06-03","count":12},{"developed_date":"2020-06-04","count":21},{"developed_date":"2020-06-05","count":15},{"developed_date":"2020-06-06","count":20},{"developed_date":"2020-06-07","count":14},{"developed_date":"2020-06-08","count":23},{"developed_date":"2020-06-09","count":17},{"developed_date":"2020-06-10","count":31},{"developed_date":"2020-06-11","count":19},{"developed_date":"2020-06-12","count":24},{"developed_date":"2020-06-13","count":17},{"developed_date":"2020-06-14","count":26},{"developed_date":"2020-06-15","count":22},{"developed_date":"2020-06-16","count":33},{"developed_date":"2020-06-17","count":29},{"developed_date":"2020-06-18","count":24},{"developed_date":"2020-06-19","count":25},{"developed_date":"2020-06-20","count":49},{"developed_date":"2020-06-21","count":33},{"developed_date":"2020-06-22","count":47},{"developed_date":"2020-06-23","count":58},{"developed_date":"2020-06-24","count":57},{"developed_date":"2020-06-25","count":42},{"developed_date":"2020-06-26","count":46},{"developed_date":"2020-06-27","count":66},{"developed_date":"2020-06-28","count":65},{"developed_date":"2020-06-29","count":88},{"developed_date":"2020-06-30","count":115},{"developed_date":"2020-07-01","count":123},{"developed_date":"2020-07-02","count":103},{"developed_date":"2020-07-03","count":108},{"developed_date":"2020-07-04","count":103},{"developed_date":"2020-07-05","count":103},{"developed_date":"2020-07-06","count":169},{"developed_date":"2020-07-07","count":152},{"developed_date":"2020-07-08","count":133},{"developed_date":"2020-07-09","count":151},{"developed_date":"2020-07-10","count":161},{"developed_date":"2020-07-11","count":167},{"developed_date":"2020-07-12","count":168},{"developed_date":"2020-07-13","count":184},{"developed_date":"2020-07-14","count":164},{"developed_date":"2020-07-15","count":155},{"developed_date":"2020-07-16","count":169},{"developed_date":"2020-07-17","count":151},{"developed_date":"2020-07-18","count":165},{"developed_date":"2020-07-19","count":173},{"developed_date":"2020-07-20","count":211},{"developed_date":"2020-07-21","count":184},{"developed_date":"2020-07-22","count":189},{"developed_date":"2020-07-23","count":158},{"developed_date":"2020-07-24","count":176},{"developed_date":"2020-07-25","count":180},{"developed_date":"2020-07-26","count":224},{"developed_date":"2020-07-27","count":219},{"developed_date":"2020-07-28","count":230},{"developed_date":"2020-07-29","count":200},{"developed_date":"2020-07-30","count":193},{"developed_date":"2020-07-31","count":186},{"developed_date":"2020-08-01","count":231},{"developed_date":"2020-08-02","count":200},{"developed_date":"2020-08-03","count":234},{"developed_date":"2020-08-04","count":223},{"developed_date":"2020-08-05","count":183},{"developed_date":"2020-08-06","count":130},{"developed_date":"2020-08-07","count":163},{"developed_date":"2020-08-08","count":140},{"developed_date":"2020-08-09","count":141},{"developed_date":"2020-08-10","count":177},{"developed_date":"2020-08-11","count":179},{"developed_date":"2020-08-12","count":157},{"developed_date":"2020-08-13","count":137},{"developed_date":"2020-08-14","count":145},{"developed_date":"2020-08-15","count":165},{"developed_date":"2020-08-16","count":135},{"developed_date":"2020-08-17","count":159},{"developed_date":"2020-08-18","count":126},{"developed_date":"2020-08-19","count":114},{"developed_date":"2020-08-20","count":106},{"developed_date":"2020-08-21","count":89},{"developed_date":"2020-08-22","count":118},{"developed_date":"2020-08-23","count":90},{"developed_date":"2020-08-24","count":123},{"developed_date":"2020-08-25","count":123},{"developed_date":"2020-08-26","count":93},{"developed_date":"2020-08-27","count":88},{"developed_date":"2020-08-28","count":86},{"developed_date":"2020-08-29","count":91},{"developed_date":"2020-08-30","count":68},{"developed_date":"2020-08-31","count":96},{"developed_date":"2020-09-01","count":114},{"developed_date":"2020-09-02","count":88},{"developed_date":"2020-09-03","count":92},{"developed_date":"2020-09-04","count":108},{"developed_date":"2020-09-05","count":103},{"developed_date":"2020-09-06","count":88},{"developed_date":"2020-09-07","count":100},{"developed_date":"2020-09-08","count":107},{"developed_date":"2020-09-09","count":106},{"developed_date":"2020-09-10","count":91},{"developed_date":"2020-09-11","count":67},{"developed_date":"2020-09-12","count":97},{"developed_date":"2020-09-13","count":74},{"developed_date":"2020-09-14","count":130},{"developed_date":"2020-09-15","count":93},{"developed_date":"2020-09-16","count":93},{"developed_date":"2020-09-17","count":94},{"developed_date":"2020-09-18","count":76},{"developed_date":"2020-09-19","count":65},{"developed_date":"2020-09-20","count":72},{"developed_date":"2020-09-21","count":97},{"developed_date":"2020-09-22","count":113},{"developed_date":"2020-09-23","count":108},{"developed_date":"2020-09-24","count":104},{"developed_date":"2020-09-25","count":108},{"developed_date":"2020-09-26","count":95},{"developed_date":"2020-09-27","count":83},{"developed_date":"2020-09-28","count":112},{"developed_date":"2020-09-29","count":106},{"developed_date":"2020-09-30","count":85},{"developed_date":"2020-10-01","count":128},{"developed_date":"2020-10-02","count":98},{"developed_date":"2020-10-03","count":99},{"developed_date":"2020-10-04","count":91},{"developed_date":"2020-10-05","count":108},{"developed_date":"2020-10-06","count":112},{"developed_date":"2020-10-07","count":113},{"developed_date":"2020-10-08","count":138},{"developed_date":"2020-10-09","count":118},{"developed_date":"2020-10-10","count":115},{"developed_date":"2020-10-11","count":93},{"developed_date":"2020-10-12","count":138},{"developed_date":"2020-10-13","count":108},{"developed_date":"2020-10-14","count":98},{"developed_date":"2020-10-15","count":86},{"developed_date":"2020-10-16","count":99},{"developed_date":"2020-10-17","count":74},{"developed_date":"2020-10-18","count":76},{"developed_date":"2020-10-19","count":109},{"developed_date":"2020-10-20","count":122},{"developed_date":"2020-10-21","count":102},{"developed_date":"2020-10-22","count":91},{"developed_date":"2020-10-23","count":118},{"developed_date":"2020-10-24","count":99},{"developed_date":"2020-10-25","count":96},{"developed_date":"2020-10-26","count":129},{"developed_date":"2020-10-27","count":98},{"developed_date":"2020-10-28","count":109},{"developed_date":"2020-10-29","count":99},{"developed_date":"2020-10-30","count":126},{"developed_date":"2020-10-31","count":113},{"developed_date":"2020-11-01","count":117},{"developed_date":"2020-11-02","count":173},{"developed_date":"2020-11-03","count":185},{"developed_date":"2020-11-04","count":156},{"developed_date":"2020-11-05","count":177},{"developed_date":"2020-11-06","count":184},{"developed_date":"2020-11-07","count":159},{"developed_date":"2020-11-08","count":167},{"developed_date":"2020-11-09","count":208},{"developed_date":"2020-11-10","count":223},{"developed_date":"2020-11-11","count":229},{"developed_date":"2020-11-12","count":223},{"developed_date":"2020-11-13","count":230},{"developed_date":"2020-11-14","count":230},{"developed_date":"2020-11-15","count":243},{"developed_date":"2020-11-16","count":289},{"developed_date":"2020-11-17","count":321},{"developed_date":"2020-11-18","count":287},{"developed_date":"2020-11-19","count":253},{"developed_date":"2020-11-20","count":265},{"developed_date":"2020-11-21","count":228},{"developed_date":"2020-11-22","count":197},{"developed_date":"2020-11-23","count":230},{"developed_date":"2020-11-24","count":276},{"developed_date":"2020-11-25","count":243},{"developed_date":"2020-11-26","count":236},{"developed_date":"2020-11-27","count":262},{"developed_date":"2020-11-28","count":222},{"developed_date":"2020-11-29","count":239},{"developed_date":"2020-11-30","count":280},{"developed_date":"2020-12-01","count":279},{"developed_date":"2020-12-02","count":301},{"developed_date":"2020-12-03","count":279},{"developed_date":"2020-12-04","count":290},{"developed_date":"2020-12-05","count":249},{"developed_date":"2020-12-06","count":260},{"developed_date":"2020-12-07","count":335},{"developed_date":"2020-12-08","count":368},{"developed_date":"2020-12-09","count":335},{"developed_date":"2020-12-10","count":361},{"developed_date":"2020-12-11","count":322},{"developed_date":"2020-12-12","count":331},{"developed_date":"2020-12-13","count":327},{"developed_date":"2020-12-14","count":456},{"developed_date":"2020-12-15","count":431},{"developed_date":"2020-12-16","count":459},{"developed_date":"2020-12-17","count":396},{"developed_date":"2020-12-18","count":383},{"developed_date":"2020-12-19","count":371},{"developed_date":"2020-12-20","count":435},{"developed_date":"2020-12-21","count":539},{"developed_date":"2020-12-22","count":584},{"developed_date":"2020-12-23","count":551},{"developed_date":"2020-12-24","count":511},{"developed_date":"2020-12-25","count":560},{"developed_date":"2020-12-26","count":568},{"developed_date":"2020-12-27","count":597},{"developed_date":"2020-12-28","count":692},{"developed_date":"2020-12-29","count":755},{"developed_date":"2020-12-30","count":825},{"developed_date":"2020-12-31","count":900},{"developed_date":"2021-01-01","count":1141},{"developed_date":"2021-01-02","count":1271},{"developed_date":"2021-01-03","count":1296},{"developed_date":"2021-01-04","count":1490},{"developed_date":"2021-01-05","count":1360},{"developed_date":"2021-01-06","count":1320},{"developed_date":"2021-01-07","count":1143},{"developed_date":"2021-01-08","count":999},{"developed_date":"2021-01-09","count":938},{"developed_date":"2021-01-10","count":880},{"developed_date":"2021-01-11","count":874},{"developed_date":"2021-01-12","count":1007},{"developed_date":"2021-01-13","count":868},{"developed_date":"2021-01-14","count":709},{"developed_date":"2021-01-15","count":718},{"developed_date":"2021-01-16","count":678},{"developed_date":"2021-01-17","count":578},{"developed_date":"2021-01-18","count":693},{"developed_date":"2021-01-19","count":590},{"developed_date":"2021-01-20","count":528},{"developed_date":"2021-01-21","count":525},{"developed_date":"2021-01-22","count":521},{"developed_date":"2021-01-23","count":419},{"developed_date":"2021-01-24","count":393},{"developed_date":"2021-01-25","count":442},{"developed_date":"2021-01-26","count":345},{"developed_date":"2021-01-27","count":338},{"developed_date":"2021-01-28","count":215},{"developed_date":"2021-01-29","count":153},{"developed_date":"2021-01-30","count":58},{"developed_date":"2021-01-31","count":9}]}')},574:function(e,d,t){"use strict";t.r(d);t(20),t(34),t(82);var o=t(455),n=t(381),l=t(519),c=t(367),v=t(384),_=t(364),r={components:{TimeBarChart:{extends:n.default,computed:{displayInfo:function(){var e=Object(c.a)({displayData:this.displayData,dataIndex:1}),d=e.lastDay,t=e.lastDayData,o=this.$d(d,"date");return"transition"===this.dataKind?{lText:t,sText:"".concat(o," ").concat(this.$t("日別値"),"（").concat(this.$t("現在判明している人数であり、後日修正される場合がある"),"）"),unit:this.unit}:{lText:t,sText:"".concat(o," ").concat(this.$t("累計値")),unit:this.unit}}}},DataViewCustomInfoPanel:o.default},data:function(){var e=l.data.map((function(data){return{"日付":data.developed_date,"小計":data.count}})),d=Object(v.a)(e),t=Object(_.a)()(l.unknown_count),o=this.$d(new Date(l.data.slice(-1)[0].developed_date),"date");return{positiveByDeveloped:l,graphData:d,lText:this.$t("発症日不明者 {num} 人を除く"),sText:"".concat(o," ").concat(this.$t("累計値")),num:t}}},h=t(6),f=t(33),m=t.n(f),x=t(592),component=Object(h.a)(r,(function(){var e=this,d=e.$createElement,t=e._self._c||d;return t("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[t("client-only",[t("time-bar-chart",{attrs:{title:e.$t("発症日別による陽性者数の推移"),"title-id":"positive-number-by-developed-date","chart-id":"positive-number-by-developed-date","chart-data":e.graphData,date:e.positiveByDeveloped.date,unit:e.$t("人")},scopedSlots:e._u([{key:"additionalDescription",fn:function(){return[t("span",[e._v(e._s(e.$t("（注）")))]),e._v(" "),t("ul",[t("li",[e._v("\n            "+e._s(e.$t("各保健所から報告があった患者の発生情報を、発症日別に整理したものである"))+"\n          ")]),e._v(" "),t("li",[e._v("\n            "+e._s(e.$t("発症日不明者（検査結果が陽性であっても症状がない、発症日を覚えていないなど）はグラフから除いている"))+"\n          ")])])]},proxy:!0},{key:"additionalInfoPanel",fn:function(){return[t("data-view-custom-info-panel",{attrs:{"l-text":e.lText,"s-text":e.sText,num:e.num}})]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);d.default=component.exports;m()(component,{DataViewCustomInfoPanel:t(455).default,TimeBarChart:t(381).default}),m()(component,{VCol:x.a})}}]);