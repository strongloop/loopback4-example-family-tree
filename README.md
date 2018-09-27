# Family Tree

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

An example application made with LoopBack 4 for the purpose of demonstrating [OASGraph](https://github.com/strongloop/oasgraph), a tool that can create GraphQL interfaces for APIs described with [OpenAPI specifications](https://www.openapis.org/) (OAS).

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

## Examples

Here are some queries you can do:

Query:
```
GET http://[::1]:3000/people/
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
GET http://[::1]:3000/people/1
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
