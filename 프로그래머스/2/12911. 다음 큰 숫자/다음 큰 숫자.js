function solution(n) {
    const countOnes = (num) => num.toString(2).split('1').length - 1;

    let target = countOnes(n);
    let next = n + 1;

    while (true) {
        if (countOnes(next) === target) {
            return next;
        }
        next++;
    }
}
