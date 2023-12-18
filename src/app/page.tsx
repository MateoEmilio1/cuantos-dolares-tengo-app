import Calculadora from "./Calculadora";
import { DolarData } from "./types";

//Funcion para pedir los Tipos de Dolares
async function getDolares() {
  const res = await fetch("https://dolarapi.com/v1/dolares", {
    cache: "no-cache",
  });
  const data = await res.json();

  return data;
}

export default async function Home() {
  const dolares: DolarData[] = await getDolares();

  function mostrarFecha(fechaActualizacion: string): import("react").ReactNode {
    // Parsear la fecha en formato ISO 8601 para asegurarse de que la zona horaria sea considerada
    const originalDate: Date = new Date(fechaActualizacion);
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Argentina/Buenos_Aires",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDate: string = originalDate.toLocaleDateString(
      "es-AR",
      options
    );

    return formattedDate
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-100">
      {/* ----------PRECIOS DOLAR---------- */}
      <h1 className="font-semibold text-4xl mt-24 text-black ">
        Precios dólar
      </h1>

      <div className="grid lg:grid-cols-3 py-4s">
        {dolares.map((dolar: DolarData) => (
          <div
            key={dolar.casa}
            className="max-w-md rounded overflow-hidden shadow-lg bg-slate-300 mx-12 my-6"
          >
            <div className="px-6 py-4 text-left text-black">
              <h1 className="font-semibold text-lg">
                Dolar {dolar.nombre} <br />
              </h1>
              <h1>
                Compra: {dolar.compra} <br />
                Venta: {dolar.venta} <br />
                Fecha actualización: {mostrarFecha(
                  dolar.fechaActualizacion
                )}{" "}
                <br />
              </h1>
            </div>
          </div>
        ))}
      </div>
      {/* ----------CALCULADORA DOLARES---------- */}
      <div>
        <h1 className="flex justify-center items-center font-semibold  text-3xl md:text-4xl pb-8 text-black">
          Calculadora
        </h1>

        <div className="flex justify-center items-center mb-56">
          <div className="mx-5 py-5">
            {/* FORM */}
            <Calculadora />
          </div>
        </div>
      </div>
    </main>
  );
}
