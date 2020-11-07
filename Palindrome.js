function palindrome(n) {
    lowerWord = n.toLowerCase().replace(/[!? ]+/g, "")
    console.log(lowerWord)
    const reversed = lowerWord.split("").reverse().join("")
    console.log(reversed)
    if (reversed == lowerWord) {
        console.log("'" + n + "'" + ' is a Palindrome!')
    } else {
        console.log('Nope!')
    }
}


palindrome('Do geese see God?!')