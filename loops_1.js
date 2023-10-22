function mediaAritmetica(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    let rezultat = suma / arr.length;
    return rezultat
}

console.log(mediaAritmetica([23, 45, 67, 89, 10]))
