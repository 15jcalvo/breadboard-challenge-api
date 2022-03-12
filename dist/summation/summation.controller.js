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
exports.SummationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const summation_service_1 = require("./summation.service");
const new_sum_dto_1 = require("./dto/new-sum.dto");
const sum_entity_1 = require("./entities/sum.entity");
let SummationController = class SummationController {
    constructor(summationService) {
        this.summationService = summationService;
    }
    executeSum(body) {
        return this.summationService.executeSum(body);
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: sum_entity_1.Sum }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_sum_dto_1.NewSumDto]),
    __metadata("design:returntype", sum_entity_1.Sum)
], SummationController.prototype, "executeSum", null);
SummationController = __decorate([
    (0, swagger_1.ApiTags)('summation'),
    (0, common_1.Controller)('/summation'),
    __metadata("design:paramtypes", [summation_service_1.SummationService])
], SummationController);
exports.SummationController = SummationController;
//# sourceMappingURL=summation.controller.js.map