require.config({
    urlArgs:"rnd="+(new Date()).getTime(),
    paths:{
        'jquery':'../../node_modules/jquery/dist/jquery.min',
        'bootstrap':'../../node_modules/bootstrap/dist/js/bootstrap.min',
        'angular':'../../node_modules/angular/angular.min'
    },
    shim:{
        'angular':{
            exports:"angular",
            'deps':['jquery']
        },
        'bootstrap':{
            'deps':['jquery']
        }
    }
});
