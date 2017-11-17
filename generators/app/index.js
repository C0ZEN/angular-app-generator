(function () {
    'use strict';

    // Const
    const Generator       = require('yeoman-generator');
    const chalkInstance   = require('chalk');
    const chalk           = new chalkInstance.constructor({
        level  : 3,
        enabled: true
    });
    const yosay           = require('yosay');
    const kebabCase       = require('lodash.kebabcase');
    const camelCase       = require('camelcase');
    const upperCase       = require('upper-case');
    const upperPythonCase = require('case').constant;
    const moment          = require('moment');
    const mkdirp          = require('mkdirp');
    const _               = require('lodash');
    const colors          = {
        orange  : '#e67e22',
        red     : '#e74c3c',
        blue    : '#3498db',
        cyan    : '#1abc9c',
        green   : '#2ecc71',
        grey    : '#bdc3c7',
        darkGrey: '#7f8c8d',
        white   : '#ecf0f1',
        navy    : '#2c3e50'
    };

    // Config
    const debug       = true;
    const skipInstall = true;

    module.exports = class extends Generator {
        constructor($args, $opts) {
            super($args, $opts);

            this.logFnCalled = $target => {
                if (debug) {
                    this.log(chalk.hex(colors.blue)('[' + $target + ']'),
                        'Called');
                }
            };

            this.logPriority = ($priority, $spaceBefore) => {
                if ($spaceBefore) {
                    this.log('');
                }
                this.log(chalk.hex(colors.orange).bold('>>> %s <<<\n'),
                    upperCase($priority));
            };

            this.copyFile = $path => {
                this.fs.copy(
                    this.templatePath($path),
                    this.destinationPath($path)
                );
            };

            this.copyFileTpl = ($path, $data) => {
                this.fs.copyTpl(
                    this.templatePath($path),
                    this.destinationPath($path),
                    $data
                );
            };

            this.copyFileTplWithMultipleDestinations = ($path, $data, $destinations) => {
                _.forEach($destinations, $destination => {
                    this.fs.copyTpl(
                        this.templatePath($path),
                        this.destinationPath($destination),
                        $data
                    );
                });
            };

            this.newDirectory = $paths => {
                if (_.isArray($paths)) {
                    _.forEach($paths, $path => {
                        mkdirp.sync($path);
                    });
                }
                else {
                    mkdirp.sync($paths);
                }
            };
        }

        initializing() {
            this.logPriority('initializing');

            moment.locale('en');

            this.log(yosay('Welcome to the wonderful ' + chalk.hex(colors.red)('generator-app') + ' generator !'));

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
            this.logPriority('prompting', true);
        }

        appName() {
            const prompts = [
                {
                    type   : 'input',
                    name   : 'appName',
                    message: 'Name of your app :',
                    default: 'My App'
                }
            ];

            return this.prompt(prompts).then($response => {
                this.appName            = $response.appName;
                this.appNameCamel       = camelCase($response.appName);
                this.appNameKebab       = kebabCase($response.appName);
                this.appNameUpperPython = upperPythonCase($response.appName);
                this.log('The app name in camelCase is :',
                    chalk.hex(colors.cyan)(this.appNameCamel));
                this.log('The app name in kebab-case is :',
                    chalk.hex(colors.cyan)(this.appNameKebab));
                this.log('The app name in UPPER_PYTHON_CASE is :',
                    chalk.hex(colors.cyan)(this.appNameUpperPython));
                this.log();
            });
        }

        appDescription() {
            const prompts = [
                {
                    type   : 'input',
                    name   : 'appDescription',
                    message: 'Description of your app :'
                }
            ];

            return this.prompt(prompts).then($response => {
                this.appDescription = $response.appDescription;
                this.log();
            });
        }

        theme() {
            this.log('Current theme list :');
            this.log(chalk.hex(colors.cyan)('origin'));
            this.log(chalk.hex(colors.cyan)('altran-portail-france'));
            this.log(chalk.hex(colors.cyan)('et-banking'));

            const prompts = [
                {
                    type   : 'input',
                    name   : 'theme',
                    message: 'Default altran-angular-lib theme :',
                    default: 'origin',
                    store  : true
                }
            ];

            return this.prompt(prompts).then($response => {
                this.theme = $response.theme;
                this.log();
            });
        }

        lang() {
            this.log('Current lang list :');
            this.log(chalk.hex(colors.cyan)('fr'));
            this.log(chalk.hex(colors.cyan)('en'));

            const prompts = [
                {
                    type   : 'input',
                    name   : 'lang',
                    message: 'Default altran-angular-lib lang :',
                    default: 'fr',
                    store  : true
                }
            ];

            return this.prompt(prompts).then($response => {
                this.lang = _.lowerCase($response.lang);
                this.log();
            });
        }

        author() {
            const prompts = [
                {
                    type    : 'input',
                    name    : 'authorFirstName',
                    message : 'Your first name :',
                    store   : true,
                    validate: $value => {
                        return $value ? true : 'Your first name could not be empty !';
                    }
                },
                {
                    type    : 'input',
                    name    : 'authorLastName',
                    message : 'Your last name :',
                    store   : true,
                    validate: $value => {
                        return $value ? true : 'Your last name could not be empty !';
                    }
                }
            ];

            return this.prompt(prompts).then($response => {
                this.authorFirstName = $response.authorFirstName;
                this.authorLastName  = $response.authorLastName;
            });
        }

        authorEmail() {
            const prompts = [
                {
                    type   : 'input',
                    name   : 'authorEmail',
                    message: 'Your email (altran) :',
                    default: _.lowerCase(this.authorFirstName) + '.' + _.lowerCase(this.authorLastName) + '@altran.com'
                }
            ];

            return this.prompt(prompts).then($response => {
                this.authorEmail = $response.authorEmail;
                this.authorShort = this.authorFirstName + ' ' + this.authorLastName;
                this.authorLong  = this.authorFirstName + ' ' + this.authorLastName + ' ' + this.authorEmail;
                this.log();
            });
        }

        configuring() {
            this.logPriority('configuring', true);

            this.now     = moment();
            this.nowDate = this.now.format('DD/MM/YYYY');
            this.nowTime = this.now.format('HH:mm');

            this.log('Now :', chalk.hex(colors.cyan)(this.nowDate, this.nowTime));
            this.log();
        }

        writing() {
            this.logPriority('writing', true);

            // Default architecture
            this.copyFile('.bowerrc');
            this.copyFile('.editorconfig');
            this.copyFile('.gitattributes');
            this.copyFileTpl('.gitignore', {
                appNameKebab: this.appNameKebab
            });
            this.copyFile('.jscsrc');
            this.copyFile('.jshintrc');
            this.copyFileTpl('bower.json', {
                appNameKebab: this.appNameKebab,
                theme       : this.theme
            });
            this.copyFile('CHANGELOG.md');
            this.copyFile('CONTRIBUTING.md');
            this.copyFileTpl('Gruntfile.js', {
                appNameCamel: this.appNameCamel,
                appNameKebab: this.appNameKebab
            });
            this.copyFileTpl('manifest.json', {
                lang          : this.lang,
                appDescription: this.appDescription,
                appName       : this.appName
            });
            this.copyFileTpl('LICENSE.md', {
                appName: this.appName
            });
            this.copyFileTpl('package.json', {
                appNameKebab  : this.appNameKebab,
                appDescription: this.appDescription,
                authorLong    : this.authorLong
            });
            this.copyFileTpl('README.md', {
                appName       : this.appName,
                appDescription: this.appDescription,
                authorShort   : this.authorShort,
                authorEmail   : this.authorEmail
            });

            // App architecture
            this.copyFileTpl('app/config/providers/languageProvider.config.js', {
                appNameKebab: this.appNameKebab,
                appNameCamel: this.appNameCamel,
                authorShort : this.authorShort,
                nowDate     : this.nowDate,
                nowTime     : this.nowTime
            });
            this.copyFileTplWithMultipleDestinations('app/config/targets/config.json', {
                lang        : this.lang,
                theme       : this.theme,
                appName     : this.appName,
                appNameKebab: this.appNameKebab
            }, [
                'app/config/targets/config.dev.json',
                'app/config/targets/config.test.json',
                'app/config/targets/config.prod.json',
                'app/config/targets/config.preprod.json'
            ]);
            this.copyFileTpl('app/config/tpls/index.tpl.html', {
                appNameCamel: this.appNameCamel,
                lang        : this.lang,
                appNameKebab: this.appNameKebab
            });
            this.copyFileTpl('app/config/tpls/target.config.tpl.js', {
                appNameCamel: this.appNameCamel
            });
            this.copyFileTpl('app/languages/en/global.json', {
                appNameUpperPython: this.appNameUpperPython,
                appName           : this.appName
            });
            this.copyFileTpl('app/languages/fr/global.json', {
                appNameUpperPython: this.appNameUpperPython,
                appName           : this.appName
            });
            this.copyFileTplWithMultipleDestinations('app/styles/less/app.less', {
                theme       : this.theme,
                appNameKebab: this.appNameKebab
            }, [
                'app/styles/less/' + this.appNameKebab + '.less'
            ]);
            this.copyFileTplWithMultipleDestinations('app/styles/less/app.loader.less', {
                theme: this.theme
            }, [
                'app/styles/less/' + this.appNameKebab + '.loader.less'
            ]);
            this.copyFileTplWithMultipleDestinations('app/styles/less/app.variables.less', {}, [
                'app/styles/less/' + this.appNameKebab + '.variables.less'
            ]);
            this.copyFileTpl('app/app.js', {
                appNameKebab: this.appNameKebab,
                appNameCamel: this.appNameCamel,
                authorShort : this.authorShort,
                nowDate     : this.nowDate,
                nowTime     : this.nowTime
            });

            this.newDirectory([
                'app/images',
                'app/images/gif',
                'app/images/jpg',
                'app/images/png',
                'app/images/svg',
                'app/medias',
                'app/medias/sounds',
                'app/medias/videos',
                'app/scripts',
                'app/scripts/directives',
                'app/scripts/filters',
                'app/scripts/services',
                'app/scripts/constants',
                'app/styles/css',
                'app/styles/less/override',
                'app/views/'
            ]);
        }

        conflicts() {
            this.logPriority('conflicts', true);
        }

        install() {
            this.logPriority('install', true);

            if (!skipInstall) {
                this.npmInstall([
                    'app',
                    'autoprefixer',
                    'autoprefixer-core',
                    'browser-window',
                    'cssnano',
                    'graceful-fs',
                    'grunt',
                    'grunt-angular-file-loader',
                    'grunt-angular-templates',
                    'grunt-autoprefixer',
                    'grunt-cache-pug-compile',
                    'grunt-concurrent',
                    'grunt-contrib-clean',
                    'grunt-contrib-concat',
                    'grunt-contrib-copy',
                    'grunt-contrib-cssmin',
                    'grunt-contrib-htmlmin',
                    'grunt-contrib-imagemin',
                    'grunt-contrib-jshint',
                    'grunt-contrib-less',
                    'grunt-contrib-pug',
                    'grunt-contrib-uglify',
                    'grunt-cssnano',
                    'grunt-filerev',
                    'grunt-google-cdn',
                    'grunt-jscs',
                    'grunt-less-imports',
                    'grunt-merge-json',
                    'grunt-newer',
                    'grunt-notify',
                    'grunt-pixrem',
                    'grunt-postcss',
                    'grunt-preprocess',
                    'grunt-prettier',
                    'grunt-string-replace',
                    'grunt-svgmin',
                    'grunt-usemin',
                    'grunt-wiredep',
                    'jasmine-core',
                    'jit-grunt',
                    'jshint-stylish',
                    'karma',
                    'karma-jasmine',
                    'karma-phantomjs-launcher',
                    'less-plugin-autoprefix',
                    'minimatch',
                    'ng-simple-webrtc',
                    'phantomjs-prebuilt',
                    'pixrem',
                    'prettier',
                    'pug',
                    'pug-inheritance',
                    'time-grunt'
                ], {
                    'save-dev': true
                });

                this.bowerInstall([
                    'reset-css',
                    'jquery',
                    'angular',
                    'angular-aria',
                    'angular-animate',
                    'angular-cookies',
                    'angular-messages',
                    'angular-resource',
                    'angular-route',
                    'angular-sanitize',
                    'angular-touch',
                    'moment',
                    'angular-translate',
                    'angular-uuid-service',
                    'angular-logex',
                    'angular-ui-router',
                    'angular-translate-loader-static-files',
                    'angular-translate-loader-url',
                    'angular-translate-loader-partial',
                    'chance',
                    'angular-dynamic-locale',
                    'lodash',
                    'animate.css',
                    'angular-local-storage'
                ], {
                    'save-dev': false
                });
            }
            else {
                this.log(chalk.hex(colors.blue)('Install was skipped.'));
            }
        }

        end() {
            this.logPriority('end', true);
            this.log(chalk.hex(colors.green)('That\'s all folks !'));
            this.log(chalk.hex(colors.green)('Your project is ready ;)\n'));
            this.log('Use the',
                chalk.hex(colors.navy).bgHex(colors.grey)('grunt-cli'),
                'or use',
                chalk.hex(colors.navy).bgHex(colors.grey)('grunt serve'),
                'to start the server.');
        }
    };
}());
