module.exports = function reverse (n) {
    let str = String(parseFloat(n));
            
    let result = str.split('').reverse().map((elem)=>(elem != "-")? elem= elem: elem ="").join("");  
     
    return result;
}
