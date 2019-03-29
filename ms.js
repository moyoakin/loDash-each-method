
/*
* Custom implementation of loDash each method.
* Take in an arr and a callback function
*/
  
  

const _ ={};

_.each = function(list, callback){
    if (Array.isArray(list)){
        //loop through array
        for (var i = 0;i < list.length; i++){
            //call the callback with a list item
            callback(list[i],i,list);

        }

    } else{
        //loop through object
            
    }
    
        

}

var childFunction = function(name, i, list){
    if (i = 1){
        console.log(name, 'is younger than' +  list[i +1])

    } else{
        console.log(name, 'is the oldest')
    }

}

_.each(['king','flex','friends'], childFunction)


  