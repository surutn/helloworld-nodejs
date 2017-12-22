const log = require('./logcommon');

function add(a,b){
    log('add',a,b);
    return a+b;
}

function add1(a){
    return add(a, 1);
}

log(add1(8));