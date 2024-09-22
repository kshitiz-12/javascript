const coding = ["js","java","c++","python"]

coding.forEach( function (item){
    console.log(item);
})
coding.forEach( (i)=>{
console.log(i);
})
function printMe (item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
})

const mycoding=[
    {langname:"java",
        version: "1.8"
    },
    {lang:"c++",
        version: "14"
    },
    {
        lang:"python",
        version: "3.9"

    }

    
]
mycoding.forEach((item)=>{
    console.log(item.lang,item.version);
})