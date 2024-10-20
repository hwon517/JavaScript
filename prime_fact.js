const repl = require('repl');

repl.start({
    prompt: "소인수분해 할 숫자를 입력 : ",
    eval: (command, context, filename, callback) => {
        let number = Number(command);

        if(isNaN(number)) {
            console.log("숫자가 아닙니다. 다시 입력하세요.");
        }
        else {
            let div_num = 2;     // 나누는 수
            while(number > 1) {    // number != 1 도 가능.
                let rem_num = number % div_num; // 나머지 구하기
                if(rem_num) {
                    div_num++;
                }
                else {
                    console.log(div_num);
                    number = number / div_num;
                    div_num = 2;
                }

            }
        }

        callback();
    }
});