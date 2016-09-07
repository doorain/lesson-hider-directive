angular.module('directivePractice')
.directive('lessonHider', function(){
  return {
    scope: {
      lesson: '=',
      dayAlert: '&'

    },
    templateUrl: './lessonHider.html',
    restrict: 'E',
    link: function(scope, element, attr){
      scope.getSchedule.then(function(response){
        scope.schedule = response.data;

      scope.schedule.forEach(function(scheduleDay){
        if(scheduleDay.lesson === scope.lesson){

          element.css('text-decoration', 'line-through');

          scope.lessonDay = scheduleDay.weekday;

          return;
        }
      })
    });
  },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
      }

  }


})
