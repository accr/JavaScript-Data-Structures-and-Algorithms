// 栈是一种遵从后进先出（LIFO）原则的有序集合。
// 新添加的或待删除的元素都保存在栈的末尾，称作栈顶，另一端就叫栈底。

// 栈的创建
function Stack(){
    // 各种属性和方法的声明
}

/* 
    方法：
    push(element(s)):添加一个（或多个）新元素到栈顶
    pop():移除栈顶的元素，同时返回被移除的元素
    peek():返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）
    isEmpty():如果栈里没有任何元素就返回true，否则返回false
    clear():移除栈里的所有元素
    size()：返回栈里的元素个数
*/

this.push = function(element){
    items.push(element);
};

this.pop = function(){
    return items.pop();
};

this.peek = function(){
    return items[items.length-1];
};

this.isEmpty = function(){
    return items.length == 0;
};

this.size = function(){
    return items.length;
};

this.clear = function(){
    items = [];
};

this.print = function(){
    console.log(items.toString());
}


function Stack(){

    var items = [];

    this.push = function(element){
        items.push(element);
    };

    this.pop = function(){
        return items.pop();
    };

    this.peek = function(){
        return items[items.length-1];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.size = function(){
        return items.length;
    };

    this.clear = function(){
        items = [];
    };

    this.print = function(){
        console.log(items.toString());
    }
}

// 使用Stack类
var stack = new Stack();
console.log(stack.isEmpty());   // 输出为true

stack.push(5);
stack.push(8);

console.log(stack.peek());  // 输出8

stack.push(11);
console.log(stack.size());  // 输出3
console.log(stack.isEmpty());   // 输出false

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size());  // 输出2
stack.print();  // 输出[5,8]

// 从十进制到二进制
function divideBy2(decNumber){

    var remStack = new Stack(),
    rem,
    binaryString = '';

    while(decNumber > 0){
        // {1}
        rem = Math.floor(decNumber % 2);
        // {2}
        remStack.push(rem);
        // {3}
        decNumber = Math.floor(decNumber / 2);
        //{4}
    }

    while(!remStack.isEmpty()){
        // {5}
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}


function baseConverter(decNumber,base){

    var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';

    while(decNumber > 0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while(!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

