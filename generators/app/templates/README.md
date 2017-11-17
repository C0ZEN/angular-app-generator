# <%= appName %>

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<%= appDescription %>

### Usage

## Getting Started

This project use `Grunt` to handle development and version control.

Use `grunt serve` to start the development node server.  

Use `grunt release:target` to create a new release version where `target` is an environment target from the list below.  

- test
- preprod
- prod

## Running the tests

## Contributing

If you want to contribute, make sure to follow the rules in the [CONTRIBUTING](CONTRIBUTING.md) file.

## Versions

Read the [CHANGELOG](CHANGELOG.md) to see the complete list of versions.

## Dependencies maintainability

This project use `npm-check-updates` to keep the dependencies easily up-to-date.

Make sure to install `npm-check-updates` as global dependency.  
Use `npm install npm-check-updates -g` to do it.

Use `ncu` to see the complete list of out-of-date dependencies.

Use `ncu -u` to update all the npm dependencies.

Use `ncu -m bower` to update all the bower dependencies.

## Authors

* **<%= authorShort %>** <<%= authorEmail %>>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.