init();
var nodeList = [];

function init() {
    var input = document.getElementsByTagName("input");
    input[0].onclick = preOrderClick;
    input[1].onclick = function() {
        nodeList = [];
        inOrder(document.getElementById('root'));
        render();
    };
    input[2].onclick = function() {
        nodeList = [];
        postOrder(document.getElementById('root'));
        render();
    };
}
function preOrderClick(){
         nodeList = [];
        preOrder(document.getElementById('root'));
        render();
}
function inOrder(treeRoot) {
    if (treeRoot != null) {
        preOrder(treeRoot.firstElementChild);
        nodeList.push(treeRoot);
        preOrder(treeRoot.lastElementChild);
    }
}

function preOrder(treeRoot) {
    if (treeRoot != null) {
        nodeList.push(treeRoot);
        preOrder(treeRoot.firstElementChild);
        preOrder(treeRoot.lastElementChild);
    }
}

function postOrder(treeRoot) {
    if (treeRoot != null) {
        preOrder(treeRoot.firstElementChild);
        preOrder(treeRoot.lastElementChild);
        nodeList.push(treeRoot);
    }
}

function render() {
    var i = 0;

    var timer = setInterval(function() {
        if (i < nodeList.length) {
            nodeList[i].style.backgroundColor = "blue";
            if (nodeList[i - 1]) {
                nodeList[i - 1].style.backgroundColor = "#fff";
            }
            i++;
        } else {
            clearInterval(timer);
            if (nodeList[i - 1]) {
                nodeList[i - 1].style.backgroundColor = "#fff";
            }
        }
    }, 500);

}
