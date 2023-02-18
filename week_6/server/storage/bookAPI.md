# Books library API

Restriction: Same person can be in json only once.

## **getBooksOfPerson(firstname, lastname)**

- function returns an array of all book objects of the person.
- if person has no books, an empty array is returned.

## **getTheNamesOfBooks(firstname, lastname)**

- return an array of book names (string) fo books belonging to given person.
- if person has no books, an empty array is returned.

## **getTheTotal(firstname, lastname)**

- rturn an object of consisting total price and total pages
- if person doesn't exists, an empty "{}" object is returned.

```json
{
  "ok": true,
  "totalPrice": 0,
  "totalPages": 0
}
```

## **getTheOwnerOfBook(bookName)**

The bookName is the whole book name.

- returns an array of strings. The string is formed from firstname and lastname: `firstname lastname`
- if no match is found, an empty array is returned

for book `ABC` unction returns:

```json
["Matt River", "Leila Hokki"]
```

## **getAllBooks(substringInName)**

- rturns an array of objects of form:

```json
{
  "firstname": "",
  "lastname": "",
  "book": { "name": "", "pages": 0, "price": 0 }
}
```

for example find books that have `ABC` in their name:

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "book": { "name": "ABC", "pages": 300, "price": 30 }
  },
  {
    "firstname": "Leila",
    "lastname": "Hokki",
    "book": {
      "name": "ABC",
      "pages": 200,
      "price": 30
    }
  }
]
```

if no match is found, an empty array is returned
