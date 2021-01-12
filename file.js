// First Question

// String to number converter
function converter(str) {
    let num = 0;
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (Math.floor(str[i]).toString() !== "NaN") {
            arr.push(str[i])
        } else {
            if (arr.length === 0) {
                return 0
            } else {
                return Math.floor(arr.join(''))
            }
        }
    }
    return Math.floor(arr.join(''))
}

// Call the function with input
console.log(converter("12a"))

//   ------------------------------------------------

// Second Question
// Answer
This will throw error: Cannot set property 'onclick' of null
Because JavaScript code which deals with DOM elements has to be executed only after the DOM is loaded.So it can be fixed by using window.onload() function.
