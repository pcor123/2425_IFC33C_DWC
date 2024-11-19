// String: una mosca volava per la llum

var lletra = "una mosca volava per la llum"; 
var vocals = "aeiou"; 

// la funcio .replace() permet substituir una cadena per una altra

console.log(lletra);
console.log('---');
a = lletra.replace(/[aeiou]/g, vocals[0]); 
console.log(a);
console.log('---');
e = lletra.replace(/[aeiou]/g, vocals[1]);
console.log(e);
console.log('---');
i = lletra.replace(/[aeiou]/g, vocals[2]);
console.log(i);
console.log('---');
o = lletra.replace(/[aeiou]/g, vocals[3]);
console.log(o);
console.log('---');
u = lletra.replace(/[aeiou]/g, vocals[4]);
console.log(u);


