// 队列是遵循FIFO（First In First Out，先进先出，也称先来先服务)原则的一组有序的项。
// 队列在尾部添加新元素，并从头部移除元素
// 最新添加的元素必须排在队列的末尾

// 创建队列
function Queue(){
    // 这里是属性和方法
}

/* 队列可用的方法
   enqueue(element(s)):在队列尾部添加一个（或多个）新的项。
   dequeue():移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
   front():返回队列中第一个元素————最先被添加，也将是最先被移除的元素。队列不做任何变动
   （不移除元素，只返回元素信息————与Stack类的peek方法非常类似）
   isEmpty():如果队列中不包含任何元素，返回true，否则返回false
   size():返回队列包含的元素个数，与数组的length属性类似
*/

this.enqueue = function(element){
    items.push(element);
};

this.dequeue = function(){
    return items.shift();
};

this.front = function(){
    return items[0];
};

this.isEmpty = function(){
    return items.length == 0;
};

this.size = function(){
    return items.length;
};

this.print = function(){
    console.log(items.toString());
};

// 完整的Queue类
function Queue(){

    var items = [];

    this.equeue = function(element){
        items.push(element);
    };

    this.dequeue = function(){
        return items.shift();
    };

    this.front = function(){
        return items[0];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.clear = function(){
        items = [];
    };

    this.size = function(){
        return items.length;
    };

    this.print = function(){
        console.log(items.toString());
    };

}

// 使用Queue类
var queue  = new Queue();
console.log(queue.isEmpty());   // 输出true

queue.enqueue("John");  // 添加元素
queue.enqueue("Jack");

queue.enqueue("Camila");

queue.print();
console.log(queue.size());  // 输出3
console.log(queue.isEmpty());   // 输出false
queue.dequeue();
queue.dequeue();
queue.print();

// 优先队列(最小优先队列)
function PriorityQueue(){
    var items = [];

    function QueueElement(element,priority){
        this.element = element;
        this.priority = priority;
    }

    this.equeue = function(element,priority){
        var queueElement = new QueueElement(element,priority);

        if(this.isEmpty()){
            items.push(queueElement);
        }else{
            var added = false;
            for(var i=0;i<items.length;i++){
                if(queueElement.priority<items[i].priority){
                    items.splice(i,0,queueElement);
                    added = true;
                    break;
                }
            }
            if(!added){
                items.push(queueElement);
            }
        }
    };
    // 其他方法和默认的Queue实现相同
}

var priorityQueue = new priorityQueue();
priorityQueue.enqueue("John",2);
priorityQueue.enqueue("Jack",1);
priorityQueue.enqueue("Camila",1);
priorityQueue.print;

// 循环队列————击鼓传花
function hotPotato(nameList,num){

    var queue = new Queue();

    for(var i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';
    while(queue.size()>1){
        for(var i=0;i<num;i++){
            queue.enqueue(queue.enqueue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated+'在击鼓传花游戏中被淘汰。');
    }
    return queue.dequeue();
}

var names = ['John','Jack','Camila','Ingrid','Carl'];
var winner = hotPotato(names,7);
console.log('胜利者:'+winner);



