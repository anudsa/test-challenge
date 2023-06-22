const canonDNA=require('../dna')

test('Filtra letras no canónicas',()=>{
    expect(canonDNA("C T A asdfG")).toBe("CTAG");
});
test('Manda cadena vacía',()=>{
    expect(canonDNA("")).toBe("");
});