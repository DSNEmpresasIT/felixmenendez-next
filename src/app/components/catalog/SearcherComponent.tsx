import { getProductByName, getProductsByNameInCategory } from '@/app/services/Supabase/product-services';
import { Product, ProductData } from '@/app/util/types';
import { useSearchParams } from 'next/navigation';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';


interface SearcherComponentProps {
  setProductData: Dispatch<SetStateAction<Product[] | null>>,
  updateFilteredData: () => void;
}

export const SearcherComponent:FC<SearcherComponentProps> = ({ setProductData , updateFilteredData}) => {
  const type = useSearchParams().get("categoria")

  const [ input, setInput ] = useState<string>('');

  const getData = async (query: any) => {
    const search = query;
    if(type){
      const filter = await getProductsByNameInCategory(type, query)
      search.length ? setProductData(filter) : updateFilteredData() ;
    } else {
      const filter = await getProductByName(input) 
      search.length ? setProductData(filter) : updateFilteredData() ;
    }

  }

  const hanldeInputChange= (e: any)=>{
    const search = e.target.value;
    getData(search)
    setInput(search)
  }

  return (
    <div className="widget widget-search">
        <div className="widget-header">
            <h5>Buscar</h5>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="search-wrapper">
            <input type="text" name="search" placeholder="Que está buscando?" value={input} onChange={hanldeInputChange}/>
            <button type="button"><i className="icofont-search-2"></i></button>
        </form>
    </div>
  )
}
