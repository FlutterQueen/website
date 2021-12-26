---
title: List
sidebar_position: 1
---


## on `List`

### count

 returns the list length

```dart
final items =[1,2,3,4];
print(items.count()); // 4
```
### countWithoutNull

return the length without null elements


```dart
final items =[1,2,3,4,null];
print(items.countWithoutNull()); // 4
```
### loop

 async for each


```dart
Future<void> fun()async {
int count = 0;
final numbers = [1, 2, 3, 4, 5, 6];
await numbers.loop((v) {
        count++;
      });
print(items.countWithoutNull()); // 4
}
```

### withoutDuplicate

return a list without duplicate elements


```dart
final items =[1,2,2,4,4];
print(items.withoutDuplicate()); // [1,2,4]
```
### random

return a random element from list

```dart
final items =[1,2,3];
print(items.random); // random item
```
### firstOr

return first element if list is not empty
else return the default value
```dart
final items =[1,2,3];
print(items.firstOr(5)); // 1
print([].firstOr(5)); // 5
```
### firstOrNull

return the first element if list is not empty
else return  null
```dart
final items =[1,2,3];
print(items.firstOrNull()); // 1
print([].firstOrNull()); // null
```
### lastOr
return last element if list is not empty
else return the default value
```dart
final items =[1,2,3];
print(items.lastOr(5)); // 3
print([].lastOr(5)); // 5
```
### lastOrNull

return the last element if list is not empty
else return  null
```dart
final items =[1,2,3];
print(items.lastOrNull()); // 3
print([].lastOrNull()); // null
```
### atOr

return element by index
if index si out of range will return the value
```dart
final items =[1,2,3];
print(items.atOr(1,3)); // 2
print([].atOr(1,3)); // 3
```
### atOrNull

return element by index
if index  out of range will return null
```dart
final items =[1,2,3];
print(items.atOrNull(1)); // 2
print([].atOrNull(1)); // null
```
### firstWhereOrNull

return the first match
else will return null
```dart
final items =[1,2,3];
print(items.firstWhereOrNull((e) => e % 2 == 0)); // 2
print([].firstWhereOrNull((e) => e % 2 == 0)); // null
```
### mapWithIndex
 like `map()`  function but now you have the index with the element
```dart
final items =[1,2,3];
print(items.mapWithIndex((index, e) => index)); // [0,1,2]

```
### takeUntil
The takeUntil method returns items in the collection until the given callback returns true
If callback never returns true, the takeUntil method will return all items in the collection.
```dart
final items =[1,2,3];
print(items.takeUntil((e) => e % 2 == 0)); // [2]
print(items.firstWhereOrNull((e) => e * 2 == 0)); // [1,2,3]
```



