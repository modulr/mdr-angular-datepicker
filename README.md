# Angular Bootstrap Datepicker
Angular Bootstrap Datepicker is an Angularjs component that can replacement for datepicker boxes.

- [Demo](http://modulr.io/components/mdr-angular-datepicker/)

![](http://modulr.io/img/preview/mdr-angular-datepicker.png)

##Features

- Uses the native Angularjs scope for data binding
- Fast and lightweight
- Formats support


##Requirements

- [Angularjs](https://angularjs.org/)
- [Bootstrap 3.](http://getbootstrap.com/)
- [Bootstrap Datepicker.](https://github.com/eternicode/bootstrap-datepicker)

##Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/modulr/mdr-angular-datepicker/archive/master.zip)
- Clone the repo: `git clone https://github.com/modulr/mdr-angular-datepicker.git`.
- Install with [Bower](http://bower.io/): `bower install mdr-angular-datepicker`.
- Install with [npm](https://www.npmjs.com): `npm install mdr-angular-datepicker`.

##What's included

```
mdr-angular-datepicker/
  dist/
    ├── mdr-datepicker.js
    └── mdr-datepicker.min.js
```

##Documentation

####Usage

######Load JS

```html
<script href="mdr-angular-datepicker/dist/mdr-datepicker.min.js"></script>
```

######Code

```js
angular.module('MyApp', ['mdr.datepicker'])
```

######HTML View or Templates

> Basic Directive

```html
<mdr-datepicker model="input" date="output"></mdr-datepicker>
```

> Complete Directive (All attributes)

```html
<mdr-datepicker input="input" output="output" format="d/M/yyyy" lang="es" zindex="10000" placeholder="dd/M/yyyy" disabled="true" required="true"></mdr-datepicker>
```

####API

######Attributes

Attribute | Type | Description
--- | --- | ---
input | `date` | *Set date (Input).*
output | `date` | *Get date (Output).*
format | `string` | *It is date format.*
lang | `string` | *It is language of datepicker.*
zindex | `string` | *It is z-index of datepicker.*
placeholder | `string` | *Text into placeholder.*
disabled | `boolean` | *If required disable the component is marked as true.*
required | `boolean` | *If is required the component is marked as true.*

##How to contribute

All contributions are very welcome, We love it. There are several ways to help out:

- Create an [issue](https://github.com/modulr/mdr-angular-datepicker/issues) on GitHub, if you have found a bug
- Write test cases for open bug issues
- Write patches for open bug/feature issues, preferably with test cases included
- Contribute to the documentation

There are a few guidelines that we need contributors to follow so that we have a chance of keeping on top of things.

If you want to making changes Better avoid working directly on the `master` branch, to avoid conflicts if you pull in updates from origin, so, if make your contribution under the branch [`dev`](https://github.com/modulr/mdr-angular-datepicker/tree/dev), into folder `src/`.

##Community

- Implementation help may be found at Stack Overflow (tagged [`mdr-datepicker`](http://stackoverflow.com/questions/tagged/mdr-datepicker)).

##Creators

[@AlfredoBarronC](https://twitter.com/AlfredoBarronC)

## Copyright and license

Code and documentation (c) Copyright 2015 Modulr. Code published under [license MIT](https://github.com/modulr/mdr-angular-datepicker/blob/master/LICENSE)
