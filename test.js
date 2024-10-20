let array = [1,2,3,4,5]; 
let obj = {
    a: [1,2,3,4,5], //배열
    b: 'Hello', //속성값
    c: function() {
        let sum = 0;
        for(let key in this.a) {
            sum = sum + this.a[key]; //a안에 있는 거 다 더함.
        }
        return sum;
    }
};

console.log(obj.c());

