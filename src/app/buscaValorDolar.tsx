import { DolarData } from "./types";

async function getDolares(): Promise<DolarData[]> {
  const res = await fetch("https://dolarapi.com/v1/dolares", {
    cache: "no-cache",
  });
  const data: DolarData[] = await res.json();

  return data;
}

export default async function buscaValorDolar(
  cantPesos: number,
  tipoDolar: string
): Promise<number | null> {
  const dolares: DolarData[] = await getDolares();
  let cantidadDolares: number | null = null;

  //Falta como hacer la division
  console.log(`Recibí ${cantPesos} pesos como argumento.`);
  console.log(`Recibí ${tipoDolar} tipoDolar como argumento.`);

  dolares.forEach((dolar) => {
    if (dolar.nombre === tipoDolar) {
      cantidadDolares = cantPesos / dolar.venta;
    }
  });

  return cantidadDolares;
}
