import { getPlaceholder } from '@/app/util/getPlaceholder';
import { PATH_ROUTES } from '@/app/util/pages';
import { Product } from '@/app/util/types';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
;

interface CardButtonProps {
  id?: string;
  categoria: string | undefined;
  type: string | null;
}

const CardButton: React.FC<CardButtonProps> = ({ id, categoria, type }) => (
  <Link
    href={{ pathname: PATH_ROUTES.PRODUCTS_PATH, query: { id, type, categoria } }}
    style={{
      width: '120px',
      height: '30px',
      fontSize: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      border: 'none',
    }}
    className='lab-btn'
  >
    <span>Consultar</span>
  </Link>
);

export const CardCartComponent:FC<Product> = ({ name , img ,  formulacion, is_active_substance, id , filters, type}) => {
  const [ image, setImage ] = useState<string>('solubles');

  useEffect(() => {
    if (img) {
      setImage(img);
    } else {
      setImage(getPlaceholder(filters));
    }
  }, [img])

  return (
    <div key={id} className="col-lg-4 col-md-6 col-12 animate__animated animate__fadeIn" >
      <div  className="product-item" style={{minHeight:'28rem' }}>
        <Link href={`/${PATH_ROUTES.PRODUCTS_PATH}?id=${id.toString()}&type=${type}&categoria=${filters}`}>
          <div className="product-thumb">
            <img src={ img  || `/assets/images/product/${image}/${image}.png`} alt="item" />
            <div className="product-action-link">
              <span><i className="icofont-link"></i></span>
            </div>
          </div>
        </Link>
        <div className="product-content row" >
          <div className='col-12' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Nuevo</span>
            <span style={{ textTransform: 'capitalize', color: '#78bd41' }}>{filters}</span>
          </div>
          <h6 className='col-12 mt-2' style={{ fontWeight: '450', textAlign: 'start' }}>
            <Link href={`/${PATH_ROUTES.PRODUCTS_PATH}?id=${id.toString()}&type=${type}&categoria=${filters}`}>
              {name} 
            </Link>
          </h6>
          {
            formulacion && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}><strong>{ is_active_substance ? 'Principio Activo' : 'Formulación' }:</strong> { formulacion }</span>
              </div>
            )
          }
          <div className='col-12 mt-1' >
            <CardButton id={id.toString()} categoria={filters} type={type} />
          </div>
        </div>
      </div>
      <div className="product-list-item">
        <div className="product-thumb">
        <img src={img ?? `/assets/images/product/${image}/${image}.png`} alt="item" />
          <div className="product-action-link">
            <Link
              href={`/${PATH_ROUTES.PRODUCTS_PATH}?id=${id.toString()}&type=${type}&categoria=${filters}`}
              ><i className="icofont-eye"></i>
            </Link>
          </div>
        </div>
        <div className="product-content row">
          <div className='col-12' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Nuevo</span>
            <span style={{ textTransform: 'capitalize', color: '#78bd41' }}>{filters}</span>
          </div>
          <h6><Link href="#">{name}</Link></h6>
          {/* <p style={{ maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{description}</p> */}
          <div className='d-flex mt-3 justify-content-between'>
            <CardButton id={id.toString()} categoria={filters} type={type} />
            {
              formulacion && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}><strong>{ is_active_substance ? 'Principio Activo' : 'Formulación' }:</strong> { formulacion }</span>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
