function solution(n) {
    const MOD = 1234567;
    const fib = [0, 1];  // F(0), F(1)

    for (let i = 2; i <= n; i++) {
        fib[i] = (fib[i - 1] + fib[i - 2]) % MOD;
    }

    return fib[n];
}