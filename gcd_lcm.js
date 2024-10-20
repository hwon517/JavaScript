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
            while(num1 > num2) {
                let rem_num = num1 % num2;
                if(num1 % num2 == 0) {
                    let gcd = num2;
                    let lcm = (num1 * num2) / gcd;
                    console.log("최대공약수: ,gcd");
                    console.log("최소공배수: ,lcm");
                }
                else {
                    let num1 = num2;
                    let rem_num = num2;
                } 
            }


        }

        

        callback();
    }
});