/// <reference types="multer" />
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentController {
    private readonly authService;
    constructor(authService: StudentService);
    findAll(): Promise<import("./schemas/student.schema").Student[]>;
    create(user: CreateStudentDto): Promise<import("./schemas/student.schema").Student>;
    update(user: UpdateStudentDto): Promise<import("./schemas/student.schema").Student>;
    getUserById(id: string): Promise<import("./schemas/student.schema").Student>;
    deleteUserById(id: string): Promise<any>;
    changeUserStatus(status: UpdateStudentDto, id: string): Promise<import("./schemas/student.schema").Student>;
    uploadAvatar(id: string, file: Express.Multer.File | undefined): void;
}
