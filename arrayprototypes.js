Array.prototype.contains = function (response) {
    var i;
    var a = this;
    for (i = 0; i < a.length; i++){
        if (a[i] === response) {
            return true;
        }
    }
    return false;
};

Array.prototype.map = function (fun) {
    var new_array = [];
    var a = this;
    for (var i = 0; i < a.length; i++){
        new_array[i] = fun(a[i]);
    }
    return new_array;
};

Array.prototype.reduce = function (fun) {
    var a = this;
    var current_value = 0;
    for (var i = 0; i < a.length; i++){
        current_value += fun(a[i]);
    }
    return current_value;
};

Array.prototype.join = function(separator){
    var a = this;
    var current_string = "";
    for (var i = 0; i < a.length; i++){
        current_string += (a[i] + separator);
    }
    return current_string.slice(0, (current_string.length - 1));
};

Array.prototype.select = function (fun) {
    var a = this;
    var new_array = [];
    for (var i = 0; i < a.length; i++){
        if (fun(a[i]) === true){
            new_array.push(a[i]);
        }
    }
    return new_array;
};

Array.prototype.reject = function (fun) {
    var a = this;
    var new_array = [];
    for (var i = 0; i < a.length; i++){
        if (fun(a[i]) === false){
            new_array.push(a[i]);
        }
    }
    return new_array;
};


