import { CreateStudentDto } from './create-student.dto';
declare const UpdateStudentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateStudentDto>>;
export declare class UpdateStudentDto extends UpdateStudentDto_base {
    id: string;
}
export {};
