---
title: list<num>
sidebar_position: 2
---

## on `List<num>`


## sum
return list summation
return `0` if list is empty
```dart
final items =[1,2,3];
final total = items.sum();//6
```
## average
return list average
throws `StateError` is the list is empty
```dart
final items =[6,3,3];
final total = items.average();//4
```
## averageOr
return list average
if list is empty will return the value
```dart
final items =[6,3,3];
final total = items.averageOr(5);//4
final print([].averageOr(5));//5
```
## averageOrZero
return the average of the list
return `0` if list is empty .
```dart
final items =[6,3,3];
final total = items.averageOrZero();//4
final print([].averageOrZero());//0
```
## averageOrNull
return the average of the list if list empty return null.
```dart
final items =[6,3,3];
final total = items.averageOrNull();//4
final print([].averageOrNull());//null
```
## averageOrThrow
return list average
throws `StateError` is the list is empty
```dart
final items =[6,3,3];
final total = items.averageOrThrow();//4
```

## max
Max value of the list
```dart
final items =[6,3,3];
final total = items.max();//6
final print([7,99].max());//99
```
## maxOrZero
Returns the maximum value in the list if list empty return zero.
```dart
final items =[6,3,3];
final total = items.maxOrZero();//6
final print([].maxOrZero());//0
```
## maxOr
Returns the maximum value in the list if list empty return value.
```dart
final items =[6,3,3];
final total = items.maxOr(4);//6
final print([].maxOr(4));//4
```
## maxOrNull
Returns the maximum value in the list if list empty return Null.
```dart
final items =[6,3,3];
final total = items.maxOrNull();//6
final print([].maxOrNull());//null
```
## maxOrThrow
Returns the maximum value in the list if list empty throw  StateError.
```dart
final items =[6,3,3];
final total = items.maxOrThrow();//6
final print([].maxOrThrow());//StateError
```
## min
min value of the list
```dart
final items =[6,3,3];
final total = items.min();//3
final print([7,99].min());//7
```
## minOrZero
Returns the minimum value in the list if list empty return zero.
```dart
final items =[6,3,3];
final total = items.minOrZero();//3
final print([].minOrZero());//0
```
## minOr
Returns the minimum value in the list if list empty return value.
```dart
final items =[6,3,3];
final total = items.minOr(4);//3
final print([].minOr(4));//4
```
## minOrNull
Returns the minimum value in the list if list empty return Null.
```dart
final items =[6,3,3];
final total = items.minOrNull();//3
final print([].minOrNull());//null
```
## minOrThrow
Returns the minimum value in the list if list empty throw  StateError.
```dart
final items =[6,3,3];
final total = items.minOrThrow();//3
final print([].minOrThrow());//StateError
```