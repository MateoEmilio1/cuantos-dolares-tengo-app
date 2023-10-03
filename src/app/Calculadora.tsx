"use client";

export default function Calculadora() {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = {
      cant: String(event.target.cant.value),
    };

    console.log(data); //Funciona, muestra lo que se ingrese en la consola
  }

  return (
    <form onSubmit={handleSubmit} className="rounded">
      <div className="w-full flex flex-col">
        <label htmlFor="cant">Cantidad de pesos: </label>
        <input type="text" required autoComplete="off" id="cant" />
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
