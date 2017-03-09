/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = '';
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: "北京",
  nowGraTime: "day"
};

/**
 * 渲染图表
 */
function renderChart() {

  var divChart=document.getElementsByClassName("aqi-chart-wrap")[0];
  var divChartHtml="";
  var m=1;
  for(var charStr in chartData){
var color =Math.ceil(Math.random()*0xFFFFFF).toString(16);
divChartHtml+='<div title="'+charStr+'"style="'+'background-color:#'+color+'; height:'+chartData[charStr]+'px"></div>';
  }
  divChart.innerHTML=divChartHtml;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 

  // 设置对应数据

  // 调用图表渲染函数
    if(typeof(this.value)!='string')
    {return;}
  if(pageState.nowGraTime==this.value){
    return;
  }else{
    pageState.nowGraTime=this.value;
    initAqiChartData();
    renderChart();
  }

}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 

  // 设置对应数据

  // 调用图表渲染函数
  if(typeof(this.value)!='string')
    {return;}
  if(pageState.nowSelectCity==this.value){
    return;
  }else{
    pageState.nowSelectCity=this.value;
    initAqiChartData();

  }
      renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  var radios=document.getElementsByTagName("input");
  for(var item in radios){
    radios[item].onchange=graTimeChange;
  }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项

  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  var select=document.getElementById("city-select");
  var html="";
  for(var item in aqiSourceData){
    html+="<option>"+item+"</option>";
  }
 select.innerHTML=html;

 select['onchange']=citySelectChange;
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  chartData=[];
if(pageState.nowGraTime=='day'){
    chartData=aqiSourceData[pageState.nowSelectCity];
}else if(pageState.nowGraTime=='week'){
    var tmpchar=aqiSourceData[pageState.nowSelectCity];
    var i=1;
    var n=1;
    var zs=0;
    for(var item in tmpchar)
    { 
      zs+=tmpchar[item];
      i++;
      if(i/7==1)
      {
        chartData['2016年第'+n+'周']=zs/7;
        i=1;
        zs=0;
        n++;
      }
    }
}else if(pageState.nowGraTime=='month'){
    var tmpchar=aqiSourceData[pageState.nowSelectCity];
    var i=1;
    var n=1;
    var zs=0;
    for(var item in tmpchar)
    { 
      zs+=tmpchar[item];
      i++;
      if(i/30==1)
      {
        chartData['2016年第'+n+'月']=zs/30;
        i=1;
        zs=0;
        n++;
      }
    }
}
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm();
  initCitySelector();
  initAqiChartData();
  renderChart();
}

init();
