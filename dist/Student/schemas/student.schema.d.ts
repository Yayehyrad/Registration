/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from 'mongoose';
export type StudentDocument = HydratedDocument<Student>;
export declare class Student {
    Stud_ID: string;
    studImage: string;
    Fname: string;
    Lname: string;
    email: string;
    department_id: string;
    status: string;
    year: Date;
    date_of_admission: Date;
    grad_date: Date;
    contact: number;
    address: string;
    emergencyC_fname: string;
    emergencyC_lname: string;
    emergencyC_contact: string;
    emergencyC_relation: string;
    birthdate: Date;
    gender: string;
    created_at: Date;
}
export declare const studentSchema: import("mongoose").Schema<Student, import("mongoose").Model<Student, any, any, any, import("mongoose").Document<unknown, any, Student> & Student & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Student, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Student>> & import("mongoose").FlatRecord<Student> & {
    _id: import("mongoose").Types.ObjectId;
}>;
