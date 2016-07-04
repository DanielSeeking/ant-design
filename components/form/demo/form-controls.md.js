webpackJsonp([267,366],{644:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(54),s(53)),e=t(p),o=(s(18),s(25)),c=t(o),l=(s(43),s(40)),u=t(l),k=(s(22),s(21)),i=t(k),r=(s(49),s(48)),m=t(r),g=s(1),d=t(g),b=s(2);t(b);n.exports={content:[["p","\u5c55\u793a\u6240\u6709\u652f\u6301\u7684\u8868\u5355\u63a7\u4ef6\u3002"],["p",["code","\u6ce8"],"\uff1a \u8f93\u5165\u6846\uff1a\u53ea\u6709\u6b63\u786e\u8bbe\u7f6e\u4e86 type \u5c5e\u6027\u7684\u8f93\u5165\u63a7\u4ef6\u624d\u80fd\u88ab\u8d4b\u4e88\u6b63\u786e\u7684\u6837\u5f0f\u3002"]],meta:{order:3,title:"\u8868\u5355\u63a7\u4ef6",filename:"components/form/demo/form-controls.md",id:"components-form-demo-form-controls"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Form<span class="token punctuation" >,</span> Input<span class="token punctuation" >,</span> Select<span class="token punctuation" >,</span> Checkbox<span class="token punctuation" >,</span> Radio <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> FormItem <span class="token operator" >=</span> Form<span class="token punctuation" >.</span>Item<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> Select<span class="token punctuation" >.</span>Option<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> RadioGroup <span class="token operator" >=</span> Radio<span class="token punctuation" >.</span>Group<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >handleSelectChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`selected </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>value<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Form</span> <span class="token attr-name" >horizontal</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>control-input<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8f93\u5165\u6846<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>control-input<span class="token punctuation" >"</span></span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Please</span> <span class="token attr-name" >enter..."</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>control-textarea<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6587\u672c\u57df<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>textarea<span class="token punctuation" >"</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>control-textarea<span class="token punctuation" >"</span></span> <span class="token attr-name" >rows</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>select<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Select</span> <span class="token attr-name" >\u9009\u62e9\u5668"</span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Select</span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>select<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lucy<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >200</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>handleSelectChange<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>jack<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>jack<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lucy<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>lucy<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>disabled<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span>disabled<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>yiminghe<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>yiminghe<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Select</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Checkbox</span> <span class="token attr-name" >\u591a\u9009\u6846"</span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >18</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-checkbox-vertical<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u4e00<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Checkbox</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-checkbox-vertical<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u4e8c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Checkbox</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-checkbox-vertical<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span>\u9009\u9879\u4e09\uff08\u4e0d\u53ef\u9009\uff09<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Checkbox</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Checkbox</span> <span class="token attr-name" >\u591a\u9009\u6846"</span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >18</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-checkbox-inline<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u4e00<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Checkbox</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-checkbox-inline<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u4e8c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Checkbox</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-checkbox-inline<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u4e09<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Checkbox</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Radio</span> <span class="token attr-name" >\u5355\u9009\u6846"</span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >18</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioGroup</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>b<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>A<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>b<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>B<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>c<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>C<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>d<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>D<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioGroup</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Form</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("selected "+n)}var a=m["default"].Item,s=i["default"].Option,t=u["default"].Group;return d["default"].createElement(m["default"],{horizontal:!0},d["default"].createElement(a,{id:"control-input",label:"\u8f93\u5165\u6846",labelCol:{span:6},wrapperCol:{span:14}},d["default"].createElement(c["default"],{id:"control-input",placeholder:"Please enter..."})),d["default"].createElement(a,{id:"control-textarea",label:"\u6587\u672c\u57df",labelCol:{span:6},wrapperCol:{span:14}},d["default"].createElement(c["default"],{type:"textarea",id:"control-textarea",rows:"3"})),d["default"].createElement(a,{id:"select",label:"Select \u9009\u62e9\u5668",labelCol:{span:6},wrapperCol:{span:14}},d["default"].createElement(i["default"],{id:"select",size:"large",defaultValue:"lucy",style:{width:200},onChange:n},d["default"].createElement(s,{value:"jack"},"jack"),d["default"].createElement(s,{value:"lucy"},"lucy"),d["default"].createElement(s,{value:"disabled",disabled:!0},"disabled"),d["default"].createElement(s,{value:"yiminghe"},"yiminghe"))),d["default"].createElement(a,{label:"Checkbox \u591a\u9009\u6846",labelCol:{span:6},wrapperCol:{span:18}},d["default"].createElement(e["default"],{className:"ant-checkbox-vertical"},"\u9009\u9879\u4e00"),d["default"].createElement(e["default"],{className:"ant-checkbox-vertical"},"\u9009\u9879\u4e8c"),d["default"].createElement(e["default"],{className:"ant-checkbox-vertical",disabled:!0},"\u9009\u9879\u4e09\uff08\u4e0d\u53ef\u9009\uff09")),d["default"].createElement(a,{label:"Checkbox \u591a\u9009\u6846",labelCol:{span:6},wrapperCol:{span:18}},d["default"].createElement(e["default"],{className:"ant-checkbox-inline"},"\u9009\u9879\u4e00"),d["default"].createElement(e["default"],{className:"ant-checkbox-inline"},"\u9009\u9879\u4e8c"),d["default"].createElement(e["default"],{className:"ant-checkbox-inline"},"\u9009\u9879\u4e09")),d["default"].createElement(a,{label:"Radio \u5355\u9009\u6846",labelCol:{span:6},wrapperCol:{span:18}},d["default"].createElement(t,{defaultValue:"b"},d["default"].createElement(u["default"],{value:"a"},"A"),d["default"].createElement(u["default"],{value:"b"},"B"),d["default"].createElement(u["default"],{value:"c"},"C"),d["default"].createElement(u["default"],{value:"d"},"D"))))}}}});