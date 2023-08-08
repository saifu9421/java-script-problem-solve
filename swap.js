// let a , b;
//  a =  10; 
//  b = 20;
// console.log('a =',a);
// console.log('b =',b);


// let c  = a;
// a = b;
// console.log('a ===',a);
// b = c;
// console.log('b==',b);




//   max value functon

 function maxValue(a , b, c){
   if (a > b && a > c){
    return a;
   }else if(b  > a && b > c ){
    return b;
   } else{
    return c;
   }
 }

const a = 20 , b =  30 , c = 50;
 var   maxValue = maxValue(a, b, c);
 console.log(maxValue);


// min number celcolet using function

function minNumber(a ,b, c){
    if(a <  b &&  a <  c){
        return a;
    }else if( b < a && b < c){
        return b;
    }else{
        return c;
    }
}

 const a1 = 10 , b1 =  20 , c1 =  -5;
 var minNuber = minNumber(a1 , b1, c1);
 console.log(minNuber);




//   maxminu  value in Math.max function 
  function  mathMax(a , b , c){
    var max = Math.max(a , b, c);
    return max;
  }
 
  const x =  10 , y =  20 ,z  =  30 ;
   var maxValue = mathMax(x , y , z);
   console.log(maxValue);



//    minum value in Math.min functon 
function  mathMin(a,b,c){
     var min = Math.min(a, b, c);
     return min;
}

const x1 = 10 , y1 = 20 , z1 =  22;
var mimValue  =  mathMin(x1 , y1 , z1);
console.log(mimValue);