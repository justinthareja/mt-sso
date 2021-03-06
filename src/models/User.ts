import { Schema, model } from 'mongoose';

import { UserDocument } from '../types';

const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String },
    encUserId: { type: ObjectId },
    vmtUserId: { type: ObjectId },
    email: {
      type: String,
    },
    firstName: { type: String },
    lastName: { type: String },
    googleId: { type: String },
    googleProfilePic: { type: String },
    isTrashed: { type: Boolean, default: false },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    confirmEmailToken: { type: String },
    confirmEmailExpires: { type: Date },
    isEmailConfirmed: { type: Boolean, default: false },
    doForcePasswordChange: { type: Boolean, default: false },
    lastModifiedBy: { type: ObjectId, ref: 'User' },
    confirmEmailDate: { type: Date },
    isSuspended: { type: Boolean, default: false },
    doRevokeRefreshToken: { type: Boolean, default: false }, // if set to true, on next request refresh token will be revoked
  },
  { timestamps: true },
);

export default model<UserDocument>('User', UserSchema);
