/**
 * Created by mazouzi on 16/04/2017.
 */


var app = angular.module("MainApp",[]);

app.controller("CTRL", function ($scope) {
    $scope.activeProject = {};
    $scope.changeActiveProject = function(index){
        $scope.activeProject = index ;
    };


    $scope.list = [
        {
            name : "Rubber ducky project",
            madeBy : "Mazouzi Zakaryae",
            category : "Cyber-security , Electronics" ,
            img_url : "images/p1.JPG",
            description : "Take Social Engineering to the next level with a USB Rubber Ducky Deluxe hidden inside an inconspicuous thumb drive case. All the fixings included.  "
        },

        {name : "Computer vision project",
            madeBy : "Nouredine Ait Said",
            category : "image processing ,facial recognition" ,
            img_url : "images/p2.JPG",
            description : "Computer vision is an interdisciplinary field that deals with how computers can be made for gaining high-level understanding from digital images or videos. From the perspective of engineering, it seeks to automate tasks that the human visual system can do "
        },
        {name : "weather channel",
            madeBy : "Anas Errahali",
            category : "internet of things " ,
            img_url : "images/p3.JPG",
            description : "Send data from your thing to the cloud by dweeting it with a simple HAPI web API. You can also play with dweet.io using our API console."
        },
        {name : "weather channel",
            madeBy : "Anas Errahali",
            category : "internet of things " ,
            img_url : "images/p3.JPG",
            description : "Send data from your thing to the cloud by dweeting it with a simple HAPI web API. You can also play with dweet.io using our API console."
        },
        {name : "weather channel",
            madeBy : "Anas Errahali",
            category : "internet of things " ,
            img_url : "images/p3.JPG",
            description : "Send data from your thing to the cloud by dweeting it with a simple HAPI web API. You can also play with dweet.io using our API console."
        }
    ]


    $scope.projects  = false ;
    $scope.home = true ;
    $scope.about = false ;
    $scope.showProjects = function(){
        $scope.projects  = true ;
        $scope.home = false ;
        $scope.about = false ;
    };
    $scope.showHome = function(){
        $scope.projects  = false ;
        $scope.home = true ;
        $scope.about = false ;
    };
    $scope.showAbout = function() {
        $scope.projects = false;
        $scope.home = false;
        $scope.about = true;

    };


    });