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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const student_schema_1 = require("./schemas/student.schema");
let StudentService = class StudentService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async create(createStudent) {
        try {
            const createdUser = new this.studentModel(createStudent);
            return createdUser.save();
        }
        catch (e) {
            throw new common_1.HttpException('Something went wrong', 50);
        }
    }
    async findOne(id) {
        try {
            const createdUser = await this.studentModel.findById(id).exec();
            if (!createdUser) {
                throw new common_1.NotFoundException('Could not find User');
            }
            return createdUser;
        }
        catch (e) {
            if (e.message == 'Could not find User') {
                throw new common_1.HttpException(e.message, e.status);
            }
            else {
                throw new common_1.HttpException('Something went wrong', 500);
            }
        }
    }
    async update(user) {
        const { id, ...rest } = user;
        console.log(id, rest);
        try {
            const createdUser = await this.studentModel
                .findOneAndUpdate({ _id: id }, { $set: { ...rest } }, { new: true })
                .exec();
            console.log(createdUser);
            if (!createdUser) {
                throw new common_1.NotFoundException('Could not find User for updating');
            }
            return createdUser;
        }
        catch (e) {
            throw new common_1.HttpException('Something went wrong', 50);
        }
    }
    async findAll() {
        return this.studentModel.find().exec();
    }
    async delete(id) {
        try {
            const createdUser = await this.studentModel
                .findOneAndUpdate({ _id: id }, { status: 'Deleted' }, { new: true })
                .exec();
            if (!createdUser) {
                throw new common_1.NotFoundException('Could not find User for deleting');
            }
            return createdUser;
        }
        catch (e) {
            throw new common_1.HttpException('Something went wrong', 500);
        }
    }
    async changeStatus(id, status) {
        try {
            const createdUser = await this.studentModel
                .findOneAndUpdate({ _id: id }, { status: status.status }, { new: true })
                .exec();
            console.log(createdUser);
            if (!createdUser) {
                throw new Error("The student doesn't exist");
            }
            else {
                return createdUser;
            }
        }
        catch (error) {
            if (error.message == "The student doesn't exist") {
                throw new common_1.BadRequestException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async uploadAvatar(id, avatar) {
        console.log(id, avatar);
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(student_schema_1.Student.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], StudentService);
//# sourceMappingURL=student.service.js.map