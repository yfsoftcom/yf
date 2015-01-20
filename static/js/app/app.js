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
            //templateUrl:'views/root.html'
            template:'<div ui-view="navbar-view"></div><div class="full-screen" ui-view="container-view"></div>'
        })
        .state('yf.view', {
            url:'/view',
            views:{
                'navbar-view':{
                    templateUrl:'views/navbar.html',
                    controller:'NavbarCtrl'
                },
                'container-view':{
                    template:'<div ui-view="sidebar-view"></div><div ui-view="content-view"></div>'
                }
            }
        })
        .state('yf.signin', {
            url:'/signin',
            views:{
                'container-view':{
                    templateUrl:'views/signin.html',
                    controller:'UserCtrl'
                }
            }
        })

        .state('yf.view.page',{
            url:'/page',
            views:{
                'sidebar-view':{
                    templateUrl:'views/sidebar.html',
                    controller:'SidebarCtrl'
                },
                'content-view':{
                    template:'<div ui-view></div>'
                }
            }
        })
        .state('yf.view.page.desktop', {
            cached:true,
            url:'/desktop',
            templateUrl:'views/desktop.html',
            controller:'DesktopCtrl'

        })
        .state('yf.view.page.document', {
            cached:true,
            url:'/document',
            templateUrl:'views/document.html',
            controller:'DocumentCtrl'

        })
        .state('yf.view.page.test', {

            url:'/test',
            templateUrl:'views/test.html'

        })
        .state('yf.view.personal', {
            url:'/personal',
            views:{
                'content-view':{
                    templateUrl:'views/personal-info.html'
                }
            }


        })

      ;

      $urlRouterProvider.otherwise('/yf/signin');
});

