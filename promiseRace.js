
 Promise.myRace = function(promises) {
    if(Array.isArray(promises)){
      
          let called  = false  ; 
          return new Promise((resolve,reject) =>{
            promises.forEach((promise,index) =>{
              promise.then((data)=>{
                if(!called) {
                    called = !called
                    resolve(data) ; 
                }
              }).catch((error) =>{
                if(!called) {
                    called = !called
                    reject(error) ; 
                }
              })
            })
          })
    }else{
      throw new Error('Please provide an Array')
    }
  }
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });

  
  
  Promise.myRace([promise1, promise2]).then((values) => {
    console.log(values);
  });