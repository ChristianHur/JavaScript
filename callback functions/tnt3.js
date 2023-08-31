//callback
const fx = data => "My name is " + data;

const gx = data => data.reduce((total, curElement) => total + curElement);

const hx = obj => obj.gx(obj.a1.concat(obj.a2));

//main - higher order
const main = (data, fn) => {
    //return fn(data)
    const newData = fn(data);
    fn.done = (callback) => { return callback(newData) }
    return fn;
}

main("Christian", fx).done((data) => console.log("Result: ", data));
fx.done(data => console.log("FX: ", data))

// console.log( main([1,2,3], gx) );
// console.log( main( {a1:[1,2,3,4],a2:[5,6,7],gx:gx } , hx) );
