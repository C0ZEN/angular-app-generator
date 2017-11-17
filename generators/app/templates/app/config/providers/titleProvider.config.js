/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file titleProvider.config on WebStorm
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
        'altranTitleProvider',
        'config'
    ];

    function config(altranTitleProvider, config) {
        altranTitleProvider
            .defaultTitle(config.defaultTitle);
    }

})(window.angular);