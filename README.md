## Description
Angular application for DMTech company. This applicatin is a visit card of a company mentioned above.

## Author
Igor Sobolev - Junior Front-End developer.

## Version
The latest version is 1.0.1 has some fixes with layout and google analytics

## Tests
For tests project uses Karma runner and Jasmine framework. There are some unit tests in /tests/ folder. Coverage is 100% on written code.

##Translations
App is supporting multilingual angular library. Translations locate in /translations/ and named as LANGUAGE.json and you can add strings which be used to translate as key-value in json format.

## Adding new employees
There is a file people.json in /assets/json/ to which you can add new employee as this:

```
{
    "name": "ELENA_PECHKO",
    "role": "CEO",
    "social": [
        {
            "title": "vk",
            "class": "fa fa-vk",
            "url": "https://vk.com/id19169241"
        },
        {
            "title": "facebook",
            "class": "fa fa-facebook-square",
            "url": "https://www.facebook.com/elena.pechko"
        },
        {
            "title": "linkedin",
            "class": "fa fa-linkedin-square",
            "url": "https://www.linkedin.com/in/elena-pechko-54508757"
        }
    ]
}
```
The class property is for css class, url is for hyperlink, title could be used in development (but not used yet).

## Adding new technologies
There is a file technologies.json in /assets/json/ to which you can add new technology as this:

```
{
    "title": "IT_AND_WEB",
    "list": ["Spring Framework", "Hibernate", "node.js", "HTML5",
    "CSS3", "XML", "AngularJS", "JQuery", "MyBatis"]
}
```
The title property used as header of technologies and list contains all technologies of this type.

## Build and execute
To build itself project uses Grunt
To build project you can use command:
```
$ grunt build
```
To test project you can use command:
```
$ grunt test
```
To build and test project you can use grunt default:
```
$ grunt
```

To run this application recommended to use simple-angular-server, that supports html5 mode in which app is developed.
To install server use command:
```
$ npm install simple-angular-server -g
```
To run server use command:
```
$ angular-server --port PORT_NUMBER
```
For more information read [Angular Server](https://github.com/kashishgupta1990/simple-angular-server)