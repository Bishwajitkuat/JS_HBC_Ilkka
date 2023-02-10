# Cars API

## **getWithLicence(licence)**

function returns the cars that match the given licence. The licence is unique.

- if the car is found, returns car obect
- if no car with given licence is found, return null

## **getWithModel(model)**

return all car objects with given model in an array

- if no car matches the given model, an empty array is returned

## **getAllModels()**

returns the names of all models in storage as an arry of string. The name is added to the arrays only once.

- rturns array of models
- returns an empty array, if no models found.

## **getCars(key, value)**

get all cars objects that matches the given key-value pair.

- returns car objects in an array
- if there is no matches, returns and empty array
