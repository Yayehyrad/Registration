import {
  Injectable,
  NotFoundException,
  HttpException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schemas/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) {}
  // Student  Registration
  async create(createStudent: CreateStudentDto): Promise<Student> {
    try {
      const createdUser = new this.studentModel(createStudent);
      return createdUser.save();
    } catch (e) {
      throw new HttpException('Something went wrong', 50);
    }
  }
  async findOne(id: string): Promise<Student> {
    try {
      const createdUser = await this.studentModel.findById(id).exec();
      if (!createdUser) {
        throw new NotFoundException('Could not find User');
      }
      return createdUser;
    } catch (e) {
      if (e.message == 'Could not find User') {
        throw new HttpException(e.message, e.status);
      } else {
        throw new HttpException('Something went wrong', 500);
      }
    }
  }
  async update(user: UpdateStudentDto): Promise<Student> {
    const { id, ...rest } = user;
    console.log(id, rest);
    try {
      const createdUser = await this.studentModel
        .findOneAndUpdate({ _id: id }, { $set: { ...rest } }, { new: true })
        .exec();
      console.log(createdUser);
      if (!createdUser) {
        throw new NotFoundException('Could not find User for updating');
      }
      return createdUser;
    } catch (e) {
      throw new HttpException('Something went wrong', 50);
    }
  }
  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }
  async delete(id: string): Promise<any> {
    try {
      const createdUser = await this.studentModel
        .findOneAndUpdate({ _id: id }, { status: 'Deleted' }, { new: true })
        .exec();

      if (!createdUser) {
        throw new NotFoundException('Could not find User for deleting');
      }
      return createdUser;
    } catch (e) {
      throw new HttpException('Something went wrong', 500);
    }
  }
  async changeStatus(id: string, status: UpdateStudentDto): Promise<Student> {
    try {
      const createdUser = await this.studentModel
        .findOneAndUpdate({ _id: id }, { status: status.status }, { new: true })
        .exec();
      console.log(createdUser);
      if (!createdUser) {
        throw new Error("The student doesn't exist");
      } else {
        return createdUser;
      }
    } catch (error) {
      if (error.message == "The student doesn't exist") {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException();
      }
    }
    // If the user is already in active status then we need to set it as deleted
  }
  async uploadAvatar(id: string, avatar: any): Promise<any> {
    console.log(id, avatar);
    // try {
    //   const createdUser = await this.studentModel
    //     .findOneAndUpdate({ _id: id }, { $push: { avatar: avatar } }, { new: true })
    //     .exec();
    //   if (!createdUser) {
    //     throw new NotFoundException('Could not find User for updating');
    //   }
    //   return createdUser;
    // } catch (error) {
    //   throw new InternalServerErrorException();
    // }
  }
  // auth implementation
}
