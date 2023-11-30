let myPromise = new Promise(numbers)
function numbers(resolve, reject) {
    let numb1 = +prompt("Enter number 1")
    let numb2 = +prompt("Enter number 2")
    if(typeof numb1 + numb2 == '10');
resolve(`${numb1} + ${numb2} = ${numb1 + numb2}`)
reject(`${numb1} + ${numb2} is not equal to 10`)
}

myPromise.then(
    correct=> console.log(correct),
    rejected=> console.log(rejected)

)