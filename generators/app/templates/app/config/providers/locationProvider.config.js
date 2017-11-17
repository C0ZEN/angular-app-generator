/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file locationProvider.config on WebStorm
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
        '$locationProvider',
        'config'
    ];

    function config($locationProvider, config) {
        $locationProvider
            .html5Mode({
                enabled    : config.html5Mode.enabled,
                requireBase: config.html5Mode.requireBase
            })
            .hashPrefix(config.hashPrefix);
    }

})(window.angular);