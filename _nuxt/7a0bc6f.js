(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{379:function(t,e,l){"use strict";l.r(e);l(51),l(61),l(11),l(62);var o={name:"DataBoxes",props:{stats:Object},methods:{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},n=l(29),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"grid md:grid-cols-2 gap-4"},[l("div",{staticClass:"shadow-md bg-blue-100 p-10 text-center rounded"},[l("h3",{staticClass:"text-3xl text-blue-900 font-bold mb-4"},[t._v("Cases")]),t._v(" "),l("div",{staticClass:"text-2xl mb-4"},[l("span",{staticClass:"font-bold"},[t._v("New: "+t._s(t.numberWithCommas(t.stats.NewConfirmed)))])]),t._v(" "),l("div",{staticClass:"text-2xl mb-4"},[l("span",{staticClass:"font-bold"},[t._v("Total: "+t._s(t.numberWithCommas(t.stats.TotalConfirmed)))])])]),t._v(" "),l("div",{staticClass:"shadow-md bg-blue-100 p-10 text-center rounded"},[l("h3",{staticClass:"text-3xl text-blue-900 font-bold mb-4"},[t._v("Deaths")]),t._v(" "),l("div",{staticClass:"text-2xl mb-4"},[l("span",{staticClass:"font-bold"},[t._v("New: "+t._s(t.numberWithCommas(t.stats.NewDeaths)))])]),t._v(" "),l("div",{staticClass:"text-2xl mb-4"},[l("span",{staticClass:"font-bold"},[t._v("Total: "+t._s(t.numberWithCommas(t.stats.TotalDeaths)))])])])])}),[],!1,null,null,null);e.default=component.exports}}]);