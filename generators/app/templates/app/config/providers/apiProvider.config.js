/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file apiProvider.config on WebStorm
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
        'altranApiProvider',
        'config'
    ];

    function config(altranApiProvider, config) {
        altranApiProvider
            .baseUrl(config.baseUrl);
    }

})(window.angular);