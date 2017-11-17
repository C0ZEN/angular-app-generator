/**
 * jscs:disable validateQuoteMarks
 */
(function (angular) {
    'use strict';

    angular
        .module('<%= appNameCamel %>')
        .constant('config'/* @if true **, /* @endif *//* @echo config */);

}(window.angular));