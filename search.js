const lyRics = 'tumi  bondu kala pakhi ami jeno ki . bosonto batase tumi bolte pari ni  .  kala kala sada sada';
   
const capp =  lyRics.toLowerCase();

const stringName =  'PakhI';

const doesExit =  lyRics.includes(stringName.toLowerCase());
console.log(doesExit);


console.log(lyRics.indexOf('kiala'));


console.log(lyRics.indexOf('tumi'));


if(lyRics.indexOf('tui') !== -1){
    console.log("exists inside the string");
}else{
    console.log("connot find it");
}

