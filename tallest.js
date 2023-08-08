function  maxArray (number){  
    var max = number[0];
    for(let i =  0 ; i <number.length ; i++){
          const index = i;
          const element = number[index];
      if(element < max){
        max =  element;
      }
    }
    return max;
}
 

 var friends = [167 , 45 ,120 ,165 ,137,200,300,345,500,2432234,32340,583402647768, 54,34354546565757676];
  let maxValue = maxArray(friends);
  console.log(maxValue);
 