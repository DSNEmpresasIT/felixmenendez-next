import { ProductSingle } from "@/app/util/types";
import { createClient } from "@supabase/supabase-js";


const MAIN_SUPABASE_URL = ''
const MAIN_SUPABASE_KEY ='';


const supabase = createClient(MAIN_SUPABASE_URL, MAIN_SUPABASE_KEY)


export const getProductSingleById = async (id : string):Promise<ProductSingle | null > => {
    try {
        const {data, error} = await supabase
        .from('productFeature')
        .select('product_id')
        .eq('product_id', id)
        

        return data as ProductSingle | null;
    } catch (error) {
        return null
    }
}