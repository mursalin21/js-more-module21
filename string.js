//String handling
var name = "Hello, How are you?"

// console.log(name);
// //accessing through numbers
// console.log(name[2]);

//reversing a string

function reverseString(inp){
    let reverse = '';
    for(const letter of inp){
        reverse = letter + reverse;
    }
    return reverse;
}

console.log(reverseString(name));