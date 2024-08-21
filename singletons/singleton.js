/*
MIT License

Copyright (c) 2024 Christian Hur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Singleton
const SingleTon = (()=>{
    let instance;
    const createInstance = () =>{
        return {name:'Goofee'};
    }

    return {
        getInstance : () => !instance ? instance = createInstance() : instance
    }

})();

const instance1 = SingleTon.getInstance();
const instance2 = SingleTon.getInstance();
const instance3 = SingleTon.getInstance();

console.log(instance1 === instance2, instance2 === instance3);
instance1.name = 'Donald Duck';
console.log(instance1,instance2,instance3);