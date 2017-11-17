/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file debugProvider.config on WebStorm
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
        'altranDebugProvider',
        'config'
    ];

    function config(altranDebugProvider, config) {
        altranDebugProvider
            .compile(config.compile)
            .logsEnabled(config.logs.enabled);
    }

})(window.angular);