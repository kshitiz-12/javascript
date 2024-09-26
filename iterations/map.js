const myNum = [1,2,3,4,5,6,7,8,9]

const newnum = myNum.map((num)=> num+10)
const newnum1 = myNum.map((num)=>{return num+10})

console.log(newnum);
console.log(newnum1);


const myNumb = [1,2,3,4,5,6,7,8,9]
const newnumb = myNumb
                      .map((nums)=>nums*10)
                      .map((nums)=>nums/10)
console.log(newnumb);

const newnumb1=myNumb.map((no)=>no+2)
                     .map((no)=>no+1)  
                     .filter((no)=>no%2==0)
console.log(newnumb1);