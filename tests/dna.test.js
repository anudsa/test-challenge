function canonDNA(DNA) {
    let stringDNA = '';
    const nucleoBases = ['C','T','A','G'];
    for (let i = 0; i < DNA.length; i++) {
        if (nucleoBases.indexOf(DNA[i]) !== -1) {
        stringDNA += DNA[i];
    }
    }
    return stringDNA;
}

// ejemplo: console.log(canonDNA("C T A asdfG"));