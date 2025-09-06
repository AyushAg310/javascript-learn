// IMMEDIATELY INVOKED FUNCTIONS (IIFE)

(function chai(){
    // name iife hai yeh
    console.log(`DB Connected`);
}
)
 (); // wrapping the function inside parenthesis and invoking it using parenthesis is iife


(   (name) =>{
    console.log(`DB Two Connected ${name}`);
    
} ) 
("Ayush")