angular.module('directivePractice').controller('lessonCtrl',function($scope){
  $scope.lessonArr = ['Services', 'Routing', 'Directives', 'Review', 'Firebase',
   'No server project', 'Node', 'Express', 'Mongo'];

  $scope.test = "two-way Data Binding!";

  $scope.announceDay = function(lesson, day){
    if(!day){
      alert("You should learn this on your own!")
    }
    else {
    alert(lesson + ' is active on '+ day + ".");
  }
  }

})
