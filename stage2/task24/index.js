init();

function init() {
    document.getElementById("preOrder").onclick = preOrderClick;
    document.getElementById("BF").onclick = BFClick;
    document.getElementById("root").onclick=rootClick;
}

function preOrderClick() {
    var list = [];
    preOrder(document.getElementById('root'), list);
    render(list);
}

function BFClick() {
    var list = [];
    BF(document.getElementById('root'), list);
    render(list);
}

function preOrder(root, list) {
    (function recurse(tree) {
        for (var i = 0; i < tree.children.length; i++) {
            recurse(tree.children[i]);
        }
        list.push(tree);
    })(root);
}

function BF(root, list) {
    var queue = new Queue();
    node = root;
    while (node) {
        for (var i = 0; i < node.children.length; i++) {
            queue.inQueue(node.children[i]);
        }
        list.push(node);
        node = queue.outQueue();
    }

}

function render(list) {
    var i = 0;
    var time = setInterval(function() {
        if (i < list.length) {
            list[i].style.backgroundColor = "blue";
            if (list[i - 1]) {
                list[i - 1].style.backgroundColor = "#fff";
            }
            i++;
        } else {
            if (list[i - 1]) {
                list[i - 1].style.backgroundColor = "#fff";
            }
            clearInterval(time);
        }
    }, 500);
}
function rootClick(e){
  if(e.target.id=="root"){
    return;
  }
if(e.target.id){
    e.target.removeAttribute("id");
}else{
  e.target.id="focus";
}
}
