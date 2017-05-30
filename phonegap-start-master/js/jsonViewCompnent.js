	var app = angular.module('myApp', []);

  /*---------root scope-----------*/

    app.run(function($rootScope) {
      $rootScope.url = "http://localhost:8080/studyApp/webapi/javaQnA/";
    });

/*---------save Q n A-----------*/

	app.controller('myCtrl', function($scope,$rootScope) {
	    $scope.listHeader = "";

       //$('#javaLink').click( function(){
     $scope.getJsonList = function(callback){
     	
        $.ajax({
        url: $rootScope.url,
        type: 'GET',
         crossDomain: true,
        success: function(data) {
            if($scope.createList(data)){
            //	console.log('2')
            	window[callback]();
            }

        },
        error:function(data) {
          alert("ERROR: "+data.statusText);
          
        }
  		});
  		//console.log('3')
    }//);

       $scope.createList = function(data){

		var headerHtmlCode = "<div id='listHeader'>"+data.listTitle+"</div>";
		$('.jsonList').append(headerHtmlCode);

		var listHtmlCode = "<div class='list-group'><a href='#' class='list-group-item'>Question1</a> </div>";
		$('#listHeader').append(listHtmlCode);

		var listHtmlCode1 = "<a href='#' class='list-group-item'>Question2</a>";
		$('.list-group').append(listHtmlCode1);

		console.log('1')
		return true;
		}
            
	});


/*---------save Q n A-----------*/
app.controller("addQuestionsController", addQnAControlFunc);
function addQnAControlFunc($scope, $rootScope){


/*$scope.jsonData =  " {"+
    +"answer : "+ $scope.answer+",
    "question":  $scope.question,
    "serialNo": 0
  }";*/
$scope.saveQnA = function(){
var jsonData = {};
jsonData.answer = $scope.answer;
jsonData.question = $scope.question;
     alert(JSON.stringify(jsonData));
 
        $.ajax({
        url: $rootScope.url,
        type: 'POST',
        crossDomain: true,
        data: JSON.stringify(jsonData),
        contentType: "application/json; charset=utf-8",
        success: function(data) {
           

        },
        error:function(data) {
          alert("ERROR: "+data.statusText);
          
        }
      });
      //console.log('3')
    }//);
}

