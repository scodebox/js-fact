function multiply(m, result) {
    let carry = 0;
    for (let i = 0; i < result.length; i++) {
        let temp = (result[i] * m) + carry;
        result[i] = temp % 10;
        carry = Math.floor(temp / 10);
    }

    while (carry) {
        result.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
}

function fact(num) {
    var result = [1];
    for (let i = 2; i <= num; i++) {
        multiply(i, result);
    }

    return result;
}

// result = fact(100);
// for (let i = result.length - 1; i >= 0; i--) {
//     console.log(result[i]);
// }