function Queue(){
  this.data=[];
}
Queue.prototype.inQueue=function(data){
this.data.push(data);
};
Queue.prototype.outQueue=function(){
  return this.data.shift();
};
Queue.prototype.length=function(){
  return this.data.length;
};
