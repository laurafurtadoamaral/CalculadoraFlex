import Database from "./DbServices";

const { ExecuteQuery } = Database;

/*export const getGastos = async () => {
  let result = await ExecuteQuery("SELECT * FROM gastos");
  return result.rows._array;
};*/
export const getGastos = async () => {
  try {
    const result = await ExecuteQuery("SELECT * FROM gastos;", []);
    return result.rows._array; // Retorna os registros como um array
  } catch (error) {
    console.error("Erro ao buscar gastos:", error);
    return [];
  }
};

/*
export const insertGastos = async (param) => {
  let result = await ExecuteQuery(
    "insert into gastos (tipo, data, preco, valor, odometro) values (?, ?, ?, ?, ?)",
    [param.tipo, param.data, param.preco, param.valor, param.odometro]
  );
  console.log(result);
  return result.rowsAffected;
};
*/

export const insertGastos = async (gasto) => {
  const { tipo, data, preco, valor, odometro } = gasto;

  try {
    await ExecuteQuery(
      "INSERT INTO gastos (tipo, data, preco, valor, odometro) VALUES (?, ?, ?, ?, ?);",
      [tipo, data, parseFloat(preco), parseFloat(valor), parseInt(odometro)]
    );
    console.log("Gasto inserido com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir gasto:", error);
  }
};
