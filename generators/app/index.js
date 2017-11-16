(function () {
    'use strict';

    const Generator = require('yeoman-generator');
    const chalk     = require('chalk');
    const yosay     = require('yosay');
    const kebabCase = require('kebab-case');
    const camelCase = require('camelcase');
    const debug     = true;

    module.exports = class extends Generator {
        constructor($args, $opts) {
            super($args, $opts);

            this.logFnCalled = function ($target) {
                if (debug) {
                    this.log(chalk.magenta('[') + chalk.yellow($target) + chalk.magenta(']'), 'Called');
                }
            };

            this.copyFile = function ($path) {
                this.fs.copy(
                    this.templatePath($path),
                    this.destinationPath($path)
                );
            };

            this.copyFileTpl = function ($path, $data) {
                this.fs.copyTpl(
                    this.templatePath($path),
                    this.destinationPath($path),
                    $data
                );
            };
        }

        initializing() {
            this.logFnCalled('initializing');
            this.log(yosay(
                'Welcome to the wonderful ' + chalk.red('generator-app') + ' generator !'
            ));

            const prompts = [
                {
                    type   : 'confirm',
                    name   : 'areYouReady',
                    message: 'Are you ready to set up your app ?',
                    default: true
                }
            ];

            return this.prompt(prompts).then($response => {
                this.areYouReady = $response.areYouReady;
            });
        }

        prompting() {
            this.logFnCalled('prompting');

            const prompts = [
                {
                    type   : 'input',
                    name   : 'appName',
                    message: 'Name of your app :',
                    default: 'myApp'
                }
            ];

            return this.prompt(prompts).then($response => {
                this.appName      = camelCase($response.appName);
                this.appNameKebab = kebabCase($response.appName);
                this.log('The app name in camelCase is :', chalk.cyan(this.appName));
                this.log('The app name in kebab-case is :', chalk.cyan(this.appNameKebab));
            });
        }

        configuring() {
            this.logFnCalled('configuring');
        }

        writing() {
            this.logFnCalled('writing');

            this.copyFile('.gitignore');
            this.copyFile('.jscsrc');
            this.copyFile('.jshintrc');
            this.copyFileTpl('bower.json', {
                appNameKebab: this.appNameKebab
            });
            this.copyFile('CHANGELOG.md');
            this.copyFile('CONTRIBUTING.md');
            this.copyFile('Gruntfile.js');
            this.copyFile('LICENSE.md');
            this.copyFileTpl('package.json', {
                appNameKebab: this.appNameKebab
            });
            this.copyFile('README.md');
        }

        conflicts() {
            this.logFnCalled('conflicts');
        }

        install() {
            this.logFnCalled('install');

            this.npmInstall([
                'grunt'
            ], {
                'save-dev': true
            });

            this.bowerInstall([
                'angular',
                'angular-animate'
            ], {
                'save-dev': false
            });
        }

        end() {
            this.logFnCalled('end');
            this.log(chalk.cyan('That\'s all folks !'));
            this.log(chalk.cyan('Your project is ready ;)'));
        }
    };
}());
