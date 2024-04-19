import {
  IsDate,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator'; //npm i class-validator class-transformer --save
import { ObjectId } from 'mongoose';

export class CreateStudentDto {
  @IsString()
  Stud_ID: string;
  @IsString()
  studImage: string;
  @IsString()
  Fname: string;
  @IsString()
  Lname: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  department_id: ObjectId;
  @IsString()
  status: string;
  // @IsDate()
  // year: Date;
  // @IsDate()
  // date_of_admission: Date;
  // @IsDate()
  // grad_date: Date;
  @IsNumber()
  contact: number;
  @IsString()
  address: string;
  @IsString()
  emergencyC_fname: string;
  @IsString()
  emergencyC_lname: string;
  @IsString()
  emergencyC_contact: string;
  @IsString()
  emergencyC_relation: string;
  // @IsDate()
  // birthdate: Date;
  @IsString()
  gender: string;
}

//export class UpdateUserDto extends PartialType(CreateUserDto){}
