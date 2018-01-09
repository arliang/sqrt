var newSqrt;
(function (newSqrt) {
    // --- start ---
    var SQR_MAP = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
    var set = {
        parts: [],
        roots: [],
        remainders: [],
        index: -1,
        reducers: [],
        origin_number: 0
    };
    function getParts() {
        var result = [], tmp = set.origin_number;
        var i = 100;
        while (tmp > 0) {
            result.unshift(tmp % i);
            tmp = Math.floor(tmp / i);
        }
        return result;
    }
    function getFirstRoot() {
        var num = set.origin_number;
        for (var i = SQR_MAP.length - 1; i > -1; i--) {
            if (num >= SQR_MAP[i]) {
                return i;
            }
        }
        return 0;
    }
    function tryRoot() {
    }
    function getPreRoot() {
        return parseFloat(set.roots.join(''));
    }
    function getDivider() {
    }
})(newSqrt || (newSqrt = {}));
