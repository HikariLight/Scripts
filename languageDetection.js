const processText = (text) => {
    return text.split(" ").slice(0, Math.min(text.length, 30));
}

const score = (processedText) => {

    // 30 most common words of each language
    const english = ['as', 'i', 'his', 'that', 'he', 'was', 'for', 'on', 'are', 'with', 'they', 'be', 'at', 'one', 'have', 'this', 'from', 'by', 'hot', 'word', 'but', 'what', 'some', 'is', 'it', 'you', 'or', 'had', 'the', 'of'];
    const french = ['comme', 'je', 'son', 'que', 'il', 'était', 'pour', 'sur', 'sont', 'avec', 'ils', 'être', 'à', 'un', 'avoir', 'ce', 'à', 'par', 'chaud', 'mot', 'mais', 'que', 'certains', 'est', 'il', 'vous', 'ou', 'eu', 'la', 'de'];
    const german = ['wie', 'ich', 'seine', 'dass', 'er', 'war', 'für', 'auf', 'sind', 'mit', 'sie', 'sein', 'bei', 'ein', 'haben', 'dies', 'aus', 'durch', 'heiß', 'Wort', 'aber', 'was', 'einige', 'ist', 'es', 'Sie', 'oder', 'hatte', 'die', 'von'];
    const dutch = ['als', 'i', 'zijn', 'dat', 'hij', 'was', 'voor', 'op', 'zijn', 'met', 'ze', 'zijn', 'bij', 'een', 'hebben', 'deze', 'van', 'door', 'heet', 'woord', 'maar', 'wat', 'sommige', 'is', 'het', 'u', 'of', 'had', 'de', 'van'];
    const spanish = ['como', 'i', 'su', 'que', 'él', 'era', 'para', 'en', 'son', 'con', 'ellos', 'ser', 'en', 'uno', 'tener', 'este', 'desde', 'por', 'caliente', 'palabra', 'pero', 'qué', 'algunos', 'es', 'lo', 'usted', 'o', 'tenido', 'la', 'de'];
    const italian = ['come', 'io', 'il', 'che', 'lui', 'era', 'per', 'su', 'sono', 'con', 'essi', 'essere', 'a', 'uno', 'avere', 'questo', 'da', 'da', 'caldo', 'parola', 'ma', 'cosa', 'alcuni', 'è', 'esso', 'voi', 'o', 'aveva', 'il', 'di'];
    const portuguese = ['como', 'i', 'seu', 'que', 'ele', 'foi', 'para', 'em', 'são', 'com', 'eles', 'ser', 'em', 'uma', 'tem', 'este', 'a', 'por', 'quente', 'palavra', 'mas', 'o', 'alguns', 'é', 'ele', 'você', 'ou', 'teve', 'o', 'de'];

    let result = {
        "english": 1,
        "french": 1,
        "german": 1,
        "dutch": 1,
        "italian": 1,
        "spanish": 1,
        "portuguese": 1
    }

    for(let word of processedText){
        word = word.toLowerCase();

        if(english.includes(word)){
            result["english"] += 1;
        }

        if(french.includes(word)){
            result["french"] += 1;
        }

        if(german.includes(word)){
            result["german"] += 1;
        }

        if(dutch.includes(word)){
            result["dutch"] += 1;
        }

        if(spanish.includes(word)){
            result["spanish"] += 1;
        }

        if(italian.includes(word)){
            result["italian"] += 1;
        }

        if(portuguese.includes(word)){
            result["portuguese"] += 1;
        }
    }

    return result;
}

const detectLanguage = (text) => {
    
    let processedText = processText(text);
    let scores = score(processedText);

    let result = "";
    let max = 0;

    for(let language in scores){
        if(scores[language] > max){
            result = language;
            max = scores[language];
        }
    }

    return result;
}

export { detectLanguage } ;