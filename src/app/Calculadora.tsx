"use client";

import FiltrarDolares from "./FiltrarDolares";

export default function Calculadora() {


  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = {
      cant: Number(event.target.cant.value),
      tipoDolar: String(event.target.tipoDolar.value),
    };

    //MANIPULAR DATA ACA
    console.log(data); //Funciona, muestra lo que se ingrese en la consola
    FiltrarDolares(data.cant, data.tipoDolar);
    

  }

  return (
    <form onSubmit={handleSubmit} className="rounded">
      
      <div className="w-full flex flex-col">
        {/* Ingreso cantidad de pesos */}
        <label htmlFor="cant">Cantidad de pesos: </label>
        <input type="text" required autoComplete="off" id="cant" />
        {/* Ingreso el tipo de Dolar */}      
        <label htmlFor="tipoDolar">Tipo de Dólar: </label>
        <input type="text" required autoComplete="off" id="tipoDolar" name="tipoDolar" />
      </div>
      <button
        type="submit"
        className="w-24 h-10 bg-gradient-to-r from-slate-400 to-slate-600 text-white px-2 py-1.5 rounded-md ml-8"
      >
        Calcular
      </button>
    </form>
  );
}
