window["sntchChat"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module) {

module.exports = JSON.parse("{\"api\":{\"facebook\":{\"key\":\"394353490931600\",\"secret\":\"5b895dd3641708f25e5a9e3acb0e78e8\"},\"google\":{\"api_key\":\"3919523b41bd80185b8ed09e1a51ae3a9089aef6\",\"key\":\"165090821505-42htfk83d17nn6lp6gove18qnm298l5b.apps.googleusercontent.com\",\"secret\":\"l_VB-_8nyvIMMWNhP0DBBbD9\"},\"slack\":{\"key\":\"109332786919.119537886914\",\"secret\":\"355edea8111fd8382c6fce7f66d4f8ea\",\"version\":\"/v2\"},\"email\":{\"host\":\"bot.snatchbot.me\"}},\"languages\":[{\"code\":\"en\",\"name\":\"English\"},{\"code\":\"zh\",\"name\":\"ä¸­æ–‡\"},{\"code\":\"fr\",\"name\":\"FranÃ§ais\"},{\"code\":\"de\",\"name\":\"Deutsch\"},{\"code\":\"it\",\"name\":\"Italiano\"},{\"code\":\"ja\",\"name\":\"æ—¥æœ¬èªž\"},{\"code\":\"pt\",\"name\":\"PortuguÃªs\"},{\"code\":\"ru\",\"name\":\"Ð ÑƒÑÑÐºÐ¸Ð¹\"},{\"code\":\"es\",\"name\":\"EspaÃ±ol\"}],\"channels\":{\"1\":\"Fb\",\"2\":\"Slack\",\"4\":\"API\",\"5\":\"Email\",\"6\":\"Skype\",\"7\":\"WebChat\",\"8\":\"SMS\",\"9\":\"Line\",\"10\":\"Viber\",\"11\":\"Telegram\",\"12\":\"AfricaTalking\",\"13\":\"WhatsApp\",\"15\":\"Zendesk\"},\"channelsData\":[{\"id\":1,\"name\":\"fb\",\"fullname\":\"Facebook\",\"category\":\"rcs\",\"order\":2},{\"id\":2,\"name\":\"slack\",\"fullname\":\"Slack\",\"category\":\"rcs\",\"order\":8},{\"id\":4,\"name\":\"api\",\"fullname\":\"API\",\"category\":\"api\",\"order\":13},{\"id\":5,\"name\":\"email\",\"fullname\":\"Email\",\"category\":\"sms\",\"order\":11},{\"id\":6,\"name\":\"skype\",\"fullname\":\"Skype\",\"category\":\"rcs\",\"order\":7},{\"id\":7,\"name\":\"webchat\",\"fullname\":\"Webchat\",\"link\":\"https://webchat.snatchbot.me\",\"category\":\"rcs\",\"order\":1},{\"id\":8,\"name\":\"sms\",\"fullname\":\"Twilio\",\"category\":\"sms\",\"order\":9},{\"id\":9,\"name\":\"line\",\"fullname\":\"Line\",\"category\":\"rcs\",\"order\":6},{\"id\":10,\"name\":\"viber\",\"fullname\":\"Viber\",\"category\":\"rcs\",\"order\":5},{\"id\":11,\"name\":\"telegram\",\"fullname\":\"Telegram\",\"category\":\"rcs\",\"order\":4},{\"id\":12,\"name\":\"at\",\"fullname\":\"Africa's Talking\",\"category\":\"sms\",\"order\":10},{\"id\":13,\"name\":\"whatsapp\",\"fullname\":\"WhatsApp\",\"category\":\"rcs\",\"order\":3},{\"id\":15,\"name\":\"zendesk\",\"fullname\":\"Zendesk\",\"category\":\"rcs\",\"order\":12}],\"extractedTypes\":{\"10\":\"Email\",\"11\":\"Url\",\"12\":\"Phone\",\"13\":\"Date\",\"14\":\"Number\",\"15\":\"Address\",\"16\":\"Duration\",\"20\":\"Extracted Data\",\"21\":\"Variables\",\"22\":\"Attributes\",\"23\":\"Prior Response\"},\"moduleTypes\":{\"sentiment\":\"Sentiment\",\"botstate\":\"Bot Statement\",\"translate\":\"Translation\",\"awaitresp\":\"Await Response\",\"emailextract\":\"Email Extraction\",\"urlextract\":\"URL Extraction\",\"phoneextract\":\"Phone Extraction\",\"dateextract\":\"Date Extraction\",\"numextract\":\"Number Extraction\",\"addrextract\":\"Address Extraction\",\"durextract\":\"Duration Extraction\",\"jsonapi\":\"JSON API\",\"search\":\"Search Extraction\",\"plugin\":\"Plugin\",\"N/A\":\"N/A\"},\"nlpTypes\":[{\"title\":\"Entity\",\"value\":\"entity\",\"description\":\"An Entity collects important words from the inputs of the userâ€™s chatting with your bot and describe information relevant to the intent, and sometimes they are essential to it. In the sample Book me a ticket to Paris, Paris is an entity of type location.\"},{\"title\":\"Intent\",\"value\":\"intent\",\"description\":\"An intent represents a task or action the user wants to perform. It is a purpose or goal expressed in a user's input, such as booking a flight, paying a bill, or finding a news article.\"}],\"nlpEntityTrainingTypes\":[{\"title\":\"List\",\"value\":\"list\",\"description\":\"A LIST entity is a simple type of model and Is best for Bot with a small number of samples. It represents a fixed set of related words in your system. Each list entity may have one or more forms. They aren't machine learned, and are best used for a known set of variations on ways to represent the same concept. List entities don't have to be labeled in samples or trained by the system. A list entity is an explicitly specified list of values\"},{\"title\":\"Conditional Random Field\",\"value\":\"stanford_crf\",\"description\":\"CRF can be used for Bot with a large number of samples in intents or very large entities. It is a more sophisticated type that takes the context into account, in which the words are highlighted and a large amount of data is required for a normal training.\"}],\"nlpIntentTrainingTypes\":[{\"title\":\"Bernoulli Naive Bayes model\",\"value\":\"stanford_cdc\",\"description\":\"Bernoulli Naive Bayes model takes into consideration the context of each word in order to classify words into groups. It works effectively when a large number of samples is uploaded for model training.\"},{\"title\":\"BERT (Intent)\",\"value\":\"intent_bert\",\"description\":\"Intent Bidirectional Encoder Representations from Transformers model is a bidirectional model with a transformer architecture, designed to solve problem determining intent. Model's work if based on the latest advances in neural networks, which allow you to pre-train language models on large data packages. Available for English and Russian models.\"}],\"nlpTrainingType\":[{\"title\":\"List\",\"value\":\"list\",\"description\":\"A LIST entity is a simple type of model and Is best for Bot with a small number of samples. It represents a fixed set of related words in your system. Each list entity may have one or more forms. They aren't machine learned, and are best used for a known set of variations on ways to represent the same concept. List entities don't have to be labeled in samples or trained by the system. A list entity is an explicitly specified list of values\"},{\"title\":\"Conditional Random Field\",\"value\":\"stanford_crf\",\"description\":\"CRF can be used for Bot with a large number of samples in intents or very large entities. It is a more sophisticated type that takes the context into account, in which the words are highlighted and a large amount of data is required for a normal training.\"}],\"persistentChannels\":{\"1\":\"Fb\",\"2\":\"Skype\",\"3\":\"Line\",\"4\":\"WebChat\",\"5\":\"Viber\",\"6\":\"Telegram\"},\"conditionTypes\":{\"1\":\"Response to this interaction\",\"2\":\"Extracted data from this interaction\",\"3\":\"Custom variable\",\"4\":\"Attribute\"},\"containTypes\":{\"1\":\"contains (whole word)\",\"2\":\"contains (any part)\",\"3\":\"contains all of\",\"4\":\"doesn't contain any of\",\"5\":\"exactly matches\",\"9\":\"begins with\",\"11\":\"ends with\",\"12\":\"does not begin with\",\"13\":\"does not end with\",\"14\":\"greater than\",\"15\":\"less than\",\"16\":\"equals or greater than\",\"17\":\"equals or less than\"},\"containTypesGlobal\":{\"1\":\"contains (whole word)\",\"2\":\"contains (any part)\",\"3\":\"contains all of\",\"4\":\"doesn't contain any of\",\"5\":\"exactly matches\",\"9\":\"begins with\",\"11\":\"ends with\",\"12\":\"does not begin with\",\"13\":\"does not end with\"},\"connectionCardType\":{\"Standard\":false,\"NLP\":true},\"connectionCardNLPType\":{\"entity\":\"Entity\",\"intent\":\"Intent\"},\"utcs\":[{\"id\":-12,\"value\":\"UTC -12\"},{\"id\":-11,\"value\":\"UTC -11\"},{\"id\":-10,\"value\":\"UTC -10\"},{\"id\":-9,\"value\":\"UTC -9\"},{\"id\":-8,\"value\":\"UTC -8\"},{\"id\":-7,\"value\":\"UTC -7\"},{\"id\":-6,\"value\":\"UTC -6\"},{\"id\":-5,\"value\":\"UTC -5\"},{\"id\":-4,\"value\":\"UTC -4\"},{\"id\":-3,\"value\":\"UTC -3\"},{\"id\":-2,\"value\":\"UTC -2\"},{\"id\":-1,\"value\":\"UTC -1\"},{\"id\":0,\"value\":\"UTC\"},{\"id\":1,\"value\":\"UTC +1\"},{\"id\":2,\"value\":\"UTC +2\"},{\"id\":3,\"value\":\"UTC +3\"},{\"id\":4,\"value\":\"UTC +4\"},{\"id\":5,\"value\":\"UTC +5\"},{\"id\":6,\"value\":\"UTC +6\"},{\"id\":7,\"value\":\"UTC +7\"},{\"id\":8,\"value\":\"UTC +8\"},{\"id\":9,\"value\":\"UTC +9\"},{\"id\":10,\"value\":\"UTC +10\"},{\"id\":11,\"value\":\"UTC +11\"},{\"id\":12,\"value\":\"UTC +12\"}],\"repeats\":[{\"id\":0,\"value\":\"Once\"},{\"id\":6,\"value\":\"Every Hour\"},{\"id\":1,\"value\":\"Every Day\"},{\"id\":2,\"value\":\"Weekends\"},{\"id\":3,\"value\":\"Every Month\"},{\"id\":4,\"value\":\"Workdays\"},{\"id\":5,\"value\":\"Custom...\"}],\"days\":[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],\"repeatDays\":[[],[0,1,2,3,4,5,6],[0,6],[7],[1,2,3,4,5],[]],\"ws\":\"wss://account.snatchbot.me/bot/ws\",\"directions\":[\"Received messages\",\"Sent messages\"],\"colors\":[\"#FF6633\",\"#FFB399\",\"#FF33FF\",\"#FFFF99\",\"#00B3E6\",\"#E6B333\",\"#3366E6\",\"#999966\",\"#99FF99\",\"#B34D4D\",\"#80B300\",\"#809900\",\"#E6B3B3\",\"#6680B3\",\"#66991A\",\"#FF99E6\",\"#CCFF1A\",\"#FF1A66\",\"#E6331A\",\"#33FFCC\",\"#66994D\",\"#B366CC\",\"#4D8000\",\"#B33300\",\"#CC80CC\",\"#66664D\",\"#991AFF\",\"#E666FF\",\"#4DB3FF\",\"#1AB399\",\"#E666B3\",\"#33991A\",\"#CC9999\",\"#B3B31A\",\"#00E680\",\"#4D8066\",\"#809980\",\"#E6FF80\",\"#1AFF33\",\"#999933\",\"#FF3380\",\"#CCCC00\",\"#66E64D\",\"#4D80CC\",\"#9900B3\",\"#E64D66\",\"#4DB380\",\"#FF4D4D\",\"#99E6E6\",\"#6666FF\"],\"persistentMenuPermissions\":[{\"chanelID\":1,\"maxLength\":15,\"maxDeep\":1,\"lengthOnLvl\":5},{\"chanelID\":2,\"maxLength\":6,\"maxDeep\":1},{\"chanelID\":3,\"maxLength\":6,\"maxDeep\":1},{\"chanelID\":4,\"maxLength\":6,\"maxDeep\":3,\"lengthOnLvl\":5},{\"chanelID\":5,\"maxLength\":12,\"maxDeep\":1},{\"chanelID\":6,\"maxLength\":5,\"maxDeep\":1},{\"chanelID\":11,\"maxLength\":5,\"maxDeep\":1}],\"fbTagsOld\":[{\"tag\":\"\",\"name\":\"broadcast.tag\",\"description\":\"broadcast.desc\"},{\"tag\":\"NON_PROMOTIONAL_SUBSCRIPTION\",\"name\":\"broadcast.tagNonPromotionalSubscription\",\"description\":\"broadcast.descNonPromotionalSubscription\"},{\"tag\":\"BUSINESS_PRODUCTIVITY\",\"name\":\"broadcast.tagBusinessProductivity\",\"description\":\"broadcast.descBusinessProductivity\"},{\"tag\":\"COMMUNITY_ALERT\",\"name\":\"broadcast.tagCommunityAlert\",\"description\":\"broadcast.descCommunityAlert\"},{\"tag\":\"CONFIRMED_EVENT_REMINDER\",\"name\":\"broadcast.tagConfirmedEventReminder\",\"description\":\"broadcast.descConfirmedEventReminder\"},{\"tag\":\"APPLICATION_UPDATE\",\"name\":\"broadcast.tagApplicationUpdate\",\"description\":\"broadcast.descApplicationUpdate\"},{\"tag\":\"PAIRING_UPDATE\",\"name\":\"broadcast.tagPairingUpdate\",\"description\":\"broadcast.descPairingUpdate\"},{\"tag\":\"PERSONAL_FINANCE_UPDATE\",\"name\":\"broadcast.tagPersonalFinanceUpdate\",\"description\":\"broadcast.descPersonalFinanceUpdate\"},{\"tag\":\"PAYMENT_UPDATE\",\"name\":\"broadcast.tagPaymentUpdate\",\"description\":\"broadcast.descPaymentUpdate\"},{\"tag\":\"ACCOUNT_UPDATE\",\"name\":\"broadcast.tagAccountUpdate\",\"description\":\"broadcast.descAccountUpdate\"},{\"tag\":\"TICKET_UPDATE\",\"name\":\"broadcast.tagTicketUpdate\",\"description\":\"broadcast.descTicketUpdate\"},{\"tag\":\"FEATURE_FUNCTIONALITY_UPDATE\",\"name\":\"broadcast.tagFeatureFunctionalityUpdate\",\"description\":\"broadcast.descFeatureFunctionalityUpdate\"},{\"tag\":\"TRANSPORTATION_UPDATE\",\"name\":\"broadcast.tagTransportationUpdate\",\"description\":\"broadcast.descTransportationUpdate\"},{\"tag\":\"GAME_EVENT\",\"name\":\"broadcast.tagGameEvent\",\"description\":\"broadcast.descGameEvent\"},{\"tag\":\"APPOINTMENT_UPDATE\",\"name\":\"broadcast.tagAppointmentUpdate\",\"description\":\"broadcast.descAppointmentUpdate\"},{\"tag\":\"ISSUE_RESOLUTION\",\"name\":\"broadcast.tagIssueResolution\",\"description\":\"broadcast.descIssueResolution\"},{\"tag\":\"RESERVATION_UPDATE\",\"name\":\"broadcast.tagReservationUpdate\",\"description\":\"broadcast.descReservationUpdate\"},{\"tag\":\"SHIPPING_UPDATE\",\"name\":\"broadcast.tagShippingUpdate\",\"description\":\"broadcast.descShippingUpdate\"}],\"fbTags\":[{\"tag\":\"NON_PROMOTIONAL_SUBSCRIPTION\",\"name\":\"broadcast.tagNonPromotionalSubscription\",\"description\":\"broadcast.descNonPromotionalSubscription\"},{\"tag\":\"CONFIRMED_EVENT_UPDATE\",\"name\":\"broadcast.tagConfirmedEventUpdate\",\"description\":\"broadcast.descConfirmedEventUpdate\"},{\"tag\":\"POST_PURCHASE_UPDATE\",\"name\":\"broadcast.tagPostPurchaseUpdate\",\"description\":\"broadcast.descPostPurchaseUpdate\"},{\"tag\":\"ACCOUNT_UPDATE\",\"name\":\"broadcast.tagAccountUpdate\",\"description\":\"broadcast.descAccountUpdate\"},{\"tag\":\"BUSINESS_PRODUCTIVITY\",\"name\":\"broadcast.tagBusinessProductivity\",\"description\":\"broadcast.descBusinessProductivity\",\"newTag\":\"POST_PURCHASE_UPDATE\"},{\"tag\":\"COMMUNITY_ALERT\",\"name\":\"broadcast.tagCommunityAlert\",\"description\":\"broadcast.descCommunityAlert\",\"newTag\":\"POST_PURCHASE_UPDATE\"},{\"tag\":\"CONFIRMED_EVENT_REMINDER\",\"name\":\"broadcast.tagConfirmedEventReminder\",\"description\":\"broadcast.descConfirmedEventReminder\",\"newTag\":\"CONFIRMED_EVENT_UPDATE\"},{\"tag\":\"APPLICATION_UPDATE\",\"name\":\"broadcast.tagApplicationUpdate\",\"description\":\"broadcast.descApplicationUpdate\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"PAIRING_UPDATE\",\"name\":\"broadcast.tagPairingUpdate\",\"description\":\"broadcast.descPairingUpdate\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"PERSONAL_FINANCE_UPDATE\",\"name\":\"broadcast.tagPersonalFinanceUpdate\",\"description\":\"broadcast.descPersonalFinanceUpdate\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"PAYMENT_UPDATE\",\"name\":\"broadcast.tagPaymentUpdate\",\"description\":\"broadcast.descPaymentUpdate\",\"newTag\":\"POST_PURCHASE_UPDATE\"},{\"tag\":\"TICKET_UPDATE\",\"name\":\"broadcast.tagTicketUpdate\",\"description\":\"broadcast.descTicketUpdate\",\"newTag\":\"CONFIRMED_EVENT_UPDATE\"},{\"tag\":\"FEATURE_FUNCTIONALITY_UPDATE\",\"name\":\"broadcast.tagFeatureFunctionalityUpdate\",\"description\":\"broadcast.descFeatureFunctionalityUpdate\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"TRANSPORTATION_UPDATE\",\"name\":\"broadcast.tagTransportationUpdate\",\"description\":\"broadcast.descTransportationUpdate\",\"newTag\":\"CONFIRMED_EVENT_UPDATE\"},{\"tag\":\"GAME_EVENT\",\"name\":\"broadcast.tagGameEvent\",\"description\":\"broadcast.descGameEvent\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"APPOINTMENT_UPDATE\",\"name\":\"broadcast.tagAppointmentUpdate\",\"description\":\"broadcast.descAppointmentUpdate\",\"newTag\":\"CONFIRMED_EVENT_UPDATE\"},{\"tag\":\"ISSUE_RESOLUTION\",\"name\":\"broadcast.tagIssueResolution\",\"description\":\"broadcast.descIssueResolution\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"RESERVATION_UPDATE\",\"name\":\"broadcast.tagReservationUpdate\",\"description\":\"broadcast.descReservationUpdate\",\"newTag\":\"POST_PURCHASE_UPDATE\"},{\"tag\":\"SHIPPING_UPDATE\",\"name\":\"broadcast.tagShippingUpdate\",\"description\":\"broadcast.descShippingUpdate\",\"newTag\":\"POST_PURCHASE_UPDATE\"}],\"reports\":[{\"type\":1,\"name\":\"Users/Messages overview\",\"key\":\"advancedCharts.usersMessages\"},{\"type\":2,\"name\":\"Audience (Webchat channel)\",\"key\":\"advancedCharts.audienceWebchat\"},{\"type\":3,\"name\":\"Exit interactions\",\"key\":\"advancedCharts.exitInteractions\"},{\"type\":4,\"name\":\"Average lifetime of bots\",\"key\":\"advancedCharts.averageLifetime\"},{\"type\":5,\"name\":\"Extracted data\",\"key\":\"advancedCharts.extractedData\"},{\"type\":6,\"name\":\"Popular interactions\",\"key\":\"advancedCharts.popularInteractions\"},{\"type\":7,\"name\":\"Bot activity\",\"key\":\"advancedCharts.botActivity\"}],\"time\":[{\"type\":1,\"name\":\"Today\"},{\"type\":2,\"name\":\"Yesterday\"},{\"type\":3,\"name\":\"Last 7 days\"},{\"type\":4,\"name\":\"Last 28 days\"},{\"type\":5,\"name\":\"Last 90 days\"},{\"type\":6,\"name\":\"Last 6 months\"},{\"type\":7,\"name\":\"This year\"},{\"type\":8,\"name\":\"Last year\"},{\"type\":9,\"name\":\"Custom\"}],\"extractedCategories\":[\"Email\",\"Url\",\"Phone\",\"Date\",\"Number\",\"Address\",\"Duration\",\"Extracted data\",\"Variables\",\"Attributes\",\"Prior Response\"],\"defaultTTSautoModel\":\"en-IN-Wavenet-D\",\"attributes\":[\"first_name\",\"last_name\",\"profile_pic\",\"locale\",\"timezone\",\"gender\",\"timestamp\",\"user_id\",\"channel\"],\"paddle\":{\"live\":{\"vendorID\":108335,\"productID\":584859,\"productOneOffID\":583022},\"sandbox\":{\"vendorID\":581,\"productID\":1319,\"productOneOffID\":1457}},\"timezoneList\":{\"Africa/Abidjan\":\"(GMT+00:00)Africa/Abidjan\",\"Africa/Accra\":\"(GMT+00:00)Africa/Accra\",\"Africa/Addis_Ababa\":\"(GMT+03:00)Africa/Addis_Ababa\",\"Africa/Algiers\":\"(GMT+01:00)Africa/Algiers\",\"Africa/Asmara\":\"(GMT+03:00)Africa/Asmara\",\"Africa/Asmera\":\"(GMT+03:00)Africa/Asmera\",\"Africa/Bamako\":\"(GMT+00:00)Africa/Bamako\",\"Africa/Bangui\":\"(GMT+01:00)Africa/Bangui\",\"Africa/Banjul\":\"(GMT+00:00)Africa/Banjul\",\"Africa/Bissau\":\"(GMT+00:00)Africa/Bissau\",\"Africa/Blantyre\":\"(GMT+02:00)Africa/Blantyre\",\"Africa/Brazzaville\":\"(GMT+01:00)Africa/Brazzaville\",\"Africa/Bujumbura\":\"(GMT+02:00)Africa/Bujumbura\",\"Africa/Cairo\":\"(GMT+02:00)Africa/Cairo\",\"Africa/Casablanca\":\"(GMT+00:00)Africa/Casablanca\",\"Africa/Ceuta\":\"(GMT+02:00)Africa/Ceuta\",\"Africa/Conakry\":\"(GMT+00:00)Africa/Conakry\",\"Africa/Dakar\":\"(GMT+00:00)Africa/Dakar\",\"Africa/Dar_es_Salaam\":\"(GMT+03:00)Africa/Dar_es_Salaam\",\"Africa/Djibouti\":\"(GMT+03:00)Africa/Djibouti\",\"Africa/Douala\":\"(GMT+01:00)Africa/Douala\",\"Africa/El_Aaiun\":\"(GMT+00:00)Africa/El_Aaiun\",\"Africa/Freetown\":\"(GMT+00:00)Africa/Freetown\",\"Africa/Gaborone\":\"(GMT+02:00)Africa/Gaborone\",\"Africa/Harare\":\"(GMT+02:00)Africa/Harare\",\"Africa/Johannesburg\":\"(GMT+02:00)Africa/Johannesburg\",\"Africa/Juba\":\"(GMT+03:00)Africa/Juba\",\"Africa/Kampala\":\"(GMT+03:00)Africa/Kampala\",\"Africa/Khartoum\":\"(GMT+02:00)Africa/Khartoum\",\"Africa/Kigali\":\"(GMT+02:00)Africa/Kigali\",\"Africa/Kinshasa\":\"(GMT+01:00)Africa/Kinshasa\",\"Africa/Lagos\":\"(GMT+01:00)Africa/Lagos\",\"Africa/Libreville\":\"(GMT+01:00)Africa/Libreville\",\"Africa/Lome\":\"(GMT+00:00)Africa/Lome\",\"Africa/Luanda\":\"(GMT+01:00)Africa/Luanda\",\"Africa/Lubumbashi\":\"(GMT+02:00)Africa/Lubumbashi\",\"Africa/Lusaka\":\"(GMT+02:00)Africa/Lusaka\",\"Africa/Malabo\":\"(GMT+01:00)Africa/Malabo\",\"Africa/Maputo\":\"(GMT+02:00)Africa/Maputo\",\"Africa/Maseru\":\"(GMT+02:00)Africa/Maseru\",\"Africa/Mbabane\":\"(GMT+02:00)Africa/Mbabane\",\"Africa/Mogadishu\":\"(GMT+03:00)Africa/Mogadishu\",\"Africa/Monrovia\":\"(GMT+00:00)Africa/Monrovia\",\"Africa/Nairobi\":\"(GMT+03:00)Africa/Nairobi\",\"Africa/Ndjamena\":\"(GMT+01:00)Africa/Ndjamena\",\"Africa/Niamey\":\"(GMT+01:00)Africa/Niamey\",\"Africa/Nouakchott\":\"(GMT+00:00)Africa/Nouakchott\",\"Africa/Ouagadougou\":\"(GMT+00:00)Africa/Ouagadougou\",\"Africa/Porto-Novo\":\"(GMT+01:00)Africa/Porto-Novo\",\"Africa/Sao_Tome\":\"(GMT+00:00)Africa/Sao_Tome\",\"Africa/Timbuktu\":\"(GMT+00:00)Africa/Timbuktu\",\"Africa/Tripoli\":\"(GMT+02:00)Africa/Tripoli\",\"Africa/Tunis\":\"(GMT+01:00)Africa/Tunis\",\"Africa/Windhoek\":\"(GMT+02:00)Africa/Windhoek\",\"America/Adak\":\"(GMT-09:00)America/Adak\",\"America/Anchorage\":\"(GMT-08:00)America/Anchorage\",\"America/Anguilla\":\"(GMT-04:00)America/Anguilla\",\"America/Antigua\":\"(GMT-04:00)America/Antigua\",\"America/Araguaina\":\"(GMT-03:00)America/Araguaina\",\"America/Argentina/Buenos_Aires\":\"(GMT-03:00)America/Argentina/Buenos_Aires\",\"America/Argentina/Catamarca\":\"(GMT-03:00)America/Argentina/Catamarca\",\"America/Argentina/ComodRivadavia\":\"(GMT-03:00)America/Argentina/ComodRivadavia\",\"America/Argentina/Cordoba\":\"(GMT-03:00)America/Argentina/Cordoba\",\"America/Argentina/Jujuy\":\"(GMT-03:00)America/Argentina/Jujuy\",\"America/Argentina/La_Rioja\":\"(GMT-03:00)America/Argentina/La_Rioja\",\"America/Argentina/Mendoza\":\"(GMT-03:00)America/Argentina/Mendoza\",\"America/Argentina/Rio_Gallegos\":\"(GMT-03:00)America/Argentina/Rio_Gallegos\",\"America/Argentina/Salta\":\"(GMT-03:00)America/Argentina/Salta\",\"America/Argentina/San_Juan\":\"(GMT-03:00)America/Argentina/San_Juan\",\"America/Argentina/San_Luis\":\"(GMT-03:00)America/Argentina/San_Luis\",\"America/Argentina/Tucuman\":\"(GMT-03:00)America/Argentina/Tucuman\",\"America/Argentina/Ushuaia\":\"(GMT-03:00)America/Argentina/Ushuaia\",\"America/Aruba\":\"(GMT-04:00)America/Aruba\",\"America/Asuncion\":\"(GMT-04:00)America/Asuncion\",\"America/Atikokan\":\"(GMT-05:00)America/Atikokan\",\"America/Atka\":\"(GMT-09:00)America/Atka\",\"America/Bahia\":\"(GMT-03:00)America/Bahia\",\"America/Bahia_Banderas\":\"(GMT-05:00)America/Bahia_Banderas\",\"America/Barbados\":\"(GMT-04:00)America/Barbados\",\"America/Belem\":\"(GMT-03:00)America/Belem\",\"America/Belize\":\"(GMT-06:00)America/Belize\",\"America/Blanc-Sablon\":\"(GMT-04:00)America/Blanc-Sablon\",\"America/Boa_Vista\":\"(GMT-04:00)America/Boa_Vista\",\"America/Bogota\":\"(GMT-05:00)America/Bogota\",\"America/Boise\":\"(GMT-06:00)America/Boise\",\"America/Buenos_Aires\":\"(GMT-03:00)America/Buenos_Aires\",\"America/Cambridge_Bay\":\"(GMT-06:00)America/Cambridge_Bay\",\"America/Campo_Grande\":\"(GMT-04:00)America/Campo_Grande\",\"America/Cancun\":\"(GMT-05:00)America/Cancun\",\"America/Caracas\":\"(GMT-04:00)America/Caracas\",\"America/Catamarca\":\"(GMT-03:00)America/Catamarca\",\"America/Cayenne\":\"(GMT-03:00)America/Cayenne\",\"America/Cayman\":\"(GMT-05:00)America/Cayman\",\"America/Chicago\":\"(GMT-05:00)America/Chicago\",\"America/Chihuahua\":\"(GMT-06:00)America/Chihuahua\",\"America/Coral_Harbour\":\"(GMT-05:00)America/Coral_Harbour\",\"America/Cordoba\":\"(GMT-03:00)America/Cordoba\",\"America/Costa_Rica\":\"(GMT-06:00)America/Costa_Rica\",\"America/Creston\":\"(GMT-07:00)America/Creston\",\"America/Cuiaba\":\"(GMT-04:00)America/Cuiaba\",\"America/Curacao\":\"(GMT-04:00)America/Curacao\",\"America/Danmarkshavn\":\"(GMT+00:00)America/Danmarkshavn\",\"America/Dawson\":\"(GMT-07:00)America/Dawson\",\"America/Dawson_Creek\":\"(GMT-07:00)America/Dawson_Creek\",\"America/Denver\":\"(GMT-06:00)America/Denver\",\"America/Detroit\":\"(GMT-04:00)America/Detroit\",\"America/Dominica\":\"(GMT-04:00)America/Dominica\",\"America/Edmonton\":\"(GMT-06:00)America/Edmonton\",\"America/Eirunepe\":\"(GMT-05:00)America/Eirunepe\",\"America/El_Salvador\":\"(GMT-06:00)America/El_Salvador\",\"America/Ensenada\":\"(GMT-07:00)America/Ensenada\",\"America/Fort_Nelson\":\"(GMT-07:00)America/Fort_Nelson\",\"America/Fort_Wayne\":\"(GMT-04:00)America/Fort_Wayne\",\"America/Fortaleza\":\"(GMT-03:00)America/Fortaleza\",\"America/Glace_Bay\":\"(GMT-03:00)America/Glace_Bay\",\"America/Godthab\":\"(GMT-02:00)America/Godthab\",\"America/Goose_Bay\":\"(GMT-03:00)America/Goose_Bay\",\"America/Grand_Turk\":\"(GMT-04:00)America/Grand_Turk\",\"America/Grenada\":\"(GMT-04:00)America/Grenada\",\"America/Guadeloupe\":\"(GMT-04:00)America/Guadeloupe\",\"America/Guatemala\":\"(GMT-06:00)America/Guatemala\",\"America/Guayaquil\":\"(GMT-05:00)America/Guayaquil\",\"America/Guyana\":\"(GMT-04:00)America/Guyana\",\"America/Halifax\":\"(GMT-03:00)America/Halifax\",\"America/Havana\":\"(GMT-04:00)America/Havana\",\"America/Hermosillo\":\"(GMT-07:00)America/Hermosillo\",\"America/Indiana/Indianapolis\":\"(GMT-04:00)America/Indiana/Indianapolis\",\"America/Indiana/Knox\":\"(GMT-05:00)America/Indiana/Knox\",\"America/Indiana/Marengo\":\"(GMT-04:00)America/Indiana/Marengo\",\"America/Indiana/Petersburg\":\"(GMT-04:00)America/Indiana/Petersburg\",\"America/Indiana/Tell_City\":\"(GMT-05:00)America/Indiana/Tell_City\",\"America/Indiana/Vevay\":\"(GMT-04:00)America/Indiana/Vevay\",\"America/Indiana/Vincennes\":\"(GMT-04:00)America/Indiana/Vincennes\",\"America/Indiana/Winamac\":\"(GMT-04:00)America/Indiana/Winamac\",\"America/Indianapolis\":\"(GMT-04:00)America/Indianapolis\",\"America/Inuvik\":\"(GMT-06:00)America/Inuvik\",\"America/Iqaluit\":\"(GMT-04:00)America/Iqaluit\",\"America/Jamaica\":\"(GMT-05:00)America/Jamaica\",\"America/Jujuy\":\"(GMT-03:00)America/Jujuy\",\"America/Juneau\":\"(GMT-08:00)America/Juneau\",\"America/Kentucky/Louisville\":\"(GMT-04:00)America/Kentucky/Louisville\",\"America/Kentucky/Monticello\":\"(GMT-04:00)America/Kentucky/Monticello\",\"America/Knox_IN\":\"(GMT-05:00)America/Knox_IN\",\"America/Kralendijk\":\"(GMT-04:00)America/Kralendijk\",\"America/La_Paz\":\"(GMT-04:00)America/La_Paz\",\"America/Lima\":\"(GMT-05:00)America/Lima\",\"America/Los_Angeles\":\"(GMT-07:00)America/Los_Angeles\",\"America/Louisville\":\"(GMT-04:00)America/Louisville\",\"America/Lower_Princes\":\"(GMT-04:00)America/Lower_Princes\",\"America/Maceio\":\"(GMT-03:00)America/Maceio\",\"America/Managua\":\"(GMT-06:00)America/Managua\",\"America/Manaus\":\"(GMT-04:00)America/Manaus\",\"America/Marigot\":\"(GMT-04:00)America/Marigot\",\"America/Martinique\":\"(GMT-04:00)America/Martinique\",\"America/Matamoros\":\"(GMT-05:00)America/Matamoros\",\"America/Mazatlan\":\"(GMT-06:00)America/Mazatlan\",\"America/Mendoza\":\"(GMT-03:00)America/Mendoza\",\"America/Menominee\":\"(GMT-05:00)America/Menominee\",\"America/Merida\":\"(GMT-05:00)America/Merida\",\"America/Metlakatla\":\"(GMT-08:00)America/Metlakatla\",\"America/Mexico_City\":\"(GMT-05:00)America/Mexico_City\",\"America/Miquelon\":\"(GMT-02:00)America/Miquelon\",\"America/Moncton\":\"(GMT-03:00)America/Moncton\",\"America/Monterrey\":\"(GMT-05:00)America/Monterrey\",\"America/Montevideo\":\"(GMT-03:00)America/Montevideo\",\"America/Montreal\":\"(GMT-04:00)America/Montreal\",\"America/Montserrat\":\"(GMT-04:00)America/Montserrat\",\"America/Nassau\":\"(GMT-04:00)America/Nassau\",\"America/New_York\":\"(GMT-04:00)America/New_York\",\"America/Nipigon\":\"(GMT-04:00)America/Nipigon\",\"America/Nome\":\"(GMT-08:00)America/Nome\",\"America/Noronha\":\"(GMT-02:00)America/Noronha\",\"America/North_Dakota/Beulah\":\"(GMT-05:00)America/North_Dakota/Beulah\",\"America/North_Dakota/Center\":\"(GMT-05:00)America/North_Dakota/Center\",\"America/North_Dakota/New_Salem\":\"(GMT-05:00)America/North_Dakota/New_Salem\",\"America/Ojinaga\":\"(GMT-06:00)America/Ojinaga\",\"America/Panama\":\"(GMT-05:00)America/Panama\",\"America/Pangnirtung\":\"(GMT-04:00)America/Pangnirtung\",\"America/Paramaribo\":\"(GMT-03:00)America/Paramaribo\",\"America/Phoenix\":\"(GMT-07:00)America/Phoenix\",\"America/Port-au-Prince\":\"(GMT-04:00)America/Port-au-Prince\",\"America/Port_of_Spain\":\"(GMT-04:00)America/Port_of_Spain\",\"America/Porto_Acre\":\"(GMT-05:00)America/Porto_Acre\",\"America/Porto_Velho\":\"(GMT-04:00)America/Porto_Velho\",\"America/Puerto_Rico\":\"(GMT-04:00)America/Puerto_Rico\",\"America/Punta_Arenas\":\"(GMT-03:00)America/Punta_Arenas\",\"America/Rainy_River\":\"(GMT-05:00)America/Rainy_River\",\"America/Rankin_Inlet\":\"(GMT-05:00)America/Rankin_Inlet\",\"America/Recife\":\"(GMT-03:00)America/Recife\",\"America/Regina\":\"(GMT-06:00)America/Regina\",\"America/Resolute\":\"(GMT-05:00)America/Resolute\",\"America/Rio_Branco\":\"(GMT-05:00)America/Rio_Branco\",\"America/Rosario\":\"(GMT-03:00)America/Rosario\",\"America/Santa_Isabel\":\"(GMT-07:00)America/Santa_Isabel\",\"America/Santarem\":\"(GMT-03:00)America/Santarem\",\"America/Santiago\":\"(GMT-04:00)America/Santiago\",\"America/Santo_Domingo\":\"(GMT-04:00)America/Santo_Domingo\",\"America/Sao_Paulo\":\"(GMT-03:00)America/Sao_Paulo\",\"America/Scoresbysund\":\"(GMT+00:00)America/Scoresbysund\",\"America/Shiprock\":\"(GMT-06:00)America/Shiprock\",\"America/Sitka\":\"(GMT-08:00)America/Sitka\",\"America/St_Barthelemy\":\"(GMT-04:00)America/St_Barthelemy\",\"America/St_Johns\":\"(GMT-02:30)America/St_Johns\",\"America/St_Kitts\":\"(GMT-04:00)America/St_Kitts\",\"America/St_Lucia\":\"(GMT-04:00)America/St_Lucia\",\"America/St_Thomas\":\"(GMT-04:00)America/St_Thomas\",\"America/St_Vincent\":\"(GMT-04:00)America/St_Vincent\",\"America/Swift_Current\":\"(GMT-06:00)America/Swift_Current\",\"America/Tegucigalpa\":\"(GMT-06:00)America/Tegucigalpa\",\"America/Thule\":\"(GMT-03:00)America/Thule\",\"America/Thunder_Bay\":\"(GMT-04:00)America/Thunder_Bay\",\"America/Tijuana\":\"(GMT-07:00)America/Tijuana\",\"America/Toronto\":\"(GMT-04:00)America/Toronto\",\"America/Tortola\":\"(GMT-04:00)America/Tortola\",\"America/Vancouver\":\"(GMT-07:00)America/Vancouver\",\"America/Virgin\":\"(GMT-04:00)America/Virgin\",\"America/Whitehorse\":\"(GMT-07:00)America/Whitehorse\",\"America/Winnipeg\":\"(GMT-05:00)America/Winnipeg\",\"America/Yakutat\":\"(GMT-08:00)America/Yakutat\",\"America/Yellowknife\":\"(GMT-06:00)America/Yellowknife\",\"Antarctica/Casey\":\"(GMT+08:00)Antarctica/Casey\",\"Antarctica/Davis\":\"(GMT+07:00)Antarctica/Davis\",\"Antarctica/DumontDUrville\":\"(GMT+10:00)Antarctica/DumontDUrville\",\"Antarctica/Macquarie\":\"(GMT+11:00)Antarctica/Macquarie\",\"Antarctica/Mawson\":\"(GMT+05:00)Antarctica/Mawson\",\"Antarctica/McMurdo\":\"(GMT+12:00)Antarctica/McMurdo\",\"Antarctica/Palmer\":\"(GMT-03:00)Antarctica/Palmer\",\"Antarctica/Rothera\":\"(GMT-03:00)Antarctica/Rothera\",\"Antarctica/South_Pole\":\"(GMT+12:00)Antarctica/South_Pole\",\"Antarctica/Syowa\":\"(GMT+03:00)Antarctica/Syowa\",\"Antarctica/Troll\":\"(GMT+02:00)Antarctica/Troll\",\"Antarctica/Vostok\":\"(GMT+06:00)Antarctica/Vostok\",\"Arctic/Longyearbyen\":\"(GMT+02:00)Arctic/Longyearbyen\",\"Asia/Aden\":\"(GMT+03:00)Asia/Aden\",\"Asia/Almaty\":\"(GMT+06:00)Asia/Almaty\",\"Asia/Amman\":\"(GMT+03:00)Asia/Amman\",\"Asia/Anadyr\":\"(GMT+12:00)Asia/Anadyr\",\"Asia/Aqtau\":\"(GMT+05:00)Asia/Aqtau\",\"Asia/Aqtobe\":\"(GMT+05:00)Asia/Aqtobe\",\"Asia/Ashgabat\":\"(GMT+05:00)Asia/Ashgabat\",\"Asia/Ashkhabad\":\"(GMT+05:00)Asia/Ashkhabad\",\"Asia/Atyrau\":\"(GMT+05:00)Asia/Atyrau\",\"Asia/Baghdad\":\"(GMT+03:00)Asia/Baghdad\",\"Asia/Bahrain\":\"(GMT+03:00)Asia/Bahrain\",\"Asia/Baku\":\"(GMT+04:00)Asia/Baku\",\"Asia/Bangkok\":\"(GMT+07:00)Asia/Bangkok\",\"Asia/Barnaul\":\"(GMT+07:00)Asia/Barnaul\",\"Asia/Beirut\":\"(GMT+03:00)Asia/Beirut\",\"Asia/Bishkek\":\"(GMT+06:00)Asia/Bishkek\",\"Asia/Brunei\":\"(GMT+08:00)Asia/Brunei\",\"Asia/Calcutta\":\"(GMT+05:30)Asia/Calcutta\",\"Asia/Chita\":\"(GMT+09:00)Asia/Chita\",\"Asia/Choibalsan\":\"(GMT+08:00)Asia/Choibalsan\",\"Asia/Chongqing\":\"(GMT+08:00)Asia/Chongqing\",\"Asia/Chungking\":\"(GMT+08:00)Asia/Chungking\",\"Asia/Colombo\":\"(GMT+05:30)Asia/Colombo\",\"Asia/Dacca\":\"(GMT+06:00)Asia/Dacca\",\"Asia/Damascus\":\"(GMT+03:00)Asia/Damascus\",\"Asia/Dhaka\":\"(GMT+06:00)Asia/Dhaka\",\"Asia/Dili\":\"(GMT+09:00)Asia/Dili\",\"Asia/Dubai\":\"(GMT+04:00)Asia/Dubai\",\"Asia/Dushanbe\":\"(GMT+05:00)Asia/Dushanbe\",\"Asia/Famagusta\":\"(GMT+03:00)Asia/Famagusta\",\"Asia/Gaza\":\"(GMT+03:00)Asia/Gaza\",\"Asia/Harbin\":\"(GMT+08:00)Asia/Harbin\",\"Asia/Hebron\":\"(GMT+03:00)Asia/Hebron\",\"Asia/Ho_Chi_Minh\":\"(GMT+07:00)Asia/Ho_Chi_Minh\",\"Asia/Hong_Kong\":\"(GMT+08:00)Asia/Hong_Kong\",\"Asia/Hovd\":\"(GMT+07:00)Asia/Hovd\",\"Asia/Irkutsk\":\"(GMT+08:00)Asia/Irkutsk\",\"Asia/Istanbul\":\"(GMT+03:00)Asia/Istanbul\",\"Asia/Jakarta\":\"(GMT+07:00)Asia/Jakarta\",\"Asia/Jayapura\":\"(GMT+09:00)Asia/Jayapura\",\"Asia/Jerusalem\":\"(GMT+03:00)Asia/Jerusalem\",\"Asia/Kabul\":\"(GMT+04:30)Asia/Kabul\",\"Asia/Kamchatka\":\"(GMT+12:00)Asia/Kamchatka\",\"Asia/Karachi\":\"(GMT+05:00)Asia/Karachi\",\"Asia/Kashgar\":\"(GMT+06:00)Asia/Kashgar\",\"Asia/Kathmandu\":\"(GMT+05:45)Asia/Kathmandu\",\"Asia/Katmandu\":\"(GMT+05:45)Asia/Katmandu\",\"Asia/Khandyga\":\"(GMT+09:00)Asia/Khandyga\",\"Asia/Kolkata\":\"(GMT+05:30)Asia/Kolkata\",\"Asia/Krasnoyarsk\":\"(GMT+07:00)Asia/Krasnoyarsk\",\"Asia/Kuala_Lumpur\":\"(GMT+08:00)Asia/Kuala_Lumpur\",\"Asia/Kuching\":\"(GMT+08:00)Asia/Kuching\",\"Asia/Kuwait\":\"(GMT+03:00)Asia/Kuwait\",\"Asia/Macao\":\"(GMT+08:00)Asia/Macao\",\"Asia/Macau\":\"(GMT+08:00)Asia/Macau\",\"Asia/Magadan\":\"(GMT+11:00)Asia/Magadan\",\"Asia/Makassar\":\"(GMT+08:00)Asia/Makassar\",\"Asia/Manila\":\"(GMT+08:00)Asia/Manila\",\"Asia/Muscat\":\"(GMT+04:00)Asia/Muscat\",\"Asia/Nicosia\":\"(GMT+03:00)Asia/Nicosia\",\"Asia/Novokuznetsk\":\"(GMT+07:00)Asia/Novokuznetsk\",\"Asia/Novosibirsk\":\"(GMT+07:00)Asia/Novosibirsk\",\"Asia/Omsk\":\"(GMT+06:00)Asia/Omsk\",\"Asia/Oral\":\"(GMT+05:00)Asia/Oral\",\"Asia/Phnom_Penh\":\"(GMT+07:00)Asia/Phnom_Penh\",\"Asia/Pontianak\":\"(GMT+07:00)Asia/Pontianak\",\"Asia/Pyongyang\":\"(GMT+09:00)Asia/Pyongyang\",\"Asia/Qatar\":\"(GMT+03:00)Asia/Qatar\",\"Asia/Qostanay\":\"(GMT+06:00)Asia/Qostanay\",\"Asia/Qyzylorda\":\"(GMT+05:00)Asia/Qyzylorda\",\"Asia/Rangoon\":\"(GMT+06:30)Asia/Rangoon\",\"Asia/Riyadh\":\"(GMT+03:00)Asia/Riyadh\",\"Asia/Saigon\":\"(GMT+07:00)Asia/Saigon\",\"Asia/Sakhalin\":\"(GMT+11:00)Asia/Sakhalin\",\"Asia/Samarkand\":\"(GMT+05:00)Asia/Samarkand\",\"Asia/Seoul\":\"(GMT+09:00)Asia/Seoul\",\"Asia/Shanghai\":\"(GMT+08:00)Asia/Shanghai\",\"Asia/Singapore\":\"(GMT+08:00)Asia/Singapore\",\"Asia/Srednekolymsk\":\"(GMT+11:00)Asia/Srednekolymsk\",\"Asia/Taipei\":\"(GMT+08:00)Asia/Taipei\",\"Asia/Tashkent\":\"(GMT+05:00)Asia/Tashkent\",\"Asia/Tbilisi\":\"(GMT+04:00)Asia/Tbilisi\",\"Asia/Tehran\":\"(GMT+04:30)Asia/Tehran\",\"Asia/Tel_Aviv\":\"(GMT+03:00)Asia/Tel_Aviv\",\"Asia/Thimbu\":\"(GMT+06:00)Asia/Thimbu\",\"Asia/Thimphu\":\"(GMT+06:00)Asia/Thimphu\",\"Asia/Tokyo\":\"(GMT+09:00)Asia/Tokyo\",\"Asia/Tomsk\":\"(GMT+07:00)Asia/Tomsk\",\"Asia/Ujung_Pandang\":\"(GMT+08:00)Asia/Ujung_Pandang\",\"Asia/Ulaanbaatar\":\"(GMT+08:00)Asia/Ulaanbaatar\",\"Asia/Ulan_Bator\":\"(GMT+08:00)Asia/Ulan_Bator\",\"Asia/Urumqi\":\"(GMT+06:00)Asia/Urumqi\",\"Asia/Ust-Nera\":\"(GMT+10:00)Asia/Ust-Nera\",\"Asia/Vientiane\":\"(GMT+07:00)Asia/Vientiane\",\"Asia/Vladivostok\":\"(GMT+10:00)Asia/Vladivostok\",\"Asia/Yakutsk\":\"(GMT+09:00)Asia/Yakutsk\",\"Asia/Yangon\":\"(GMT+06:30)Asia/Yangon\",\"Asia/Yekaterinburg\":\"(GMT+05:00)Asia/Yekaterinburg\",\"Asia/Yerevan\":\"(GMT+04:00)Asia/Yerevan\",\"Atlantic/Azores\":\"(GMT+00:00)Atlantic/Azores\",\"Atlantic/Bermuda\":\"(GMT-03:00)Atlantic/Bermuda\",\"Atlantic/Canary\":\"(GMT+01:00)Atlantic/Canary\",\"Atlantic/Cape_Verde\":\"(GMT-01:00)Atlantic/Cape_Verde\",\"Atlantic/Faeroe\":\"(GMT+01:00)Atlantic/Faeroe\",\"Atlantic/Faroe\":\"(GMT+01:00)Atlantic/Faroe\",\"Atlantic/Jan_Mayen\":\"(GMT+02:00)Atlantic/Jan_Mayen\",\"Atlantic/Madeira\":\"(GMT+01:00)Atlantic/Madeira\",\"Atlantic/Reykjavik\":\"(GMT+00:00)Atlantic/Reykjavik\",\"Atlantic/South_Georgia\":\"(GMT-02:00)Atlantic/South_Georgia\",\"Atlantic/St_Helena\":\"(GMT+00:00)Atlantic/St_Helena\",\"Atlantic/Stanley\":\"(GMT-03:00)Atlantic/Stanley\",\"Australia/ACT\":\"(GMT+10:00)Australia/ACT\",\"Australia/Adelaide\":\"(GMT+09:30)Australia/Adelaide\",\"Australia/Brisbane\":\"(GMT+10:00)Australia/Brisbane\",\"Australia/Broken_Hill\":\"(GMT+09:30)Australia/Broken_Hill\",\"Australia/Canberra\":\"(GMT+10:00)Australia/Canberra\",\"Australia/Currie\":\"(GMT+10:00)Australia/Currie\",\"Australia/Darwin\":\"(GMT+09:30)Australia/Darwin\",\"Australia/Eucla\":\"(GMT+08:45)Australia/Eucla\",\"Australia/Hobart\":\"(GMT+10:00)Australia/Hobart\",\"Australia/LHI\":\"(GMT+10:30)Australia/LHI\",\"Australia/Lindeman\":\"(GMT+10:00)Australia/Lindeman\",\"Australia/Lord_Howe\":\"(GMT+10:30)Australia/Lord_Howe\",\"Australia/Melbourne\":\"(GMT+10:00)Australia/Melbourne\",\"Australia/NSW\":\"(GMT+10:00)Australia/NSW\",\"Australia/North\":\"(GMT+09:30)Australia/North\",\"Australia/Perth\":\"(GMT+08:00)Australia/Perth\",\"Australia/Queensland\":\"(GMT+10:00)Australia/Queensland\",\"Australia/South\":\"(GMT+09:30)Australia/South\",\"Australia/Sydney\":\"(GMT+10:00)Australia/Sydney\",\"Australia/Tasmania\":\"(GMT+10:00)Australia/Tasmania\",\"Australia/Victoria\":\"(GMT+10:00)Australia/Victoria\",\"Australia/West\":\"(GMT+08:00)Australia/West\",\"Australia/Yancowinna\":\"(GMT+09:30)Australia/Yancowinna\",\"Brazil/Acre\":\"(GMT-05:00)Brazil/Acre\",\"Brazil/DeNoronha\":\"(GMT-02:00)Brazil/DeNoronha\",\"Brazil/East\":\"(GMT-03:00)Brazil/East\",\"Brazil/West\":\"(GMT-04:00)Brazil/West\",\"CET\":\"(GMT+02:00)CET\",\"CST6CDT\":\"(GMT-05:00)CST6CDT\",\"Canada/Atlantic\":\"(GMT-03:00)Canada/Atlantic\",\"Canada/Central\":\"(GMT-05:00)Canada/Central\",\"Canada/Eastern\":\"(GMT-04:00)Canada/Eastern\",\"Canada/Mountain\":\"(GMT-06:00)Canada/Mountain\",\"Canada/Newfoundland\":\"(GMT-02:30)Canada/Newfoundland\",\"Canada/Pacific\":\"(GMT-07:00)Canada/Pacific\",\"Canada/Saskatchewan\":\"(GMT-06:00)Canada/Saskatchewan\",\"Canada/Yukon\":\"(GMT-07:00)Canada/Yukon\",\"Chile/Continental\":\"(GMT-04:00)Chile/Continental\",\"Chile/EasterIsland\":\"(GMT-06:00)Chile/EasterIsland\",\"Cuba\":\"(GMT-04:00)Cuba\",\"EET\":\"(GMT+03:00)EET\",\"EST\":\"(GMT-05:00)EST\",\"EST5EDT\":\"(GMT-04:00)EST5EDT\",\"Egypt\":\"(GMT+02:00)Egypt\",\"Eire\":\"(GMT+01:00)Eire\",\"Etc/GMT\":\"(GMT+00:00)Etc/GMT\",\"Etc/GMT+0\":\"(GMT+00:00)Etc/GMT+0\",\"Etc/GMT+1\":\"(GMT-01:00)Etc/GMT+1\",\"Etc/GMT+10\":\"(GMT-10:00)Etc/GMT+10\",\"Etc/GMT+11\":\"(GMT-11:00)Etc/GMT+11\",\"Etc/GMT+12\":\"(GMT-12:00)Etc/GMT+12\",\"Etc/GMT+2\":\"(GMT-02:00)Etc/GMT+2\",\"Etc/GMT+3\":\"(GMT-03:00)Etc/GMT+3\",\"Etc/GMT+4\":\"(GMT-04:00)Etc/GMT+4\",\"Etc/GMT+5\":\"(GMT-05:00)Etc/GMT+5\",\"Etc/GMT+6\":\"(GMT-06:00)Etc/GMT+6\",\"Etc/GMT+7\":\"(GMT-07:00)Etc/GMT+7\",\"Etc/GMT+8\":\"(GMT-08:00)Etc/GMT+8\",\"Etc/GMT+9\":\"(GMT-09:00)Etc/GMT+9\",\"Etc/GMT-0\":\"(GMT+00:00)Etc/GMT-0\",\"Etc/GMT-1\":\"(GMT+01:00)Etc/GMT-1\",\"Etc/GMT-10\":\"(GMT+10:00)Etc/GMT-10\",\"Etc/GMT-11\":\"(GMT+11:00)Etc/GMT-11\",\"Etc/GMT-12\":\"(GMT+12:00)Etc/GMT-12\",\"Etc/GMT-13\":\"(GMT+13:00)Etc/GMT-13\",\"Etc/GMT-14\":\"(GMT+14:00)Etc/GMT-14\",\"Etc/GMT-2\":\"(GMT+02:00)Etc/GMT-2\",\"Etc/GMT-3\":\"(GMT+03:00)Etc/GMT-3\",\"Etc/GMT-4\":\"(GMT+04:00)Etc/GMT-4\",\"Etc/GMT-5\":\"(GMT+05:00)Etc/GMT-5\",\"Etc/GMT-6\":\"(GMT+06:00)Etc/GMT-6\",\"Etc/GMT-7\":\"(GMT+07:00)Etc/GMT-7\",\"Etc/GMT-8\":\"(GMT+08:00)Etc/GMT-8\",\"Etc/GMT-9\":\"(GMT+09:00)Etc/GMT-9\",\"Etc/GMT0\":\"(GMT+00:00)Etc/GMT0\",\"Etc/Greenwich\":\"(GMT+00:00)Etc/Greenwich\",\"Etc/UCT\":\"(GMT+00:00)Etc/UCT\",\"Etc/UTC\":\"(GMT+00:00)Etc/UTC\",\"Etc/Universal\":\"(GMT+00:00)Etc/Universal\",\"Etc/Zulu\":\"(GMT+00:00)Etc/Zulu\",\"Europe/Amsterdam\":\"(GMT+02:00)Europe/Amsterdam\",\"Europe/Andorra\":\"(GMT+02:00)Europe/Andorra\",\"Europe/Astrakhan\":\"(GMT+04:00)Europe/Astrakhan\",\"Europe/Athens\":\"(GMT+03:00)Europe/Athens\",\"Europe/Belfast\":\"(GMT+01:00)Europe/Belfast\",\"Europe/Belgrade\":\"(GMT+02:00)Europe/Belgrade\",\"Europe/Berlin\":\"(GMT+02:00)Europe/Berlin\",\"Europe/Bratislava\":\"(GMT+02:00)Europe/Bratislava\",\"Europe/Brussels\":\"(GMT+02:00)Europe/Brussels\",\"Europe/Bucharest\":\"(GMT+03:00)Europe/Bucharest\",\"Europe/Budapest\":\"(GMT+02:00)Europe/Budapest\",\"Europe/Busingen\":\"(GMT+02:00)Europe/Busingen\",\"Europe/Chisinau\":\"(GMT+03:00)Europe/Chisinau\",\"Europe/Copenhagen\":\"(GMT+02:00)Europe/Copenhagen\",\"Europe/Dublin\":\"(GMT+01:00)Europe/Dublin\",\"Europe/Gibraltar\":\"(GMT+02:00)Europe/Gibraltar\",\"Europe/Guernsey\":\"(GMT+01:00)Europe/Guernsey\",\"Europe/Helsinki\":\"(GMT+03:00)Europe/Helsinki\",\"Europe/Isle_of_Man\":\"(GMT+01:00)Europe/Isle_of_Man\",\"Europe/Istanbul\":\"(GMT+03:00)Europe/Istanbul\",\"Europe/Jersey\":\"(GMT+01:00)Europe/Jersey\",\"Europe/Kaliningrad\":\"(GMT+02:00)Europe/Kaliningrad\",\"Europe/Kiev\":\"(GMT+03:00)Europe/Kiev\",\"Europe/Kirov\":\"(GMT+03:00)Europe/Kirov\",\"Europe/Lisbon\":\"(GMT+01:00)Europe/Lisbon\",\"Europe/Ljubljana\":\"(GMT+02:00)Europe/Ljubljana\",\"Europe/London\":\"(GMT+01:00)Europe/London\",\"Europe/Luxembourg\":\"(GMT+02:00)Europe/Luxembourg\",\"Europe/Madrid\":\"(GMT+02:00)Europe/Madrid\",\"Europe/Malta\":\"(GMT+02:00)Europe/Malta\",\"Europe/Mariehamn\":\"(GMT+03:00)Europe/Mariehamn\",\"Europe/Minsk\":\"(GMT+03:00)Europe/Minsk\",\"Europe/Monaco\":\"(GMT+02:00)Europe/Monaco\",\"Europe/Moscow\":\"(GMT+03:00)Europe/Moscow\",\"Europe/Nicosia\":\"(GMT+03:00)Europe/Nicosia\",\"Europe/Oslo\":\"(GMT+02:00)Europe/Oslo\",\"Europe/Paris\":\"(GMT+02:00)Europe/Paris\",\"Europe/Podgorica\":\"(GMT+02:00)Europe/Podgorica\",\"Europe/Prague\":\"(GMT+02:00)Europe/Prague\",\"Europe/Riga\":\"(GMT+03:00)Europe/Riga\",\"Europe/Rome\":\"(GMT+02:00)Europe/Rome\",\"Europe/Samara\":\"(GMT+04:00)Europe/Samara\",\"Europe/San_Marino\":\"(GMT+02:00)Europe/San_Marino\",\"Europe/Sarajevo\":\"(GMT+02:00)Europe/Sarajevo\",\"Europe/Saratov\":\"(GMT+04:00)Europe/Saratov\",\"Europe/Simferopol\":\"(GMT+03:00)Europe/Simferopol\",\"Europe/Skopje\":\"(GMT+02:00)Europe/Skopje\",\"Europe/Sofia\":\"(GMT+03:00)Europe/Sofia\",\"Europe/Stockholm\":\"(GMT+02:00)Europe/Stockholm\",\"Europe/Tallinn\":\"(GMT+03:00)Europe/Tallinn\",\"Europe/Tirane\":\"(GMT+02:00)Europe/Tirane\",\"Europe/Tiraspol\":\"(GMT+03:00)Europe/Tiraspol\",\"Europe/Ulyanovsk\":\"(GMT+04:00)Europe/Ulyanovsk\",\"Europe/Uzhgorod\":\"(GMT+03:00)Europe/Uzhgorod\",\"Europe/Vaduz\":\"(GMT+02:00)Europe/Vaduz\",\"Europe/Vatican\":\"(GMT+02:00)Europe/Vatican\",\"Europe/Vienna\":\"(GMT+02:00)Europe/Vienna\",\"Europe/Vilnius\":\"(GMT+03:00)Europe/Vilnius\",\"Europe/Volgograd\":\"(GMT+04:00)Europe/Volgograd\",\"Europe/Warsaw\":\"(GMT+02:00)Europe/Warsaw\",\"Europe/Zagreb\":\"(GMT+02:00)Europe/Zagreb\",\"Europe/Zaporozhye\":\"(GMT+03:00)Europe/Zaporozhye\",\"Europe/Zurich\":\"(GMT+02:00)Europe/Zurich\",\"GB\":\"(GMT+01:00)GB\",\"GB-Eire\":\"(GMT+01:00)GB-Eire\",\"GMT\":\"(GMT+00:00)GMT\",\"GMT+0\":\"(GMT+00:00)GMT+0\",\"GMT-0\":\"(GMT+00:00)GMT-0\",\"GMT0\":\"(GMT+00:00)GMT0\",\"Greenwich\":\"(GMT+00:00)Greenwich\",\"HST\":\"(GMT-10:00)HST\",\"Hongkong\":\"(GMT+08:00)Hongkong\",\"Iceland\":\"(GMT+00:00)Iceland\",\"Indian/Antananarivo\":\"(GMT+03:00)Indian/Antananarivo\",\"Indian/Chagos\":\"(GMT+06:00)Indian/Chagos\",\"Indian/Christmas\":\"(GMT+07:00)Indian/Christmas\",\"Indian/Cocos\":\"(GMT+06:30)Indian/Cocos\",\"Indian/Comoro\":\"(GMT+03:00)Indian/Comoro\",\"Indian/Kerguelen\":\"(GMT+05:00)Indian/Kerguelen\",\"Indian/Mahe\":\"(GMT+04:00)Indian/Mahe\",\"Indian/Maldives\":\"(GMT+05:00)Indian/Maldives\",\"Indian/Mauritius\":\"(GMT+04:00)Indian/Mauritius\",\"Indian/Mayotte\":\"(GMT+03:00)Indian/Mayotte\",\"Indian/Reunion\":\"(GMT+04:00)Indian/Reunion\",\"Iran\":\"(GMT+04:30)Iran\",\"Israel\":\"(GMT+03:00)Israel\",\"Jamaica\":\"(GMT-05:00)Jamaica\",\"Japan\":\"(GMT+09:00)Japan\",\"Kwajalein\":\"(GMT+12:00)Kwajalein\",\"Libya\":\"(GMT+02:00)Libya\",\"MET\":\"(GMT+02:00)MET\",\"MST\":\"(GMT-07:00)MST\",\"MST7MDT\":\"(GMT-06:00)MST7MDT\",\"Mexico/BajaNorte\":\"(GMT-07:00)Mexico/BajaNorte\",\"Mexico/BajaSur\":\"(GMT-06:00)Mexico/BajaSur\",\"Mexico/General\":\"(GMT-05:00)Mexico/General\",\"NZ\":\"(GMT+12:00)NZ\",\"NZ-CHAT\":\"(GMT+12:45)NZ-CHAT\",\"Navajo\":\"(GMT-06:00)Navajo\",\"PRC\":\"(GMT+08:00)PRC\",\"PST8PDT\":\"(GMT-07:00)PST8PDT\",\"Pacific/Apia\":\"(GMT+13:00)Pacific/Apia\",\"Pacific/Auckland\":\"(GMT+12:00)Pacific/Auckland\",\"Pacific/Bougainville\":\"(GMT+11:00)Pacific/Bougainville\",\"Pacific/Chatham\":\"(GMT+12:45)Pacific/Chatham\",\"Pacific/Chuuk\":\"(GMT+10:00)Pacific/Chuuk\",\"Pacific/Easter\":\"(GMT-06:00)Pacific/Easter\",\"Pacific/Efate\":\"(GMT+11:00)Pacific/Efate\",\"Pacific/Enderbury\":\"(GMT+13:00)Pacific/Enderbury\",\"Pacific/Fakaofo\":\"(GMT+13:00)Pacific/Fakaofo\",\"Pacific/Fiji\":\"(GMT+12:00)Pacific/Fiji\",\"Pacific/Funafuti\":\"(GMT+12:00)Pacific/Funafuti\",\"Pacific/Galapagos\":\"(GMT-06:00)Pacific/Galapagos\",\"Pacific/Gambier\":\"(GMT-09:00)Pacific/Gambier\",\"Pacific/Guadalcanal\":\"(GMT+11:00)Pacific/Guadalcanal\",\"Pacific/Guam\":\"(GMT+10:00)Pacific/Guam\",\"Pacific/Honolulu\":\"(GMT-10:00)Pacific/Honolulu\",\"Pacific/Johnston\":\"(GMT-10:00)Pacific/Johnston\",\"Pacific/Kiritimati\":\"(GMT+14:00)Pacific/Kiritimati\",\"Pacific/Kosrae\":\"(GMT+11:00)Pacific/Kosrae\",\"Pacific/Kwajalein\":\"(GMT+12:00)Pacific/Kwajalein\",\"Pacific/Majuro\":\"(GMT+12:00)Pacific/Majuro\",\"Pacific/Marquesas\":\"(GMT-09:30)Pacific/Marquesas\",\"Pacific/Midway\":\"(GMT-11:00)Pacific/Midway\",\"Pacific/Nauru\":\"(GMT+12:00)Pacific/Nauru\",\"Pacific/Niue\":\"(GMT-11:00)Pacific/Niue\",\"Pacific/Norfolk\":\"(GMT+11:00)Pacific/Norfolk\",\"Pacific/Noumea\":\"(GMT+11:00)Pacific/Noumea\",\"Pacific/Pago_Pago\":\"(GMT-11:00)Pacific/Pago_Pago\",\"Pacific/Palau\":\"(GMT+09:00)Pacific/Palau\",\"Pacific/Pitcairn\":\"(GMT-08:00)Pacific/Pitcairn\",\"Pacific/Pohnpei\":\"(GMT+11:00)Pacific/Pohnpei\",\"Pacific/Ponape\":\"(GMT+11:00)Pacific/Ponape\",\"Pacific/Port_Moresby\":\"(GMT+10:00)Pacific/Port_Moresby\",\"Pacific/Rarotonga\":\"(GMT-10:00)Pacific/Rarotonga\",\"Pacific/Saipan\":\"(GMT+10:00)Pacific/Saipan\",\"Pacific/Samoa\":\"(GMT-11:00)Pacific/Samoa\",\"Pacific/Tahiti\":\"(GMT-10:00)Pacific/Tahiti\",\"Pacific/Tarawa\":\"(GMT+12:00)Pacific/Tarawa\",\"Pacific/Tongatapu\":\"(GMT+13:00)Pacific/Tongatapu\",\"Pacific/Truk\":\"(GMT+10:00)Pacific/Truk\",\"Pacific/Wake\":\"(GMT+12:00)Pacific/Wake\",\"Pacific/Wallis\":\"(GMT+12:00)Pacific/Wallis\",\"Pacific/Yap\":\"(GMT+10:00)Pacific/Yap\",\"Poland\":\"(GMT+02:00)Poland\",\"Portugal\":\"(GMT+01:00)Portugal\",\"ROC\":\"(GMT+08:00)ROC\",\"ROK\":\"(GMT+09:00)ROK\",\"Singapore\":\"(GMT+08:00)Singapore\",\"Turkey\":\"(GMT+03:00)Turkey\",\"UCT\":\"(GMT+00:00)UCT\",\"US/Alaska\":\"(GMT-08:00)US/Alaska\",\"US/Aleutian\":\"(GMT-09:00)US/Aleutian\",\"US/Arizona\":\"(GMT-07:00)US/Arizona\",\"US/Central\":\"(GMT-05:00)US/Central\",\"US/East-Indiana\":\"(GMT-04:00)US/East-Indiana\",\"US/Eastern\":\"(GMT-04:00)US/Eastern\",\"US/Hawaii\":\"(GMT-10:00)US/Hawaii\",\"US/Indiana-Starke\":\"(GMT-05:00)US/Indiana-Starke\",\"US/Michigan\":\"(GMT-04:00)US/Michigan\",\"US/Mountain\":\"(GMT-06:00)US/Mountain\",\"US/Pacific\":\"(GMT-07:00)US/Pacific\",\"US/Pacific-New\":\"(GMT-07:00)US/Pacific-New\",\"US/Samoa\":\"(GMT-11:00)US/Samoa\",\"UTC\":\"(GMT+00:00)UTC\",\"Universal\":\"(GMT+00:00)Universal\",\"W-SU\":\"(GMT+03:00)W-SU\",\"WET\":\"(GMT+01:00)WET\",\"Zulu\":\"(GMT+00:00)Zulu\"},\"cdnPath\":\"https://d14ctajtgrugd.cloudfront.net/\",\"fbIntegrations\":{\"hootsuite\":183319479511},\"tapfiliate\":{\"ID\":\"19078-6de0a9\"},\"whatsApp\":{\"src\":\"https://hub.360dialog.com/lp/submit-waba/\",\"partnerID\":\"N8q9EFPA\"}}");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../src/environments/environment.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var env = __webpack_require__(0);
var environment = __assign({ appName: 'SnatchBot', envName: 'PROD', host: 'account.snatchbot.me', cookiesHost: 'snatchbot.me', autoFlowsEndpoint: 'https://flows.snatchbot.me', cdnPath: 'https://d14ctajtgrugd.cloudfront.net/', webchatHost: 'https://webchat.snatchbot.me/', landingHost: 'https://snatchbot.me/', supportHost: "https://support.snatchbot.me/", affiliatesHost: 'https://affiliates.snatchbot.me/', protocol: 'https://', production: true, test: false, i18nPrefix: '', gtagID: 'UA-145089299-1', domain: 'snatchbot.me', captchaSiteKey: '6LcXxKoUAAAAAI2uwTlMYp7O-ju3v3n2IIMGOQr_' }, env);

// CONCATENATED MODULE: ./script-embed.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Init", function() { return script_embed_Init; });
var script_embed_assign = (undefined && undefined.__assign) || function () {
    script_embed_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return script_embed_assign.apply(this, arguments);
};

var HOST = environment.protocol + environment.host;
var LANDINGHOST = environment.landingHost;
var WEBCHATHOST = environment.webchatHost;
var xmlhttp = new XMLHttpRequest();
var getJson = new XMLHttpRequest();
var bodyDefaultStyles = {
    overflow: String,
    overflowX: String,
    overflowY: String
};
var defualtSettings = {
    width: 600,
    height: 600,
    drag: 0,
    hash: '',
    uid: '',
    autoOpen: 0,
    iconSize: 63,
    customImg: 'https://dvgpba5hywmpo.cloudfront.net/media/image/1522254217jjdER1I8ol',
    customCSS: '',
    buttonStyle: 'bubble',
    buttonShowIcon: true,
    buttonLabel: '',
    buttonLabelColor: '#ffffff',
    buttonLabelSize: 18,
    buttonLabelWeight: 400,
    buttonLabelStyle: 'normal',
    buttonWidth: 90,
    buttonHeight: 90,
    buttonBgColor: 'red',
    deploy: false,
    popup: {
        position: 'left',
        enable: false,
        message: '',
        delay: 0
    },
    language: 'en'
};
var Modal = /** @class */ (function () {
    function Modal(settings) {
        this.settings = settings;
        this.method = {};
        this.modalContent = document.createElement('div');
        this.modalWrapper = document.createElement('div');
        this.modalClose = document.createElement('div');
        this.modalDrag = document.createElement('div');
    }
    Modal.prototype.initModalStyles = function (modalContent) {
        modalContent.id = 'sntch_webchat';
        modalContent.style.backgroundColor = '#ffffff';
        modalContent.style.width = this.settings.width + 'px';
        modalContent.style.height = this.settings.height + 'px';
        modalContent.style.position = 'fixed';
        modalContent.style.bottom = 10 + 'px';
        modalContent.style.right = 10 + 'px';
        modalContent.style.maxHeight = '100%';
        modalContent.style.maxWidth = '100%';
        modalContent.style.zIndex = '2147483647';
        modalContent.style.transform = 'translateY(110%)';
        modalContent.style.transition = '.5s transform';
        modalContent.style.borderRadius = '20px 20px 0 0';
        modalContent.style.overflow = 'hidden';
        modalContent.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    };
    Modal.prototype.initWrapperStyles = function (modalWrapper) {
        modalWrapper.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
        modalWrapper.style.position = 'relative';
        modalWrapper.style.height = '100%';
    };
    Modal.prototype.initCloseStyles = function (modalClose) {
        var _this = this;
        modalClose.id = 'sntch_close';
        modalClose.style.position = 'absolute';
        modalClose.style.top = 20 + 'px';
        modalClose.style.right = 8 + 'px';
        modalClose.style.width = 40 + 'px';
        modalClose.style.height = 40 + 'px';
        modalClose.style.lineHeight = 20 + 'px';
        modalClose.style.textAlign = 'center';
        modalClose.style.cursor = 'pointer';
        modalClose.innerHTML = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M1490 1245q0 40-24 68l-136 136q-24 24-68 24t-68-28l-294-294-294\n            294q-24 24-68 24t-68-28l-136-136q-24-24-24-68t24-68l294-294-294-294q-24-24-24-68t24-68l136-136q24-24 68-24t68\n            28l294 294 294-294q24-24 68-28t68 28l136 136q28 24 24 68t-24 68l-294 294 294 294q24 24 24 68z\"\n            fill=\"" + this.settings.closeBtnColor + "\"/>\n            </svg>";
        modalClose.onclick = function () {
            _this.close();
        };
    };
    Modal.prototype.open = function (params) {
        this.initModalStyles(this.modalContent);
        this.initWrapperStyles(this.modalWrapper);
        this.initCloseStyles(this.modalClose);
        document.body.appendChild(this.modalContent);
        this.modalWrapper.innerHTML = params.content;
        this.modalWrapper.appendChild(this.modalClose);
        if (this.settings.drag === 1) {
            this.modalWrapper.appendChild(this.modalDrag);
        }
        var styles = document.createElement('style');
        styles.innerHTML = "\n        @media print {\n            #sntch_webchat, #sntch_button, #sntch_popup {\n              visibility: hidden;\n            }\n          }\n        ";
        this.modalContent.appendChild(styles);
        this.modalContent.appendChild(this.modalWrapper);
        if (this.settings.autoOpening) {
            this.openChat();
        }
        this.checkMobile();
    };
    Modal.prototype.openChat = function () {
        this.modalContent.style.transform = 'translateY(0)';
        var iframe = document.getElementById('sntch_webchat').querySelector('iframe');
        iframe.onload = function () {
            iframe.contentWindow.postMessage('start', '*');
        };
    };
    Modal.prototype.close = function () {
        scrollOptions(false);
        this.modalContent.style.transform = 'translateY(105%)';
        var iframe = document.getElementById('sntch_webchat').querySelector('iframe');
        iframe.contentWindow.postMessage('close', '*');
    };
    Modal.prototype.checkMobile = function () {
        var maxWidth635 = window.matchMedia('all and (max-width: 635px)');
        var webchat = document.getElementById('sntch_webchat');
        var iframe = document.getElementById('sntch_iframe');
        // const clientHeight = document.documentElement.clientHeight + 'px';
        if (maxWidth635.matches) {
            webchat.style.width = '100%';
            // webchat.style.height = '';
            webchat.style.height = '100%';
            webchat.style.top = '0px';
            webchat.style.right = '0px';
            webchat.style.bottom = '0px';
            webchat.style.borderRadius = '';
            iframe.style.width = '100%';
            // iframe.style.height = clientHeight;
            iframe.style.height = '100%';
        }
    };
    return Modal;
}());

var script_embed_Init = /** @class */ (function () {
    function Init(BotID, userEmail, isTesting) {
        var _this = this;
        if (isTesting === void 0) { isTesting = false; }
        this.BotID = BotID;
        this.userEmail = userEmail;
        this.isTesting = isTesting;
        this.title = document.title;
        this.webchatBody = document.createElement('div');
        this.botID = this.BotID;
        this.customCss = document.createElement('link');
        this.button = document.createElement('div');
        this.popup = document.createElement('div');
        this.popupNoticeCircle = document.createElement('div');
        this.popupBtnClose = document.createElement('span');
        this.popupStyles = document.createElement('style');
        this.settings = defualtSettings;
        this.popupClosed = false;
        this.bindEvent = function (element, eventName, eventHandler) {
            console.log('event listener');
            if (element.addEventListener) {
                element.addEventListener(eventName, eventHandler, false);
            }
            else if (element.attachEvent) {
                element.attachEvent('on' + eventName, eventHandler);
            }
        };
        this.removeButton = function () {
            if (document.getElementById('sntch_button')) {
                document.getElementById('sntch_button').remove();
            }
            if (document.getElementById('sntch_webchat')) {
                document.getElementById('sntch_webchat').remove();
            }
            this.popupClose();
        };
        this.popupClose = function () {
            if (document.getElementById('sntch_popup')) {
                document.getElementById('sntch_popup').remove();
            }
            if (document.getElementById('sntch_popup_circle')) {
                document.getElementById('sntch_popup_circle').remove();
            }
            this.popupClosed = true;
        };
        this.popupTitleNotice = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.popupClosed) {
                    document.title = _this.title;
                    return;
                }
                document.title = '(1) ' + _this.translate.popupTitleNewMessage;
                setTimeout(function () {
                    document.title = _this.title;
                    _this.popupTitleNotice();
                }, 700);
            }, 700);
        };
        this.activatePopup = function () {
            var _this = this;
            if (this.settings.popup.enable && this.settings.popup.message !== '') {
                setTimeout(function () {
                    if (!_this.popupClosed) {
                        document.getElementById('sntch_popup').style.display = 'block';
                        if (_this.settings.popup.circleUnreadMessage) {
                            document.getElementById('sntch_popup_circle').style.display = 'block';
                            var rightOffset = 0;
                            if (_this.webchatBody.offsetLeft !== 0 && _this.webchatBody.offsetWidth !== 0) {
                                rightOffset = window.screen.width - _this.webchatBody.offsetLeft - _this.webchatBody.offsetWidth;
                            }
                            if (_this.settings.popup.position !== 'left') {
                                if (_this.popup.offsetWidth > _this.settings.buttonWidth) {
                                    if ((window.screen.width - (_this.settings.buttonWidth / 2 - 15) +
                                        _this.popup.offsetWidth - rightOffset + 10) < 230) {
                                        _this.webchatBody.style.width = (_this.settings.buttonWidth / 2 - 15) +
                                            _this.popup.offsetWidth - rightOffset + 10 + 'px';
                                    }
                                    else {
                                        _this.webchatBody.style.width = window.screen.width - rightOffset + 'px';
                                        setTimeout(function () {
                                            _this.webchatBody.style.width = (_this.settings.buttonWidth / 2 - 15) + _this.popup.offsetWidth + 10 + 'px';
                                        }, 1);
                                    }
                                }
                                else {
                                    _this.webchatBody.style.width = _this.settings.buttonWidth - rightOffset + 10 + 'px';
                                }
                            }
                            if (_this.settings.popup.position === 'left') {
                                if ((window.screen.width - _this.settings.buttonWidth - rightOffset - 35) < 230) {
                                    _this.webchatBody.style.width = window.screen.width - rightOffset - 10 + 'px';
                                }
                                else {
                                    _this.webchatBody.style.width = window.screen.width - rightOffset + 'px';
                                    setTimeout(function () {
                                        _this.webchatBody.style.width = _this.popup.offsetWidth + _this.settings.buttonWidth + 35 + 'px';
                                    }, 1);
                                }
                            }
                        }
                        _this.popupTitleNotice();
                    }
                }, this.settings.popup.delay * 1000);
            }
        };
        this.initPopup = function name(popup) {
            popup.id = 'sntch_popup';
            popup.style.display = 'none';
            popup.innerText = this.settings.popup.message;
            popup.onclick = this.openPopupWebChat.bind(this);
            this.initPopupStyles(this.popupStyles);
            this.initPopupBtnClose(this.popupBtnClose);
            if (this.settings.popup.circleUnreadMessage) {
                this.initPopupNoticeCircle(this.popupNoticeCircle);
                this.button.appendChild(this.popupNoticeCircle);
            }
            this.popup.appendChild(this.popupBtnClose);
            this.popup.appendChild(this.popupStyles);
        };
        this.initPopupBtnClose = function name(popupBtnClose) {
            popupBtnClose.onclick = this.popupClose.bind(this);
            popupBtnClose.innerHTML = "<svg width=\"10\" height=\"10\" viewBox=\"0 0 2000 2000\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M1490 1245q0 40-24 68l-136 136q-24 24-68 24t-68-28l-294-294-294\n            294q-24 24-68 24t-68-28l-136-136q-24-24-24-68t24-68l294-294-294-294q-24-24-24-68t24-68l136-136q24-24 68-24t68\n            28l294 294 294-294q24-24 68-28t68 28l136 136q28 24 24 68t-24 68l-294 294 294 294q24 24 24 68z\"\n            fill=\"" + (this.settings.popup.btnClosePopupStyle === 'dark' ? '#585858' : '#d4d4d4') + "\"/></svg>\n        ";
        };
        this.initPopupNoticeCircle = function name(popupNoticeCircle) {
            popupNoticeCircle.id = 'sntch_popup_circle';
            popupNoticeCircle.innerHTML = '1';
        };
        this.initPopupStyles = function name(popupStyles) {
            var diffWidthScreen = window.screen.width;
            var popupOverflow = false;
            var rightOffset = 0;
            if (this.webchatBody.offsetLeft !== 0 && this.webchatBody.offsetWidth !== 0) {
                rightOffset = window.screen.width - this.webchatBody.offsetLeft - this.webchatBody.offsetWidth;
            }
            if (this.settings.popup.position === 'left') {
                diffWidthScreen = window.screen.width - this.settings.buttonWidth;
                if (diffWidthScreen - rightOffset - 35 < 195) {
                    popupOverflow = true;
                }
            }
            var positionSettings = {
                right: this.settings.buttonWidth + 25 + 'px',
                bottom: this.settings.buttonHeight / 2 + 'px',
                arrow: {
                    before: {
                        right: '-18px',
                        bottom: '10px'
                    },
                    after: {
                        right: '-15px',
                        bottom: '11px'
                    },
                    border: 'left'
                }
            };
            if (this.settings.popup.position !== 'left' || popupOverflow) {
                positionSettings = {
                    right: this.settings.buttonWidth / 2 - 15 + 'px',
                    bottom: (this.settings.buttonHeight + 25) + 'px',
                    arrow: {
                        before: {
                            right: '19px',
                            bottom: '-18px'
                        },
                        after: {
                            right: '20px',
                            bottom: '-15px'
                        },
                        border: 'top'
                    }
                };
            }
            // this.settings.buttonHeight
            popupStyles.innerHTML = "\n            @media (max-width: 420px) {\n                #sntch_popup {\n                    max-width: " + (this.settings.popup.position === 'left'
                ? (popupOverflow
                    ? (window.screen.width - rightOffset - 20) + 'px'
                    : (diffWidthScreen - rightOffset - 35) + 'px')
                : (window.screen.width - rightOffset - 35) + 'px') + " !important;\n                }\n            }\n            @media (min-width: 421px) {\n                #sntch_popup {\n                    max-width: " + (this.settings.popup.position === 'left' && popupOverflow
                ? (diffWidthScreen - rightOffset > 419 ? '400px' : (window.screen.width - rightOffset - 35) + 'px')
                : (diffWidthScreen - rightOffset > 419 ? '400px' : (diffWidthScreen - rightOffset - 35) + 'px')) + " !important;\n                }\n            }\n\n            #sntch_popup {\n                position: absolute;\n                z-index: 2147483646;\n                right: " + positionSettings.right + ";\n                bottom: " + positionSettings.bottom + ";\n                max-width: 400px;\n                box-shadow: 0 2px 6px 0 rgba(0,0,0,.4);\n                padding: 15px;\n                border-radius: 10px;\n                box-sizing: border-box;\n                background-color: " + this.settings.popup.bgColor + ";\n                color: " + this.settings.popup.textColor + ";\n                margin-left: 10px;\n                cursor: pointer;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n                word-wrap: break-word;\n            }\n            #sntch_popup::before {\n                content: '';\n                position: absolute;\n                right: " + positionSettings.arrow.before.right + ";\n                bottom: " + positionSettings.arrow.before.bottom + ";\n                display: block;\n                border: 9px solid transparent;\n                border-" + positionSettings.arrow.border + ": 9px solid #ccc;\n            }\n            #sntch_popup::after {\n                content: '';\n                position: absolute;\n                right: " + positionSettings.arrow.after.right + ";\n                bottom: " + positionSettings.arrow.after.bottom + ";\n                display: block;\n                border: 8px solid transparent;\n                border-" + positionSettings.arrow.border + ": 8px solid " + this.settings.popup.bgColor + ";\n            }\n\n            #sntch_popup > p {\n                overflow: hidden;\n                word-break: break-word;\n                white-space: pre-line;\n                margin: 0;\n                padding: 0;\n                line-height: 1.1;\n            }\n            " + (isMobile() ? '' : "\n                #sntch_popup > span {\n                    opacity: 0;\n                }\n                #sntch_popup:hover > span {\n                    opacity: 1;\n                }\n            ") + "\n            #sntch_popup > span > svg {\n                width: 15px;\n                height: 15px;\n                position: absolute;\n                top: 2px;\n                left: 2px;\n                cursor: pointer;\n                padding: 7px;\n                margin: -5px;\n                box-sizing: content-box;\n            }\n\n            #sntch_popup > span:hover {\n                opacity: 0.8;\n            }\n\n            #sntch_popup_circle {\n                display: none;\n                position: absolute;\n                right: " + (this.settings.buttonStyle === 'bubble' ? 2 : -8) + "px;\n                top: " + (this.settings.buttonStyle === 'bubble' ? -3 : -8) + "px;\n                font-size: 14px;\n                background-color: #f00;\n                color: #fff;\n                border: 3px solid #fff;\n                padding: 5px;\n                width: 10px;\n                height: 10px;\n                border-radius: 100%;\n                text-align: center;\n                line-height: 12px;\n                font-weight: bold;\n                box-sizing: content-box;\n            }\n        ";
        };
        this.initStylesDiv = function (div) {
            div.style.zIndex = '2147483646';
            div.id = 'sntch_block';
            div.style.position = 'fixed';
            div.style.bottom = '0';
            div.style.right = '0';
            div.style.width = window.screen.width + 'px';
            div.style.height = '5px';
        };
        this.initStylesButton = function (button, hash) {
            button.style.zIndex = '2147483646';
            button.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
            button.style.width = (this.settings.buttonWidth - (this.settings.buttonWidth /4) )   + 'px';
            button.style.height = (this.settings.buttonHeight - (this.settings.buttonHeight /4))  + 'px';
            button.style.color = this.settings.buttonLabelColor;
            button.style.fontSize = this.settings.buttonLabelSize + 'px';
            button.style.fontWeight = this.settings.buttonLabelWeight.toString(10);
            button.style.fontStyle = this.settings.buttonLabelStyle;
            button.style.backgroundColor = this.settings.buttonBgColor;
            // commented out for show popup notice circle
            // button.style.overflow = 'hidden';
            button.style.justifyContent = 'center';
            button.style.alignItems = 'center';
            button.style.display = 'none';
            button.style.cursor = 'pointer';
            button.id = 'sntch_button';
            button.style.position = 'absolute';
            button.style.right = '10px';
            button.style.bottom = '10px';
            button.style.boxSizing = 'border-box';
            button.style.padding = '10px';
            this.initWebchat.bind(this)();
            button.onclick = this.openWebChat.bind(this);
            button.setAttribute('hash', hash);
            if (this.settings.buttonShowIcon) {
                button.style.backgroundImage = 'url(' + this.settings.customImg + ')';
                button.style.backgroundSize = 'cover';
                button.style.backgroundPosition = 'center';
            }
            switch (this.settings.buttonStyle) {
                case 'bubble':
                    button.innerHTML = '';
                    button.style.borderRadius = '50%';
                    break;
                case 'rounded':
                    if (!this.settings.buttonLabel) {
                        this.settings.buttonLabel = '';
                    }
                    button.innerHTML = "<div style=\"overflow: hidden\">" + this.settings.buttonLabel + "</div>";
                    button.style.borderRadius = '10px';
                    break;
                case 'rectangle':
                    if (!this.settings.buttonLabel) {
                        this.settings.buttonLabel = '';
                    }
                    button.innerHTML = "<div style=\"overflow: hidden\">" + this.settings.buttonLabel + "</div>";
                    button.style.borderRadius = '0';
                    break;
                default:
                    break;
            }
        };
        this.initWebchat = function (ev) {
            if (document.getElementById('sntch_webchat')) {
                document.getElementById('sntch_webchat').remove();
            }
            var data = {
                content: '<iframe style="max-width: 100%; width:' + this.settings.width + 'px; height: ' + this.settings.height + 'px; border:0" src="' +
                    WEBCHATHOST + this.settings.hash + (this.isTesting ? '?test=1' : '?test=0') +
                    '&start=' + '&botID=' + this.settings.botID + '&embedScript=1" name="mobile" id="sntch_iframe" allow="microphone">' +
                    '</iframe>',
                draggable: false,
                openCallback: function () { }
            };
            var modal = new Modal(this.settings);
            modal.open(data);
            if (isMobile()) {
                var iframe = document.getElementsByTagName('iframe')[0];
                if (iframe) {
                    iframe.style.height = '100%';
                }
            }
        };
        this.openPopupWebChat = function () {
            if (!document.getElementById('sntch_popup')) {
                return;
            }
            this.openWebChat(this);
        };
        this.openWebChat = function () {
            this.popupClose();
            scrollOptions(true);
            var webchat = document.getElementById('sntch_webchat');
            var iframe = document.getElementById('sntch_webchat').querySelector('iframe');
            webchat.style.transform = 'translateY(0)';
            iframe.contentWindow.postMessage('embed not autoopening start', '*');
        };
        if (!userEmail) {
            userEmail = 'tempID';
        }
        var data = {
            botID: this.BotID,
        };
        if (this.BotID !== 0) {
            xmlhttp.open('POST', HOST + '/webchat/getSettings', true);
            xmlhttp.send(JSON.stringify(data));
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === XMLHttpRequest.DONE) {
                    if (xmlhttp.status === 200 && xmlhttp.responseText.indexOf('<!doctype html>') !== 0) {
                        _this.settings = script_embed_assign(script_embed_assign({}, _this.settings), JSON.parse(xmlhttp.response));
                        getJson.open('GET', WEBCHATHOST + 'webchat/api/getTranslation?lang=' + _this.settings.language, true);
                        getJson.onload = function () {
                            if (getJson.readyState === XMLHttpRequest.DONE && getJson.status === 200) {
                                _this.translate = JSON.parse(getJson.response);
                            }
                        };
                        getJson.send(null);
                        if (_this.settings.deploy === true) {
                            var userAgent = window.navigator.userAgent;
                            if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
                                setTimeout(function () {
                                    document.getElementById('sntch_button').style.display = 'block';
                                    _this.activatePopup();
                                }, 1000);
                            }
                            else {
                                _this.bindEvent(window, 'message', function (e) {
                                    _this.button.style.display = 'flex';
                                    _this.activatePopup();
                                });
                            }
                        }
                    }
                    if (_this.settings.customCSS === '1') {
                        _this.customCss.type = 'text/css';
                        _this.customCss.rel = 'stylesheet';
                        var host = environment.host.split('.');
                        _this.customCss.href = 'https://dvgpba5hywmpo.cloudfront.net/customcss/' + host[0] + _this.BotID + '.css';
                        document.getElementsByTagName('head')[0].appendChild(_this.customCss);
                    }
                    _this.initStylesButton(_this.button, _this.settings.hash);
                    _this.initStylesDiv(_this.webchatBody);
                    _this.initPopup(_this.popup);
                    _this.webchatBody.appendChild(_this.button);
                    _this.webchatBody.appendChild(_this.popup);
                    document.body.appendChild(_this.webchatBody);
                    var userAg = window.navigator.userAgent;
                    if (userAg.match(/Mac/i)) {
                        var previousValue_1 = document.body.style.overflow;
                        document.body.style.overflow = 'hidden';
                        setTimeout(function () {
                            document.body.style.overflow = previousValue_1;
                        }, 2000);
                    }
                    if (_this.settings.popup.enable && _this.settings.popup.message !== '') {
                        _this.bindEvent(window, 'resize', function (e) {
                            if (!_this.popupClosed) {
                                if (document.getElementById('sntch_popup')) {
                                    document.getElementById('sntch_popup').remove();
                                }
                                _this.initPopup(_this.popup);
                                _this.webchatBody.appendChild(_this.popup);
                                document.getElementById('sntch_popup').style.display = 'block';
                                var rightOffset = 0;
                                if (_this.webchatBody.offsetLeft !== 0 && _this.webchatBody.offsetWidth !== 0) {
                                    rightOffset = window.screen.width - _this.webchatBody.offsetLeft - _this.webchatBody.offsetWidth;
                                }
                                if (_this.settings.popup.position === 'left') {
                                    if ((window.screen.width - _this.settings.buttonWidth - rightOffset - 35) < 230) {
                                        _this.webchatBody.style.width = window.screen.width - rightOffset - 10 + 'px';
                                    }
                                    else {
                                        _this.webchatBody.style.width = window.screen.width - rightOffset + 'px';
                                        setTimeout(function () {
                                            _this.webchatBody.style.width = _this.popup.offsetWidth + _this.settings.buttonWidth + 35 + 'px';
                                        }, 1);
                                    }
                                }
                                if (_this.settings.popup.position !== 'left') {
                                    if ((window.screen.width - (_this.settings.buttonWidth / 2 - 15) +
                                        _this.popup.offsetWidth - rightOffset + 10) < 230) {
                                        _this.webchatBody.style.width = (_this.settings.buttonWidth / 2 - 15) +
                                            _this.popup.offsetWidth - rightOffset + 10+ 'px';
                                    }
                                    else {
                                        _this.webchatBody.style.width = window.screen.width - rightOffset + 'px';
                                        setTimeout(function () {
                                            _this.webchatBody.style.width = (_this.settings.buttonWidth / 2 - 15) +
                                                _this.popup.offsetWidth + 10 + 'px';
                                        }, 1);
                                    }
                                }
                            }
                        });
                    }
                }
            };
        }
        else {
            this.removeButton();
        }
    }
    return Init;
}());

function scrollOptions(open) {
    if (isMobile()) {
        var body = document.getElementsByTagName('body')[0];
        if (body) {
            if (open) {
                var overflow = getComputedStyle(body).overflow;
                var overflowY = getComputedStyle(body).overflowY;
                var overflowX = getComputedStyle(body).overflowX;
                if (!!overflow) {
                    Object.assign(bodyDefaultStyles, { overflow: overflow });
                }
                if (!!overflowY) {
                    Object.assign(bodyDefaultStyles, { overflowY: overflowY });
                }
                if (!!overflowX) {
                    Object.assign(bodyDefaultStyles, { overflowX: overflowX });
                }
                body.style.overflow = 'hidden';
            }
            else {
                if (body.style.overflow && body.style.overflow === 'hidden') {
                    body.style.overflow = bodyDefaultStyles.overflow.toString();
                }
                if (body.style.overflowX && body.style.overflowX === 'hidden') {
                    body.style.overflowX = bodyDefaultStyles.overflowX.toString();
                }
                if (body.style.overflowY && body.style.overflowY === 'hidden') {
                    body.style.overflowY = bodyDefaultStyles.overflowY.toString();
                }
            }
        }
    }
}
function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}


/***/ })
/******/ ]);