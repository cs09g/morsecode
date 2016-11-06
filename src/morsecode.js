
window.morsecode = window.morsecode || {};

var morsecode = function(langCode) {

	this.morsemap_eng = {
		'A': '.-',
		'B': '-...',
		'C': '-.-.',
		'D': '-..',
		'E': '.',
		'F': '..-.',
		'G': '--.',
		'H': '....',
		'I': '..',
		'J': '.---',
		'K': '-.-',
		'L': '.-..',
		'M': '--',
		'N': '-.',
		'O': '---',
		'P': '.--.',
		'Q': '--.-',
		'R': '.-.',
		'S': '...',
		'T': '-',
		'U': '..-',
		'V': '...-',
		'W': '.--',
		'X': '-..-',
		'Y': '-.--',
		'Z': '--..',

		'.-': 'A',
		'-...': 'B',
		'-.-.': 'C',
		'-..': 'D',
		'.': 'E',
		'..-.': 'F',
		'--.': 'G',
		'....': 'H',
		'..': 'I',
		'.---': 'J',
		'-.-': 'K',
		'.-..': 'L',
		'--': 'M',
		'-.': 'N',
		'---': 'O',
		'.--.': 'P',
		'--.-': 'Q',
		'.-.': 'R',
		'...': 'S',
		'-': 'T',
		'..-': 'U',
		'...-': 'V',
		'.--': 'W',
		'-..-': 'X',
		'-.--': 'Y',
		'--..': 'Z'
	};

	this.morsemap_kor = {
		'ㄱ': '.-..',
		'ㄲ': '.-.. .-..',
		'ㄴ': '..-.',
		'ㄷ': '-...',
		'ㄸ': '-... -...',
		'ㄹ': '...-',
		'ㅁ': '--',
		'ㅂ': '.--',
		'ㅃ': '.-- .--',
		'ㅅ': '--.',
		'ㅆ': '--. --.',
		'ㅇ': '-.-',
		'ㅈ': '.--.',
		'ㅉ': '.--. .--.',
		'ㅊ': '-.-.',
		'ㅋ': '-..-',
		'ㅌ': '--..',
		'ㅍ': '---',
		'ㅎ': '.---',
		"ㄳ": '.-.. --.',
		"ㄵ": '..-. .--.', 
		"ㄶ": '..-. .---',
		"ㄺ": '...- .-..', 
		"ㄻ": '...- --',
		"ㄼ": '...- .--', 
		"ㄽ": '...- --.', 
		"ㄾ": '...- --..',
        "ㄿ": '...- ---', 
        "ㅀ": '...- .---',
		'ㅏ': '.', 
		'ㅑ': '..', 
		'ㅓ': '-',
		'ㅕ': '...', 
		'ㅗ': '.-',
		'ㅛ': '-.',
		'ㅜ': '....', 
		'ㅠ': '.-.',
		'ㅡ': '-..',
		'ㅣ': '..-',
		'ㅔ': '-.--',
		'ㅐ': '--.-',
		'ㅒ': '.. ..-',
		'ㅖ': '... ..-',
		'ㅘ': '.- .',
		'ㅙ': '.- --.-',
		'ㅚ': '.- ..-',
		'ㅟ': '.... ..-',
		'ㅝ': '.... -',
		'ㅞ': '.... .-..',
		'ㅢ': '-.. ..-',

		'.-..': 'ㄱ',
		'.-.. .-..': 'ㄲ',
		'..-.': 'ㄴ',
		'-...': 'ㄷ',
		'-... -...': 'ㄸ',
		'...-': 'ㄹ',
		'--': 'ㅁ',
		'.--': 'ㅂ',
		'.-- .--': 'ㅃ',
		'--.': 'ㅅ',
		'--. --.': 'ㅆ',
		'-.-': 'ㅇ',
		'.--.': 'ㅈ',
		'.--. .--.': 'ㅉ',
		'-.-.': 'ㅊ',
		'-..-': 'ㅋ',
		'--..': 'ㅌ',
		'---': 'ㅍ',
		'.---': 'ㅎ',
		'.-.. --.': "ㄳ",
		'..-. .--.': "ㄵ",
		'..-. .---': "ㄶ",
		'...- .-..': "ㄺ",
		'...- --': "ㄻ",
		'...- .--': "ㄼ", 
		'...- --.': "ㄽ",
		'...- --..': "ㄾ",
        '...- ---': "ㄿ",
        '...- .---': "ㅀ",
		'.': 'ㅏ',
		'..': 'ㅑ',
		'-': 'ㅓ',
		'...': 'ㅕ',
		'.-': 'ㅗ',
		'-.': 'ㅛ',
		'....': 'ㅜ',
		'.-.': 'ㅠ',
		'-..': 'ㅡ',
		'..-': 'ㅣ',
		'-.--': 'ㅔ',
		'--.-': 'ㅐ',
		'.. ..-': 'ㅒ',
		'... ..-': 'ㅖ',
		'.- .': 'ㅘ',
		'.- --.-': 'ㅙ',
		'.- ..-': 'ㅚ',
		'.... ..-': 'ㅟ',
		'.... -': 'ㅝ',
		'.... .-..': 'ㅞ',
		'-.. ..-': 'ㅢ'
	};

	this.morsemap_num = {
		'1': '.----',
		'2': '..---',
		'3': '...--',
		'4': '....-',
		'5': '.....',
		'6': '-....',
		'7': '--...',
		'8': '---..',
		'9': '----.',
		'0': '-----', 

		'.----': '1',
		'..---': '2',
		'...--': '3',
		'....-': '4',
		'.....': '5',
		'-....': '6',
		'--...': '7',
		'---..': '8',
		'----.': '9',
		'-----': '0'
	};

	this.koreanConsonants = [
		"ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
	];

	this.koreanInitSound = [
		"ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
	];

	this.koreanMidSound = [
		"ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ" 
	];

	this.koreanLastSound = [
		"", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
	];

	var _requeststr;
	
	this._getRequestStr = function() {
		return _requestStr;
	};

	this._setRequestStr = function(str) {
		_requestStr = str;
	};

};

