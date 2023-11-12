// Rest Operator ---> name ছাড়া বাকি সব গুলা দেখাবে শুদু name দেখাবেনা 

let animal = {
    name : 'cat',
    color : 'white',
    age: 8
}

const {name, ...rest} = animal
console.log(rest)
// output : { color: 'white', age: 8 }
