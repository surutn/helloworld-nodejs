const log = require('./logcommon');
const log2 = require('./logcommon2');

function add(a,b){
    log.log('add',a,b);
    return a+b;
}

function add1(a){
    return add(a, 1);
}

log.log(add1(8));
log.log3(add1(9));
log2.log2(add1(10));