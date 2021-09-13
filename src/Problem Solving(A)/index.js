function adjacentElementsProduct(numInteger) {
    const arrNumMax = [];
    let a = num(0);
    let b = num(1);
    for (let i = 0 ; i < numInteger.length; i ++ ){
        for (let j = 0 ; j < numInteger.length; j ++ ){
            if (num(0) * num(1) > a * b){
                num(0) = a, num(1) = b;
                arrNumMax.push(a,b)
            }
        }
    };
    return a,b;
}
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));

// console.log("problem 2:")

// function alternatingSums(a) {
//     const sumWeight = [];
//     let a = [];
//     let b = [];
//     for (let i = 0 ; i < a.length; i+2) {
//         if (a(i) + a(i+2) )){

//         }
//     }
// }
