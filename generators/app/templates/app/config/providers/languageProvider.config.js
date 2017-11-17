/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file languageProvider.config on WebStorm
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
        'altranLanguageProvider',
        'config'
    ];

    function config(altranLanguageProvider, config) {
        altranLanguageProvider
            .setCurrent(config.defaultLanguage);
    }

})(window.angular);