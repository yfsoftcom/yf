//yf app
var app = angular.module('app', ['ngAnimate','ui.router']);

app.run(function() {
    //angularjs 加载完成时会执行一次
    //console.log('app started up!');
});
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('yf',{
            url:'/yf',
            controller:'AppCtrl',
            templateUrl:'views/root.html'
        })
        //.state('yf.aa', {
        //    url:'/aa',
        //    views:{
        //        'navbar-view':{
        //            templateUrl:'views/navbar.html',
        //            controller:'NavbarCtrl'
        //        },
        //        'container-view':{
        //            templateUrl:'views/signin.html',
        //            controller:'UserCtrl'
        //        }
        //    }
        //})
        //.state('yf.signin', {
        //    url:'/signin',
        //    views:{
        //        'container-view':{
        //            templateUrl:'views/signin.html',
        //            controller:'UserCtrl'
        //        }
        //    }
        //})

        //.state('yf.v.page',{
        //    url:'/page',
        //    views:{
        //        'sidebar-view':{
        //            templateUrl:'views/sidebar.html'
        //        },
        //        'content-view':{
        //            template:'<div ui-view></div>'
        //        }
        //    }
        //})
        //.state('yf.v.page.main', {
        //    url:'/main',
        //    templateUrl:'views/main.html'
        //
        //})
        //.state('yf.v.personal', {
        //    url:'/personal',
        //    views:{
        //        'content-view':{
        //            templateUrl:'views/personal-info.html'
        //        }
        //    }
        //
        //
        //})

      ;

      $urlRouterProvider.otherwise('/yf');
});

