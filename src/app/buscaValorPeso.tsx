import { DolarData } from "./types";

async function getDolares(): Promise<DolarData[]> {
    const res = await fetch("https://dolarapi.com/v1/dolares", {
      cache: "no-cache",
    });
    const data: DolarData[] = await res.json();
  
    return data;
  }

async function getPesos(tipoDolar: string): Promise<number> {
  const dolares: DolarData[] = await getDolares();
  let valorPeso: number = 0;

  dolares.forEach((dolar: DolarData) => {
    if (dolar.nombre === tipoDolar) {
      valorPeso = dolar.compra; // Usamos el valor de compra para la conversión inversa
    }
  });

  return valorPeso;
}

export default async function buscaValorPeso(
  cantDolares: number,
  tipoDolar: string
): Promise<number> {
  //Obtengo el valor de 1 peso en términos de la divisa seleccionada (ejemplo: 1 USD)
  const valorPeso: number = await getPesos(tipoDolar);
  let cantidadPesos: number = 0;

  // La división en buscaValorDolar se convierte en multiplicación aquí
  cantidadPesos = cantDolares * valorPeso;

  console.log(`Recibí ${cantDolares} dólares como argumento.`);
  console.log(`Recibí ${tipoDolar} tipoDolar como argumento.`);

  return cantidadPesos;
}
