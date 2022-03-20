/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    let romanNumerals = {
            'M': 1000,
            'D': 500,
            'C': 100,
            'L': 50,
            'X': 10,
            'V': 5,
            'I': 1
    };
    let intValue = 0;
    
    for(let i = 0; i < s.length; i++){
        if(romanNumerals[s[i + 1]] > romanNumerals[s[i]]){
            intValue -= romanNumerals[s[i]];
        }
        else{
            intValue += romanNumerals[s[i]];
        }
    }
    return intValue;
};