const repl = require('repl');

repl.start({
    prompt: "숫자 입력 : ",
    eval: (command, context, filename, callback) => {
    try {
        let number = Number(command);
        if(isNaN(number)) {
            throw new Error('숫자가 아닙니다.'); //여기서 예외 발생, new: 객체 생성 연산자
        }
        else {
            if(number %2 ==0)
                console.log(number);
            else
                throw new Error('짝수가 아닙니다.'); //여기서 예외 발생
        }
    }
    catch(exception) {
        console.log(exception.message);
    }
    finally {
        callback();
    }
});