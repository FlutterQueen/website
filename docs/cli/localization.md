---
title: LH - localization
sidebar_position: 3
---

# **`tr`**

the LH can make localization better by validating and generating files for your project

# **`make`** command

```
lh tr:make
```

will do the following:

- checks if the any key is missing
- checks id any key is empty
- generate a `TR` file holding all the keys
- the `TR` file will contains comments for each key
  - ```dart
     ///  `ar` => `التاريخ`
    ///   `en` => `date`
          static String get date => 'date';
    ```
