//Immediately Invoke Function Expressions (IIFE)


(function chai() {
    //named iffe
    console.log(`DB CONNECTED`);
})();

    
(() => {
    console.log(`DB CONNECTED TWO`)
})();
        
    ((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("MySql")