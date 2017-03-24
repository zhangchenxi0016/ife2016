init();
var tagObj;
var hobbyObj;

function init() {
    tagObj = new getObj(document.getElementById("tags"));
    hobbyObj = new getObj(document.getElementById("hobby"));
    document.getElementById('tagsinput').onkeyup = taginput;
    document.getElementById('submit').onclick = hobbysubmit;

}

function getObj(ul) {
    this.data = [];

    this.render = function() {
        var str = "";
        ul.innerHTML = "";
        for (var i = 0; i < this.data.length; i++) {
            str += "<li>" + this.data[i] + "</li>";
        }
        ul.innerHTML = str;
        addDelEvent(ul, this);

    };

    this.addItem = function(str) {
        if (this.data.length >= 10) {
            this.data.shift();
            this.data.push(str);
        }
        this.data.push(str);
        this.render();

    };
    this.deleteItem = function(id) {
        this.data.splice(id, 1);
        this.render();
    };
}

function taginput() {

    var val = this.value;
    var reg = /[, \s，]/;
    if (reg.test(val)) {
        val = val.replace(/[, \s，\n\r]/g, "");
        if (val != "") {
            tagObj.addItem(val);
            this.value = "";
        }
    }
}

function addDelEvent(ul, listObj) {
    for (var i = 0; i < ul.childNodes.length; i++) {

        ul.childNodes[i].onclick = function(i) {
            return function() {
                listObj.deleteItem(i);
            };
        }(i);
        ul.childNodes[i].onmouseover = function(i) {
            return function() {
                ul.childNodes[i].innerHTML = "删除" + ul.childNodes[i].innerHTML;
                ul.childNodes[i].style.background = "green";
            };
        }(i);
        ul.childNodes[i].onmouseout = function(i) {
            return function() {
              if(ul.childNodes[i].innerHTML.substr(0,2)=="删除")
                ul.childNodes[i].innerHTML = ul.childNodes[i].innerHTML.substr(2);
                ul.childNodes[i].style.background = "purple";
            };
        }(i);

    }
}

function hobbysubmit() {
var val=document.getElementById("textarea").value;
hobbyObj.data=val.split(/[^0-9a-zA-z\u4e00-\u9fa5+]/);
hobbyObj.render();
}
