// https://www.cnblogs.com/zjl192628928/p/9552949.html
const getNext = require('./getNext');

(function() {
    const p = '01010101010';
    const next = getNext(p);
    const len = p.length;
    const nextLen = next[len];
    const cycleLen = len - nextLen;
    const result = [];
    for(let i = 0; i < cycleLen; i++) {
        result.push(p[i]);
    }
    console.log('最小循环节: ' + result.join(''))
})();