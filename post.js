// очень хорошая статья про наследования, тоже пробегитесь по ней, я постараюсь её донести
//https://learn.javascript.ru/class-inheritance
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
//http://habrahabr.ru/post/140810/
//http://habrahabr.ru/post/175029/#classes
//

/////////////////////////////

//# наследование двух объектов
var a = {a:1};
var b = {b:2};
a.__proto__ = b;


var superFn = function(){
    this.arguments = arguments;
    console.log("Arguments: ", arguments, ", Ctx: ", this  )
};

superFn();
superFn(1, 2, 3);

var superA = superFn.bind(a);
new superFn();

var s1 = new superFn(1, 2, 3);
s1.qwe = 111;

var s2 = new superFn(1, 2, 3);
s2.qwe = 222;

s2.test();


1
new q
VM507:2 Uncaught TypeError: q is not a function(…)(anonymous function) @ VM507:2InjectedScript._evaluateOn @ VM329:904InjectedScript._evaluateAndWrap @ VM329:837InjectedScript.evaluate @ VM329:693
new function(){}
Object {}
new function(){ this.name = 123 };
Object {name: 123}
Animal.prototype.prototype
undefined
Animal.prototype.constructor
Animal(name) {
  this.name = name;
  this.speed = 0;
}
Animal.prototype.constructor.prototype
Animal {}constructor: Animal(name)__proto__: Objectqwe: 123__proto__: Object
Animal.prototype.__proto__
Object {}__defineGetter__: __defineGetter__()__defineSetter__: __defineSetter__()__lookupGetter__: __lookupGetter__()__lookupSetter__: __lookupSetter__()constructor: Object()hasOwnProperty: hasOwnProperty()isPrototypeOf: isPrototypeOf()propertyIsEnumerable: propertyIsEnumerable()toLocaleString: toLocaleString()toString: toString()valueOf: valueOf()get __proto__: get __proto__()set __proto__: set __proto__()
Animal.prototype.__proto__ = {qwe:123}
Object {qwe: 123}
Animal.prototype
Animal {}constructor: Animal(name)__proto__: Objectqwe: 123__proto__: Object
function() {  this.qwe = "qwe"; return 123;}
VM806:2 Uncaught SyntaxError: Unexpected token ((…)InjectedScript._evaluateOn @ VM329:904InjectedScript._evaluateAndWrap @ VM329:837InjectedScript.evaluate @ VM329:693
var q = function() {  this.qwe = "qwe"; return 123; }
undefined
q
() {  this.qwe = "qwe"; return 123; }
q
() {  this.qwe = "qwe"; return 123; }
q.prototype
q {}constructor: ()__proto__: Object
new q
q {qwe: "qwe"}
var q = function() {  this.qwe = "qwe"; console.log("run q"); return 123; }
undefined
q()
VM897:2 run q
123
q.qwe
undefined
var ctx = {name:"Igor"};
undefined
q.bind(ctx)
bound () { [native code] }
q.bind(ctx)()
VM897:2 run q
123
ctx
Object {name: "Igor", qwe: "qwe"}
q
() {  this.qwe = "qwe"; console.log("run q"); return 123; }
new q;
VM897:2 run q
q {qwe: "qwe"}
new q();
VM897:2 run q
q {qwe: "qwe"}
var q = function() {  this.const = "const"; this.args = arguments; console.log("run q, with ctx ", this); return 123; }
undefined
q
() {  this.const = "const"; this.args = arguments; console.log("run q, with ctx ", this); return 123; }
q.toString()
"function () {  this.const = "const"; this.args = arguments; console.log("run q, with ctx ", this); return 123; }"
q()
VM1091:2 run q, with ctx  Window {top: Window, location: Location, document: document, window: Window, external: Object…}Infinity: Infinity$scopeId: (id)AnalyserNode: AnalyserNode()Animal: Animal(name)AnimationEvent: AnimationEvent()AppBannerPromptResult: AppBannerPromptResult()ApplicationCache: ApplicationCache()ApplicationCacheErrorEvent: ApplicationCacheErrorEvent()Array: Array()ArrayBuffer: ArrayBuffer()Attr: Attr()Audio: HTMLAudioElement()AudioBuffer: AudioBuffer()AudioBufferSourceNode: AudioBufferSourceNode()AudioContext: AudioContext()AudioDestinationNode: AudioDestinationNode()AudioListener: AudioListener()AudioNode: AudioNode()AudioParam: AudioParam()AudioProcessingEvent: AudioProcessingEvent()AutocompleteErrorEvent: AutocompleteErrorEvent()BarProp: BarProp()BatteryManager: BatteryManager()BeforeInstallPromptEvent: BeforeInstallPromptEvent()BeforeUnloadEvent: BeforeUnloadEvent()BiquadFilterNode: BiquadFilterNode()Blob: Blob()Boolean: Boolean()CDATASection: CDATASection()CSS: CSS()CSSFontFaceRule: CSSFontFaceRule()CSSGroupingRule: CSSGroupingRule()CSSImportRule: CSSImportRule()CSSKeyframeRule: CSSKeyframeRule()CSSKeyframesRule: CSSKeyframesRule()CSSMediaRule: CSSMediaRule()CSSPageRule: CSSPageRule()CSSRule: CSSRule()CSSRuleList: CSSRuleList()CSSStyleDeclaration: CSSStyleDeclaration()CSSStyleRule: CSSStyleRule()CSSStyleSheet: CSSStyleSheet()CSSSupportsRule: CSSSupportsRule()CSSViewportRule: CSSViewportRule()Cache: Cache()CacheStorage: CacheStorage()CanvasGradient: CanvasGradient()CanvasPattern: CanvasPattern()CanvasRenderingContext2D: CanvasRenderingContext2D()ChannelMergerNode: ChannelMergerNode()ChannelSplitterNode: ChannelSplitterNode()CharacterData: CharacterData()ClientRect: ClientRect()ClientRectList: ClientRectList()ClipboardEvent: ClipboardEvent()CloseEvent: CloseEvent()Comment: Comment()CompositionEvent: CompositionEvent()ConvolverNode: ConvolverNode()Crypto: Crypto()CryptoKey: CryptoKey()CustomEvent: CustomEvent()DISQUS: ObjectDISQUSWIDGETS: ObjectDOMError: DOMError()DOMException: DOMException()DOMImplementation: DOMImplementation()DOMParser: DOMParser()DOMSettableTokenList: DOMSettableTokenList()DOMStringList: DOMStringList()DOMStringMap: DOMStringMap()DOMTokenList: DOMTokenList()DataTransfer: DataTransfer()DataTransferItem: DataTransferItem()DataTransferItemList: DataTransferItemList()DataView: DataView()Date: Date()DelayNode: DelayNode()DeviceMotionEvent: DeviceMotionEvent()DeviceOrientationEvent: DeviceOrientationEvent()Document: Document()DocumentFragment: DocumentFragment()DocumentType: DocumentType()DynamicsCompressorNode: DynamicsCompressorNode()Element: Element()Error: Error()ErrorEvent: ErrorEvent()EvalError: EvalError()Event: Event()EventSource: EventSource()EventTarget: EventTarget()File: File()FileError: FileError()FileList: FileList()FileReader: FileReader()Float32Array: Float32Array()Float64Array: Float64Array()FocusEvent: FocusEvent()FontFace: FontFace()FormData: FormData()Function: Function()GA_ID: "UA-2056213-16"GainNode: GainNode()Gamepad: Gamepad()GamepadButton: GamepadButton()GamepadEvent: GamepadEvent()GoogleAnalyticsObject: "ga"HTMLAllCollection: HTMLAllCollection()HTMLAnchorElement: HTMLAnchorElement()HTMLAppletElement: HTMLAppletElement()HTMLAreaElement: HTMLAreaElement()HTMLAudioElement: HTMLAudioElement()HTMLBRElement: HTMLBRElement()HTMLBaseElement: HTMLBaseElement()HTMLBodyElement: HTMLBodyElement()HTMLButtonElement: HTMLButtonElement()HTMLCanvasElement: HTMLCanvasElement()HTMLCollection: HTMLCollection()HTMLContentElement: HTMLContentElement()HTMLDListElement: HTMLDListElement()HTMLDataListElement: HTMLDataListElement()HTMLDetailsElement: HTMLDetailsElement()HTMLDialogElement: HTMLDialogElement()HTMLDirectoryElement: HTMLDirectoryElement()HTMLDivElement: HTMLDivElement()HTMLDocument: HTMLDocument()HTMLElement: HTMLElement()HTMLEmbedElement: HTMLEmbedElement()HTMLFieldSetElement: HTMLFieldSetElement()HTMLFontElement: HTMLFontElement()HTMLFormControlsCollection: HTMLFormControlsCollection()HTMLFormElement: HTMLFormElement()HTMLFrameElement: HTMLFrameElement()HTMLFrameSetElement: HTMLFrameSetElement()HTMLHRElement: HTMLHRElement()HTMLHeadElement: HTMLHeadElement()HTMLHeadingElement: HTMLHeadingElement()HTMLHtmlElement: HTMLHtmlElement()HTMLIFrameElement: HTMLIFrameElement()HTMLImageElement: HTMLImageElement()HTMLInputElement: HTMLInputElement()HTMLKeygenElement: HTMLKeygenElement()HTMLLIElement: HTMLLIElement()HTMLLabelElement: HTMLLabelElement()HTMLLegendElement: HTMLLegendElement()HTMLLinkElement: HTMLLinkElement()HTMLMapElement: HTMLMapElement()HTMLMarqueeElement: HTMLMarqueeElement()HTMLMediaElement: HTMLMediaElement()HTMLMenuElement: HTMLMenuElement()HTMLMetaElement: HTMLMetaElement()HTMLMeterElement: HTMLMeterElement()HTMLModElement: HTMLModElement()HTMLOListElement: HTMLOListElement()HTMLObjectElement: HTMLObjectElement()HTMLOptGroupElement: HTMLOptGroupElement()HTMLOptionElement: HTMLOptionElement()HTMLOptionsCollection: HTMLOptionsCollection()HTMLOutputElement: HTMLOutputElement()HTMLParagraphElement: HTMLParagraphElement()HTMLParamElement: HTMLParamElement()HTMLPictureElement: HTMLPictureElement()HTMLPreElement: HTMLPreElement()HTMLProgressElement: HTMLProgressElement()HTMLQuoteElement: HTMLQuoteElement()HTMLScriptElement: HTMLScriptElement()HTMLSelectElement: HTMLSelectElement()HTMLShadowElement: HTMLShadowElement()HTMLSourceElement: HTMLSourceElement()HTMLSpanElement: HTMLSpanElement()HTMLStyleElement: HTMLStyleElement()HTMLTableCaptionElement: HTMLTableCaptionElement()HTMLTableCellElement: HTMLTableCellElement()HTMLTableColElement: HTMLTableColElement()HTMLTableElement: HTMLTableElement()HTMLTableRowElement: HTMLTableRowElement()HTMLTableSectionElement: HTMLTableSectionElement()HTMLTemplateElement: HTMLTemplateElement()HTMLTextAreaElement: HTMLTextAreaElement()HTMLTitleElement: HTMLTitleElement()HTMLTrackElement: HTMLTrackElement()HTMLUListElement: HTMLUListElement()HTMLUnknownElement: HTMLUnknownElement()HTMLVideoElement: HTMLVideoElement()HashChangeEvent: HashChangeEvent()Headers: Headers()History: History()IDBCursor: IDBCursor()IDBCursorWithValue: IDBCursorWithValue()IDBDatabase: IDBDatabase()IDBFactory: IDBFactory()IDBIndex: IDBIndex()IDBKeyRange: IDBKeyRange()IDBObjectStore: IDBObjectStore()IDBOpenDBRequest: IDBOpenDBRequest()IDBRequest: IDBRequest()IDBTransaction: IDBTransaction()IDBVersionChangeEvent: IDBVersionChangeEvent()Image: HTMLImageElement()ImageBitmap: ImageBitmap()ImageData: ImageData()Int8Array: Int8Array()Int16Array: Int16Array()Int32Array: Int32Array()Intl: ObjectJSON: JSONKeyboardEvent: KeyboardEvent()Location: Location()MIDIAccess: MIDIAccess()MIDIConnectionEvent: MIDIConnectionEvent()MIDIInput: MIDIInput()MIDIInputMap: MIDIInputMap()MIDIMessageEvent: MIDIMessageEvent()MIDIOutput: MIDIOutput()MIDIOutputMap: MIDIOutputMap()MIDIPort: MIDIPort()Map: Map()Math: MathConstructorMediaElementAudioSourceNode: MediaElementAudioSourceNode()MediaEncryptedEvent: MediaEncryptedEvent()MediaError: MediaError()MediaKeyError: MediaKeyError()MediaKeyEvent: MediaKeyEvent()MediaKeyMessageEvent: MediaKeyMessageEvent()MediaKeySession: MediaKeySession()MediaKeyStatusMap: MediaKeyStatusMap()MediaKeySystemAccess: MediaKeySystemAccess()MediaKeys: MediaKeys()MediaList: MediaList()MediaQueryList: MediaQueryList()MediaQueryListEvent: MediaQueryListEvent()MediaSource: MediaSource()MediaStreamAudioDestinationNode: MediaStreamAudioDestinationNode()MediaStreamAudioSourceNode: MediaStreamAudioSourceNode()MediaStreamEvent: MediaStreamEvent()MediaStreamTrack: MediaStreamTrack()MessageChannel: MessageChannel()MessageEvent: MessageEvent()MessagePort: MessagePort()MimeType: MimeType()MimeTypeArray: MimeTypeArray()MouseEvent: MouseEvent()MutationEvent: MutationEvent()MutationObserver: MutationObserver()MutationRecord: MutationRecord()NaN: NaNNamedNodeMap: NamedNodeMap()Navigator: Navigator()Node: Node()NodeFilter: NodeFilter()NodeIterator: NodeIterator()NodeList: NodeList()Notification: Notification()Number: Number()Object: Object()OfflineAudioCompletionEvent: OfflineAudioCompletionEvent()OfflineAudioContext: OfflineAudioContext()Option: HTMLOptionElement()OscillatorNode: OscillatorNode()PageTransitionEvent: PageTransitionEvent()Path2D: Path2D()Performance: Performance()PerformanceEntry: PerformanceEntry()PerformanceMark: PerformanceMark()PerformanceMeasure: PerformanceMeasure()PerformanceNavigation: PerformanceNavigation()PerformanceResourceTiming: PerformanceResourceTiming()PerformanceTiming: PerformanceTiming()PeriodicWave: PeriodicWave()PermissionStatus: PermissionStatus()Permissions: Permissions()Plugin: Plugin()PluginArray: PluginArray()PopStateEvent: PopStateEvent()Prism: ObjectProcessingInstruction: ProcessingInstruction()ProgressEvent: ProgressEvent()Promise: Promise()PushManager: PushManager()PushSubscription: PushSubscription()RTCIceCandidate: RTCIceCandidate()RTCSessionDescription: RTCSessionDescription()RadioNodeList: RadioNodeList()Range: Range()RangeError: RangeError()ReadableByteStream: ReadableByteStream()ReadableStream: ReadableStream()ReferenceError: ReferenceError()RegExp: RegExp()Request: Request()Response: Response()SVGAElement: SVGAElement()SVGAngle: SVGAngle()SVGAnimateElement: SVGAnimateElement()SVGAnimateMotionElement: SVGAnimateMotionElement()SVGAnimateTransformElement: SVGAnimateTransformElement()SVGAnimatedAngle: SVGAnimatedAngle()SVGAnimatedBoolean: SVGAnimatedBoolean()SVGAnimatedEnumeration: SVGAnimatedEnumeration()SVGAnimatedInteger: SVGAnimatedInteger()SVGAnimatedLength: SVGAnimatedLength()SVGAnimatedLengthList: SVGAnimatedLengthList()SVGAnimatedNumber: SVGAnimatedNumber()SVGAnimatedNumberList: SVGAnimatedNumberList()SVGAnimatedPreserveAspectRatio: SVGAnimatedPreserveAspectRatio()SVGAnimatedRect: SVGAnimatedRect()SVGAnimatedString: SVGAnimatedString()SVGAnimatedTransformList: SVGAnimatedTransformList()SVGAnimationElement: SVGAnimationElement()SVGCircleElement: SVGCircleElement()SVGClipPathElement: SVGClipPathElement()SVGComponentTransferFunctionElement: SVGComponentTransferFunctionElement()SVGCursorElement: SVGCursorElement()SVGDefsElement: SVGDefsElement()SVGDescElement: SVGDescElement()SVGDiscardElement: SVGDiscardElement()SVGElement: SVGElement()SVGEllipseElement: SVGEllipseElement()SVGFEBlendElement: SVGFEBlendElement()SVGFEColorMatrixElement: SVGFEColorMatrixElement()SVGFEComponentTransferElement: SVGFEComponentTransferElement()SVGFECompositeElement: SVGFECompositeElement()SVGFEConvolveMatrixElement: SVGFEConvolveMatrixElement()SVGFEDiffuseLightingElement: SVGFEDiffuseLightingElement()SVGFEDisplacementMapElement: SVGFEDisplacementMapElement()SVGFEDistantLightElement: SVGFEDistantLightElement()SVGFEDropShadowElement: SVGFEDropShadowElement()SVGFEFloodElement: SVGFEFloodElement()SVGFEFuncAElement: SVGFEFuncAElement()SVGFEFuncBElement: SVGFEFuncBElement()SVGFEFuncGElement: SVGFEFuncGElement()SVGFEFuncRElement: SVGFEFuncRElement()SVGFEGaussianBlurElement: SVGFEGaussianBlurElement()SVGFEImageElement: SVGFEImageElement()SVGFEMergeElement: SVGFEMergeElement()SVGFEMergeNodeElement: SVGFEMergeNodeElement()SVGFEMorphologyElement: SVGFEMorphologyElement()SVGFEOffsetElement: SVGFEOffsetElement()SVGFEPointLightElement: SVGFEPointLightElement()SVGFESpecularLightingElement: SVGFESpecularLightingElement()SVGFESpotLightElement: SVGFESpotLightElement()SVGFETileElement: SVGFETileElement()SVGFETurbulenceElement: SVGFETurbulenceElement()SVGFilterElement: SVGFilterElement()SVGForeignObjectElement: SVGForeignObjectElement()SVGGElement: SVGGElement()SVGGeometryElement: SVGGeometryElement()SVGGradientElement: SVGGradientElement()SVGGraphicsElement: SVGGraphicsElement()SVGImageElement: SVGImageElement()SVGLength: SVGLength()SVGLengthList: SVGLengthList()SVGLineElement: SVGLineElement()SVGLinearGradientElement: SVGLinearGradientElement()SVGMPathElement: SVGMPathElement()SVGMarkerElement: SVGMarkerElement()SVGMaskElement: SVGMaskElement()SVGMatrix: SVGMatrix()SVGMetadataElement: SVGMetadataElement()SVGNumber: SVGNumber()SVGNumberList: SVGNumberList()SVGPathElement: SVGPathElement()SVGPathSeg: SVGPathSeg()SVGPathSegArcAbs: SVGPathSegArcAbs()SVGPathSegArcRel: SVGPathSegArcRel()SVGPathSegClosePath: SVGPathSegClosePath()SVGPathSegCurvetoCubicAbs: SVGPathSegCurvetoCubicAbs()SVGPathSegCurvetoCubicRel: SVGPathSegCurvetoCubicRel()SVGPathSegCurvetoCubicSmoothAbs: SVGPathSegCurvetoCubicSmoothAbs()SVGPathSegCurvetoCubicSmoothRel: SVGPathSegCurvetoCubicSmoothRel()SVGPathSegCurvetoQuadraticAbs: SVGPathSegCurvetoQuadraticAbs()SVGPathSegCurvetoQuadraticRel: SVGPathSegCurvetoQuadraticRel()SVGPathSegCurvetoQuadraticSmoothAbs: SVGPathSegCurvetoQuadraticSmoothAbs()SVGPathSegCurvetoQuadraticSmoothRel: SVGPathSegCurvetoQuadraticSmoothRel()SVGPathSegLinetoAbs: SVGPathSegLinetoAbs()SVGPathSegLinetoHorizontalAbs: SVGPathSegLinetoHorizontalAbs()SVGPathSegLinetoHorizontalRel: SVGPathSegLinetoHorizontalRel()SVGPathSegLinetoRel: SVGPathSegLinetoRel()SVGPathSegLinetoVerticalAbs: SVGPathSegLinetoVerticalAbs()SVGPathSegLinetoVerticalRel: SVGPathSegLinetoVerticalRel()SVGPathSegList: SVGPathSegList()SVGPathSegMovetoAbs: SVGPathSegMovetoAbs()SVGPathSegMovetoRel: SVGPathSegMovetoRel()SVGPatternElement: SVGPatternElement()SVGPoint: SVGPoint()SVGPointList: SVGPointList()SVGPolygonElement: SVGPolygonElement()SVGPolylineElement: SVGPolylineElement()SVGPreserveAspectRatio: SVGPreserveAspectRatio()SVGRadialGradientElement: SVGRadialGradientElement()SVGRect: SVGRect()SVGRectElement: SVGRectElement()SVGSVGElement: SVGSVGElement()SVGScriptElement: SVGScriptElement()SVGSetElement: SVGSetElement()SVGStopElement: SVGStopElement()SVGStringList: SVGStringList()SVGStyleElement: SVGStyleElement()SVGSwitchElement: SVGSwitchElement()SVGSymbolElement: SVGSymbolElement()SVGTSpanElement: SVGTSpanElement()SVGTextContentElement: SVGTextContentElement()SVGTextElement: SVGTextElement()SVGTextPathElement: SVGTextPathElement()SVGTextPositioningElement: SVGTextPositioningElement()SVGTitleElement: SVGTitleElement()SVGTransform: SVGTransform()SVGTransformList: SVGTransformList()SVGUnitTypes: SVGUnitTypes()SVGUseElement: SVGUseElement()SVGViewElement: SVGViewElement()SVGViewSpec: SVGViewSpec()SVGZoomEvent: SVGZoomEvent()Screen: Screen()ScreenOrientation: ScreenOrientation()ScriptProcessorNode: ScriptProcessorNode()SecurityPolicyViolationEvent: SecurityPolicyViolationEvent()Selection: Selection()ServiceWorker: ServiceWorker()ServiceWorkerContainer: ServiceWorkerContainer()ServiceWorkerMessageEvent: ServiceWorkerMessageEvent()ServiceWorkerRegistration: ServiceWorkerRegistration()Set: Set()ShadowRoot: ShadowRoot()SharedWorker: SharedWorker()SpeechSynthesisEvent: SpeechSynthesisEvent()SpeechSynthesisUtterance: SpeechSynthesisUtterance()Storage: Storage()StorageEvent: StorageEvent()String: String()StyleSheet: StyleSheet()StyleSheetList: StyleSheetList()SubtleCrypto: SubtleCrypto()Symbol: Symbol()SyntaxError: SyntaxError()Text: Text()TextDecoder: TextDecoder()TextEncoder: TextEncoder()TextEvent: TextEvent()TextMetrics: TextMetrics()TextTrack: TextTrack()TextTrackCue: TextTrackCue()TextTrackCueList: TextTrackCueList()TextTrackList: TextTrackList()TimeRanges: TimeRanges()Touch: Touch()TouchEvent: TouchEvent()TouchList: TouchList()TrackEvent: TrackEvent()TransitionEvent: TransitionEvent()TreeWalker: TreeWalker()TypeError: TypeError()UIEvent: UIEvent()URIError: URIError()URL: URL()Uint8Array: Uint8Array()Uint8ClampedArray: Uint8ClampedArray()Uint16Array: Uint16Array()Uint32Array: Uint32Array()VTTCue: VTTCue()ValidityState: ValidityState()WaveShaperNode: WaveShaperNode()WeakMap: WeakMap()WeakSet: WeakSet()WebGLActiveInfo: WebGLActiveInfo()WebGLBuffer: WebGLBuffer()WebGLContextEvent: WebGLContextEvent()WebGLFramebuffer: WebGLFramebuffer()WebGLProgram: WebGLProgram()WebGLRenderbuffer: WebGLRenderbuffer()WebGLRenderingContext: WebGLRenderingContext()WebGLShader: WebGLShader()WebGLShaderPrecisionFormat: WebGLShaderPrecisionFormat()WebGLTexture: WebGLTexture()WebGLUniformLocation: WebGLUniformLocation()WebKitAnimationEvent: AnimationEvent()WebKitCSSMatrix: WebKitCSSMatrix()WebKitMutationObserver: MutationObserver()WebKitTransitionEvent: TransitionEvent()WebSocket: WebSocket()WheelEvent: WheelEvent()Window: Window()Worker: Worker()XMLDocument: XMLDocument()XMLHttpRequest: XMLHttpRequest()XMLHttpRequestEventTarget: XMLHttpRequestEventTarget()XMLHttpRequestProgressEvent: XMLHttpRequestProgressEvent()XMLHttpRequestUpload: XMLHttpRequestUpload()XMLSerializer: XMLSerializer()XPathEvaluator: XPathEvaluator()XPathExpression: XPathExpression()XPathResult: XPathResult()XSLTProcessor: XSLTProcessor()YANDEX_METRIKA_ID: 17649010Ya: ObjectapplicationCache: ApplicationCacheargs: Arguments[0]caches: CacheStoragechrome: ObjectclientInformation: Navigatorclosed: falseconsole: Consoleconst: "const"crypto: Cryptoctx: ObjectcurrentUser: nulldecodeURI: decodeURI()decodeURIComponent: decodeURIComponent()defaultStatus: ""defaultstatus: ""devicePixelRatio: 1disqus_domain: undefineddisqus_identifier: "/class-inheritance"disqus_shortname: "learnjavascriptru"disqus_title: "Наследование классов в JavaScript"disqus_url: "https://learn.javascript.ru/class-inheritance"document: documentencodeURI: encodeURI()encodeURIComponent: encodeURIComponent()escape: escape()eval: eval()event: undefinedexternal: Objectfooter: ObjectframeElement: nullframes: Windowga: (a)gaGlobal: Objectgaplugins: Objecthead: Objecthistory: HistoryindexedDB: IDBFactoryinnerHeight: 600innerWidth: 2495isFinite: isFinite()isNaN: isNaN()length: 4localStorage: Storagelocation: Locationlocationbar: BarPropmenubar: BarPropmetrika: h.Ya.Metrikaname: "60815"navigator: NavigatorngInspector: NGI.InspectoroffscreenBuffering: trueopener: WindowouterHeight: 1056outerWidth: 2495pageWrapper: undefinedpageXOffset: 0pageYOffset: 4717parent: WindowparseFloat: parseFloat()parseInt: parseInt()performance: Performancepersonalbar: BarPropq: ()qwe: "qwe"runDemo: (button)screen: ScreenscreenLeft: 65screenTop: 24screenX: 65screenY: 24scrollX: 0scrollY: 4717scrollbars: BarPropself: WindowsessionStorage: StoragespeechSynthesis: SpeechSynthesisstatus: "n"statusbar: BarPropstyleMedia: StyleMediatoolbar: BarProptop: Windowtutorial: Objectundefined: undefinedunescape: unescape()webkitAudioContext: AudioContext()webkitIDBCursor: IDBCursor()webkitIDBDatabase: IDBDatabase()webkitIDBFactory: IDBFactory()webkitIDBIndex: IDBIndex()webkitIDBKeyRange: IDBKeyRange()webkitIDBObjectStore: IDBObjectStore()webkitIDBRequest: IDBRequest()webkitIDBTransaction: IDBTransaction()webkitIndexedDB: IDBFactorywebkitMediaStream: MediaStream()webkitOfflineAudioContext: OfflineAudioContext()webkitRTCPeerConnection: RTCPeerConnection()webkitSpeechGrammar: SpeechGrammar()webkitSpeechGrammarList: SpeechGrammarList()webkitSpeechRecognition: SpeechRecognition()webkitSpeechRecognitionError: SpeechRecognitionError()webkitSpeechRecognitionEvent: SpeechRecognitionEvent()webkitStorageInfo: DeprecatedStorageInfowebkitURL: URL()webpackJsonp_name_: (a, o)window: Window__proto__: Window
123
new q()
VM1091:2 run q, with ctx  q {const: "const", args: Arguments[0]}
q {const: "const", args: Arguments[0]}
new q
VM1091:2 run q, with ctx  q {const: "const", args: Arguments[0]}
q {const: "const", args: Arguments[0]}
q1 = new q(1,2,3)
VM1091:2 run q, with ctx  q {const: "const", args: Arguments[3]}args: Arguments[3]0: 11: 22: 3callee: ()arguments: nullcaller: nulllength: 0name: ""prototype: q__proto__: ()apply: apply()arguments: (...)get arguments: ThrowTypeError()set arguments: ThrowTypeError()bind: bind()call: call()caller: (...)get caller: ThrowTypeError()set caller: ThrowTypeError()constructor: Function()length: 0name: ""toString: toString()__proto__: Object<function scope><function scope>With Block: CommandLineAPIGlobal: Windowlength: 3Symbol(Symbol.iterator): ArrayValues()__proto__: Object__defineGetter__: __defineGetter__()__defineSetter__: __defineSetter__()__lookupGetter__: __lookupGetter__()__lookupSetter__: __lookupSetter__()constructor: Object()hasOwnProperty: hasOwnProperty()isPrototypeOf: isPrototypeOf()propertyIsEnumerable: propertyIsEnumerable()toLocaleString: toLocaleString()toString: toString()valueOf: valueOf()get __proto__: get __proto__()set __proto__: set __proto__()const: "const"__proto__: q
q {const: "const", args: Arguments[3]}
q2 = new q(3,2,1)
VM1091:2 run q, with ctx  q {const: "const", args: Arguments[3]}
q {const: "const", args: Arguments[3]}
q
() {  this.const = "const"; this.args = arguments; console.log("run q, with ctx ", this); return 123; }
q1
q {const: "const", args: Arguments[3]}args: Arguments[3]const: "const"__proto__: qconstructor: ()__proto__: Object__defineGetter__: __defineGetter__()__defineSetter__: __defineSetter__()__lookupGetter__: __lookupGetter__()__lookupSetter__: __lookupSetter__()constructor: Object()hasOwnProperty: hasOwnProperty()isPrototypeOf: isPrototypeOf()propertyIsEnumerable: propertyIsEnumerable()toLocaleString: toLocaleString()toString: toString()valueOf: valueOf()get __proto__: get __proto__()set __proto__: set __proto__()
q.prototype
q {}constructor: ()__proto__: Object
q.prototype.protoA = "AAAAAAAAAA";
"AAAAAAAAAA"
q
() {  this.const = "const"; this.args = arguments; console.log("run q, with ctx ", this); return 123; }
q.prototype
q {protoA: "AAAAAAAAAA"}constructor: ()protoA: "AAAAAAAAAA"__proto__: Object
q.prototype.protoB = function(){console.log(thix.const, this)};
(){console.log(thix.const, this)}
q
() {  this.const = "const"; this.args = arguments; console.log("run q, with ctx ", this); return 123; }
q.prototype
q {protoA: "AAAAAAAAAA"}constructor: ()protoA: "AAAAAAAAAA"protoB: ()arguments: nullcaller: nulllength: 0name: ""prototype: q.protoB__proto__: ()<function scope>__proto__: Object
q.prototype.protoB()
VM1332:2 Uncaught ReferenceError: thix is not defined(…)q.protoB @ VM1332:2(anonymous function) @ VM1391:2InjectedScript._evaluateOn @ VM329:904InjectedScript._evaluateAndWrap @ VM329:837InjectedScript.evaluate @ VM329:693
q.prototype.protoB = function(){console.log(this.const, this)};
(){console.log(this.const, this)}
q.prototype.protoB()
VM1392:2 undefined q {protoA: "AAAAAAAAAA"}constructor: ()protoA: "AAAAAAAAAA"protoB: ()__proto__: Object
undefined