/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var low=0;
    var high=s.length-1;
    while(low<=high){
        console.log(low+"->"+high)
        var temp=s[low];
        s[low]=s[high];
        s[high]=temp;
        low++;
        high--;
    }
    return s;
    
};