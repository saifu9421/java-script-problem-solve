const lyRics = 'tumi  bondu kala pakhi ami jeno ki . bosonto batase tumi bolte pari ni  .  kala kala sada sada';
console.log(lyRics);
const prts =  lyRics.split(' ');
console.log(prts); 

const secTence = lyRics.split('.');
console.log(secTence); 


const chars =  lyRics.split('');
console.log(chars);

const  parTs =   lyRics.slice(1,20);
console.log(parTs);


const parSil = lyRics.substring(0,20);
console.log(parSil);

const striNg =  "    Hello  saif   ";
console.log(striNg);
console.log(striNg.trim());


   const  lines = ['umi  bondu kala pak',
   'tumi  bondu kala pak',
   'Hello  saif ' ,
   'Hello  saif',
   'arifw afja awief'];
  const join = lines.join('.');
  console.log(join);
