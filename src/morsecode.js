
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
		'Z': '--..'
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
		'ㅢ': '-.. ..-'
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
		'0': '-----'
	};

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
					charAt = str[i].charCodeAt(0) - 0xAC00;

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


};

