let str = "javascript";
let output = "";

for (let i = str.length - 1; i >= 0; i--) {
  output = output + str.charAt(i);
}

console.log(output);
