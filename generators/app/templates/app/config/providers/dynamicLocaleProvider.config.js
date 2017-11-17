/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file dynamicLocaleProvider.config on WebStorm
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
        'tmhDynamicLocaleProvider',
        'config'
    ];

    function config(tmhDynamicLocaleProvider, config) {
        tmhDynamicLocaleProvider
            .localeLocationPattern(config.localeLocationPattern);
    }

})(window.angular);