import { IsString } from 'class-validator';
import { CreateStudentDto } from './create-student.dto';
import { PartialType } from '@nestjs/mapped-types'; // npm i @nestjs/mapped-types -D

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsString()
  id: string;
}
