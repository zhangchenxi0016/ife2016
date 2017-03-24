var sourceList = [];
init();

function init() {
    buttonInit();
}

function buttonInit() {
    document.getElementById('insert').onclick = insert;
    document.getElementById('query').onclick = query;


}

function insert() {
    var str = document.getElementById('textArea').value.trim();
    var list = str.split(/[^0-9a-zA-z\u4e00-\u9fa5+]/).filter(function(e) {
        if (e != null && e.length > 0) {
            return true;
        }else{
        return false;
        }
    });
    sourceList=list;
    render();
}

function render(str) {
  var htmlstr="";
    for (var i = 0; i < sourceList.length; i++) {
      d=sourceList[i];
      if (str!=undefined) {
        d=d.replace(new RegExp(str,"g"),"<span class='select'>"+str+"</span>");
      }
        htmlstr += "<div>" + d + "</div>";
    }
    document.getElementById('result').innerHTML = htmlstr;
}
function query(){
 var str= document.getElementById('input').value.trim();
 render(str);
}
