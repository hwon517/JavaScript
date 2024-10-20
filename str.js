const repl = require('repl');

class myStr {
    str_arr;  // 문자열을 배열로 변환해서 저장할 멤버변수

    constructor(str) {
        // 생성자 함수
        // 문자열을 받아서 배열로 변환하여 멤버변수에 저장
        this.str_arr = str.split('');
    }
    convert() {
        // 대소문자를 바꿔주는 메소드
        //console.log(this.str_arr);  //배열로 나오는지

        let _str = '';
        for(let i = 0; i < this.str_arr.length; i++) {
            if(this.str_arr[i] >= 'A' && this.str_arr[i] <= 'Z') {
                // 해당 문자는 대문자다.
                _str += this.str_arr[i].toLowerCase();
            }
            else if(this.str_arr[i] >= 'a' && this.str_arr[i] <= 'z') {
                // 해당 문자는 소문자다.
                _str += this.str_arr[i].toUpperCase();
            }
            else {
                // 해당 문자는 대문자도 아니고, 소문자도 아니다.
                _str += this.str_arr[i];
            }
            
        }
        return _str;
    }
}

repl.start({
    prompt: "대소문자로 변경시킬 문자열 입력 : ",
    eval: (command, context, filename, callback) => {
        let str_conv = new myStr(command);

        console.log(str_conv.convert());

        callback();
    }
});