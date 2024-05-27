let str = "";

for (let j = 1; j <= 10; j = j + 1) {
    for (let i = 1; i <= j; i = i + 1) {
        str = str + "*";
    }
    str = str + "\n";
}

console.log(str);
    
