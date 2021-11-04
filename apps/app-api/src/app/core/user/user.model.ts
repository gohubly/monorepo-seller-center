import { Document, model, Schema } from 'mongoose';
import * as moment from 'moment'

import { iUser, UserGenderEnum, UserStatusEnum } from '@gohubly/shared-types';

export interface iUserModel extends Document, iUser {
  _id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    birthdate: {
      type: Date,
      get(value: Date): string | undefined {
        return value && moment(value).format('yyyy-MM-dd');
      },
    },
    gender: {
      type: String,
      enum: Object.values(UserGenderEnum),
    },
    address: {
      street: { type: String },
      number: { type: String },
      complement: { type: String },
      neighborhood: { type: String },
      zipcode: { type: String },
      city: { type: String },
      state: { type: String },
      country: {
        type: String,
        default: 'Brazil',
      },
    },
    document: {
      value: { type: String },
      type: { type: String },
    },
    status: {
      type: String,
      default: UserStatusEnum.PENDING,
      enum: Object.values(UserStatusEnum),
    },
  },
  {
    toJSON: { virtuals: false },
    toObject: {
      getters: true,
      virtuals: true,
      transform: (doc, ret) => {
        delete ret._id;
        return ret;
      },
    },
    timestamps: true,
    optimisticConcurrency: true,
  },
);

const UserModel = model<iUserModel>('Users', UserSchema);
export { UserModel };