morsecode.prototype = {
	encode: function(str) {
		
		var result = '';
		for (var i = 0, len = str.length; i < len; i++) {
			if (i !== 0) {
				result += ' ';
			}
			str = str.toUpperCase();
			if (str[i] >= 'A' && str[i] <= 'Z') { // English

				result += this.morsemap_eng[str[i]];

			} else if (str[i] >= '0' && str[i] <= '9') { // Integer

				result += this.morsemap_num[str[i]];

			} else { // Other characters

				// To make sure letter starts
				if (i !== 0) {
					result += ' ';
				}

				var charAt = str[i].charCodeAt(0);

				// KOREAN
				if (charAt >= 12593 && charAt <= 55203) { // 'ㄱ' ~ '힣'
					charAt = str[i].charCodeAt(0) - '가'.charCodeAt(0);

					var init, mid, last;
					last = charAt % 28;
					mid = (charAt - last) / 28 % 21;
					init = ((charAt - last) / 28 - mid) / 21;
					
					init = this.koreanInitSound[init];
					if (this.morsemap_kor[init]) {
						result += this.morsemap_kor[init];

						mid = this.koreanMidSound[mid];
						if (this.morsemap_kor[mid]) {
							result += ' ' + this.morsemap_kor[mid];
						}

						last = this.koreanLastSound[last]; 
						if (this.morsemap_kor[last]) {
							result += ' ' + this.morsemap_kor[last];
						}

					} else { // 초성/중성/종성이 조합된 형태가 아닐 경우 분리하지않은 원래 문자를 바로 찾는다

						result += this.morsemap_kor[str[i]];
					
					}

				} else {
					result += str[i];
				}

			}
			
		}
		return result;
	},

	decode: function(str, type) {
		var str = str.split(' ');
		var sounds = '';
		var result = '';
		if (type === null || type === undefined) {
			type = 'eng';
		}

		if (type === 'kor') {
			// translate each sound from letter
			var prev = '';
			var combined = '';
			var translated = '';
			var i, j;

			for (i = 0, len = str.length; i < len; i++) {
				if (str[i] === '') {
					sounds += ' ';
				}

				// str[i], prev: morsecode
				if (this.koreanConsonants.indexOf(this.morsemap_kor[str[i]]) !== -1 &&
					this.koreanConsonants.indexOf(this.morsemap_kor[prev]) !== -1) {

					var combinatedConsonant = prev + ' ' + str[i];
					combined = true;
					translated = this.morsemap_kor[combinatedConsonant] || str[i];

				} else {
					translated = this.morsemap_kor[str[i]] || str[i];
				}

				if (combined) {
					sounds = sounds.substr(0, sounds.length - 1) + translated + sounds.substr(sounds.length - 1 + translated.length);
					combined = false;

				} else {
					sounds += translated;
				}

				prev = str[i];
			}

			// making a complete letter from sounds
			sounds = sounds.replace(/  /g, ' ').split(' ');
			
			for (i = 0, str_len = sounds.length; i < str_len; i++) {
				var letter = sounds[i];

				if (letter) {
					var initIdx = 0, midIdx = 0, lastIdx = 0;

					
					if (letter[0]) {
						initIdx = this.koreanInitSound.indexOf(letter[0]);
					}

					if (letter[1]) {
						midIdx = this.koreanMidSound.indexOf(letter[1]);
					}

					if (letter[2]) {
						lastIdx = this.koreanLastSound.indexOf(letter[2]);
					}

					result += String.fromCharCode('가'.charCodeAt(0) + initIdx * 21 * 28 + midIdx * 28 + lastIdx);

				} else {
					result += ' ';
				}
			}

		} else {
			for (var i = 0, len = str.length; i < len; i++) {
				if (this.morsemap_eng[str[i]]) {
					result += this.morsemap_eng[str[i]];
				} else {
					result += ' ';
				}
			}
		}

		result = result.replace(/\s+/g, ' ');
		return result;
	},

};

