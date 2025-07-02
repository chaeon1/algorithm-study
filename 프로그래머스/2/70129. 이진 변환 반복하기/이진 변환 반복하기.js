function solution(s) {
    let count = 0;
    let zeroCount = 0;

    while (s !== "1") {
        let originalLength = s.length;
        
        s = s.replace(/0/g, "");
        let removedZeros = originalLength - s.length;
        zeroCount += removedZeros;
        
        let length = s.length;
        s = length.toString(2);

        count++;
    }

    return [count, zeroCount];
}
