const myFunObj = {}; //개체명

// 소수판별 함수
myFunObj.prime_discrm = function(number) {
    let div_num = 2;

    while(number % div_num) {
        div_num++;
    }

    if(number == div_num) {
        return true;
    }
    else {
        return false;
    }
}

// 배열의 총합을 구하는 함수
myFunObj.arr_sum = function(arr) {
    let sum = 0;
    for(let i in arr) { //for in문
        sum = sum + arr[i];
    }
    return sum;
}

module.exports = myFunObj; //myFunObj 개체 내보냄.