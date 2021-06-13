let numbers = [1,2,3,4,6,10]
let sum=0;
for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
}
sum=0;
for(let n of numbers){
    sum += n;
}
sum=0;
let ref1 = numbers.forEach( (n)=>{
    sum += n;
    return sum;
})
sum=0;
let ref2 = numbers.map( (n)=>{
    sum += n;
    return typeof this;
})

let ref3=numbers.reduce( (accumulator,currentValue)=>{
    if(isNaN(currentValue)){
        accumulator = accumulator + 0;
        return accumulator;
    }
    accumulator = accumulator + currentValue;
    return accumulator;
}, 100)
let ref4=numbers.reduce((a,c)=> isNaN(c) ? a : a + c, 100)
function callback(ary,start){
    let sum = 0;
    for(let a of ary){
        sum += a;
    }
    return sum;
}
let me = {
    reduce2: (ary,callback,start=0)=>{
        let total = start;    
        return total + callback(ary,start);
    }
}

let m = new me()

let ref5 = reduce2(numbers,callback,100);

console.log(ref3)
console.log(ref4)
console.log(ref5)