"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PersonController = class PersonController {
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async create(person) {
        return await this.personRepository.create(person);
    }
    async count(where) {
        return await this.personRepository.count(where);
    }
    async find(filter) {
        return await this.personRepository.find(filter);
    }
    async updateAll(person, where) {
        return await this.personRepository.updateAll(person, where);
    }
    async findById(id) {
        return await this.personRepository.findById(id);
    }
    async updateById(id, person) {
        await this.personRepository.updateById(id, person);
    }
    async replaceById(id, person) {
        await this.personRepository.replaceById(id, person);
    }
    async deleteById(id) {
        await this.personRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/people', {
        responses: {
            '200': {
                description: 'Person model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Person } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Person]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "create", null);
__decorate([
    rest_1.get('/people/count', {
        responses: {
            '200': {
                description: 'Person model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Person))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "count", null);
__decorate([
    rest_1.get('/people', {
        responses: {
            '200': {
                description: 'Array of Person model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Person } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Person))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "find", null);
__decorate([
    rest_1.patch('/people', {
        responses: {
            '200': {
                description: 'Person PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Person))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Person, Object]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/people/{id}', {
        responses: {
            '200': {
                description: 'Person model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Person } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "findById", null);
__decorate([
    rest_1.patch('/people/{id}', {
        responses: {
            '204': {
                description: 'Person PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Person]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "updateById", null);
__decorate([
    rest_1.put('/people/{id}', {
        responses: {
            '204': {
                description: 'Person PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Person]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/people/{id}', {
        responses: {
            '204': {
                description: 'Person DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "deleteById", null);
PersonController = __decorate([
    __param(0, repository_1.repository(repositories_1.PersonRepository)),
    __metadata("design:paramtypes", [repositories_1.PersonRepository])
], PersonController);
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map