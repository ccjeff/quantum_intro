(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{415:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){this.enterKey="Enter",this.shiftKey="Shift",this.ok="OK",this.continue="Continue",this.pressEnter="Press :enterKey",this.multipleChoiceHelpText="Choose as many as you like",this.multipleChoiceHelpTextSingle="Choose only one answer",this.otherPrompt="Other",this.placeholder="Type your answer here...",this.submitText="Submit",this.longTextHelpText=":shiftKey + :enterKey to make a line break.",this.prev="Prev",this.next="Next",this.percentCompleted=":percent% completed",this.invalidPrompt="Please fill out the field correctly",this.thankYouText="Thank you!",this.successText="Your submission has been sent.",this.ariaOk="Press to continue",this.ariaRequired="This step is required",this.ariaPrev="Previous step",this.ariaNext="Next step",this.ariaSubmitText="Press to submit",this.ariaMultipleChoice="Press :letter to select",this.ariaTypeAnswer="Type your answer here",Object.assign(this,e||{})};n.prototype.formatString=function(e){var t=this;return e.replace(/:(\w+)/g,(function(e,i){return t[i]?'<span class="f-string-em">'+t[i]+"</span>":e}))};var s=Object.freeze({Date:"FlowFormDateType",Dropdown:"FlowFormDropdownType",Email:"FlowFormEmailType",LongText:"FlowFormLongTextType",MultipleChoice:"FlowFormMultipleChoiceType",Number:"FlowFormNumberType",Password:"FlowFormPasswordType",Phone:"FlowFormPhoneType",SectionBreak:"FlowFormSectionBreakType",Text:"FlowFormTextType",Url:"FlowFormUrlType"}),o=(Object.freeze({label:"",value:"",disabled:!0}),Object.freeze({Date:"##/##/####",DateIso:"####-##-##",PhoneUs:"(###) ###-####"})),a=function(e){this.label="",this.value="",this.selected=!1,Object.assign(this,e)};a.prototype.choiceLabel=function(){return this.label||this.value},a.prototype.choiceValue=function(){return this.value||this.label},a.prototype.toggle=function(){this.selected=!this.selected};var r=function(e){this.id=null,this.answer="",this.answered=!1,this.index=0,this.options=[],this.description="",this.className="",this.type=null,this.html=null,this.required=!1,this.jump=null,this.placeholder=null,this.mask="",this.multiple=!1,this.allowOther=!1,this.other=null,this.language=null,this.tagline=null,this.title=null,this.subtitle=null,this.content=null,this.inline=!1,this.helpText=null,this.helpTextShow=!0,this.descriptionLink=[],this.min=null,this.max=null,this.nextStepOnAnswer=!1,Object.assign(this,e),this.type===s.Phone&&(this.mask||(this.mask=o.Phone),this.placeholder||(this.placeholder=this.mask)),this.type===s.Url&&(this.mask=null),this.type!==s.Date||this.placeholder||(this.placeholder="yyyy-mm-dd"),this.multiple&&(this.answer=[])};r.prototype.getFormattedAnswer=function(){return this.answer},r.prototype.getJumpId=function(){var e=null;return"function"==typeof this.jump?e=this.jump.call(this):this.jump[this.answer]?e=this.jump[this.answer]:this.jump._other&&(e=this.jump._other),e},r.prototype.setIndex=function(e){this.id||(this.id="q_"+e),this.index=e};var u=navigator.userAgent.match(/iphone|ipad|ipod/i)||-1!==navigator.userAgent.indexOf("Mac")&&"ontouchend"in document,l=!("undefined"==typeof navigator||!u&&!navigator.userAgent.match(/android/i)),h={data:function(){return{isIos:u,isMobile:l}}};function c(e,t,i,n,s,o,a,r,u,l){"boolean"!=typeof a&&(u=r,r=a,a=!1);var h,c="function"==typeof i?i.options:i;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),n&&(c._scopeId=n),o?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=h):t&&(h=a?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),h)if(c.functional){var d=c.render;c.render=function(e,t){return h.call(t),d(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,h):[h]}return i}var d=c({},void 0,{name:"FlowFormBaseType",props:{language:n,question:r,active:Boolean,value:[String,Array,Boolean,Number]},mixins:[h],data:function(){return{dirty:!1,dataValue:"",answer:null,enterPressed:!1,allowedChars:null,alwaysAllowedKeys:["ArrowLeft","ArrowRight","Delete","Backspace"],focused:!1,canReceiveFocus:!1}},mounted:function(){this.question.answer?this.dataValue=this.question.answer:this.question.multiple&&(this.dataValue=[])},methods:{fixAnswer:function(e){return e},getElement:function(){for(var e=this.$refs.input;e&&e.$el;)e=e.$el;return e},setFocus:function(){this.focused=!0},unsetFocus:function(e){this.focused=!1},focus:function(){var e=this.getElement();e&&e.focus()},blur:function(){var e=this.getElement();e&&e.blur()},onKeyDown:function(e){this.enterPressed=!1,clearTimeout(this.timeoutId),e&&("Enter"!==e.key||e.shiftKey||this.unsetFocus(),null!==this.allowedChars&&-1===this.alwaysAllowedKeys.indexOf(e.key)&&-1===this.allowedChars.indexOf(e.key)&&e.preventDefault())},onChange:function(e){this.dirty=!0,this.dataValue=e.target.value,this.onKeyDown(),this.setAnswer(this.dataValue)},onEnter:function(){this._onEnter()},_onEnter:function(){this.enterPressed=!0,this.dataValue=this.fixAnswer(this.dataValue),this.setAnswer(this.dataValue),this.isValid()?this.blur():this.focus()},setAnswer:function(e){this.question.answered=this.isValid(),this.answer=this.question.answer=e,this.$emit("input",this.answer)},showInvalid:function(){return this.dirty&&this.enterPressed&&!this.isValid()},isValid:function(){return!(this.question.required||this.hasValue||!this.dirty)||!!this.validate()},validate:function(){return!this.question.required||this.hasValue}},computed:{placeholder:function(){return this.question.placeholder||this.language.placeholder},hasValue:function(){if(null!==this.dataValue){var e=this.dataValue;return e.trim?e.trim().length>0:!Array.isArray(e)||e.length>0}return!1}}},void 0,void 0,void 0,!1,void 0,void 0,void 0),p={extends:d,name:s.Dropdown,computed:{answerLabel:function(){for(var e=0;e<this.question.options.length;e++){var t=this.question.options[e];if(t.choiceValue()===this.dataValue)return t.choiceLabel()}return this.question.placeholder}},methods:{onKeyDownListener:function(e){"ArrowDown"===e.key||"ArrowUp"===e.key?this.setAnswer(this.dataValue):"Enter"===e.key&&this.hasValue&&(this.focused=!1,this.blur())},onKeyUpListener:function(e){"Enter"===e.key&&this.isValid()&&(e.stopPropagation(),this._onEnter(),this.$emit("next"))}}},v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"faux-form"},[i("select",{ref:"input",attrs:{required:e.question.required},domProps:{value:e.dataValue},on:{change:e.onChange,keydown:e.onKeyDownListener,keyup:e.onKeyUpListener}},[e.question.required?i("option",{attrs:{label:" ",value:"",disabled:"",selected:"",hidden:""}},[e._v(" ")]):e._e(),e._v(" "),e._l(e.question.options,(function(t,n){return i("option",{key:"o"+n,attrs:{disabled:t.disabled},domProps:{value:t.choiceValue()}},[e._v("\n      "+e._s(t.choiceLabel())+"\n    ")])}))],2),e._v(" "),i("span",[i("span",{staticClass:"f-empty",class:{"f-answered":this.question.answer&&this.question.answered}},[e._v(e._s(e.answerLabel))]),e._v(" "),i("span",{staticClass:"f-arrow-down"},[i("svg",{attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"-163 254.1 284.9 284.9","xml:space":"preserve"}},[i("g",[i("path",{attrs:{d:"M119.1,330.6l-14.3-14.3c-1.9-1.9-4.1-2.9-6.6-2.9c-2.5,0-4.7,1-6.6,2.9L-20.5,428.5l-112.2-112.2c-1.9-1.9-4.1-2.9-6.6-2.9c-2.5,0-4.7,0.9-6.6,2.9l-14.3,14.3c-1.9,1.9-2.9,4.1-2.9,6.6c0,2.5,1,4.7,2.9,6.6l133,133c1.9,1.9,4.1,2.9,6.6,2.9s4.7-1,6.6-2.9l133.1-133c1.9-1.9,2.8-4.1,2.8-6.6C121.9,334.7,121,332.5,119.1,330.6z"}})])])])])])};v._withStripped=!0;var f=c({render:v,staticRenderFns:[]},void 0,p,void 0,!1,void 0,!1,void 0,void 0,void 0);function m(e,t,i,n){void 0===i&&(i=!0),e=e||"",t=t||"";for(var s=0,o=0,a="";s<t.length&&o<e.length;){var r=n[h=t[s]],u=e[o];r&&!r.escape?(r.pattern.test(u)&&(a+=r.transform?r.transform(u):u,s++),o++):(r&&r.escape&&(h=t[++s]),i&&(a+=h),u===h&&o++,s++)}for(var l="";s<t.length&&i;){var h;if(n[h=t[s]]){l="";break}l+=h,s++}return a+l}function g(e,t,i,n){return void 0===i&&(i=!0),Array.isArray(t)?function(e,t,i){return t=t.sort((function(e,t){return e.length-t.length})),function(n,s,o){void 0===o&&(o=!0);for(var a=0;a<t.length;){var r=t[a];a++;var u=t[a];if(!(u&&e(n,u,!0,i).length>r.length))return e(n,r,o,i)}return""}}(m,t,n)(e,t,i,n):m(e,t,i,n)}var y={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}};function w(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var q={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return y}}},directives:{mask:function(e,t){var i=t.value;if((Array.isArray(i)||"string"==typeof i)&&(i={mask:i,tokens:y}),"INPUT"!==e.tagName.toLocaleUpperCase()){var n=e.getElementsByTagName("input");if(1!==n.length)throw new Error("v-mask directive requires 1 input, found "+n.length);e=n[0]}e.oninput=function(t){if(t.isTrusted){var n=e.selectionEnd,s=e.value[n-1];for(e.value=g(e.value,i.mask,!0,i.tokens);n<e.value.length&&e.value.charAt(n-1)!==s;)n++;e===document.activeElement&&(e.setSelectionRange(n,n),setTimeout((function(){e.setSelectionRange(n,n)}),0)),e.dispatchEvent(w("input"))}};var s=g(e.value,i.mask,!0,i.tokens);s!==e.value&&(e.value=s,e.dispatchEvent(w("input")))}},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e,(e=g(e,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}},_=function(){var e=this.$createElement;return(this._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:this.config,expression:"config"}],attrs:{type:"text"},domProps:{value:this.display},on:{input:this.onInput}})};_._withStripped=!0;var x=c({render:_,staticRenderFns:[]},void 0,q,void 0,!1,void 0,!1,void 0,void 0,void 0),b={extends:d,name:s.Text,components:{TheMask:x},data:function(){return{inputType:"text",canReceiveFocus:!0}},methods:{validate:function(){return(!this.question.mask||this.dataValue.length===this.question.mask.length)&&(!this.question.required||this.hasValue)}}},k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{attrs:{"data-placeholder":"date"===e.inputType?e.placeholder:null}},[e.question.mask?i("the-mask",{ref:"input",attrs:{mask:e.question.mask,masked:!1,type:e.inputType,value:e.value,required:e.question.required,placeholder:e.placeholder,min:e.question.min,max:e.question.max},on:{change:e.onChange},nativeOn:{keydown:function(t){return e.onKeyDown(t)},keyup:[function(t){return e.onChange(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.onEnter(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.onEnter(t))}],focus:function(t){return e.setFocus(t)},blur:function(t){return e.unsetFocus(t)}}}):i("input",{ref:"input",attrs:{type:e.inputType,required:e.question.required,min:e.question.min,max:e.question.max,placeholder:e.placeholder},domProps:{value:e.value},on:{keydown:e.onKeyDown,keyup:[e.onChange,function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.onEnter(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.onEnter(t))}],focus:e.setFocus,blur:e.unsetFocus,change:e.onChange}})],1)};k._withStripped=!0;var T=c({render:k,staticRenderFns:[]},void 0,b,void 0,!1,void 0,!1,void 0,void 0,void 0),C=c({},void 0,{extends:T,name:s.Email,data:function(){return{inputType:"email"}},methods:{validate:function(){return this.hasValue&&/^[^@]+@.+[^.]$/.test(this.dataValue)}}},void 0,void 0,void 0,!1,void 0,void 0,void 0),F={name:"TextareaAutosize",props:{value:{type:[String,Number],default:""},autosize:{type:Boolean,default:!0},minHeight:{type:[Number],default:null},maxHeight:{type:[Number],default:null},important:{type:[Boolean,Array],default:!1}},data:function(){return{val:null,maxHeightScroll:!1,height:"auto"}},computed:{computedStyles:function(){return this.autosize?{resize:this.isResizeImportant?"none !important":"none",height:this.height,overflow:this.maxHeightScroll?"auto":this.isOverflowImportant?"hidden !important":"hidden"}:{}},isResizeImportant:function(){var e=this.important;return!0===e||Array.isArray(e)&&e.includes("resize")},isOverflowImportant:function(){var e=this.important;return!0===e||Array.isArray(e)&&e.includes("overflow")},isHeightImportant:function(){var e=this.important;return!0===e||Array.isArray(e)&&e.includes("height")}},watch:{value:function(e){this.val=e},val:function(e){this.$nextTick(this.resize),this.$emit("input",e)},minHeight:function(){this.$nextTick(this.resize)},maxHeight:function(){this.$nextTick(this.resize)},autosize:function(e){e&&this.resize()}},methods:{resize:function(){var e=this,t=this.isHeightImportant?"important":"";return this.height="auto"+(t?" !important":""),this.$nextTick((function(){var i=e.$el.scrollHeight+1;e.minHeight&&(i=i<e.minHeight?e.minHeight:i),e.maxHeight&&(i>e.maxHeight?(i=e.maxHeight,e.maxHeightScroll=!0):e.maxHeightScroll=!1);var n=i+"px";e.height=n+(t?" !important":"")})),this}},created:function(){this.val=this.value},mounted:function(){this.resize()}},E=function(){var e=this,t=e.$createElement;return(e._self._c||t)("textarea",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],style:e.computedStyles,domProps:{value:e.val},on:{focus:e.resize,input:function(t){t.target.composing||(e.val=t.target.value)}}})};E._withStripped=!0;var L=c({render:E,staticRenderFns:[]},void 0,F,void 0,!1,void 0,!1,void 0,void 0,void 0),O={extends:d,name:s.LongText,components:{TextareaAutosize:L},data:function(){return{canReceiveFocus:!0}},mounted:function(){window.addEventListener("resize",this.onResizeListener)},beforeDestroy:function(){window.removeEventListener("resize",this.onResizeListener)},methods:{onResizeListener:function(){this.$refs.input.resize()},unsetFocus:function(e){!e&&this.isMobile||(this.focused=!1)},onEnterDown:function(e){this.isMobile||e.preventDefault()},onEnter:function(){this.isMobile||this._onEnter()}}},A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[i("textarea-autosize",{ref:"input",attrs:{rows:"1",value:e.value,required:e.question.required,placeholder:e.placeholder},nativeOn:{keydown:[function(t){return e.onKeyDown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.onEnterDown(t)}],keyup:[function(t){return e.onChange(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.onEnter(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.onEnter(t))}],focus:function(t){return e.setFocus(t)},blur:function(t){return e.unsetFocus(t)}}})],1)};A._withStripped=!0;var S=c({render:A,staticRenderFns:[]},void 0,O,void 0,!1,void 0,!1,void 0,void 0,void 0),V={extends:d,name:s.MultipleChoice,data:function(){return{editingOther:!1}},mounted:function(){this.question.multiple&&(this.dataValue=[]),this.addKeyListener()},beforeDestroy:function(){this.removeKeyListener()},watch:{active:function(e){e?(this.addKeyListener(),this.question.multiple&&this.question.answered&&(this.enterPressed=!1)):this.removeKeyListener()}},methods:{addKeyListener:function(){this.removeKeyListener(),document.addEventListener("keyup",this.onKeyListener)},removeKeyListener:function(){document.removeEventListener("keyup",this.onKeyListener)},onKeyListener:function(e){if(this.active&&!this.editingOther&&e.key&&1===e.key.length){var t=e.key.toUpperCase().charCodeAt(0);if(t>=65&&t<=90){var i=t-65;if(i>-1){var n=this.question.options[i];n?this.toggleAnswer(n):this.question.allowOther&&i===this.question.options.length&&this.startEditOther()}}}},getLabel:function(e){return this.language.ariaMultipleChoice.replace(":letter",this.getToggleKey(e))},getToggleKey:function(e){var t=65+e;return t<=90?String.fromCharCode(t):""},toggleAnswer:function(e){if(!this.question.multiple){this.question.allowOther&&(this.question.other=this.dataValue=null,this.setAnswer(this.dataValue));for(var t=0;t<this.question.options.length;t++){var i=this.question.options[t];i.selected&&this._toggleAnswer(i)}}this._toggleAnswer(e)},_toggleAnswer:function(e){var t=this;e.toggle(),this.question.multiple?(this.enterPressed=!1,e.selected?this.dataValue.push(e.choiceValue()):this._removeAnswer(e.choiceValue())):this.dataValue=e.selected?e.choiceValue():null,this.setAnswer(this.dataValue),this.isValid()&&this.question.nextStepOnAnswer&&!this.question.multiple&&setTimeout((function(){return t.$emit("next")}),350)},_removeAnswer:function(e){var t=this.dataValue.indexOf(e);-1!==t&&this.dataValue.splice(t,1)},startEditOther:function(){var e=this;this.editingOther=!0,this.enterPressed=!1,this.$nextTick((function(){e.$refs.otherInput.focus()}))},onChangeOther:function(){if(this.editingOther){var e=[],t=this;this.question.options.forEach((function(i){i.selected&&(t.question.multiple?e.push(i.choiceValue()):i.toggle())})),this.question.other&&this.question.multiple?e.push(this.question.other):this.question.multiple||(e=this.question.other),this.dataValue=e,this.setAnswer(this.dataValue)}},stopEditOther:function(){this.editingOther=!1}}},P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"f-radios-wrap"},[i("ul",{staticClass:"f-radios",class:{"f-multiple":e.question.multiple},attrs:{role:"listbox"}},[e._l(e.question.options,(function(t,n){return i("li",{key:"m"+n,class:{"f-selected":t.selected},attrs:{"aria-label":e.getLabel(n),role:"option"},on:{click:function(i){return i.preventDefault(),e.toggleAnswer(t)}}},[i("span",{staticClass:"f-key"},[e._v(e._s(e.getToggleKey(n)))]),e._v(" "),i("span",{staticClass:"f-label"},[e._v(e._s(t.choiceLabel()))])])})),e._v(" "),e.question.allowOther?i("li",{staticClass:"f-other",class:{"f-selected":e.question.other,"f-focus":e.editingOther},attrs:{"aria-label":e.language.ariaTypeAnswer,role:"option"},on:{click:function(t){return t.preventDefault(),e.startEditOther(t)}}},[e.editingOther?e._e():i("span",{staticClass:"f-key"},[e._v(e._s(e.getToggleKey(e.question.options.length)))]),e._v(" "),e.editingOther?i("input",{directives:[{name:"model",rawName:"v-model",value:e.question.other,expression:"question.other"}],ref:"otherInput",attrs:{type:"text",maxlength:"256"},domProps:{value:e.question.other},on:{blur:e.stopEditOther,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.stopEditOther(t))},e.onChangeOther],change:e.onChangeOther,input:function(t){t.target.composing||e.$set(e.question,"other",t.target.value)}}}):e.question.other?i("span",{staticClass:"f-selected"},[i("span",{staticClass:"f-label"},[e._v(e._s(e.question.other))])]):i("span",{staticClass:"f-label"},[e._v(e._s(e.language.otherPrompt))])]):e._e()],2)])};P._withStripped=!0;var Q=c({render:P,staticRenderFns:[]},void 0,V,void 0,!1,void 0,!1,void 0,void 0,void 0),$=c({},void 0,{extends:T,name:s.Number,data:function(){return{inputType:"tel",allowedChars:"0123456789."}}},void 0,void 0,void 0,!1,void 0,void 0,void 0),D=c({},void 0,{extends:T,name:s.Password,data:function(){return{inputType:"password"}}},void 0,void 0,void 0,!1,void 0,void 0,void 0),I=c({},void 0,{extends:T,name:s.Phone,data:function(){return{inputType:"tel",canReceiveFocus:!0}}},void 0,void 0,void 0,!1,void 0,void 0,void 0),K={extends:d,name:s.SectionBreak,methods:{onEnter:function(){this.dirty=!0,this._onEnter()},isValid:function(){return!0}}},z=function(){var e=this.$createElement,t=this._self._c||e;return this.question.content?t("div",{staticClass:"f-content"},[t("span",{staticClass:"f-section-text"},[this._v(this._s(this.question.content))])]):this._e()};z._withStripped=!0;var B=c({render:z,staticRenderFns:[]},void 0,K,void 0,!1,void 0,!1,void 0,void 0,void 0),R=c({},void 0,{extends:T,name:s.Url,data:function(){return{inputType:"url"}},methods:{fixAnswer:function(e){return e&&-1===e.indexOf("://")&&(e="https://"+e),e},validate:function(){if(this.hasValue)try{new URL(this.fixAnswer(this.dataValue));return!0}catch(e){}return!1}}},void 0,void 0,void 0,!1,void 0,void 0,void 0),M={name:"FlowFormQuestion",components:{FlowFormDateType:c({},void 0,{extends:T,name:s.Date,data:function(){return{inputType:"date",canReceiveFocus:!0}},methods:{validate:function(){return!(this.question.min&&this.dataValue<this.question.min)&&(!(this.question.max&&this.dataValue>this.question.max)&&(!this.question.required||this.hasValue))}}},void 0,void 0,void 0,!1,void 0,void 0,void 0),FlowFormDropdownType:f,FlowFormEmailType:C,FlowFormLongTextType:S,FlowFormMultipleChoiceType:Q,FlowFormNumberType:$,FlowFormPasswordType:D,FlowFormPhoneType:I,FlowFormSectionBreakType:B,FlowFormTextType:T,FlowFormUrlType:R},props:{question:r,language:n,value:[String,Array,Boolean,Number],active:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1}},mixins:[h],data:function(){return{QuestionType:s,dataValue:null}},mounted:function(){this.focusField(),this.dataValue=this.question.answer,this.$refs.qanimate.addEventListener("animationend",this.onAnimationEnd)},beforeDestroy:function(){this.$refs.qanimate.removeEventListener("animationend",this.onAnimationEnd)},methods:{focusField:function(){var e=this.$refs.questionComponent;e&&e.focus()},onAnimationEnd:function(){this.focusField()},shouldFocus:function(){var e=this.$refs.questionComponent;return e&&e.canReceiveFocus&&!e.focused},returnFocus:function(){this.$refs.questionComponent;this.shouldFocus()&&this.focusField()},onEnter:function(e){var t=this.$refs.questionComponent;t&&(t.focused||this.$emit("answer",t),t.onEnter())},onTab:function(e){var t=this.$refs.questionComponent;t&&(this.returnFocus(),this.$emit("answer",t),t.onEnter())},showOkButton:function(){var e=this.$refs.questionComponent;return this.question.type===s.SectionBreak?this.active:!(!this.question.allowOther||!this.question.other)||!(s.MultipleChoice&&!this.question.multiple&&this.question.nextStepOnAnswer)&&(!(!e||!this.dataValue)&&(e.hasValue&&e.isValid()))},showInvalid:function(){var e=this.$refs.questionComponent;return!(!e||!this.dataValue)&&e.showInvalid()}},computed:{mainClasses:{cache:!1,get:function(){var e={"q-is-active":this.active,"q-is-inactive":!this.active,"f-fade-in-down":this.reverse,"f-fade-in-up":!this.reverse,"f-focused":this.$refs.questionComponent&&this.$refs.questionComponent.focused,"f-has-value":this.$refs.questionComponent&&this.$refs.questionComponent.hasValue};return e["field-"+this.question.type.toLowerCase().substring(8)]=!0,e}},showHelperText:function(){return!!this.question.subtitle||(this.question.type===s.LongText||this.question.type===s.MultipleChoice)&&this.question.helpTextShow}}},N=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"qanimate",staticClass:"vff-animate q-form",class:e.mainClasses},[i("div",{staticClass:"q-inner"},[i("div",{class:{"f-section-wrap":e.question.type===e.QuestionType.SectionBreak}},[i("div",{class:{fh2:e.question.type!==e.QuestionType.SectionBreak}},[e.question.tagline?i("span",{staticClass:"f-tagline"},[e._v(e._s(e.question.tagline))]):e._e(),e._v(" "),e.question.title?[e.question.type===e.QuestionType.SectionBreak?i("span",{staticClass:"fh2"},[e._v(e._s(e.question.title))]):i("span",{staticClass:"f-text"},[e._v("\n            "+e._s(e.question.title)+" \n            "),e._v(" "),e.question.required?i("span",{staticClass:"f-required",attrs:{"aria-label":e.language.ariaRequired,role:"note"}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("*")])]):e._e(),e._v(" "),e.question.inline?i("span",{staticClass:"f-answer"},[i(e.question.type,{ref:"questionComponent",tag:"component",attrs:{question:e.question,language:e.language,active:e.active},on:{next:e.onEnter},model:{value:e.dataValue,callback:function(t){e.dataValue=t},expression:"dataValue"}})],1):e._e()])]:e._e(),e._v(" "),e.showHelperText?i("span",{staticClass:"f-sub"},[e.question.subtitle?i("span",[e._v(e._s(e.question.subtitle))]):e._e(),e._v(" "),e.question.type!==e.QuestionType.LongText||e.isMobile?e._e():i("span",{staticClass:"f-help",domProps:{innerHTML:e._s(e.question.helpText||e.language.formatString(e.language.longTextHelpText))}}),e._v(" "),e.question.type===e.QuestionType.MultipleChoice&&e.question.multiple?i("span",{staticClass:"f-help"},[e._v(e._s(e.question.helpText||e.language.multipleChoiceHelpText))]):e.question.type===e.QuestionType.MultipleChoice?i("span",{staticClass:"f-help"},[e._v(e._s(e.question.helpText||e.language.multipleChoiceHelpTextSingle))]):e._e()]):e._e(),e._v(" "),e.question.inline?e._e():i("div",{staticClass:"f-answer f-full-width"},[i(e.question.type,{ref:"questionComponent",tag:"component",attrs:{question:e.question,language:e.language,active:e.active},on:{next:e.onEnter},model:{value:e.dataValue,callback:function(t){e.dataValue=t},expression:"dataValue"}})],1)],2),e._v(" "),e.question.description||0!==e.question.descriptionLink.length?i("p",{staticClass:"f-description"},[e.question.description?i("span",[e._v(e._s(e.question.description))]):e._e(),e._v(" "),e._l(e.question.descriptionLink,(function(t,n){return i("a",{key:"m"+n,staticClass:"f-link",attrs:{href:t.url,target:t.target}},[e._v(e._s(t.text||t.url))])}))],2):e._e()]),e._v(" "),e.showOkButton()?i("div",{staticClass:"vff-animate f-fade-in f-enter"},[i("button",{ref:"button",staticClass:"o-btn-action",attrs:{type:"button",href:"#","aria-label":e.language.ariaOk},on:{click:function(t){return t.preventDefault(),e.onEnter(t)}}},[e.question.type===e.QuestionType.SectionBreak?i("span",[e._v(e._s(e.language.continue))]):i("span",[e._v(e._s(e.language.ok))])]),e._v(" "),e.question.type===e.QuestionType.LongText&&e.isMobile?e._e():i("a",{staticClass:"f-enter-desc",attrs:{href:"#"},domProps:{innerHTML:e._s(e.language.formatString(e.language.pressEnter))},on:{click:function(t){return t.preventDefault(),e.onEnter(t)}}})]):e._e(),e._v(" "),e.showInvalid()?i("div",{staticClass:"f-invalid",attrs:{role:"alert","aria-live":"assertive"}},[e._v(e._s(e.language.invalidPrompt))]):e._e()])])};N._withStripped=!0;var H={name:"FlowForm",components:{FlowFormQuestion:c({render:N,staticRenderFns:[]},void 0,M,void 0,!1,void 0,!1,void 0,void 0,void 0)},props:{questions:Array,language:{type:n,default:function(){return new n}},progressbar:{type:Boolean,default:!0},standalone:{type:Boolean,default:!0},navigation:{type:Boolean,default:!0},timer:{type:Boolean,default:!1},timerStartStep:[String,Number],timerStopStep:[String,Number]},mixins:[h],data:function(){return{completed:!1,submitted:!1,activeQuestionIndex:0,questionList:[],questionListActivePath:[],reverse:!1,timerOn:!1,timerInterval:null,time:0}},mounted:function(){document.addEventListener("keydown",this.onKeyDownListener),document.addEventListener("keyup",this.onKeyUpListener,!0),window.addEventListener("beforeunload",this.onBeforeUnload),this.setQuestions(),this.checkTimer()},beforeDestroy:function(){document.removeEventListener("keydown",this.onKeyDownListener),document.removeEventListener("keyup",this.onKeyUpListener,!0),window.removeEventListener("beforeunload",this.onBeforeUnload),this.stopTimer()},computed:{numActiveQuestions:function(){return this.questionListActivePath.length},activeQuestion:function(){return this.questionListActivePath[this.activeQuestionIndex]},activeQuestionId:function(){var e=this.questions[this.activeQuestionIndex];return this.isOnLastStep?"_submit":e&&e.id?e.id:null},numCompletedQuestions:function(){var e=0;return this.questionListActivePath.forEach((function(t){t.answered&&++e})),e},percentCompleted:function(){return this.numActiveQuestions?Math.floor(this.numCompletedQuestions/this.numActiveQuestions*100):0},isOnLastStep:function(){return this.activeQuestionIndex===this.questionListActivePath.length},isOnTimerStartStep:function(){return this.activeQuestionId===this.timerStartStep||!this.timerOn&&!this.timerStartStep&&0===this.activeQuestionIndex},isOnTimerStopStep:function(){return!!this.submitted||this.activeQuestionId===this.timerStopStep}},methods:{activeQuestionComponent:function(){return this.$refs.questions?this.$refs.questions[this.activeQuestionIndex]:null},setQuestions:function(){this.setQuestionListActivePath(),this.setQuestionList()},setQuestionListActivePath:function(){var e,t=[],i=0,n=0;do{var s=this.questions[i];if(s.setIndex(n),s.language=this.language,t.push(s),s.jump)if(s.answered)if(e=s.getJumpId()){if("_submit"===e)i=this.questions.length;else for(var o=0;o<this.questions.length;o++)if(this.questions[o].id===e){i=o;break}}else++i;else i=this.questions.length;else++i;++n}while(i<this.questions.length);this.questionListActivePath=t},setQuestionList:function(){for(var e=[],t=0;t<this.questionListActivePath.length;t++){var i=this.questionListActivePath[t];if(e.push(i),!i.answered){this.completed&&(this.completed=!1);break}}this.questionList=e},onBeforeUnload:function(e){this.activeQuestionIndex>0&&!this.submitted&&(e.preventDefault(),e.returnValue="")},onKeyDownListener:function(e){if("Tab"===e.key&&!this.submitted)if(e.shiftKey)e.stopPropagation(),e.preventDefault(),this.navigation&&this.goToPreviousQuestion();else{e.preventDefault();var t=this.activeQuestionComponent();t.shouldFocus()?t.focusField():(e.stopPropagation(),this.emitTab(),this.reverse=!1)}},onKeyUpListener:function(e){if(!e.shiftKey&&-1!==["Tab","Enter"].indexOf(e.key)&&!this.submitted){var t=this.activeQuestionComponent();"Tab"===e.key&&t.shouldFocus()?t.focusField():("Enter"===e.key&&this.emitEnter(),e.stopPropagation(),this.reverse=!1)}},emitEnter:function(){var e=this.activeQuestionComponent();e?e.onEnter():this.completed&&this.isOnLastStep&&this.submit()},emitTab:function(){var e=this.activeQuestionComponent();e?e.onTab():this.emitEnter()},submit:function(){this.emitSubmit(),this.submitted=!0},emitComplete:function(){this.$emit("complete",this.completed,this.questionList)},emitSubmit:function(){this.$emit("submit",this.questionList)},isNextQuestionAvailable:function(){if(this.submitted)return!1;var e=this.activeQuestion;return!(!e||e.required)||this.activeQuestionIndex<this.questionList.length-1},onQuestionAnswered:function(e){var t=this;e.isValid()?(this.$emit("answer",e),this.activeQuestionIndex<this.questionListActivePath.length&&++this.activeQuestionIndex,this.$nextTick((function(){t.setQuestions(),t.checkTimer(),t.$nextTick((function(){var e=t.activeQuestionComponent();e?(e.focusField(),t.activeQuestionIndex=e.question.index):t.isOnLastStep&&(t.completed=!0,t.activeQuestionIndex=t.questionListActivePath.length,t.$refs.button&&t.$refs.button.focus()),t.$emit("step",t.activeQuestionId,t.activeQuestion)}))}))):this.completed&&(this.completed=!1)},goToPreviousQuestion:function(){this.blurFocus(),this.activeQuestionIndex>0&&!this.submitted&&(this.isOnTimerStopStep&&this.startTimer(),--this.activeQuestionIndex,this.reverse=!0,this.checkTimer())},goToNextQuestion:function(){this.blurFocus(),this.isNextQuestionAvailable()&&this.emitEnter(),this.reverse=!1},blurFocus:function(){document.activeElement&&document.activeElement.blur&&document.activeElement.blur()},checkTimer:function(){this.timer&&(this.isOnTimerStartStep?this.startTimer():this.isOnTimerStopStep&&this.stopTimer())},startTimer:function(){this.timer&&!this.timerOn&&(this.timerInterval=setInterval(this.incrementTime,1e3),this.timerOn=!0)},stopTimer:function(){this.timerOn&&clearInterval(this.timerInterval),this.timerOn=!1},incrementTime:function(){++this.time,this.$emit("timer",this.time,this.formatTime(this.time))},formatTime:function(e){var t=14,i=5;return e>=3600&&(t=11,i=8),new Date(1e3*e).toISOString().substr(t,i)}},watch:{completed:function(){this.emitComplete()},submitted:function(){this.stopTimer()}}},j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vff",class:{"vff-not-standalone":!e.standalone,"vff-is-mobile":e.isMobile,"vff-is-ios":e.isIos}},[i("div",{staticClass:"f-container"},[i("div",{staticClass:"f-form-wrap"},[e._l(e.questionList,(function(t,n){return i("flow-form-question",{key:"q"+n,ref:"questions",refInFor:!0,attrs:{question:t,language:e.language,active:t.index===e.activeQuestionIndex,reverse:e.reverse},on:{answer:e.onQuestionAnswered},model:{value:t.answer,callback:function(i){e.$set(t,"answer",i)},expression:"q.answer"}})})),e._v(" "),e.isOnLastStep?i("div",{staticClass:"vff-animate f-fade-in-up field-submittype"},[e._t("complete",[i("div",{staticClass:"f-section-wrap"},[i("p",[i("span",{staticClass:"fh2"},[e._v(e._s(e.language.thankYouText))])])])]),e._v(" "),e._t("completeButton",[e.submitted?e._e():i("button",{ref:"button",staticClass:"o-btn-action",attrs:{type:"button",href:"#","aria-label":e.language.ariaSubmitText},on:{click:function(t){return t.preventDefault(),e.submit()}}},[i("span",[e._v(e._s(e.language.submitText))])]),e._v(" "),e.submitted?e._e():i("a",{staticClass:"f-enter-desc",attrs:{href:"#"},domProps:{innerHTML:e._s(e.language.formatString(e.language.pressEnter))},on:{click:function(t){return t.preventDefault(),e.submit()}}}),e._v(" "),e.submitted?i("p",{staticClass:"text-success"},[e._v(e._s(e.language.successText))]):e._e()])],2):e._e()],2)]),e._v(" "),i("div",{staticClass:"vff-footer"},[i("div",{staticClass:"footer-inner-wrap"},[e.progressbar?i("div",{staticClass:"f-progress",class:{"not-started":0===e.percentCompleted,completed:100===e.percentCompleted}},[i("div",{staticClass:"f-progress-bar"},[i("div",{staticClass:"f-progress-bar-inner",style:"width: "+e.percentCompleted+"%;"})]),e._v("\n        "+e._s(e.language.percentCompleted.replace(":percent",e.percentCompleted))+"\n      ")]):e._e(),e._v(" "),e.navigation?i("div",{staticClass:"f-nav"},[i("a",{staticClass:"f-prev",class:{"f-disabled":0===e.activeQuestionIndex||e.submitted},attrs:{href:"#",role:"button","aria-label":e.language.ariaPrev},on:{click:function(t){return t.preventDefault(),e.goToPreviousQuestion()}}},[i("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"42.333px",height:"28.334px",viewBox:"78.833 5.5 42.333 28.334","aria-hidden":"true"}},[i("path",{attrs:{d:"M82.039,31.971L100,11.442l17.959,20.529L120,30.187L101.02,8.492c-0.258-0.295-0.629-0.463-1.02-0.463c-0.39,0-0.764,0.168-1.02,0.463L80,30.187L82.039,31.971z"}})]),e._v(" "),i("span",{staticClass:"f-nav-text",attrs:{"aria-hidden":"true"}},[e._v(e._s(e.language.prev))])]),e._v(" "),i("a",{staticClass:"f-next",class:{"f-disabled":!e.isNextQuestionAvailable()},attrs:{href:"#",role:"button","aria-label":e.language.ariaNext},on:{click:function(t){return t.preventDefault(),e.goToNextQuestion()}}},[i("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"42.333px",height:"28.334px",viewBox:"78.833 5.5 42.333 28.334","aria-hidden":"true"}},[i("path",{attrs:{d:"M117.963,8.031l-17.961,20.529L82.042,8.031l-2.041,1.784l18.98,21.695c0.258,0.295,0.629,0.463,1.02,0.463c0.39,0,0.764-0.168,1.02-0.463l18.98-21.695L117.963,8.031z"}})]),e._v(" "),i("span",{staticClass:"f-nav-text",attrs:{"aria-hidden":"true"}},[e._v(e._s(e.language.next))])])]):e._e(),e._v(" "),e.timer?i("div",{staticClass:"f-timer"},[i("span",[e._v(e._s(e.formatTime(e.time)))])]):e._e()])])])};j._withStripped=!0;var U=c({render:j,staticRenderFns:[]},void 0,H,void 0,!1,void 0,!1,void 0,void 0,void 0);function J(e,t){var i=arguments;if(null==e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),s=1;s<arguments.length;s++){var o=i[s];if(null!=o)for(var a=Object.keys(Object(o)),r=0,u=a.length;r<u;r++){var l=a[r],h=Object.getOwnPropertyDescriptor(o,l);void 0!==h&&h.enumerable&&(n[l]=o[l])}}return n}function Z(e){Z.installed||(Z.installed=!0,e.component("FlowForm",U))}({assign:J,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:J})}}).polyfill();var X={install:Z},Y=null;"undefined"!=typeof window?Y=window.Vue:"undefined"!=typeof global&&(Y=global.Vue),Y&&Y.use(X),t.ChoiceOption=a,t.LanguageModel=n,t.LinkOption=function(e){this.url="",this.text="",this.target="_blank",Object.assign(this,e)},t.MaskPresets=o,t.QuestionModel=r,t.QuestionType=s,t.default=U,t.install=Z}}]);