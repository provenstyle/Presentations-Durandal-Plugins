define([], function() {

    var paramOne = '';
    var paramTwo = '';

    var activate = function(first, second) {
       this.paramOne = first;
       this.paramTwo = second;
    };

    return {
        activate: activate,
        paramOne: paramOne,
        paramTwo: paramTwo
    };
});