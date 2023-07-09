// function countVowels(text) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     const lowerCaseText = text.toLowerCase();
//     for (let char of lowerCaseText) {
//         if (vowels.includes(char)) {
//             count = count + 1;
//         }
//     }
//     return count;
// }

function countVowels(text) {
    const vowels = "aeiou";
    return Array.from(text.toLowerCase()).reduce((count, char) => {
        if (vowels.includes(char)) {
            count++;
        }
        return count;
    }, 0);
}

console.log(countVowels("Harry potter"));
