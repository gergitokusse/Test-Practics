class capitalization {
    captalize(myString) {
        return myString.charAt(0).toUpperCase() + myString.slice(1);;
    }
}

module.exports = capitalization;