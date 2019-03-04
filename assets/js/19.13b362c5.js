(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{229:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"factory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#factory","aria-hidden":"true"}},[t._v("#")]),t._v(" Factory "),n("Badge",{attrs:{text:"1.1.0"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._m(2),t._v(" "),n("p",[t._v("Spans:")]),t._v(" "),n("ul",[t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),n("li",[n("code",[t._v("paragraph")]),t._v(" "),n("Badge",{attrs:{text:"1.1.1"}})],1),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18)]),t._v(" "),t._m(19),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("All factory methods in "),n("code",[t._v("SpannableFactory")]),t._v(" return an "),n("code",[t._v("Object")]),t._v(", but you can actually\nreturn an "),n("strong",[t._v("array of Objects")]),t._v(" if you wish to apply multiple Spans to a single styling node.\nFor example, let's make all "),n("em",[t._v("emphasis")]),t._v(" also "),n("span",{style:{color:"#F00"}},[t._v("red")]),t._v(":")]),t._v(" "),t._m(20)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("SpannableFactory")]),this._v(" is used to create Span implementations.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("SpannableConfiguration"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("builder")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("factory")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SpannableFactory"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("build")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Markwon")]),this._v(" provides default "),s("code",[this._v("SpannableFactoryDef")]),this._v(" implementation that is\nused by default.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("strongEmphasis")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("emphasis")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("blockQuote")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("code")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("orderedListItem")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("bulletListItem")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("thematicBreak")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("heading")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("strikethrough")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("taskListItem")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("tableRow")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("image")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("link")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("superScript")]),this._v(" (HTML content only)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("subScript")]),this._v(" (HTML content only)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("underline")]),this._v(" (HTML content only)")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[n("code",[t._v("SpannableFactory")]),t._v(" can be used to ignore some kinds of text markup. If, for example,\nyou do not wish to apply "),n("em",[t._v("emphasis")]),t._v(" styling to your final result, just return "),n("code",[t._v("null")]),t._v("\nfrom "),n("code",[t._v("emphasis")]),t._v(" factory method:")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Object "),n("span",{attrs:{class:"token function"}},[t._v("emphasis")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" null"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Object "),n("span",{attrs:{class:"token function"}},[t._v("emphasis")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("super")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("emphasis")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ForegroundColorSpan")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RED"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="factory.md";s.default=e.exports}}]);