
 Promise.myAllSettled = function(promises) {
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
                results[index] = error ; 
                count-- ;
                if(count === 0 ) {
                  resolve(results)
                }
              })
            })
          })
    }else{
      throw new Error('Please provide an Array')
    }
  }
  
  const promise1 = Promise.resolve(3);
  const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
  const promises = [promise1, promise2];
  
  Promise.myAllSettled(promises).then((values) => {
    console.log(values);
  });
  