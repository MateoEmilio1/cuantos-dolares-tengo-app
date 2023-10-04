async function getDolares() {
  const res = await fetch("https://dolarapi.com/v1/dolares", {
    cache: "no-cache",
  });
  const data = await res.json();

  return data;
}

export default async function buscaValorDolar(
  cantPesos: number,
  tipoDolar: string
) {
  const dolares = await getDolares();
  let cantidadDolares = 0;

  //Falta como hacer la division
  console.log(`Recibí ${cantPesos} pesos como argumento.`);
  console.log(`Recibí ${tipoDolar} tipoDolar como argumento.`);

  dolares.forEach((dolar: any) => {
    if (dolar.nombre === tipoDolar) {
      cantidadDolares = cantPesos / dolar.venta;
    }
  });

  return cantidadDolares;

}

function cantidadDolares(dolar: any, cantPesos: number, tipoDolar: string) {

  if (dolar.nombre === tipoDolar) {

    var cantDolares: number = cantPesos / dolar.venta;
    /* MostrarDolares(cantDolares); */

    return console.log(`La cantidad de dolares es ${Math.trunc(cantDolares)}  con el tipo ${tipoDolar} .`);;

  } else {

    return console.log(`Volver a testear`);
  }
}

/* export async function MostrarDolares(cantDolares: number) {
    <div>
        Cantidad de dolares: {cantDolares}
    </div>

} */
