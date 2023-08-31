const numbers = [1,2,3,4,6,10]
let sum=0;
for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
}
sum=0;
for(let n of numbers){
    sum += n;
}
sum=0;
const ref1 = numbers.forEach( n => {
    sum += n;
    return sum;
})
sum=0;
const ref2 = numbers.map( n =>{
    sum += n;
    return typeof this;
})

const ref3 = numbers.reduce( (accumulator,currentValue) => {
    if(isNaN(currentValue)){
        accumulator += 0;
        return accumulator;
    }
    return accumulator + currentValue;
    
}, 100)

const ref4 = numbers.reduce( (a,c) => isNaN(c) ? a : a + c, 100)
const callback = (ary,start) => {
    let sum = 0;
    for(let a of ary){
        sum += a;
    }
    return sum;
}

const me = {
    reduce2: (ary,callback,start=0) => {
        const total = start;    
        return total + callback(ary,start);
    }
}

const m = new me()

const ref5 = reduce2(numbers,callback,100);

console.log(ref3)
console.log(ref4)
console.log(ref5)
