"use server";

import { redirect } from "next/navigation";
import { getSession } from "../sessions/session";
import { api } from "../fetch/api";
// @ts-ignore
import { IAddCategorySchema } from '@ecommerce/form/src/forms/category/addCategory.form'

export async function addCategoryAction(data:IAddCategorySchema) {
  const session = await getSession();
  if(!session){
    redirect('/signin')
  }

return await api('/category/add', {
    method: 'POST',
    headers: {
      "authorization": `Bearer ${session.accessToken}`
    },
    body: JSON.stringify(data)
  });

}