// 创建一个链表
function LinkedList(){

    var Node = function(element){
        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

    this.append = function(element){};
    this.insert = function(position,element){};
    this.removeAt = function(position){};
    this.remove = function(element){};
    this.indexOf = function(element){};
    this.isEmpty = function(){};
    this.size = function(){};
    this.toString = function(){};
    this.print = function(){};
}

/* 方法说明：
    append(element)：向列表尾部添加一个新的项。
    insert(position,element)：向列表的特定位置插入一个新的项。
    remove(element)：从列表中移除一项。
    indexOf(element)：返回元素在列表中的索引。如果列表中没有该元素则返回-1。
    removeAt(position)：从列表的特定位置移除一项。
    isEmpty()：如果列表中不包含任何元素，返回true,如果链表长度大于0则返回false。
    size()：返回链表包含的元素个数。与数组的length属性类似。
    toString()：由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其值输出元素的值。
*/

// 向链表尾部追加元素
this.append = function(element){
    var node = new Node(element),
    current;

    if(head === null){
        head = node;
    }else{
        current = head;

        // 循环链表，直到找到最后一项
        while(current.next){
            current = current.next;
        }

        // 找到最后一项，将其next赋为node,建立连接
        current.next = node;
    }

    length++;   // 更新列表的长度
};

var list = new LinkedList();
List.append(15);
List.append(10);

// 从链表中移除元素
this.removeAt = function(position){

    // 检查越界值
    if(position > -1 && position < length){
        var current = head;
        var previous;
        var index = 0;

        // 移除第一项
        if(position === 0){
            head = current.next;
        }else{

            while(index++ < position){

                previous = current;
                current = current.next;
            }

            // 将previous与current的下一项链接起来：跳过current,从而移除它
            previous.next = current.next;
        }

        length--;

        return current.element;
    }else{
        return null;
    }
};

