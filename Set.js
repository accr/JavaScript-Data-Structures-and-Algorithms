// 集合是由一组无序且唯一（既不能重复）的项组成的。

// 创建一个集合
function Set(){
    var items = {}; 
}

// 使用对象而不是数组来表示集合（items）

/* 集合可用的方法
    add(value):向集合添加一个新的项。
    remove(value)：从集合移除一个值。
    has(value):如果值在集合中，返回true，否则返回false
    clear()：移除集合中的所有项。
    size()：返回集合所包含元素的数量。与数组的length属性类似。
    values():返回一个包含集合中所有值的数组。
*/

// has(value)方法
this.has = function(value){
    return value in items;
};

this.has = function(value){
    return items.hasOwnProperty(value);
};

// add方法
this.add = function(value){
    if(!this.has(value)){
        items[value] = value;
        return true;
    }
    return false;
};

// remove和clear方法
this.remove = function(value){
    if(this.has(value)){
        delete items[value];
        return true;
    }
    return false;
};

var set = new Set();
set.add(1);
set.add(2);

this.clear = function(){
    items = {};
};

// size方法
this.size = function(){
    return Object.keys(items).length;
};

this.sizeLegacy = function(){
    var count = 0;
    for(var prop in items){
        if(items.hasOwnProperty(prop))
            ++count;
    }
    return count;
};

// values方法
this.values = function(){
    return Object.keys(items);
};

this.valuesLegacy = function(){
    var keys = [];
    for(var key in items){
        keys.push(key);
    }
    return keys;
};

// 使用Set类
var set = new Set();

set.add(1);
console.log(set.values());  // 输出["1"]
console.log(set.has(1));    // 输出true
console.log(set.size());    // 输出1

set.add(2);
console.log(set.values());  // 输出["1","2"]
console.log(set.has(2));    // 输出true
console.log(set.size());    // 2

set.remove(1);
console.log(set.values());  // 输出["2"]

set.remove(2);
console.log(set.values());  // 输出[]

// 并集
this.union = function(otherSet){
    var unionSet = new Set();

    var values = this.values();
    for(var i=0;i<values.length;i++){
        unionSet.add(values[i]);
    }

    values = otherSet.values();
    for(var i=0;i<value.length;i++){
        unionSet.add(values[i]);
    }
    return unionSet;
};

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

var unionAB = setA.union(setB);
console.log(unionAB.values());

// 交集
this.intersection = function(otherSet){
    var intersection = new Set();
    var values = this.values();
    for(var i=0;i<values.length;i++){
        if(otherSet.has(values[i])){
            intersectionSet.add(values[i]);
        }
    }
    return intersectionSet;
}

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

var intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());

// 差集
this.difference = function(otherSet){
    var differenceSet = new Set();

    var values = this.values();
    for(var i=0;i<values.length;i++){
        if(!otherSet.has(values[i])){
            differenceSet.add(values[i]);
        }
    }
    return differenceSet;
};

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

var differenceAB = setA.difference(setB);
console.log(differenceAB.values());

// 子集

