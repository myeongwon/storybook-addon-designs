(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Events})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ParameterName}));var Events={UpdateConfig:"STORYBOOK_ADDON_DESIGNS/update_config"},ParameterName="design"},166:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/sample.8855819b.png"},271:function(module,exports,__webpack_require__){__webpack_require__(272),__webpack_require__(418),__webpack_require__(419),module.exports=__webpack_require__(608)},3:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"b",(function(){return withDesign})),__webpack_require__.d(__webpack_exports__,"a",(function(){return config}));var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68),_storybook_addons__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_storybook_addons__WEBPACK_IMPORTED_MODULE_0__),_addon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(165),withDesign=Object(_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.makeDecorator)({name:"withDesign",parameterName:_addon__WEBPACK_IMPORTED_MODULE_1__.b,skipIfNoParametersOrOptions:!0,wrapper:function(getStory,context,_a){var parameters=_a.parameters;return _storybook_addons__WEBPACK_IMPORTED_MODULE_0___default.a.getChannel().emit(_addon__WEBPACK_IMPORTED_MODULE_1__.a.UpdateConfig,parameters),getStory(context)}}),config=function(c){return c};module&&module.hot&&module.hot.decline&&module.hot.decline()}).call(this,__webpack_require__(268)(module))},336:function(module,exports){},36:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/sample.6011ce67.pdf"},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));__webpack_require__(61);var _emotion_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(270);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}var Button=function(props){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.a)("button",_extends({css:button},props))};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button"};var button={name:"8zedbu-button",styles:"padding:10px 32px;margin:0;font-size:16px;line-height:1.5;border:none 0;outline:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;color:#fff;background-image:linear-gradient(277.88deg,#51b441 32.37%,#61c451 99.3%);text-transform:uppercase;border-radius:4px;box-shadow:0px 1px 2px rgba(0,0,0,0.15);cursor:pointer;transition:transform 0.1s ease,box-shadow 0.1s ease;&:active{box-shadow:0px 1px 1px rgba(0,0,0,0.25);transform:scale(0.99);}&[disabled]{background-image:linear-gradient(277.88deg,#a6b4a4 32.37%,#bdc4bc 99.3%);color:#e0e0e0;cursor:not-allowed;};label:button;"};"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Button.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"stories/Button.jsx"})},419:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(112);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{showRoots:!0}})},608:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(112);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(609)],module)}.call(this,__webpack_require__(268)(module))},609:function(module,exports,__webpack_require__){var map={"./examples/advanced.stories.js":610,"./examples/figma.stories.js":611,"./examples/iframe.stories.js":612,"./examples/images.stories.js":613,"./examples/link.stories.js":614,"./examples/pdf.stories.js":615,"./tests/issues/14/step1.stories.js":616,"./tests/issues/14/step2.stories.js":617,"./tests/placeholder.stories.js":618};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=609},610:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"embedMultipleDesigns",(function(){return embedMultipleDesigns})),__webpack_require__.d(__webpack_exports__,"setTabNames",(function(){return setTabNames}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(36),_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__.default={title:"Examples/Advanced",decorators:[storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.b]};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),embedMultipleDesigns=function(){return _ref};embedMultipleDesigns.displayName="embedMultipleDesigns",embedMultipleDesigns.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)([{type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample"},{type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3___default.a}])}};var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),setTabNames=function(){return _ref2};setTabNames.displayName="setTabNames",setTabNames.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)([{name:"Foo",type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample"},{name:"Bar",type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3___default.a}])}},embedMultipleDesigns.__docgenInfo={description:"",methods:[],displayName:"embedMultipleDesigns"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/advanced.stories.js"]={name:"embedMultipleDesigns",docgenInfo:embedMultipleDesigns.__docgenInfo,path:"stories/examples/advanced.stories.js"}),setTabNames.__docgenInfo={description:"",methods:[],displayName:"setTabNames"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/advanced.stories.js"]={name:"setTabNames",docgenInfo:setTabNames.__docgenInfo,path:"stories/examples/advanced.stories.js"})},611:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"embedFile",(function(){return embedFile})),__webpack_require__.d(__webpack_exports__,"embedNode",(function(){return embedNode})),__webpack_require__.d(__webpack_exports__,"embedPrototype",(function(){return embedPrototype})),__webpack_require__.d(__webpack_exports__,"allowingFullscreen",(function(){return allowingFullscreen}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4);__webpack_exports__.default={title:"Examples/Figma",decorators:[storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.b]};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),embedFile=function(){return _ref};embedFile.displayName="embedFile",embedFile.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample"})}};var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),embedNode=function(){return _ref2};embedNode.displayName="embedNode",embedNode.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5"})}};var _ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),embedPrototype=function(){return _ref3};embedPrototype.displayName="embedPrototype",embedPrototype.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"figma",url:"https://www.figma.com/proto/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample"})}};var _ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),allowingFullscreen=function(){return _ref4};allowingFullscreen.displayName="allowingFullscreen",allowingFullscreen.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",allowFullscreen:!0})}},embedFile.__docgenInfo={description:"",methods:[],displayName:"embedFile"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/figma.stories.js"]={name:"embedFile",docgenInfo:embedFile.__docgenInfo,path:"stories/examples/figma.stories.js"}),embedNode.__docgenInfo={description:"",methods:[],displayName:"embedNode"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/figma.stories.js"]={name:"embedNode",docgenInfo:embedNode.__docgenInfo,path:"stories/examples/figma.stories.js"}),embedPrototype.__docgenInfo={description:"",methods:[],displayName:"embedPrototype"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/figma.stories.js"]={name:"embedPrototype",docgenInfo:embedPrototype.__docgenInfo,path:"stories/examples/figma.stories.js"}),allowingFullscreen.__docgenInfo={description:"",methods:[],displayName:"allowingFullscreen"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/figma.stories.js"]={name:"allowingFullscreen",docgenInfo:allowingFullscreen.__docgenInfo,path:"stories/examples/figma.stories.js"})},612:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"embedSite",(function(){return embedSite}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4);__webpack_exports__.default={title:"Examples/iframe",decorators:[storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.b]};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),embedSite=function(){return _ref};embedSite.displayName="embedSite",embedSite.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"iframe",url:"https://www.wikipedia.org/"})}},embedSite.__docgenInfo={description:"",methods:[],displayName:"embedSite"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/iframe.stories.js"]={name:"embedSite",docgenInfo:embedSite.__docgenInfo,path:"stories/examples/iframe.stories.js"})},613:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"embedImage",(function(){return embedImage})),__webpack_require__.d(__webpack_exports__,"setScaleAndOffset",(function(){return setScaleAndOffset}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_storybook_addon_designs_assets_sample_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(166),_storybook_addon_designs_assets_sample_png__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_storybook_addon_designs_assets_sample_png__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__.default={title:"Examples/Images",decorators:[storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.b]};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),embedImage=function(){return _ref};embedImage.displayName="embedImage",embedImage.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"image",url:_storybook_addon_designs_assets_sample_png__WEBPACK_IMPORTED_MODULE_3___default.a})}};var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),setScaleAndOffset=function(){return _ref2};setScaleAndOffset.displayName="setScaleAndOffset",setScaleAndOffset.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"image",url:_storybook_addon_designs_assets_sample_png__WEBPACK_IMPORTED_MODULE_3___default.a,offset:[-300,140],scale:2})}},embedImage.__docgenInfo={description:"",methods:[],displayName:"embedImage"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/images.stories.js"]={name:"embedImage",docgenInfo:embedImage.__docgenInfo,path:"stories/examples/images.stories.js"}),setScaleAndOffset.__docgenInfo={description:"",methods:[],displayName:"setScaleAndOffset"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/images.stories.js"]={name:"setScaleAndOffset",docgenInfo:setScaleAndOffset.__docgenInfo,path:"stories/examples/images.stories.js"})},614:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"showALink",(function(){return showALink})),__webpack_require__.d(__webpack_exports__,"setALabel",(function(){return setALabel})),__webpack_require__.d(__webpack_exports__,"hideArrowIcon",(function(){return hideArrowIcon}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4);__webpack_exports__.default={title:"Examples/link",decorators:[storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.b]};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),showALink=function(){return _ref};showALink.displayName="showALink",showALink.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"link",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample"})}};var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),setALabel=function(){return _ref2};setALabel.displayName="setALabel",setALabel.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"link",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",label:"Open design in new tab"})}};var _ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),hideArrowIcon=function(){return _ref3};hideArrowIcon.displayName="hideArrowIcon",hideArrowIcon.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"link",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",showArrow:!1})}},showALink.__docgenInfo={description:"",methods:[],displayName:"showALink"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/link.stories.js"]={name:"showALink",docgenInfo:showALink.__docgenInfo,path:"stories/examples/link.stories.js"}),setALabel.__docgenInfo={description:"",methods:[],displayName:"setALabel"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/link.stories.js"]={name:"setALabel",docgenInfo:setALabel.__docgenInfo,path:"stories/examples/link.stories.js"}),hideArrowIcon.__docgenInfo={description:"",methods:[],displayName:"hideArrowIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/link.stories.js"]={name:"hideArrowIcon",docgenInfo:hideArrowIcon.__docgenInfo,path:"stories/examples/link.stories.js"})},615:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"embedPDF",(function(){return embedPDF})),__webpack_require__.d(__webpack_exports__,"setScale",(function(){return setScale})),__webpack_require__.d(__webpack_exports__,"setOffset",(function(){return setOffset})),__webpack_require__.d(__webpack_exports__,"setPage",(function(){return setPage})),__webpack_require__.d(__webpack_exports__,"setBothScaleAndOffset",(function(){return setBothScaleAndOffset}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(36),_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__.default={title:"Examples/PDF",decorators:[storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.b]};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),embedPDF=function(){return _ref};embedPDF.displayName="embedPDF",embedPDF.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3___default.a})}};var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),setScale=function(){return _ref2};setScale.displayName="setScale",setScale.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3___default.a,scale:2})}};var _ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),setOffset=function(){return _ref3};setOffset.displayName="setOffset",setOffset.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3___default.a,offset:[-100,-100]})}};var _ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),setPage=function(){return _ref4};setPage.displayName="setPage",setPage.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3___default.a,page:2})}};var _ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),setBothScaleAndOffset=function(){return _ref5};setBothScaleAndOffset.displayName="setBothScaleAndOffset",setBothScaleAndOffset.story={parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_3___default.a,offset:[-300,140],scale:2})}},embedPDF.__docgenInfo={description:"",methods:[],displayName:"embedPDF"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/pdf.stories.js"]={name:"embedPDF",docgenInfo:embedPDF.__docgenInfo,path:"stories/examples/pdf.stories.js"}),setScale.__docgenInfo={description:"",methods:[],displayName:"setScale"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/pdf.stories.js"]={name:"setScale",docgenInfo:setScale.__docgenInfo,path:"stories/examples/pdf.stories.js"}),setOffset.__docgenInfo={description:"",methods:[],displayName:"setOffset"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/pdf.stories.js"]={name:"setOffset",docgenInfo:setOffset.__docgenInfo,path:"stories/examples/pdf.stories.js"}),setPage.__docgenInfo={description:"",methods:[],displayName:"setPage"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/pdf.stories.js"]={name:"setPage",docgenInfo:setPage.__docgenInfo,path:"stories/examples/pdf.stories.js"}),setBothScaleAndOffset.__docgenInfo={description:"",methods:[],displayName:"setBothScaleAndOffset"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/pdf.stories.js"]={name:"setBothScaleAndOffset",docgenInfo:setBothScaleAndOffset.__docgenInfo,path:"stories/examples/pdf.stories.js"})},616:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"step1",(function(){return step1}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4);__webpack_exports__.default={title:"Tests/Issues/#14",decorators:[storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.b]};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),step1=function(){return _ref};step1.displayName="step1",step1.story={name:"Do not persist addon panel (step 1)",parameters:{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.a)({type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample"})}},step1.__docgenInfo={description:"",methods:[],displayName:"step1"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/tests/issues/14/step1.stories.js"]={name:"step1",docgenInfo:step1.__docgenInfo,path:"stories/tests/issues/14/step1.stories.js"})},617:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"step2",(function(){return step2}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4);__webpack_exports__.default={title:"Tests/Issues/#14"};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,null,"Button"),step2=function(){return _ref};step2.displayName="step2",step2.story={name:"Do not persist addon panel (step 2)"},step2.__docgenInfo={description:"",methods:[],displayName:"step2"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/tests/issues/14/step2.stories.js"]={name:"step2",docgenInfo:step2.__docgenInfo,path:"stories/tests/issues/14/step2.stories.js"})},618:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"showPlaceholder",(function(){return showPlaceholder})),__webpack_require__.d(__webpack_exports__,"showError",(function(){return showError}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4);__webpack_exports__.default={title:"Tests/Placeholder",decorators:[storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.b]};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),showPlaceholder=function(){return _ref};showPlaceholder.displayName="showPlaceholder",showPlaceholder.story={name:"Show placeholder when no `design` parameter"};var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button"),showError=function(){return _ref2};showError.displayName="showError",showError.story={name:"Show error message when `type` is not supported",parameters:{design:{type:"foo"}}},showPlaceholder.__docgenInfo={description:"",methods:[],displayName:"showPlaceholder"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/tests/placeholder.stories.js"]={name:"showPlaceholder",docgenInfo:showPlaceholder.__docgenInfo,path:"stories/tests/placeholder.stories.js"}),showError.__docgenInfo={description:"",methods:[],displayName:"showError"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/tests/placeholder.stories.js"]={name:"showError",docgenInfo:showError.__docgenInfo,path:"stories/tests/placeholder.stories.js"})}},[[271,1,2]]]);
//# sourceMappingURL=main.941443cef8f6ec87c09b.bundle.js.map