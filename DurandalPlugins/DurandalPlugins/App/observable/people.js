define(['domain/person'], function (person) {

    var people = [
        new person('justin'),
        new person('kenny'),
        new person('nik')
    ];

    var vm = {
        name: '',
        selectedPerson: people[0]
    };

    var add = function () {
        people.push(new person(vm.name));
    };

    var select = function (selected) {
        vm.selectedPerson = selected;
    };

    return {
        vm: vm,
        add: add,
        people: people,
        select: select
    };
});