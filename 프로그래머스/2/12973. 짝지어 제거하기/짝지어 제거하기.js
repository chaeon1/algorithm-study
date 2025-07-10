function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        if (stack.length > 0 && stack[stack.length - 1] === current) {
            stack.pop();
        } else {
            stack.push(current);
        }
    }

    return stack.length === 0 ? 1 : 0;
}
