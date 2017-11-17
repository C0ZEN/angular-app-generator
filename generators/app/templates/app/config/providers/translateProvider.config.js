/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file translateProvider.config on WebStorm
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
        '$translateProvider',
        'config'
    ];

    function config($translateProvider, config) {
        $translateProvider
            .useSanitizeValueStrategy(config.useSanitizeValueStrategy)
            .useStaticFilesLoader({
                    prefix: config.useStaticFilesLoader.prefix,
                    suffix: config.useStaticFilesLoader.suffix
                }
            )
            .preferredLanguage(config.defaultLanguage);
    }

})(window.angular);