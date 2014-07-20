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
