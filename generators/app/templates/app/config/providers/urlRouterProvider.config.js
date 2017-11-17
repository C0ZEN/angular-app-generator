/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file urlRouterProvider.config on WebStorm
 *
 * Created by: <%= authorShort %>
 * Date: <%= nowDate %>
 * Time: <%= nowTime %>
 * Version: 0.0.0
 */
(function (angular) {
    'use strict';

    angular
        .module('<%= appNameCamel %>')
        .config(config);

    config.$inject = [
        '$urlRouterProvider',
        'config'
    ];

    function config($urlRouterProvider, config) {
        $urlRouterProvider
            .otherwise(config.urlOtherwise);
    }

})(window.angular);