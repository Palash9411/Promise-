
 Promise.myAny = function(promises) {
    if(Array.isArray(promises)){
          let results = [] ; 
          let count  = promises.length  ; 
          return new Promise((resolve,reject) =>{
            promises.forEach((promise,index) =>{
              promise.then((data)=>{
                resolve(data);
              }).catch((error) =>{
                results[index] = error; 
                count--;
                if(count == 0) {
                    reject(results) ;
                }
                reject(error) ; 
              })
            })
          })
    }else{
      throw new Error('Please provide an Array')
    }
  }
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'foo');
  });
  const promise2 = Promise.resolve(3);
  const promise3 = Promise.resolve(42);

  
  
  Promise.myAny([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });