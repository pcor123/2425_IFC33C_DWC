
let arr=[]
max=5;
min=0;
 

/*** 
for(i=0;i<15;i++){
    let numRandom = Math.floor(Math.random()*(max-min+1))+min
    arr.push(numRandom)
}

console.log(arr)

for (let i = 0; i < arr.length; i++) {
    let numAsterisco = arr[i];
    console.log('*'.repeat(numAsterisco)); // Repetir el asterisco numAsterisco veces
}

*/

for(i=0;i<15;i++){
    let numRandom = Math.floor(Math.random()*(max-min+1))+min
    arr.push(numRandom)
    console.log(numRandom)
    console.log('*'.repeat(numRandom))
}

console.log(arr)
