# Morsecode
This is morsecode translator for English, Korean, Numbers.

It seems quite easy to translate English and Numbers but Korean. 
Korean letter is composed with initial sound(cho-sung, 초성), middle sound(joong-sung, 중성), last sound(jong-sung, 종성). So when it is being encoding, it should be seperated each sound and when it is being decoding, it should be combining back for complete letter. 

###Here is a reference:

1. each sound:
  * initial sound
    - "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
  * middle sound
    - "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"
  * last sound(it can be empty)
    - "", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
 
2. letters:
  * initial sound + middle sound
    - "가", "까", ..., "개", "깨", ..., "희", "히"
  * initial sound + middle sound + last sound
    - "각", "깍", ..., "객", "깩", ..., "힢", "힣"
  * combination table:
    
    |ㄱ   |   |   |   |   |   |   |   |   |   |
    |---|---|---|---|---|---|---|---|---|---|
    |가   |각   |갂   |간   | ...  |   |   |   |   |갛   |
    |개   |객   |갞   |갠   |   |   |   |   |   |갷   |
    |...   |   |   |   |   |   |   |   |   |   |
    |   |   |   |   |   |   |   |   |   |   |
    |   |   |   |   |   |   |   |   |   |   |
    |   |   |   |   |   |   |   |   |   |   |
    |   |   |   |   |   |   |   |   |   |   |
    |긔   |긕   |긖   |긘   |   |   |   |   |   |긯   |
    |기   |긱   |긲   |긴   |   |   |   |   |   |깋   |
    x 19 (fo all initial sound)

###Encoding process:

1. Getting unicode
  * charCodeAt(0) returns Unicode of a letter
2. Calculating index of each sound from unicode
  * Refer to the reference above, the number of possible Korean letter is 19(initial) * 21(middle) * 28(last) and all possible letters are sequantially placed from the initial Korean letter "가" which is composed by "ㄱ"(initial) + "ㅏ"(middle) + ""(last). 
    * Last sound: The last sound must be a remainder by 28 because the number of last sound is 28.
    * Middle sound: To get next sound, minus the result of last sound from unicode of the letter. And then divide by 28 to consider about middle sound. After that getting remainder by 21.
    * Initial sound: Same with middle sound until dividing by 28. Minus middle sound to calculate left initial sound. And then divide by 21.
  
3. Returning matching morsecode from morsecode map
  * Find the letter using the indexes from *each sound* array

###Decoding process:
