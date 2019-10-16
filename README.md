# Example Family Tree

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

An example application made with LoopBack 4 for the purpose of demonstrating [OpenAPI-to-GraphQL](https://github.com/ibm/openapi-to-graphql), a tool that can create GraphQL interfaces for APIs described with [OpenAPI specifications](https://www.openapis.org/) (OAS).

## Description

This application simulates the relationships between parent and child. There is only one model in this application. Here is what it looks like:

```
Person {
	id : number
	name : String
	generation: number
	motherId : number
	fatherId : number
}
```

In addition, this application is preloaded with some data. Here is what the data looks like:

![Data diagram](./docs/data_diagram.png "Data diagram")

## Installation

Make sure you have Node.js >= 8.9.0 installed. Then do the following to clone and start the project.

```
git clone https://github.com/strongloop/loopback4-example-family-tree.git
cd loopback4-example-family-tree
npm i
npm start
```

## OpenAPI-to-GraphQL

As mentioned before, the purpose of this repository is to demonstrate the capabilities of [OpenAPI-to-GraphQL](https://github.com/ibm/openapi-to-graphql).

OpenAPI-to-GraphQL can either be used as a [library](https://www.npmjs.com/package/openapi-to-graphql) or as a [CLI tool](https://www.npmjs.com/package/openapi-to-graphql-cli). In the following section, we will describe how this API can be wrapped using the CLI tool. 

***

First, install the CLI tool.

```
npm i -g openapi-to-graphql-cli
```

Second, start the Family Tree API.

```
cd loopback4-example-family-tree
npm start
```

Third, create the GraphQL server using OpenAPI-to-GraphQL.

```
openapi-to-graphql http://localhost:3001/openapi.json
```

Head to [http://localhost:3000/graphql](http://localhost:3000/graphql) and enjoy!

***

### Nested objects

As of now, the GraphQL interface will __not__ have any nesting capabilities. To add these capabilities, you must define [link objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#linkObject) in the OAS. To read more, click [here](https://github.com/ibm/openapi-to-graphql/tree/master/packages/openapi-to-graphql#nested-objects).

***

Example: To create `mother` and `father` fields, which will allow you to query a person's mother or father, follow the ensuing instructions.

First, start the Family Tree API. 

```
cd loopback4-example-family-tree
npm start
```

Second, save the OAS by going to [http://localhost:3001/openapi.json](http://localhost:3001/openapi.json). 
Alternatively, run the following command. 

```
wget http://localhost:3001/openapi.json
```

Third, open the OAS in a text editor. 

Find the `/people/{id}` [path item object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathItemObject).

It should look a bit like the following: 

```json
"/people/{id}": {
    "get": {
        "operationId": "PersonController.findById",
        "responses": {
            "200": {
                "description": "Person model instance",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Person"
```

Add the links into the [response object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#responseObject).

```json
"/people/{id}": {
    "get": {
        "operationId": "PersonController.findById",
        "responses": {
            "200": {
                "links": {
                    "mother": {
                        "operationId": "PersonController.findById",
                        "parameters": {
                            "id": "$response.body#/motherId"
                        }
                    },
                    "father": {
                        "operationId": "PersonController.findById",
                        "parameters": {
                            "id": "$response.body#/fatherId"
                        }
                    }
                }
```

Save the file and start the GraphQL server.

```
openapi-to-graphql openapi.json
```

Head to [http://localhost:3000/graphql](http://localhost:3000/graphql) and enjoy!

***

Now you can create complex queries like the following:

```
query {
    person(id: 15) {
        name
        father {
            name 
            mother {
                name
                father {
                    name
                }
            }
        }
    }
}
```

__Please be aware that the data may not be dense enough to support deeply nested queries and the API server and consequently the GraphQL server as well will throw errors. Please refer to the [description](https://github.com/strongloop/loopback4-example-family-tree#description) for more information.__

### Notes

To go more in depth on nested objects... 

Links allow the user to define design-time relationships between operations, suggesting how one operation can naturally lead to the next. 

Let's take a look at the provided example.

The following portion from the OAS describes an operation `GET {base URL}/people/{id}` that will return a `Person` object. 

```json
"/people/{id}": {
    "get": {
        "responses": {
            "200": {
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Person"
```

The `Person` object contains the following pieces of data:

```json
{
    "title": "Person",
    "properties": {
        "id": {
        "type": "number"
        },
        "name": {
        "type": "string"
        },
        "generation": {
        "type": "number"
        },
        "motherId": {
        "type": "number"
        },
        "fatherId": {
        "type": "number"
        }
    }
}
```

Notice the `motherId` and `fatherId` fields.

Now, take a look at the following links. 

```json
"links": {
    "mother": {
        "operationId": "PersonController.findById",
        "parameters": {
            "id": "$response.body#/motherId"
        }
    },
    "father": {
        "operationId": "PersonController.findById",
        "parameters": {
            "id": "$response.body#/fatherId"
        }
    }
}
```

The links essentially say that when `GET {base URL}/people/{id}` returns a `Person` object, you can make a follow up call to get the mother or the father. The follow up call will be the operation that has the `operationId`: "PersonController.findById". That operation is coincidentally also `GET {base URL}/people/{id}`. The `id` of the mother, which will be used in the `/people/{id}` path [parameter](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterObject), is the `motherId` of the returned `Person` object. Using this knowledge, OpenAPI-to-GraphQL is able to chain together multiple REST calls to get the mother or father of any person. 

Another feature to note is that links are attached to GraphQL object types which means that any operation returning a `Person` (or a list of `Person`s) will also be able to query for the mother and the father, even if the links are defined elsewhere. 

## Examples

Here are some queries you can do with the basic API:

Query:
```
GET http://localhost:3001/people/
```

Response:
```
[
    {
        "id": 1,
        "name": "Albert",
        "generation": 1,
        "motherId": 0,
        "fatherId": 0
    },
    {
        "id": 2,
        "name": "Allison",
        "generation": 1,
        "motherId": 0,
        "fatherId": 0
    },
    {
        "id": 3,
        "name": "Aaron",
        "generation": 1,
        "motherId": 0,
        "fatherId": 0
    },

    ...

    {
        "id": 13,
        "name": "Charles",
        "generation": 3,
        "motherId": 10,
        "fatherId": 9
    },
    {
        "id": 14,
        "name": "Claire",
        "generation": 3,
        "motherId": 12,
        "fatherId": 11
    },
    {
        "id": 15,
        "name": "Daron",
        "generation": 4,
        "motherId": 14,
        "fatherId": 13
    }
]
```

***

Query:
```
GET http://localhost:3001/people/1
```

Response:
```
{
    "id": 1,
    "name": "Albert",
    "generation": 1,
    "motherId": 0,
    "fatherId": 0
}
```

## License

[MIT](./LICENSE.md)
