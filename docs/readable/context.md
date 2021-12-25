---
title: BuildContext
sidebar_position: 2
---

## on `BuildContext`

Example ::

```dart
Widget build(BuildContext context){
  /// replace the shortcut with any from below
  final result = context.shortcut;
}
```

| Type         | shortcut  | Stands For                           |
| ------------ | --------- | ------------------------------------ |
| `double`     | width     | `MediaQuery.of(context).size.width`  |
| `double`     | height    | `MediaQuery.of(context).size.height` |
| `ThemeData`  | theme     | `Theme.of(this)`                     |
| `TextStyle?` | bodyText1 | `Theme.of(this).textTheme.bodyText1` |
| `bool`       | canPop    | `Navigator.of(context).canPop`       |
