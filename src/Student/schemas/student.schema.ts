import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop()
  Stud_ID: string;
  @Prop()
  studImage: string;
  @Prop()
  Fname: string;
  @Prop()
  Lname: string;
  @Prop()
  email: string;
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
  // owner: Owner; later when there is a department id
  @Prop()
  department_id: string;
  @Prop()
  status: string;
  @Prop()
  year: Date;
  @Prop()
  date_of_admission: Date;
  @Prop()
  grad_date: Date;
  @Prop()
  contact: number;
  @Prop()
  address: string;
  @Prop()
  emergencyC_fname: string;
  @Prop()
  emergencyC_lname: string;
  @Prop()
  emergencyC_contact: string;
  @Prop()
  emergencyC_relation: string;
  @Prop()
  birthdate: Date;
  @Prop()
  gender: string;
  @Prop({ default: Date.now })
  created_at: Date;
}

export const studentSchema = SchemaFactory.createForClass(Student);
