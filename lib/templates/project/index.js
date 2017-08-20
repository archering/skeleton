require(['./config'],function(){
    require(['jquery','angular',
             './controllers/module',
             './directives/module',
             './services/module'],function($,angular){
        angular.module('app',['module.controllers','module.directives','module.services']);
        
        $(function(){
            angular.bootstrap(document,['app']);
        })
    });
});
