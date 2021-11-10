---
title: validation
sidebar_position: 2
---

# Form validation

just like the flutter says to do with forms queen do it in the same way just take the burden of the validation logic from you

- create a from , add the fields , set the roles and you are done

## Validate Forms

```dart
@override
Widget build(BuildContext context) {
return TextFormField(
     // use qValidator function and provider list of rules to apply on this field
    validator: qValidator([
      IsRequired(),
      IsOptional()
      IsEmail(),
      MinLength(8),
      MaxLength(30, "optionally you can override the failure if the validation fails"),
    ]),
  );
  }
```

# variables validation

```dart
const badEmail = 'QueenRoyal.kingdom';
print(isEmail(badEmail)) // false

const validEmail = 'Queen@Royal.kingdom';
print(isEmail(validEmail)) // true

```

# [Click to Open Supported Rules List](https://pub.dev/documentation/queen_validators/latest/queen_validators/queen_validators-library.html)

# NOTES

- some rules takes the failure message as optional param like `IsDateMilli`
- almost 99% of the rules has a function to validate the varables and have a rules for forms

# Rules

## Text

| Rule          | Function               | Description                             | trims | Notes                       |
| ------------- | ---------------------- | --------------------------------------- | ----- | --------------------------- |
| `Contains`    | -                      | if input contains some some value       | ✔     | --------------------------- |
| `NotContains` | -                      | if input NOT contains the some value    | ✔     | --------------------------- |
| `IsEmpty`     | `isEmpty(String)`      | if input is empty                       | ✔     | --------------------------- |
| `IsNotEmpty`  | `isNotEmpty(String)`   | if input is not empty                   | ✔     | --------------------------- |
| `IsRequired`  | -                      | --------------------------------------- | ✔     | identical with `IsNotEmpty` |
| `Match`       | `match(Object,Object)` | if two inputs is the same type && value | -     | --------------------------- |
| `MaxLength`   | -                      | if input length <= max                  | ✔     | --------------------------- |
| `MinLength`   | -                      | if input length >= min                  | ✔     | --------------------------- |
