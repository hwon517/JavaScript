let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.insert = function(idx, ...elements) {
    console.log(arguments.length); // 함수로 전달된 인자의 개수
    console.log(arguments[0]); // 첫번째 인자 값
    console.log(arguments[1]); // 두번째 인자 값 
    console.log(arguments[2]); // 세번째 인자 값 

    let i = this.length + elements.length - 1;
    while (i >= idx + elements.length) {
        this[i] = this[i - elements.length];
        i--;
    }
    for (let j = 0; j < elements.length; j++) {
        this[idx + j] = elements[j];
    }
};

array.insert(3, 10, 11, 12);
console.log(array); 
// [1, 2, 3, 10, 11, 12, 4, 5, 6, 7, 8, 9]
