function fibonnaci(number) {
    let n1 = 1;
    let n2 = 1;
    const arr = [n1, n2];
    for (let i = 0; i <= number; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        arr.push(nextTerm);
    }
    return arr;
}

console.log(fibonnaci(20))