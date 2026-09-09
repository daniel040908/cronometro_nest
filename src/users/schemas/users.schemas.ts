import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string

  @Prop()
  idade : number

  @Prop()
  turma : string

  @Prop()
  semestre : string
}

export const UserSchema = SchemaFactory.createForClass(User);