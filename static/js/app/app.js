//yf app
var app = angular.module('app', ['ui.router']);

app.run(function() {
    //angularjs 加载完成时会执行一次
    //console.log('app started up!');
});
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('yf', {
            abstract:true,
            url: "/yf"
        })
        .state('signin', {
            url: "/signin",
            controller:'UserCtrl',
            views:{
                'navbar-view':{},
                'sidebar-nav-view':{},
                'content-view': { templateUrl: 'views/signin.html'}
            }
        })
        //.state('yf.main', {
        //    url: "/main",
        //    views:{
        //        'navbar-view':{ templateUrl: 'views/navbar.html'},
        //        'sidebar-nav-view':{ templateUrl: 'views/sidebar.html'},
        //        'content-view': { templateUrl: 'views/main.html',controller:'AppCtrl'}}
        //})
        //
      ;

      $urlRouterProvider.otherwise('/sign');
});

