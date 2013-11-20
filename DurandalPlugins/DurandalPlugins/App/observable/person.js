define(['plugins/observable'], function(observable) {
    var vm = {
        first: '',
        last: ''
    };

    observable.defineProperty(vm, 'fullName', function () {
        return this.first + ' ' + this.last;
    });
    observable.defineProperty(vm, 'hideWelcome', function() {
        return !this.first && !this.last;
    });

    return vm;
});