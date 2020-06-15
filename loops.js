let array=[]

function forLoop(array){
<<<<<<< HEAD
  for(let i=0; i<25; i++){
    if (i===1) {
=======
  for(let i = 0; i < 25; i++){
    if (i === 1) {
>>>>>>> f3724e019bacf6705e582991aa3254404d34e8fb
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}
<<<<<<< HEAD

function whileLoop(number){
  while(number>0){
    console.log(number--)
  }
  return "done"
}

function doWhileLoop(num){
 let i=0
 
 function incrementVariable(){
   i++
   return i;
 }
 
 do{
   console.log("I run once regardless.")
 } while (incrementVariable()<num)
}
=======
>>>>>>> f3724e019bacf6705e582991aa3254404d34e8fb
