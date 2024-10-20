const repl = require('repl');

repl.start({
    prompt: "제곱근 구할 숫자 입력 : ",
    eval: (command, context, filename, callback) => {
        let number = Number(command);

        if(isNaN(number)) {
            console.log("숫자가 아닙니다. 다시 입력하세요.");
        }
        else {
            let root = number / 2;
            while (true) {
                let result = root * root;
                if (result <= number) {
                    break;
                }
                root--;
            }
            console.log("제곱근 : ", Math.round(root * 100) / 100);
        }


        callback();
    }
});