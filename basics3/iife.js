// Immediately  invoked Function  Expression (IIFE)

(function code(){
    console.log(`DB CONNECTED`)
})(); // way of defining IIFE

// global scope k pollution ko htane k liye IIFE ka use krte hai

((name)=>{
    console.log(`DB CONN ${name}`)
})('kshitiz');