define([], function() {

    var param = '';

    var activate = function(param1) {
        this.param = param1;
    };

    return {
        activate: activate,
        param: param
    };
});