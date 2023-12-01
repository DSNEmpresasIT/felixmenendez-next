import { Category, Product } from "@/app/util/types";
import { createClient } from "@supabase/supabase-js";

const MAIN_SUPABASE_URL = '';
const MAIN_SUPABASE_KEY = '';


const supabase = createClient(MAIN_SUPABASE_URL, MAIN_SUPABASE_KEY);

export const getAllProducts = async (): Promise<Product[] | null> => {
  try {
    const { data } = await supabase
    .from('products')
    .select('*')
    return data as Product[] | null
  } catch (error) {
    return null
  }
}

export const getProductByName= async(productName:string):Promise<Product[] | null> => {
  try {
    const { data } = await supabase
    .from('products')
    .select('*')
    .ilike('name', `%${productName}%`)
    return data as Product[] | null
  } catch (error) {
    return null
  }  
}

export const getProductsByCategory = async (category: string): Promise<Product[] | null> => {
  try {
    // Paso 1: Obtener el ID de la categoría 'Fertilizantes'
    const categoryResponse = await supabase
      .from('categories')
      .select('id')
      .ilike('category', `%${category}%`);

    if (categoryResponse.data) {
      const categoryId = categoryResponse.data[0]?.id;

      if (categoryId) {
        // Paso 2: Usar el ID de la categoría en la consulta de productos
        const { data, error } = await supabase
          .from('products_categories')
          .select('product_id')
          .eq('category_id', categoryId);

        if (data) {
          // Mapea los IDs de productos
          const productIds = data.map(item => item.product_id);

          // traer todos los productos con las IDs buscadas en products_categories 
          const productDetails = await supabase
            .from('products')
            .select('*')
            .in('id', productIds);

          if (productDetails.data) {
            return productDetails.data as Product[];
          }
        }
      }
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return null;
};
