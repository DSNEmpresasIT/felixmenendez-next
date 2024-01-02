import {  ProductFeature } from "@/app/productos-felix-menendez/producto/page";

import React from "react";

interface Props {
  principalInfo: ProductFeature | null
}

const principalInfo = ({principalInfo}: Props) => {
  return (
    <div className="review-showing">
      <ul className="agri-ul content">
        <li  className="p-4 border-2" >
          <div className="post-content">
            <div >
              <div className="posted-on p-0 m-0">
                <h6 style={{lineHeight: '3px'}}>Principio Activo</h6 >
              </div>
            </div>
            <div className="entry-content">
              <p>{principalInfo?.activeIngredient}</p>
            </div>
          </div>
        </li>
        <li className="p-4 border-2">
          <div className="post-content ">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}}>Tipo de Maleza</h6  >
              </div>
            </div>
            <div className="entry-content">
              <p>{principalInfo?.weedType}</p>
            </div>
          </div>
        </li>
        <li  className="p-4 border-2" >
          <div className="post-content">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}}>Momento de aplicación Cultivo</h6 >
              </div>
            </div>
            <div className="entry-content">
              <p>
               {principalInfo?.applicationTimingCrops}
              </p>
            </div>
          </div>
        </li>
        <li  className="p-4 border-2" >
          <div className="post-content">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}} >Momento de Aplicación Malezas</h6 >
              </div>
            </div>
            <div className="entry-content">
              <p>
              {principalInfo?.applicationTimingWeeds}
              </p>
            </div>
          </div>
        </li>
        <li  className="p-4 border-2">
          <div className="post-content">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}} >Forma de Acción.</h6 >
              </div>
            </div>
            <div className="entry-content">
              <p>
                {principalInfo?.actionForm}
              </p>
            </div>
          </div>
        </li>
        <li className="p-4 border-2">
          <div className="post-content">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}} >Lugar de Aplicación.</h6>
              </div>
            </div>
            <div className="entry-content">
              <p>
                {principalInfo?.applicationLocation}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default principalInfo;
