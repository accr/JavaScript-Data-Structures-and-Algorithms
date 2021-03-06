// 创建BinarySearchTree
function BinarySearchTree(){
    var node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;
}

/* 方法
    insert(key):向树中插入一个新的键。
    search(key):在树中查找一个键，如果节点存在，则返回true;如果不存在，则返回false。
    inOrderTraverse:通过中序遍历方式遍历所有节点。
    preOrderTraverse:通过先序遍历方式遍历所有节点。
    postOrderTraverse:通过后序遍历方式遍历所有节点。
    min:返回树中最小的值/键。
    max:返回树中最大的值/键。
    remove(key):从树中移除某个键。
*/

// 向树中插入一个键
this.insert = function(key){
    var newNode = new Node(key);

    if(root === null){
        root = newNode;
    }else{
        insertNode(root,newNode);
    }
};

var insertNode = function(node,newNode){
    if(newNode.key < node.key){
        if(node.left === null){
            node.left = newNode;
        }else{
            insertNode(node.left,newNode);
        }
    }else{
        if(node.right === null){
            node.right = newNode;
        }else{
            insertNode(node.right,newNode);
        }
    }
};

var tree = new BinarySearchTree();
tree.insert(11);

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.insert(6);

// 中序遍历
this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root,callback);
};

