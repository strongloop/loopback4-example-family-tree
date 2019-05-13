"use strict";
// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: family-tree
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Person = class Person extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
    }),
    __metadata("design:type", Number)
], Person.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Person.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Person.prototype, "generation", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Person.prototype, "motherId", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Person.prototype, "fatherId", void 0);
Person = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Person);
exports.Person = Person;
//# sourceMappingURL=person.model.js.map