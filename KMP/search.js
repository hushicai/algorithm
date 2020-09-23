// https://blog.csdn.net/v_JULY_v/article/details/7041827

const getNext = require('./getNext');

// 时间复杂度`O(slen+plen)`
function search(s, p) {
    const next = getNext(p);
    let i = 0;
    let j = 0;
    let slen = s.length;
    let plen = p.length;

    while(i < slen && j < plen) {
        if (j === -1 || s[i] == p[j]) {
            ++i;
            ++j;
        } else {
            j = next[j];
        }
    }

    if (j === plen) {
        return i - j;
    }
    return -1;
}

console.log(search('abacababc', 'abab'));