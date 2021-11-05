import { Document, model, Schema } from 'mongoose';
import * as moment from 'moment'

import { iUser, UserGenderEnum, UserStatusEnum } from '@gohubly/shared';

export interface iUserModel extends Document, Omit<iUser, 'id'> {
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
    address_street: { type: String },
    address_number: { type: String },
    address_complement: { type: String },
    address_neighborhood: { type: String },
    address_zipcode: { type: String },
    address_city: { type: String },
    address_state: { type: String },
    address_country: {
      type: String,
      default: 'Brazil',
    },
    documentValue: { type: String },
    documentType: { type: String },
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