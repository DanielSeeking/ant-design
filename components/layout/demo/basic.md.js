webpackJsonp([242,366],{669:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(35),s(34)),o=t(p),c=(s(24),s(23)),e=t(c),l=s(1),u=t(l),k=s(2);t(k);n.exports={content:[["p","\u4ece\u5806\u53e0\u5230\u6c34\u5e73\u6392\u5217\u3002"],["p","\u4f7f\u7528\u5355\u4e00\u7684\u4e00\u7ec4 ",["code","Row"]," \u548c ",["code","Col"]," \u6805\u683c\u7ec4\u4ef6\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u7684\u6805\u683c\u7cfb\u7edf\uff0c\u6240\u6709\u5217\uff08Col\uff09\u5fc5\u987b\u653e\u5728 ",["code","Row"]," \u5185\u3002"]],meta:{order:0,title:"\u57fa\u7840\u5e03\u5c40",filename:"components/layout/demo/basic.md",id:"components-layout-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Row<span class="token punctuation" >,</span> Col <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >12</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-12</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >12</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-12</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >8</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-8</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >8</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-8</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >8</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-8</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement("div",null,u["default"].createElement(o["default"],null,u["default"].createElement(e["default"],{span:12},".ant-col-12"),u["default"].createElement(e["default"],{span:12},".ant-col-12")),u["default"].createElement(o["default"],null,u["default"].createElement(e["default"],{span:8},".ant-col-8"),u["default"].createElement(e["default"],{span:8},".ant-col-8"),u["default"].createElement(e["default"],{span:8},".ant-col-8")),u["default"].createElement(o["default"],null,u["default"].createElement(e["default"],{span:6},".ant-col-6"),u["default"].createElement(e["default"],{span:6},".ant-col-6"),u["default"].createElement(e["default"],{span:6},".ant-col-6"),u["default"].createElement(e["default"],{span:6},".ant-col-6")))}}}});