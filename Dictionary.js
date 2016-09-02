// 创建一个字典
function Dictionary(){
    var items = {};
}

/* 映射/字典方法
    set(key,value)：向字典中添加新元素
    remove(key):通过使用键值来从字典中移除键值对应的数据值
    has(key)：如果某个键值存在于这个字典中，则返回true，反之则返回false
    get(key):通过键值查找特定的数值并返回
    clear()：将这个字典中的所有元素全部删除
    size():返回字典所包含元素的数量。与数组的length属性类似
    keys():将字典所包含的所有键名以数组形式返回
    values()：将字典所包含的所有数值以数组形式返回
*/

// has和set方法
this.has = function(key){
    return keys in items;
}

this.set = function(key,value){
    items[key] = value;
}

// remove方法
this.remove = function(key){
    if(this.has(key)){
        delete items[key];
        return true;
    }
    return false;
}

// get和values方法
this.get = function(key){
    return this.has(key) ? items[key]:undefined;
};

this.values = function(){
    var values = {};
    for(var k in items){
        if(this.has(k)){
            values.push(items[k]);
        }
    }
    return values;
};

// clear、size、keys和getItem方法
this.getItem = function(){
    return items;
}

// 使用dictionary类
var dictionary = new Dictionary();
dictionary.set('Gandalf','gandalf@email.com');
dictionary.set('John','johnsnow@email.com');
dictionary.set('Tyrion','tyrion@email.com');

console.log(dictionary.has('Gandalf'));

console.log(dictionary.size());

console.log(dictionary.keys()); // ["Gandalf","John","Tyrion"]
console.log(dictionary.values());   // ["gandalf@email.com","johnsnow@email.com","tyrion@email.com"]
console.log(dictionary.get('Tyrion'));  // tyrion@email.com

dictionary.remove('John');

console.log(dictionary.keys()); // ["Gandalf","Tyrion"]
console.log(dictionary.values());   // ["Gandalf@email.com","tyrion@email.com"]
console.log(dictionary.getItem());  // Object{Gandalf:"gandalf@email.com",Tyrion:"tyrion@email.com"}

// 散列表
// 创建一个散列表
function HashTable(){
    var table = [];
}

/* 方法
    put(key,value):向散列表增加一个新的项（也能更新散列表）
    remove(key):根据键值从散列表中移除值
    get(key):返回根据键值检索到的特定的值
*/

var loseloseHashCode = function(key){
    var hash = 0;
    for(var i=0;i<key.length;i++){
        hash+=key.charCodeAt(i);
    }
    return hash % 37;
};

this.put = function(key,value){
    var position = loseloseHashCode(key);
    console.log(position+'-'+key);
    table[position] = value;
};

this.get = function(key){
    return table[loseloseHashCode(key)];
};

this.remove = function(key){
    table[loseloseHashCode(key)] = undefined;
};

// 使用HashTable类
var Hash = new HashTable();
hash.put('Gandalf','gandalf@email.com');
hash.put('John','johnsnow@email.com');
hash.put('Tyrion','tyrion@email.com');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));


