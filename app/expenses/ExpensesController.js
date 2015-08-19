(function () {

    'use strict';

    angular.module('ngAppJasmineBDDDemo1')
            .controller('ExpensesController', ExpensesController);

    ExpensesController.$inject = ['ExpensesController'];
    function ExpensesController() {
        var vm = this;
        vm.activate = activate;
        vm.expensesItems = [];
        activate();
        function activate() {
            return vm.expensesItems = [
                { title: 'taxi' },
                { title: 'car' },
                { title: 'cycle' }
            ];
        }
    }


})();