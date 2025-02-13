import { ObjectId } from "mongoose";



export interface ICategory {
  _id: string | ObjectId;
  name: string;
  slug: string;
  description: string;
  image: {
    url: string;
    public_id: string;
  };
}