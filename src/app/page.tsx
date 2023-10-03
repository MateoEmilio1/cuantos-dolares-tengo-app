import Image from "next/image";

//Funcion para pedir los Tipos de Dolares
async function getDolares() {
  const res = await fetch("https://dolarapi.com/v1/dolares", {
    cache: "no-cache",
  });
  const data = await res.json();

  return data;
}

export default async function Home() {
  const dolares = await getDolares();

  return (
    <main className="flex min-h-screen flex-col items-center ">
      {/* ----------PRECIOS DOLAR---------- */}
      <h1 className="font-semibold text-4xl mt-24 ">Precios dolar</h1>

      <div className="grid lg:grid-cols-3 py-4s">
        {dolares.map((dolar) => (
          <div
            key={dolar.casa}
            className="max-w-md rounded overflow-hidden shadow-lg bg-slate-300 mx-12 my-6"
          >
            <div className="px-6 py-4 text-left">
              <h1 className="font-semibold text-lg">
                Dolar {dolar.nombre} <br />
              </h1>
              <h1>
                Compra: {dolar.compra} <br />
                Venta: {dolar.venta} <br />
                Fecha actualizacion: {dolar.fechaActualizacion} <br />
              </h1>
            </div>
          </div>
        ))}
      </div>
      {/* ----------CALCULADORA DOLARES---------- */}
      <h1 className="font-semibold text-4xl">¿Cuantos dolares tengo?</h1>




    </main>
  );
}

/* export async function getStaticProps() {
  try {
    const res = await fetch('https://dolarapi.com/v1/dolares');
    const data = await res.json()
    return {
      props: {
        data
      },
    };
  } catch (error) {
    console.log(error);
  }
} */
