//callback
function fx(data){
    return "My name is " + data;
}

function gx(data){
    return data.reduce( (total,curElement)=>total + curElement  )
}
function hx(obj){
    let data = obj.a1.concat(obj.a2);
    return obj.gx(data);
}

//main - higher order
function main(data, fn){
    //return fn(data)
    let newData = fn(data);
    fn.done = function(callback){ return callback(newData) }
    return fn;
}

main("Christian", fx).done( (data) => console.log("Result: ",data));
fx.done( data => console.log("FX: ",data))

// console.log( main([1,2,3], gx) );
// console.log( main( {a1:[1,2,3,4],a2:[5,6,7],gx:gx } , hx) );
