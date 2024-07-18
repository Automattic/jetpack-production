// All phrases need to be lowercase
const phrases = {
	'a and/or b': 'a or b or both',
	'able to': 'can',
	accompany: 'go with',
	accomplish: 'do',
	accorded: 'given',
	accordingly: 'so',
	accrue: 'add',
	accurate: 'correct',
	activate: 'turn on',
	additional: 'more',
	address: 'discuss',
	'adjacent to': 'next to',
	administer: 'manage',
	advantageous: 'helpful',
	'adversely impact on': 'hurt',
	advise: 'recommend',
	'afford an opportunity': 'allow',
	aircraft: 'plane',
	allocate: 'divide',
	'allows you to': 'lets you',
	alternative: 'other',
	anticipate: 'expect',
	'a number of': 'some',
	apparent: 'clear',
	appreciable: 'many',
	approximate: 'about',
	'arrive onboard': 'arrive',
	'as a means of': 'to',
	ascertain: 'find out',
	assist: 'help',
	'associated with': 'part of',
	attain: 'meet',
	attempt: 'try',
	'at the present time': 'now',
	begin: 'start',
	benefit: 'help',
	'by means of': 'by',
	cannot: "can't",
	capability: 'ability',
	caveat: 'warning',
	'close proximity': 'near',
	'combat environment': 'combat',
	combined: 'joint',
	complete: 'finish',
	'comply with': 'follow',
	component: 'part',
	comprise: 'form',
	concerning: 'about',
	configure: 'set up',
	consequently: 'so',
	consolidate: 'combine',
	constitutes: 'is',
	contains: 'has',
	convene: 'meet',
	credentials: 'username and password',
	currently: 'now',
	customizations: 'changes',
	customize: 'edit',
	deactivate: 'turn off',
	deem: 'consider',
	delete: 'cut',
	demonstrate: 'show',
	depart: 'leave',
	designate: 'appoint',
	desire: 'want',
	determine: 'decide',
	disable: 'turn off',
	disclose: 'show',
	discontinue: 'stop',
	display: 'show',
	disseminate: 'give',
	'due to the fact that': 'since',
	'due to the fact': 'since',
	'during the period': 'during',
	'e.g.': 'like',
	'effect modifications': 'make changes',
	elect: 'choose',
	eliminate: 'cut',
	employ: 'use',
	enable: 'turn on',
	'enables you to': 'lets you',
	encounter: 'meet',
	endeavor: 'try',
	ensure: 'make sure',
	enumerate: 'count',
	equipments: 'equipment',
	equitable: 'fair',
	establish: 'prove',
	evidenced: 'showed',
	evident: 'clear',
	exhibit: 'show',
	expedite: 'speed up',
	expeditious: 'fast',
	expend: 'spend',
	expertise: 'ability',
	expiration: 'end',
	facilitate: 'help',
	'failed to': "didn't",
	feasible: 'workable',
	females: 'women',
	finalize: 'finish',
	following: 'next',
	'for a period of': 'for',
	'for example,______etc.': 'for example',
	forfeit: 'lose',
	forward: 'send',
	frequently: 'often',
	function: 'role',
	furnish: 'give',
	'gives you the ability to': 'lets you',
	'has a requirement for': 'needs',
	'he or she': 'they',
	herein: 'here',
	heretofore: 'until now',
	herewith: 'below',
	'his or her': 'their',
	however: 'but',
	identical: 'same',
	identify: 'find',
	immediately: 'at once',
	impacted: 'affected',
	'in a timely manner': 'on time',
	'in accordance with': 'by',
	'in addition': 'also',
	'in an effort to': 'to',
	'in conjunction with': 'at the same time',
	'in lieu of': 'instead of',
	'in order that': 'for',
	'in order to': 'to',
	'in regard to': 'about',
	'in relation to': 'about',
	'in the amount of': 'for',
	'in the event of': 'if',
	'in the near future': 'soon',
	'in view of': 'since',
	'in view of the above': 'so',
	'inasmuch as': 'since',
	inception: 'start',
	'incumbent upon': 'must',
	indicate: 'show',
	indication: 'sign',
	initial: 'first',
	initiate: 'start',
	input: 'enter',
	'interpose no objection': "don't object",
	'is applicable to': 'applies to',
	'is authorized to': 'may',
	'is in consonance with': 'agrees with',
	'it appears': 'seems',
	liaison: 'discussion',
	'limited number': 'limits',
	magnitude: 'size',
	maintain: 'keep',
	maximum: 'most',
	methodology: 'method',
	methods: 'ways',
	minimize: 'decrease',
	minimum: 'least',
	modify: 'change',
	monitor: 'check',
	necessitate: 'need',
	notify: 'tell',
	'not later than 10 May': 'by 10 May',
	'not later than 1600': 'by 1600',
	notwithstanding: 'still',
	numerous: 'many',
	objective: 'aim',
	obligate: 'bind',
	observe: 'see',
	operate: 'run',
	optimization: 'improvement',
	optimize: 'improve',
	optimum: 'best',
	option: 'choice',
	parameters: 'limits',
	participate: 'take part',
	perform: 'do',
	permit: 'let',
	'pertaining to': 'about',
	portion: 'part',
	possess: 'have',
	practicable: 'practical',
	preceding: 'before',
	preclude: 'prevent',
	present: 'show',
	previous: 'earlier',
	previously: 'before',
	prioritize: 'rank',
	'prior to': 'before',
	proceed: 'do',
	proficiency: 'skill',
	promulgate: 'issue',
	provide: 'give',
	'provided that': 'if',
	'provides guidance for': 'guides',
	purchase: 'buy',
	'pursuant to': 'by',
	receive: 'get',
	reflect: 'show',
	regarding: 'about',
	'relative to': 'about',
	relocate: 'move',
	remain: 'stay',
	remainder: 'rest',
	remuneration: 'pay',
	render: 'give',
	represents: 'is',
	request: 'ask',
	require: 'must',
	'required to': 'need to',
	requirement: 'need',
	reside: 'live',
	retain: 'keep',
	selection: 'choice',
	'set forth in': 'in',
	'similar to': 'like',
	simultaneously: 'at the same time',
	solicit: 'ask for',
	'state-of-the-art': 'latest',
	subject: 'the',
	submit: 'send',
	subsequent: 'later',
	subsequently: 'after',
	substantial: 'large',
	'such as': 'like',
	sufficient: 'enough',
	terminate: 'end',
	'the system': 'we',
	'the undersigned': 'I',
	therefore: 'so',
	therein: 'there',
	thereof: 'its',
	timely: 'prompt',
	'to be able to': 'to',
	transaction: 'order',
	transmit: 'send',
	'unable to': "can't",
	'under the provisions of': 'under',
	'until such time as': 'until',
	utilize: 'use',
	url: 'link',
	validate: 'confirm',
	viable: 'workable',
	vice: 'instead of',
	warrant: 'permit',
	whereas: 'since',
	'with reference to': 'about',
	'with the exception of': 'except for',
	witnessed: 'saw',
	'x and/or y': 'x, y, or both',
	'/': 'or',
};

export default phrases;
