const repl = require('repl');

repl.start({
    prompt: "숫자 입력 > ",
    eval: (command, context, filename, callback) => {
        let number = Number(command);

        if(isNaN(number)) {
            console.log("숫자가 아닙니다. 다시 입력하세요.\n");
        }
        else {
            // 여기서 부터 소수를 구하면 된다.
            console.log("1 ");
            for(let i=2; i < number; i++) {
                if(number % i == 0) {
                    if(number == i) {
                        console.log("소수입니다.");
                    } else {
                        console.log("소수가 아닙니다.");
                    }
                }
            
                
            }
            console.log(number+'\n');
        }

        


        callback();
    }
});