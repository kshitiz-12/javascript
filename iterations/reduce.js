const mynums=[1,2,3,4,]

const myTotal=mynums.reduce(function(acc,currval){
    console.log(`acc:${acc},currval:${currval}`)
    return acc+currval
},0)//comma k baad acc k value assign krte haii..
console.log(myTotal);

mytot = mynums.reduce((accu,curval)=>(accu+curval),0)
console.log(mytot)

const shoppingCart=[
    {name:"apple",price:1.00,quantity:5},
    {name:"banana",price:0.50,quantity:10},
    {name:"orange",price:1.50,quantity:7}
    
]
const sum = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(sum);