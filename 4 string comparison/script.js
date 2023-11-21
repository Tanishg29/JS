const string1Input = document.getElementById("string1");
const string2Input = document.getElementById("string2");
const compareButton = document.getElementById("compareButton");
const resultDisplay = document.getElementById("result");



function compareStrings() {
    const string1 = string1Input.value;
    const string2 = string2Input.value;

    const localeCompareResult = string1.localeCompare(string2) === 0;

    const strictEqualityResult = string1 === string2;

    const equality = string1 == string2 ;

    const lengthComparison = string1.length === string2.length;

    const lowercaseComparison = string1.toLowerCase() === string2.toLowerCase();

    resultDisplay.innerHTML = `
        <p>Comparison using localeCompare: ${localeCompareResult}</p>
        <p>Comparison using strict equality (===): ${strictEqualityResult}</p>
        <p>Comparison based on length: ${lengthComparison}</p>
        <p>Comparison after converting to lowercase: ${lowercaseComparison}</p>
        <p>Comparison using equality (==): ${equality}</p>
    `;
}

