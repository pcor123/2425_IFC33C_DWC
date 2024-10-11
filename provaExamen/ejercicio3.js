function comprovarAnagrama(texto1, texto2) {
    let resultat=false;

    texto1=texto1.split("").sort().join("");
    console.log(texto1);
    texto2=texto2.split("").sort().join("");
    console.log(texto2);

    if(texto1===texto2){
        resultat=true;
    }

    return resultat;
}
console.log(comprovarAnagrama("ana", "naa"));
console.log(comprovarAnagrama("ana", "ana"));
console.log(comprovarAnagrama("ana", "nan"));
console.log(comprovarAnagrama("ana", "anana"));
console.log(comprovarAnagrama("Ana", "ana"));
console.log(comprovarAnagrama("Ana", "anA"));
console.log(comprovarAnagrama("Ana", "AnA"));