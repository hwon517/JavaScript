const repl = require('repl');

repl.start({
    prompt: "소인수분해 할 수를 입력하세요. > ",
    eval: (command, context, filename, callback) => {
        let p = Number(command);

        let d =2;
        while(true) {
            if(p % d == 0) {
                console.log("p")
                if(p == 1) {
                    console.log("소인수분해 끝")
                }
                else {
                    for (p % d == p);
                }
                break;
            }
            else {
                d++;
            }
        }

        callback();
    }
});