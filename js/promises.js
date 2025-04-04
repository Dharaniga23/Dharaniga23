function rideBicycle(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const ride=true;
            if(ride){
                resolve("you ride the bicycle");
            }else{
                reject("you did not ride the bicycle");
        }
           
        },1500);
    });
}

        
function waterPlants(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const water=false;
            if(water){
                resolve("you water the plants");
            }
            else{
                reject("you did not water the plants");
            }
          
        },500);
    });
}
    
function readBooks(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const read=true;
            if(read){
                resolve("you read the books");
            }
            else{
                reject("you did not read the books");
            }
            
        },500);
    });
}

rideBicycle().then(value=> {console.log(value);return waterPlants()})
             .then(value=> {console.log(value);return readBooks()})
              .then(value=>{console.log(value);console.log("you completed all the chores") })
    