
let j = 1;

let star = "";

while (j <= 10) {
    let i = 1;
    while (i <= j) {
        star = star + "*";
        i = i + 1;
    }
    star = star + "\n";
    j = j + 1;
}

j = 10;
while (j >= 1) {
    let i = 1;
    while (i <= j) {
        star = star + "*";
        i = i + 1;
    }
    star = star + "\n";
    j = j - 1;
}

console.log(star);