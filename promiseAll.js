
 Promise.myAll = function(promises) {
    if(Array.isArray(promises)){
          let results = [] ; 
          let count  = promises.length  ; 
          return new Promise((resolve,reject) =>{
            promises.forEach((promise,index) =>{
              promise.then((data)=>{
                results[index] = data ; 
                count-- ;
                if(count === 0 ) {
                  resolve(results)
                }
              }).catch((error) =>{
                reject(error) ; 
              })
            })
          })
    }else{
      throw new Error('Please provide an Array')
    }
  }
  
  const promise1 = Promise.resolve(3);
  const promise2 = Promise.resolve(42);
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  
  
  Promise.myAll([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });
  