async function getDolares() {
  const res = await fetch("https://dolarapi.com/v1/dolares", {
    cache: "no-cache",
  });
  const data = await res.json();

  return data;
}

export default async function FiltrarDolares(
  cantPesos: number,
  tipoDolar: string,
) {
  const dolares = await getDolares();

  //Falta como hacer la division
  console.log(`Recibí ${cantPesos} pesos como argumento.`);
  console.log(`Recibí ${tipoDolar} tipoDolar como argumento.`);

  if (dolares.casa === tipoDolar){

        var cantDolares: number = cantPesos / dolares.venta;

        return(console.log(`Cantidad de dolares: ${cantDolares}`))
        
    }
    else{
        return(console.log(`Algo salio mal`))

    }
/* 
  {
    dolares.map((dolar) => (
      <div
        key={dolar.casa}
        className="max-w-md rounded overflow-hidden shadow-lg bg-slate-300 mx-12 my-6"
      >
        <div className="px-6 py-4 text-left">
          dolares.casa === tipoDolar 
          ? console.log("Contenido si la condición es verdadera") 
          : console.log("Contenido si la condición es falsa");
        </div>
      </div>
    ));
  } */
}
