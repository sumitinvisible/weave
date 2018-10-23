const Queue = require('./index');
function weave(sourceOne, sourceTwo) {
  const q = new Queue();
  while (sourceOne.peek() !== undefined || sourceTwo.peek() !== undefined ) {
    if (sourceOne.peek() !== undefined) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek() !== undefined) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
}
var e = new Queue();
e.add(1);
e.add(4);
//console.log(e);
var ef = new Queue();
ef.add(5);
ef.add(8);
console.log(weave(e,ef));
//console.log(q);  
module.exports = weave;
