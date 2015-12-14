(function(){
  'use strict';

  angular
  .module('mdr.datepicker', [])
  .directive('mdrDatepicker', [function(){
    /**
    * @param model {date}
    * @param date {date}
    * @param format {string}
    * @param placeholder {string}
    * @param disabled {boolean}
    * @param required {attribute}
    * <mdr-datepicker model="" date="" format="" placeholder="" disabled="" required></mdr-datepicker>
    */
    return {
      restrict: 'E',
      scope: {
        model: '=',
        date: '=',
        format: '@',
        placeholder: '@',
        disabled: '='
      },
      controller: 'mdrDatepickerCtrl',
      template: '<input type="text" class="form-control datepicker" id="datepickerId_{{$id}}" placeholder="{{placeholder}}" ng-model="model" ng-disabled="disabled">'
    };
  }])
  .controller('mdrDatepickerCtrl', ['$scope', '$element', '$attrs', '$filter', function($scope, $element, $attrs, $filter){

    initialize();

    // Si cambia el modelo se asigna el valor
    $scope.$watch('model', function(newValue, oldValue) {
      if(newValue !== undefined){
        if(newValue !== '0000-00-00'){
          var date = $filter('date')(newValue, $scope.format);
          console.log(date);
          $("#datepickerId_" + $scope.$id).datepicker('update', date);
        }else{
          $("#datepickerId_" + $scope.$id).datepicker('update', '');
        }
        $scope.date = $("#datepickerId_" + $scope.$id).datepicker('getDate');
      }
    });

    // Se crea el metodo que inicializa el datepicker
    function initialize(){
      // Se asignan los atributos que tendrá el datepicker
      $(".datepicker").datepicker({
        format: $scope.format,
        autoclose: true,
        todayHighlight: true,
        //language:"es"
      });
      setTimeout(function() {
        // Si la directiva contiene el attr required se agrega el attr required al datepicker
        if($attrs.required){
          $("#datepickerId_" + $scope.$id).attr('required','required');
        }
      },0);
    }

  }]);

})();
