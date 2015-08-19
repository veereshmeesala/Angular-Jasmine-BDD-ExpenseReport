describe('ExpensesController', function () {
    
    var $controllerConstructor;
    var scope;

    beforeEach(module('ngAppJasmineBDDDemo1'));

    beforeEach(inject(function ($controller, $rootscope) {
        $controllerConstructor = $controller;
        scope = $rootscope.$new();
    }));

    it('should have 3 expenses items ', function () {
        var ctrl = $controllerConstructor('ExpensesController', { $scope: scope });
        expect(ctrl.expensesItems.length).tobe(3);
    });

});