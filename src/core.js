var $ = function(selector, context) {
    return new $.fn.init(selector, context);
}

$.fn = $.prototype;


$.fn.init = function(selector, context) {

    if (selector.nodeType === 1) {
        this[0] = selector;
        this.length = 1;
        return this;

    } else if (selector.length > 1 && selector.nodeType === 1) {

        for (var i = 0, j = selector.length; i < j; i++) {
            this[i] = selector[i];
            this.length = i + 1;
        }
        return this;
    }

    // querySelectorAll 支持 ie8+
    context = context || document;
    var nodeList = context.querySelectorAll(selector);

    this.length = nodeList.length;
    this.selector = selector;

    for (var i = 0; i < this.length; i++) {
        this[i] = nodeList[i];
    }

    return this;
}

$.fn.each = function(fn) {

    for (var i = 0, len = this.length; i < len; i++) {
        fn.call(this[i], i, this[i]);
    }
    return this;
}

// new的是$.fn.init, $.fn.init的返回值是this. 也就是$()的返回值是$.fn.init的原型对象,
// 纠正 $()的返回值从 $.fn.init.prototype 变成 $.fn
$.fn.init.prototype = $.fn;
