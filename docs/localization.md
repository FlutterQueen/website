---
title: localization
sidebar_position: 1
---

- [Introduction](#introduction)
- [translation](#translation)
  - [String](#string)
  - [Gender](#gender)
  - [Arguments](#arguments)
  - [Pluralization](#pluralization)
  - [numbers](#numbers)
- [Translation Loaders](#translation-loaders)
- [Configuration](#configuration)
    - [`loaders`](#loaders)
    - [`fallbackLocale`](#fallbacklocale)
    - [`baseLoader`](#baseloader)
    - [`supportedLocales`](#supportedlocales)
    - [`notFoundBuilder`](#notfoundbuilder)
    - [`defaultGender`](#defaultgender)
- [Packages localization](#packages-localization)
  - [localize your Package](#localize-your-package)
  - [use package localization](#use-package-localization)
  - [override package localization](#override-package-localization)
- [Helpers](#helpers)

# Introduction

Queen support localization out of the box with almost any features you will need in your app it will be ready

set your assets in `assets/lang` and name the file in the language name or code or both

```
/assets
    /lang
        /ar.json
        /en_US.json
        /es.json
```

- and make sure to call `Nations.boot()` before using `runApp()`
- wrap your app in `NationsBuilder`

  ```dart
       runApp(
             NationsBuilder( builder: (ctx) => const MaterialApp(),
             ),
  );
  ```

# translation

## String

use the `.tr` extension to translate a string

```dart
 'welcome'.tr
```

## Gender

```dart
   /// * male translation
  'person'.trMale
   /// * female translation
  'person'.trFemale
   /// * default gender translation
  'person'.gender
```

## Arguments

```json
"max_length_is":"max length is :count"
```

and in your code

```dart
final msg = 'max_length_is'.args({"count":255});
```

## Pluralization

```dart
  'key'.plural(count,args)
```

## numbers

```dart
'123'.toLocale()
```

wil convert numbers to the current locale format

# Translation Loaders

by default nations load assets from `assets/lang` and it is the recommended way to do so,
but you can also load assets from anywhere you want maybe `API` or `Database` or any data Source

by extending `NationsLoader` class and impalement your own `load(Locale locale)` function
then set these loader as baseLoader in your config file

# Configuration

in `lib/config/lang.dart` you can configure your project with a child of `NationsConfig` class
and pass it to nations when booting to use your configuration

### `loaders`

a list of nations loaders to use
if your packages don't use nations leave it empty else add the package loader to provider localization for this package

### `fallbackLocale`

which locale to use in case of failure

### `baseLoader`

mostly you will not ot override this by if you want to load your translation form any place other than `assets/lang` make a loader and override this property with it

### `supportedLocales`

list of the supported locales

### `notFoundBuilder`

what to return in case of the key not founded be default it will return `"null"` a String contains a `null` keyword not a actual `null`

### `defaultGender`

the default gender to use when

```dart
'key'.gender
```

by default its a `Gender.male`

# Packages localization

## localize your Package

- add your package translation in `assets/lang` inside your package root folder
- build a loader to load your package with its very simple build a loader to load your package with `loadPackageTranslation` function
- **when you are using the translation extension add you package name concatenated with `"."` to your key**
- export your loader

## use package localization

- add the package loader to `loader` list in `lib/config/lang.dart` file

## override package localization

in `assets/lang/${lang}.json` add the the keys you want to override under the package name

example :

```json
"package_name":{
   "some_key" :"new value for this key"
}
```

and thats is 😅

# Helpers

- `capitalizeFirstChar(String)` to make the first word capital
- `capitalizeEachWord` to make every word capital in one line more entire paragraph
- `numberToLocale(String,[Locale?])` localize numbers based on locale
