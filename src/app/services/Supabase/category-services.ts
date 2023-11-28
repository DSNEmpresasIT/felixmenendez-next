//TODO: 1.INSTALLAR SUPABASE, 2.TRAER LAS CATEGORIAS, 3. HACER UN MAP DE LAS CATEGORIAS EN EL HEADER PRODUCTOS.

import { Category } from "@/app/util/types";
import { createClient } from "@supabase/supabase-js";

const MAIN_SUPABASE_URL = process.env.MAIN_SUPABASE_URL;
const MAIN_SUPABASE_KEY = process.env.MAIN_SUPABASE_KEY;

if (!MAIN_SUPABASE_URL || !MAIN_SUPABASE_KEY) {
  throw new Error('The SUPABASE_URL and SUPABASE_KEY environment variables are mandatory in categories service.');
}

const supabase = createClient(MAIN_SUPABASE_URL, MAIN_SUPABASE_KEY);

export const getCategories = async (): Promise<Category | null> => {
  try {
      const { data, error} = await supabase
      .from('categories')
      .select('*')
      return data as Category | null;
  } catch (error) {
    return null
  }
}

export const getCategoryByName = async (query:string): Promise<Category[] | null> => {
  try {
    const {data} = await supabase
    .from('categories')
    .select('*')
    .ilike('category', `%${query}%`)
    return data as Category[] | null
  } catch (error) {
    return null
  }
}