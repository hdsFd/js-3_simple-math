function simpleMath(a, b) {
    return {
        sum: Number(a) + Number(b),
        sub: Number(a) - Number(b),
        mult: Number(a) * Number(b),
        division: Number(a) / Number(b),
        resultMessage() {
            return {
                sum: `${a}+${b}=${this.sum}`,
                sub: `${a}-${b}=${this.sub}`,
                mult: `${a}*${b}=${this.mult}`,
                division: `${a}/${b}=${this.division}`,
            }
        }
    }
}

const firstNumb = prompt("Please, enter the first number to math operation.");
if (!isNaN(firstNumb) && firstNumb !== "" && firstNumb !== null) {
    const secondNumb = prompt("Now the second number.");
    if (!isNaN(secondNumb) && secondNumb !== "" && secondNumb !== null) {
        alert(simpleMath(firstNumb, secondNumb).resultMessage().sum + "\n" +
            simpleMath(firstNumb, secondNumb).resultMessage().sub + "\n" +
            simpleMath(firstNumb, secondNumb).resultMessage().mult + "\n" +
            simpleMath(firstNumb, secondNumb).resultMessage().division)
    } else if (secondNumb === null) {
        alert("Operation was canceled.")
    } else {
        alert("Operation is not possible. Try again by entering numbers.");
    }
} else if (firstNumb === null) {
    alert("Operation was canceled.")
} else {
    alert("Operation is not possible. Try again by entering numbers.");
}
