const repl = require('repl');

function prime_discrm(number) {
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

function arr_sum(arr) {
    let sum = 0;
    for(let i in arr) { //for in문
        sum = sum + arr[i];
    }
    return sum;
}

repl.start({
    prompt: "마지막수 입력 : ",
    eval: (command, context, filename, callback) => {
        let number = Number(command);

        if(isNaN(number)) {
            console.log("숫자가 아닙니다. 다시 입력하세요.");
        }
        else {
            let prime_arr = []; //배열 만들기
            let arr_idx = 0; //배열의 인덱스 0부터 시작.
            
            for(let i = 2; i <= number; i++) {
                if(prime_discrm(i)) {
                    prime_arr[arr_idx++] = i;
                }
            }
            let prime_sum = arr_sum(prime_arr);
            console.log(number + "까지의 소수들의 총합은 " + prime_sum + "입니다.");
        }

        callback();
    }
});