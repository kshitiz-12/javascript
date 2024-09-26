// const coding = ["js","java","c++","python"]

//  const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values); // it will not return values

const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums=mynums.filter((num)=> num>4)
// console.log(newnums); // it will return values greater than 4
// // it will return [5,6,7,8,9,10]

const newnums=mynums.filter((num)=> {
    return num>4
})
 console.log(newnums);

 const newnum=[]
 newnum.forEach((nums)=>{
    if(num>4){
        newnum.push(nums)
    }
 })
 console.log(newnum);

 //................|Example|.....................//
 const books = [
    {title: 'Book1', author: 'Author1',genre:'fiction',publish:1991},
    {title: 'Book2', author: 'Author2',genre:'history',publish:1880},
    {title: 'Book3', author: 'Author3',genre:'non fiction',publish:1995},
    {title: 'Book4', author: 'Author4',genre:'history',publish:1990},
    {title: 'Book5', author: 'Author5',genre:'fiction',publish:2004},
    {title: 'book6', author: 'author6',genre:'history',publish:1989}
    
 ]
let fictionbooks=books.filter((book)=> book.genre==='history'&&book.publish>1790)
// fictionbooks=books.filter( (bk)=>bk.publish>1990)
 console.log(fictionbooks); // it will return books of history genre