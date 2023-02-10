# JSON (JavaScript Object Notation)

## Documentation

json.org

## File extension

.json

## Values

- strings
- numbers
- arrays
- objects
- true
- false
- null

## Examples

### String

Must be doublequoted
empty string is ""

```json
"this is a string"
" single quote is allowed 'i am insede double quote' inside the double quote"
"hearts symbol is \u2665, so unicode is allowed"
```

### Number

- no leading + signs
- only one leading: 0, can not be 00.001, it shoud be 0.001
- decimal separator is: .

These are llowed:

```json
0, 0.5, 345.4532, -1, -0.57, -23.45, 1.5E10, 2E-2, 2E+2, 2e+3
```

These are not allowed

```json
00.34, +34, +0.4, 00023
```

## Array

Array begins with [ and ends with ]. Values is the array are separated by a comma ,.

```json
[1,2,3,4,5]
["text_a", "text_b"]
[{"firstName":"Bisso", "age":10},{"firstName": "Das", "age":15}]
[true, false, true]
[[1,2,3][4,5,6]]
[
    [1,1,1,1,1,1],
    [1,0,0,0,1,1],
    [0,0,1,0,0,0],
    [1,1,1,1,1,1]
]
```

## Object

```json
{ "firstName": "Matt", "lastName": "River", "age": 20 }
{
    "firstName" : "Matt",
    "children" : [
        {"firstName" : "Vera", "age" : 6},
        {"firstName" : "John", "age" : 3}
    ]
}
{
    "key1" : "value1",
    "key2" : "value2",
    "key3" : [1,2,3],
    "key4" : {"a" : 1, "b" : 3, "c" : 4}
}
```

```json
[
  {
    "firstName": "Matt",
    "children": [
      { "firstName": "Vera", "age": 6 },
      { "firstName": "John", "age": 3 }
    ]
  },
  {
    "firstName": "Mary",
    "children": [{ "firstName": "Jesse", "age": 15 }]
  },
  {
    "firstname": "Jesse",
    "children": []
  }
]
```

key name must be unique, there can not be more one key name with same name

```json
{
   "Matt" : {
    "children" : [
        {"firstName" : "Vera", "age" : 6},
        {"firstName" : "John", "age" : 3}
    ]
},
   "Mary" {
    "children" : [
        {"firstName" : "Jesse", "age" : 15}
    ]
}
}
```
