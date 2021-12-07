---
title: LH - assets
sidebar_position: 2
---

# **`assets`**

the LH can make help with assets by validating and generating files for your project

# **`make`** command

```
lh assets:make
```

will do the following:

- checks if the assets is un-useable (you forgot to add the assets to your project pubspec.yaml)
- if is un-usable to will mark the generated file as `Deprecated`
- generate a `Assets` class holding all the keys (path to your asset)
- the `TR` file will contains comments for each key with the type of the file
  - ```dart
     ///  mp3
          static String get sound => 'assets/sound.mp3';
    ```
