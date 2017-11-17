/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file appProvider.config on WebStorm
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
        'altranAppProvider',
        'config'
    ];

    function config(altranAppProvider, config) {
        altranAppProvider
            .version(config.app.version)
            .name(config.app.name)
            .target(config.target);
    }

})(window.angular);