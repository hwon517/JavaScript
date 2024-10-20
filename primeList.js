const repl = require('repl');
const fun_obj = require('./myFunctionCollect'); // ./ : 현재 프로그램과 같은 위치에 존재 // 개체화시킨 function이름 :fun_obj

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
                if(fun_obj.prime_discrm(i)) {  
                    prime_arr[arr_idx++] = i;
                }
            }
            let prime_sum = fun_obj.arr_sum(prime_arr); 
            console.log(number + "까지의 소수들의 총합은 " + prime_sum + "입니다.");
        }

        callback();
    }
});