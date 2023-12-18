"use client";
import React, { useState, useEffect } from "react";
import buscaValorDolar from "./buscaValorDolar";
import buscaValorPeso from "./buscaValorPeso"; // Asumiendo que tienes una función similar para convertir de dólares a pesos
import { IoSwapHorizontal } from "react-icons/io5";


export default function Calculadora() {
  const [cantidad, setCantidad] = useState("");
  const [tipoDolar, setTipoDolar] = useState("Blue");
  const [cantidadDolares, setCantidadDolares] = useState<number | null>(null);
  const [esConversionAPesos, setEsConversionAPesos] = useState(false); // Nuevo estado para la dirección de la conversión

  useEffect(() => {
    const calcularConversion = async () => {
      if (cantidad) {
        if (esConversionAPesos) {
          const pesos = await buscaValorPeso(Number(cantidad), tipoDolar);
          setCantidadDolares(pesos);
        } else {
          const dolares = await buscaValorDolar(Number(cantidad), tipoDolar);
          setCantidadDolares(dolares);
        }
      }
    };

    calcularConversion();
  }, [cantidad, tipoDolar, esConversionAPesos]);

  const intercambiarDivisas = () => {
    setEsConversionAPesos(!esConversionAPesos);
    setCantidadDolares(null); // Resetear el resultado al cambiar la dirección
  };

  return (
    <div>
      <form className=" ">
        <div className="w-full flex flex-col items-center gap-6 font-semibold dark:text-black">
          {/* Botón para intercambiar divisas */}
          <button type="button" onClick={intercambiarDivisas} className=" ">
          <IoSwapHorizontal />
          </button>

          {esConversionAPesos ? (
            <div className="  flex flex-col items-center">
              {/* Si es conversión a pesos, muestra este formulario */}
              <label htmlFor="cant" className="pb-3">Cantidad de dólares: </label>
              <input
              placeholder="ejemplo: 25"
                type="text"
                required
                autoComplete="off"
                id="cant"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {/* Si es conversión a dólares, muestra este formulario */}
              <label htmlFor="cant" className="pb-3">Cantidad de pesos: </label>
              <input
                placeholder="ejemplo: 95000"
                type="text"
                required
                autoComplete="off"
                id="cant"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
          )}

          <label htmlFor="tipoDolar">Tipo de Dólar: </label>
          <select
            id="tipoDolar"
            value={tipoDolar}
            onChange={(e) => setTipoDolar(e.target.value)}
          >
            <option value="Blue">Blue</option>
            <option value="Oficial">Oficial</option>
            <option value="Bolsa">Bolsa</option>
            <option value="Contado con liquidación">
              Contado con liquidación
            </option>
            <option value="Mayorista">Mayorista</option>
            <option value="Cripto">Cripto</option>
            <option value="Tarjeta">Tarjeta</option>
          </select>
        </div>
      </form>
      {cantidadDolares !== null && (
        <div className="mt-4 text-black">
          {esConversionAPesos ? (
            <span>Cantidad de pesos: {cantidadDolares.toFixed(2)}</span>
          ) : (
            <span>Cantidad de dólares: {cantidadDolares.toFixed(2)}</span>
          )}
        </div>
      )}
    </div>
  );
}
