import mongoose from 'mongoose';
import { IAuth } from '@ecommerce/utils/src/interfaces/auth/auth.interfaces';
import bcrypt from 'bcryptjs';

const AuthSchema = new mongoose.Schema<IAuth>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    password: {
      type:String,
      required:true
    },
    varified: {
      type: Boolean,
      default: false
    },
    profilePicture: {
      type: String,
      default: null
    },
    role: {
      type: String,
      default: 'user'
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        return ret;
      }
    }
  }
);

AuthSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

AuthSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  const hashPassword = this.password;
  return await bcrypt.compare(password, hashPassword);
};

AuthSchema.methods.hashPassword = async function (password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
};

export const AuthModel = mongoose.model('Auth', AuthSchema, 'Auth');
