class Testing {
    stringLength (myString) {
        if(myString.length === 0) {
            return "At least one char";
        }
        else if (myString.length > 10) {
            return "Not more than 10 char";
        }
        else return myString.length;   
    }

    reversString(myString) {
        let newstring = [];
        for(let x=myString.length-1; x >= 0; x--){
            newstring.push(myString[x]);
        }
        
        return newstring.join('');
    }


}
module.exports = Testing;