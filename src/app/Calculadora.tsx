"use client";

import React, { useState } from "react";
import buscaValorDolar from "./buscaValorDolar";

export default function Calculadora() {
  const [cantidadDolares, setCantidadDolares] = useState<number | null>(null);

  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = {
      cant: Number(event.target.cant.value),
      tipoDolar: String(event.target.tipoDolar.value),
    };

    //MANIPULAR DATA ACA
    const dolares = await buscaValorDolar(data.cant, data.tipoDolar);
    setCantidadDolares(dolares);
    

  }

  return (
    <form onSubmit={handleSubmit} className=" ">
      
      <div className="w-full flex flex-col items-center gap-6 font-semibold dark:text-black">
        {/* Ingreso cantidad de pesos */}
        <label htmlFor="cant">Cantidad de pesos: </label>
        <input type="text" required autoComplete="off" id="cant" />
        {/* Ingreso el tipo de Dolar */}      
        <label htmlFor="tipoDolar">Tipo de Dólar: </label>
        <input type="text" required autoComplete="off" id="tipoDolar" name="tipoDolar" />
        <button
        type="submit"
        className="w-24 h-10 bg-gradient-to-r from-slate-400 to-slate-600 text-white px-2 py-1.5 rounded-md mt-8"
      >
        Calcular
      </button>
      </div>
      {cantidadDolares !== null && (
      <div className="mt-4">
        Cantidad de dólares: {cantidadDolares.toFixed(2)}
      </div>
    )}
    
    </form>
    



  );
}
