const repl = require('repl');

repl.start({
    prompt: "소수 판별 수를 입력하세요. > ",
    eval: (command, context, filename, callback) => {
        let number = Number(command);

        if(isNaN(number)) {
            console.log("숫자가 아닙니다. 다시 입력하세요.");
        }

        let i =2;
        while(true) {
            if(number % i ==0) {
                if(number == i) {
                    console.log("소수입니다.");
                }
                else {
                    console.log("소수 아닙니다.");
                }
                break;
            }
            else {
                i++;
            }
        }

        callback();
    }
});