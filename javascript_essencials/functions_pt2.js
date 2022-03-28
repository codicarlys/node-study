var counter = {
    value: 0,
    add: function() {
        return ++this.value;
    }
};

var itens = {
    item: [],
    add: function(value) {
        this.item.push(value);
        return this.item;
    }
};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

console.log(itens.add(100));
console.log(itens.add(73));
console.log(itens.add(33));