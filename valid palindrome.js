/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;


    while(i < j ) {

            while(i < j && (alp.indexOf(s[i].toUpperCase()) === -1 && num.indexOf(s[i]) === -1)) {
                i++;
            }
           while(i < j && (alp.indexOf(s[j].toUpperCase()) === -1 && num.indexOf(s[j]) === -1)) {
                j--;
            }
            if(s[i].toUpperCase() !== s[j].toUpperCase()) {

                return false;
            }


        i++;
        j--;
        }


    return true;
};

var alp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = ['1','2','3','4','5','6','7','8','9','0'];