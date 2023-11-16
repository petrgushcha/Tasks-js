const string ="ПрИвет! Как дела";

const vowles = ["у", "У", "е", "Е", "ы", "Ы", "а", "А", "о", "О", "э", "Э", "ё", "Ё", "е", "Е", "и",]

const getVowles = stringToFilter =>{
    let extractedVowles="";

    for(let i=0; i< stringToFilter.length; i++) {
        const currentLetter =stringToFilter[i].toLowerCase();

        if(vowles.includes(currentLetter)){
            extractedVowles += currentLetter;
        }
    }

    return extractedVowles;
}

console.log(getVowles(string))