(function(){
    'use strict';

    angular
    .module('mdr.datepicker', [])
    .directive('mdrDatepicker', [function(){
        /**
        * @param model {date}
        * @param date {date}
        * @param format {string}
        * @param lang {string}
        * @param zindex {string}
        * @param placeholder {string}
        * @param disabled {boolean}
        * @param required {boolean}
        */
        return {
            restrict: 'E',
            controller: 'mdrDatepickerCtrl',
            scope: {
                input: '=',
                output: '=',
                format: '@',
                lang: '@',
                zindex: '@',
                placeholder: '@',
                disabled: '=',
                required: '='
            },
            template: '<input type="text" class="form-control datepicker" id="datepickerId_{{$id}}" placeholder="{{placeholder}}" ng-model="input" ng-disabled="disabled" ng-required="required">'
        };
    }])
    .controller('mdrDatepickerCtrl', ['$scope', '$element', '$attrs', '$filter', function($scope, $element, $attrs, $filter){

        initialize();

        // Si cambia el modelo se asigna el valor
        $scope.$watch('input', function(newValue, oldValue) {
            if(newValue !== undefined){
                if(newValue !== '0000-00-00'){
                    var newDate = $filter('date')(newValue, $scope.format);
                    setTimeout(function(){
                        $("#datepickerId_" + $scope.$id).datepicker('update', newDate);
                    },0);
                }else{
                    setTimeout(function(){
                        $("#datepickerId_" + $scope.$id).datepicker('update', '');
                    },0);
                }
                setTimeout(function(){
                    $scope.output = $("#datepickerId_" + $scope.$id).datepicker('getDate');
                    $scope.$apply();
                },0);
            }
        });

        // Se crea el metodo que inicializa el datepicker
        function initialize(){
            // Se asignan los atributos que tendrá el datepicker
            $(".datepicker").datepicker({
                format: $scope.format,
                autoclose: true,
                todayHighlight: true,
                zIndexOffset: $scope.zindex,
                language: $scope.lang
            });
        }

    }]);

})();
