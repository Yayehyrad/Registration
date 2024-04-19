import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';
import { UpdateStudentDto } from './dto/update-student.dto';
import { start } from 'repl';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'; // Import the Express module
@Controller('student')
export class StudentController {
  constructor(private readonly authService: StudentService) {}

  @Get('/findAll') //test route
  findAll() {
    return this.authService.findAll();
  }

  @Post('/create') //test route
  create(@Body(ValidationPipe) user: CreateStudentDto) {
    return this.authService.create(user);
  }
  @Patch('/update') //test route
  update(@Body(ValidationPipe) user: UpdateStudentDto) {
    return this.authService.update(user);
  }
  // when connected with auth
  // @Get('/profile')
  // getProfile() {
  //   return 'Profile';
  // }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.authService.findOne(id);
  }
  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    console.log('id', id);
    return this.authService.delete(id);
  }
  @Patch('status/:id')
  changeUserStatus(@Body() status: UpdateStudentDto, @Param('id') id: string) {
    console.log('id', id, status);
    return this.authService.changeStatus(id, status);
  }
  @Post('avatar/:id')
  @UseInterceptors(FileInterceptor('avatar'))
  uploadAvatar(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File | undefined, // Add type annotation for the file parameter and make it optional
  ) {
    console.log('id', id, file);
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    // return this.authService.uploadAvatar(id, avatar);
  }
}
