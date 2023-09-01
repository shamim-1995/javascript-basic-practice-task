// const numbers = [45, 65, 23, 98, 19];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


// for(const number of numbers){
//     console.log(number);

// }


const products = [
    {id: 1, name: 'walton phone', price: 19000},
    {id: 2, name: 'iphone', price: 190000},
    {id: 3, name: 'mac book', price: 234000},
    {id: 4, name: 'lenovo laptop', price: 89000},
    {id: 5, name: 'dell laptop', price: 90000},
    {id: 6, name: 'samsung phone', price: 60000},
    {id: 7, name: 'nokia Phone', price: 19000},
    {id: 8, name: 'one plus', price: 23000},
];


// for(const product of products){
//     console.log(product);
// }


function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search)){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchProducts(products, 'phone');
console.log(result);