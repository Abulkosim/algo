var MinStack = /** @class */ (function () {
    function MinStack() {
        this.stack = [];
    }
    MinStack.prototype.push = function (val) {
        if (!this.min || this.min > val) {
            this.min = val;
        }
        this.stack.push(val);
    };
    MinStack.prototype.pop = function () {
        this.stack.pop();
    };
    MinStack.prototype.top = function () {
        console.log(this.stack);
        return this.stack[this.stack.length - 1];
    };
    MinStack.prototype.getMin = function () {
        return this.min;
    };
    return MinStack;
}());
var obj = new MinStack();
obj.push(9);
obj.push(2);
obj.push(3);
obj.push(4);
var param_3 = obj.top();
var param_4 = obj.getMin();
console.log(param_3, param_4);
