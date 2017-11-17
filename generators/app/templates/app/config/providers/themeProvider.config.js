/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file themeProvider.config on WebStorm
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
        'altranThemeProvider',
        'config'
    ];

    function config(altranThemeProvider, config) {
        altranThemeProvider
            .setCurrent(config.theme);
    }

})(window.angular);