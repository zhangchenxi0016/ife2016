/*数据格式
var aqiSourcceData=[123,123];*/

/*数据队列
 */
var aqiSourcceData = [];

/*初始化*/
function init() {
    initButton();
}

/*初始化按钮*/
function initButton() {
    document.getElementById('leftAdd').onclick = leftAdd;
    document.getElementById('rightAdd').onclick = rightAdd;
    document.getElementById('leftRemove').onclick = leftRemove;
    document.getElementById('rightRomove').onclick = rightRomove;
}

/*左侧插入*/
function leftAdd() {
var Num=getNum();
if(Num===undefined&&Num!=NaN)
{
  return;
}
aqiSourcceData.unshift(Num);
renderList();
}

/*右侧插入*/
function rightAdd() {
var Num=getNum();
if(Num===undefined&&Num!=NaN)
{
  return;
}
aqiSourcceData.push(Num);
renderList();
}
/*左侧删除*/
function leftRemove() {

aqiSourcceData.shift();
renderList();
}
/*右侧删除*/
function rightRomove() {
aqiSourcceData.pop();
renderList();
}
/*渲染队列*/
function renderList() {
  var listDiv=document.getElementById("listDiv");
  var html="";
  for(var i=0;i<aqiSourcceData.length;i++){
    html+="<div style='background-color:red;color:#fff;height:"+aqiSourcceData[i]+"px;margin-right:10px;font-size:40px;line-height:80px;width:20px;'></div>";
  }
listDiv.innerHTML=html;
}
/*合法判断*/
function getNum(){
 var Num=parseInt(document.getElementById('inputNum').value);
 if(true&&Num!=0){
  return Num;
 }
}
init();
