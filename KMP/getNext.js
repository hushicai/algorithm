

function getNext(p = '') {
    const next = [];
    const len = p.length;

    next[0] = -1;

    // 前缀: 0..k-1
    let k = - 1;
    // 后缀：j-k..j-1
    let j = 0;

    while (j < len) {
        if(k == -1 || p[k] == p[j]) {
            ++j;
            ++k;
            next[j] = k;
            // 当p[j] != s[i] 时，下次匹配必然是p[ next[j] ]跟s[i]匹配，如果p[j] = p[ next[j] ]，必然导致后一步匹配失败
            // if (p[k] !== p[j]) {
            //     next[j] = k;
            // } else {
            //     next[j] = next[k];
            // }
        } else {
            k = next[k];
        }
    }

    return next;
}

module.exports = getNext;