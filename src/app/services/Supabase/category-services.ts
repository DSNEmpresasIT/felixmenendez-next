import { Category } from "@/app/util/types";
import { createClient } from "@supabase/supabase-js";

const MAIN_SUPABASE_URL = 'https://skmptjjgpoopkorjdmus.supabase.co';
const MAIN_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrbXB0ampncG9vcGtvcmpkbXVzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODY5MzAwNiwiZXhwIjoyMDE0MjY5MDA2fQ.laojp_TeTO0ZKOWSO2HSF6X7ZfxUFxBt_3Jrs781rJU';


const supabase = createClient(MAIN_SUPABASE_URL, MAIN_SUPABASE_KEY);

export const getCategories = async (): Promise<Category[] | null> => {
  try {
      const { data, error} = await supabase
      .from('categories')
      .select('*')
      return data as Category[] | null;
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

export const getCategoriesFathers = async () : Promise<Category[] | null> => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .is('father_category', null);

  if (error) {
    console.error('Error when obtaining parent categories:', error.message);
    return null;
  }

  return data;
};


export const getCategoriesChildren = async (categoryFather: string): Promise<Category[] | null> => {

  const { data: parentCategory, error: parentError } = await supabase
    .from('categories')
    .select('id')
    .eq('category', categoryFather)
    .single();

  if (parentError) {
    console.error('Error obtaining parent category:', parentError.message);
    return null;
  }

  if (!parentCategory) {
    console.error('Parent category not found.');
    return null;
  }

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('father_category', parentCategory.id);

  if (error) {
    console.error('Error when obtaining child categories:', error.message);
    return null;
  }

  return data;
};

