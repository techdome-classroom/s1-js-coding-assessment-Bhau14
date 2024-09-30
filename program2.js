function romanToInt(s) {
    // Define Roman numeral values
    const romanValues = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Loop through each character in the string from left to right
    for (let i = s.length - 1; i >= 0; i--) {
        let currentValue = romanValues[s[i]];

        // If the current value is less than the previous value, subtract it
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            // Otherwise, add it to the total
            total += currentValue;
        }

        // Update previous value for next iteration
        prevValue = currentValue;
    }

    return total;


console.log(romanToInt("XXVII"));
console.log(romanToInt("MMMCMXCIX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("III"));
console.log(romanToInt("X"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("MMMCMXCIX"));

console.log(romanToInt(""));
}
