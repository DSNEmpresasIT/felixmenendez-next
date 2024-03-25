"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const AlertPopUp = () => {
  const currentDate = new Date();
  const startDate = new Date("2024-03-28");
  const endDate = new Date("2024-04-02");
  const isClosed = currentDate >= startDate && currentDate <= endDate;

  useEffect(() => {
    const modalTest = document.getElementById("modalTest");
    if (modalTest && !isClosed) {
      //@ts-ignore
      modalTest.showModal();
    }
  }, []);

  function switchModalTest() {
    const modalTest = document.getElementById("modalTest");
    //@ts-ignore

    if (modalTest?.open) {
      //@ts-ignore
      modalTest?.close();
    } else {
      //@ts-ignore
      modalTest?.showModal();
    }
  }

  return (
    <dialog
      id="modalTest"
      
    >
     <div className="w-100  d-flex justify-content-end pe-2 ">
      <div className="lab-btn " onClick={switchModalTest}><span>Cerrar</span></div>
     </div>
      <h3 className="text-warning text-center p-2">
        ¡Estamos cerrados temporalmente!
      </h3>
      <p className="text-center">
        ¡cerramos del 28 de marzo al 2 de abril! Por favor, vuelva más tarde.
      </p>
      <div>
      <img
        className="w-100 flex  h-100 object-fit-cover"
        src="/assets/images/bg-images/pascuasAlert.png"
        alt="pascuas alert"
      />
      </div>
    </dialog>
  );
};

export default AlertPopUp;
