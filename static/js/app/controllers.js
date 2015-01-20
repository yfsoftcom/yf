app.controller('AppCtrl', ['$scope','$state',
  function($scope,$state) {
      console.log('Hello world! from AppCtrl');

}]);

app.controller('UserCtrl', ['$scope','$state',
    function($scope,$state) {
        console.log('Hello world! from UserCtrl');


        $scope.doLogin = function(user){
            console.log(user);
            $state.go('yf.view.page.desktop')
        }
    }]);

app.controller('DesktopCtrl', ['$scope','$state',
    function($scope,$state) {
        var initCalen = function(events){


            $('#calendar').fullCalendar({
                header: {
                    left: 'month,agendaWeek,agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                selectable: true,
                //selectHelper: true,
                editable: true,
                events: events,
                eventBackgroundColor: '#278ccf'
            });
        };

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        //将事件列表初始化到日历
        initCalen([
            {
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d-5),
                end: new Date(y, m, d-2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d-3, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d+1, 19, 0),
                end: new Date(y, m, d+1, 22, 30),
                allDay: false
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }
        ]);

        $(".popup .close-pop").click(function () {
            $(".new-event").fadeOut("fast");
        });

    }]);

app.controller('SidebarCtrl', ['$scope','$state',
    function($scope,$state) {
        console.log('Hello world! from SidebarCtrl');

    }]);

app.controller('NavbarCtrl', ['$scope','$state',
    function($scope,$state) {
        console.log('Hello world! from NavbarCtrl');
        $(".notification-dropdown").each(function (index, el) {
            var $el = $(el);
            var $trigger = $el.find('.trigger');
            var $dialog = $el.find('.pop-dialog');
            var $close = $el.find('.close-icon');

            $trigger.click(function(e){
                e.preventDefault();
                e.stopPropagation();

                $(".notification-dropdown .pop-dialog").removeClass("is-visible");
                $(".notification-dropdown .trigger").removeClass("active");

                $dialog.toggleClass("is-visible");
                if ($dialog.hasClass("is-visible")) {
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                }
            });
            $dialog.click(function (e) {
                e.stopPropagation();
            });
            $close.click(function(){
                $dialog.removeClass("is-visible");
                $trigger.removeClass("active");
            })
            $('body').click(function(){
                $dialog.removeClass("is-visible");
                $trigger.removeClass("active");
            });
        });


        $scope.signout = function($scope){
            alert('signOut');
            $state.go('yf.signin');
        }

    }]);



app.controller('DocumentCtrl', ['$scope','$state',
    function($scope,$state) {
        console.log('Hello world! from DocumentCtrl');


    }]);