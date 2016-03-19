/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var pat = pattern.split("");
    
    str = str.split(" ");
    var map = {};
    var container = [];
    
    if (pat.length!==str.length) {
        return false;
    }
    
    for (var i =0; i<pat.length; i++) {
        if (map[pat[i]]) {
            if (map[pat[i]]!==str[i]) {
                return false;
            }
        } else {
            if (!container.some(function(item) {return item===str[i];})) {
                map[pat[i]] = str[i];
                container.push(str[i]);
            } else {
                return false;
            }
        }
    }
    return true;
    
};