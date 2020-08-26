function Alpha(){}

Alpha.prototype.isAlpha = function(letter){
    return /^[a-zA-Z]$/.test(letter);
};

function Vowel(){}
Vowel.prototype = new Alpha();
Vowel.prototype.constructor = Vowel;

Vowel.prototype.isVowel = function(letter){
    return /^[aeiuoyAEIOUY]$/.test(letter);
};


function Consonant(){}
Consonant.prototype = new Alpha();
Consonant.prototype.constructor = Consonant;

Consonant.prototype.isConsonant = function(letter){
    return /^[^aeiouyAEIOUY]$/.test(letter);
}


function processData(input) {
    var a = new Alpha();
    console.log(`'${input[0]}' is ${a.isAlpha(input[0])? ``: `not `}a letter.`);
    
    var b = new Vowel();
    console.log(`'${input[1]}' is ${b.isAlpha(input[1])? `a letter ${b.isVowel(input[1])? `and`: `but not`} a vowel.`: "not a letter."} `);
    
    var c = new Consonant();
    console.log(`'${input[2]}' is ${c.isAlpha(input[2])? `a letter ${c.isConsonant(input[2])? `and`: `but not`} a consonant.`: "not a letter."} `);
    
} 
var a = new Alpha();
// console.log(a.isAlpha("A"));
if(true){
    console.log("A is "+ a.isAlpha("A")+" ? : not a letter" );
}else{
    console.log("gagal");
}
var b = new Vowel();
// console.log(b.isVowel("e"));
if(true){
    console.log("e is "+ b.isVowel("e")+" ? : not a letter"+ b.isVowel("e"));
}else{
    console.log("gagal");
}
var c = new Consonant();
// console.log(c.isConsonant("r"));
if(true){
    console.log("r is "+c.isConsonant("r")+" a letter " + c.isConsonant("r")+ " and: but not a consonant: not a letter.");
}else{
    console.log("gagal");
}