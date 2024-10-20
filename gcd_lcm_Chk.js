const { maxHeaderSize } = require('http');
const repl = require('repl');

repl.start({
    prompt: "두 수를 입력하세요.(두 수 간에는 띄어쓰기 해주세요)\n",
    eval: (command, context, filename, callback) => {
        let str = command.split(' ');
        let num1 = Number(str[0]);
        let num2 = Number(str[1]);

        if(isNaN(num1) || isNaN(num2)) {
            console.log("숫자가 아닌 값이 입력되었습니다. 다시 입력하세요.");
        }
        else {
            //여기서부터 알고리즘 시작
            let max = 0;
            let min = 0;
            let rem = 0;   //나머지 변수
            if(num1 > num2) {
                max = num1;
                min = num2;
            }
            else {
                max = num2;
                min = num1;
            }
            rem = max % min;
            while(rem != 0) {
                max = min;
                min = rem;
                rem = max % min;
            }
            console.log(`최대 공약수는 ${min} 입니다.`);
            console.log(`최소공배수는 ${num1 * num2 / min} 입니다.`);
        }

        callback();
    }

});