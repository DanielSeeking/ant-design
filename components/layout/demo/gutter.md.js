webpackJsonp([238,366],{673:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(35),s(34)),e=t(p),o=(s(24),s(23)),c=t(o),l=s(1),u=t(l),k=s(2);t(k);n.exports={content:[["p","\u6805\u683c\u5e38\u5e38\u9700\u8981\u548c\u95f4\u9694\u8fdb\u884c\u914d\u5408\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",["code","Row"]," \u7684 ",["code","gutter"]," \u5c5e\u6027\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",["code","(16+8n)px"]," \u4f5c\u4e3a\u6805\u683c\u95f4\u9694\u3002"]],meta:{order:1,title:"\u533a\u5757\u95f4\u9694",filename:"components/layout/demo/gutter.md",id:"components-layout-demo-gutter"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Row<span class="token punctuation" >,</span> Col <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gutter-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span> <span class="token attr-name" >gutter</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >16</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gutter-row<span class="token punctuation" >"</span></span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gutter-box<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gutter-row<span class="token punctuation" >"</span></span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gutter-box<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gutter-row<span class="token punctuation" >"</span></span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gutter-box<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gutter-row<span class="token punctuation" >"</span></span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gutter-box<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement("div",{className:"gutter-example"},u["default"].createElement(e["default"],{gutter:16},u["default"].createElement(c["default"],{className:"gutter-row",span:6},u["default"].createElement("div",{className:"gutter-box"},".ant-col-6")),u["default"].createElement(c["default"],{className:"gutter-row",span:6},u["default"].createElement("div",{className:"gutter-box"},".ant-col-6")),u["default"].createElement(c["default"],{className:"gutter-row",span:6},u["default"].createElement("div",{className:"gutter-box"},".ant-col-6")),u["default"].createElement(c["default"],{className:"gutter-row",span:6},u["default"].createElement("div",{className:"gutter-box"},".ant-col-6"))))},style:".gutter-example .ant-row > div {\n  background: transparent;\n  border: 0;\n}\n.gutter-box {\n  background: #2db7f5;\n  height: 80px;\n  line-height: 80px;\n  border-radius: 6px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.gutter-example</span> <span class="token class" >.ant-row</span> > div </span><span class="token punctuation" >{</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> transparent<span class="token punctuation" >;</span>\n  <span class="token property" >border</span><span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.gutter-box</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#2db7f5</span><span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >80</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >line-height</span><span class="token punctuation" >:</span> <span class="token number" >80</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >6</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});