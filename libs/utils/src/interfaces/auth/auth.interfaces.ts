import { ObjectId } from "mongoose";
import { IRole } from "../common";


export interface IAuth {
  _id: string | ObjectId;
  name: string;
  email:string;
  role: IRole;
  profilePicture: string;
  varified: boolean;
  password: string;
  createdAt: string | Date;
  updatedAt: string;
  comparePassword(password: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}

export interface IAuthRegister {
  name: string;
  email:string;
  password: string;
}