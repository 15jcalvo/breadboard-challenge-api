"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummationService = void 0;
const common_1 = require("@nestjs/common");
let SummationService = class SummationService {
    constructor() {
        this.sums = [{ a: 1, b: 2, c: 3 }];
    }
    executeSum(newSumDto) {
        const newSum = { a: Number(newSumDto.a), b: Number(newSumDto.b), c: Number(newSumDto.a) + Number(newSumDto.b) };
        this.sums.push(newSum);
        return newSum;
    }
};
SummationService = __decorate([
    (0, common_1.Injectable)()
], SummationService);
exports.SummationService = SummationService;
//# sourceMappingURL=summation.service.js.map