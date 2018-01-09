/*
      __5__4._1__9___      5 firstRoot
    .| 29 37               parts
     __25___________       reducer
  104|  4 37               4 remainder  37 parts[1]
100+4|__4_16________       100 divider  +4 tryRoot
  1081|   21 00            divider root * 20
1080+1|___10_81_____
  10829|  10 19 00
 0820+9|___9_74_61__
            44 39
*/
console.assert = console.assert || (function (b, msg) { return !b ? console.error(msg) : undefined; });
var sqrtMap = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
function splitNumIntoParts(num) {
    var result = [], tmp = num;
    var i = 100;
    while (tmp > 0) {
        result.unshift(tmp % i);
        tmp = Math.floor(tmp / i);
    }
    return result;
}
function getFirstRoot(num) {
    for (var i = sqrtMap.length - 1; i > -1; i--) {
        if (num >= sqrtMap[i]) {
            return i;
        }
    }
}
function getRoot(roots, parts, remainders, i) {
    if (i == 0) {
        return getFirstRoot(part);
    }
    var root = roots[i];
    var part = parts[i];
    var remainder = getRemainder(roots, parts, i - 1)
    var divider = root * 20;
    var result = Math.floor(remainder / divider);
    divider += result;
    console.log(remainder)
    if (divider * result > remainder) {
        result -= 1;
    }
    return result;
    
}
function getRemainder(roots, parts, i) {
    var root = roots[i];
    if (i == 0) {
        return parts[i] - root * root;
    }
    else {
        return roots[i - 1] * 100 + parts[i] - root * 20;
    }
}
function main(num) {
    var i = 0;
    var roots, parts, remainders;
    parts = splitNumIntoParts(num);
    roots = [getFirstRoot(parts[i])];
    remainders = [getRemainder(roots, parts, i)];
    while (++i < parts.length) {
      roots.push(getRoot(roots, parts, remainders, i))
      remainders.push(getRemainder(roots, parts,i))
    }
    return roots
}

function test() {
    console.log(splitNumIntoParts(123456789));
    for (var i = 0; i < 100; i++) {
        console.assert(getFirstRoot(i) == Math.floor(Math.sqrt(i)));
    }
    var root = main(123)
    console.log(root)
}
test()