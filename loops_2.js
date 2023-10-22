function sum(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            suma += arr[i];
        }
    }
    return suma;
}

console.log(sum([87, 67, "masa", true]))