function solution(numbers) {
    var answer = 0;
    for (i = 0; i < numbers.length; i++) {
        answer = answer + numbers[i] / numbers.length;
    }
    return answer;
}