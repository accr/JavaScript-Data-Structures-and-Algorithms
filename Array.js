// 声明、创建和初始化数组
var daysOfWeek = new Array();
var daysOfWeek = new Array(7);
var daysOfWeek = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');

var daysOfWeek = [];

var daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(daysOfWeek.length);

for(var i=0; i<daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}

var fibonacci =[];
fibonacci[1] = 1;
fibonacci[2] = 1;

for(var i=3; i<20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for(var i=1; i<fibonacci.length; i++){
    console.log(fibonacci[i]);
}

// 添加和删除元素
var numbers = [0,1,2,3,4,5,6,7,8,9];
numbers[numbers.length] = 10;   //在JavaScript中，数组是一个可以修改的对象。如果添加元素，它就会动态增长。

numbers.push(11);
,numbers.push(12,13);

for(var i=numbers.length; i>=0; i--){
    numbers[i] = numbers[i-1];
}
numbers[0] = -1;

numbers.unshift(-2);    // 直接把数值插入数组的首位
numbers.unshift(-4,-3);

// 删除元素
numbers.pop();      // 删除数组最后一个元素

for(var i=0;i<numbers.length;i++){
    numbers[i] = numbers[i+1];
}

numbers.shift();    // 删除数组的第一个元素

// 在任意位置上添加或删除元素
numbers.splice(5,3);    // 任意删除，删除了从数组索引5开始的3个元素

numbers.splice(5,0,2,3,4); 
/*  splice方法接收的第一个参数，表示想要删除或插入的元素的索引值。
    第二个参数是删除元素的个数
    第三个参数往后，就是要添加到数组里的值。
*/

numbers.splice(5,3,2,3,4);

// 二维或多维数组
var averageTemp = [];
verageTemp[0] = [72,75,79,79,81,81];
verageTemp[1] = [81,79,75,75,73,72];

// day1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
// day2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;

function printMatrix(myMatrix){
    for(var i=0;i<myMatrix.length;i++){
        for(var j=0;j<myMatrix[i].length;j++){
            console.log(myMatrix[i][j]);
        }
    }
}    

printMatrix(averageTemp);

var matrix3x3x3 = [];
for(var i=0;i<3;i++){
    matrix3x3x3[i] = [];
    for(var j=0;j<3;j++){
        matrix3x3x3[i][j] = [];
        for(var z=0;z<3;z++){
            matrix3x3x3[i][j][z] = i+j+z;
        }
    }
}

for(var i=0;i<matrix3x3x3.length;i++){
    for(var j=0;j<matrix3x3x3[i].length;j++){
        for(var z=0;z<matrix3x3x3[i][j].length;z++){
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}

// JavaScript的数组方法参考
// 数组合并
var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];
var numbers = negativeNumbers.concat(zero,positiveNumbers);

// 迭代器函数
var isEven = function(x){
    // 如果x是2的倍数，就返回true
    console.log(x);
    return(x % 2 == 0)?true:false;
    // 也可以写成return(x % 2 == 0)?true:false
};
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numbers.every(isEven);

numbers.some(isEven);

numbers.forEach(function(x){
    console.log((x % 2 ==0));
});

var myMap = numbers.map(isEven);

var evenNumbers = numbers.filter(isEven);

numbers.reduce(function(previous,current,index){
    return previous + current;
});

// 搜索和排序
numbers.reverse();  // 反序输出数组numbers

numbers.sort(); 
numbers.sort(function(a,b){
    return a-b;
});

function compare(a,b){
    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
    // a必须等于
    return 0;
}

numbers.sort(compare);

// 1.自定义排序
var friends = [
    {name:'John',age:30},
    {name:'Ana',age:20},
    {name:'Chris',age:25}
    ];

function comparePerson(a,b){
    if(a.age < b.age){
        return -1;
    }
    if(a.age > b.age){
        return 1;
    }
    return 0;
}

console.log(friends.sort(comparePerson));

// 2.字符串排序
var names = ['Ana','ana','john','John'];
console.log(name.sort());

names.sort(function(a,b){
    if(a.toLowerCase() < b.toLowerCase()){
        return -1;
    }
    if(a.toLowerCase() > b.toLowerCase()){
        return 1;
    }
    return 0;
}

// 3.搜索
console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10);
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));

// 输出数组字符串
console.log(numbers.toString());

var numbersString = numbers.join('-');
console.log(numbersString);



