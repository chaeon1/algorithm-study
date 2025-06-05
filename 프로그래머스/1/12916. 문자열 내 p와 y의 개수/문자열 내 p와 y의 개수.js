function solution(s){
    answer = s.toLowerCase().split("p").length === s.toLowerCase().split("y").length;
    return answer;
}