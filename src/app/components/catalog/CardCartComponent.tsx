import { getPlaceholder } from "@/app/util/getPlaceholder";
import { PATH_ROUTES } from "@/app/util/pages";
import { Product } from "@/app/util/types";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { addToCart } from "../cart/cart-service";
interface CardButtonProps {
  id?: string;
  categoria: string | undefined;
  type: string | null;
}

interface CardCartComponentProps {
  data: Product;
}
const CardButton: React.FC<CardButtonProps> = ({ id, categoria, type }) => (
  <Link
    href={{
      pathname: PATH_ROUTES.PRODUCTS_PATH,
      query: { id, type, categoria },
    }}
    style={{
      width: "120px",
      height: "30px",
      fontSize: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0",
      border: "none",
    }}
    className="lab-btn"
  >
    <span>Consultar</span>
  </Link>
);

export const CardCartComponent: FC<CardCartComponentProps> = ({ data }) => {
  const [image, setImage] = useState<string>("solubles");

  useEffect(() => {
    if (data.img) {
      setImage(data.img);
    } else {
      setImage(getPlaceholder(data.filters));
    }
  }, [data.img]);

  const handleAddToCart = () => {
    addToCart(data);
  };

  return (
    <div
      key={data.id}
      className="col-lg-4 col-md-6 col-12 animate__animated animate__fadeIn"
    >
      <div className="product-item" style={{ minHeight: "28rem" }}>
        <Link
          href={`/${PATH_ROUTES.PRODUCTS_PATH}?id=${data.id.toString()}&type=${
            data.type
          }&categoria=${data.filters}`}
        >
          <div className="product-thumb">
            <img
              src={data.img || `/assets/images/product/${image}/${image}.png`}
              alt="item"
            />
            <div className="product-action-link">
              <span>
                <i className="icofont-link"></i>
              </span>
            </div>
          </div>
        </Link>
        <div className="product-content row d-flex h-100">
          <div
            className="col-12"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Nuevo</span>
            <span style={{ textTransform: "capitalize", color: "#78bd41" }}>
              {data.filters}
            </span>
          </div>
          <h6
            className="col-12 mt-2"
            style={{ fontWeight: "450", textAlign: "start" }}
          >
            <Link
              href={`/${
                PATH_ROUTES.PRODUCTS_PATH
              }?id=${data.id.toString()}&type=${data.type}&categoria=${
                data.filters
              }`}
            >
              {data.name}
            </Link>
          </h6>
          {data.formulacion ? (
            <div
              className="d-flex "
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                <strong>
                  {data.is_active_substance
                    ? "Principio Activo"
                    : "Formulación"}
                  :
                </strong>{" "}
                {data.formulacion ?? ""}
              </span>
            </div>
          ): (<div className="p-2 my-1"></div>)}
          <div className="col-12 mt-1 d-flex gap-1 ">
            <CardButton
              id={data.id.toString()}
              categoria={data.filters}
              type={data.type}
            />
            <button
              style={{
                width: "140px",
                height: "30px",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0",
                border: "none",
              }}
              className="lab-btn"
              onClick={handleAddToCart}
            >
              <span>Agregar al Carrito </span>
            </button>
          </div>
        </div>
      </div>
      <div className="product-list-item">
        <div className="product-thumb">
          <img
            src={data.img ?? `/assets/images/product/${image}/${image}.png`}
            alt="item"
          />
          <div className="product-action-link">
            <Link
              href={`/${
                PATH_ROUTES.PRODUCTS_PATH
              }?id=${data.id.toString()}&type=${data.type}&categoria=${
                data.filters
              }`}
            >
              <i className="icofont-eye"></i>
            </Link>
          </div>
        </div>
        <div className="product-content row">
          <div
            className="col-12"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>{data.brand ?? "Nuevo"}</span>
            <span style={{ textTransform: "capitalize", color: "#78bd41" }}>
              {data.filters}
            </span>
          </div>

          <h6>
            <Link href="#">{data.name}</Link>
          </h6>
          {/* <p style={{ maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{description}</p> */}
          <div className="d-flex mt-3 justify-content-between">
            <CardButton
              id={data.id.toString()}
              categoria={data.filters}
              type={data.type}
            />
            {data.formulacion && (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span
                  style={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  <strong>
                    {data.is_active_substance
                      ? "Principio Activo"
                      : "Formulación"}
                    :
                  </strong>{" "}
                  {data.formulacion}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
