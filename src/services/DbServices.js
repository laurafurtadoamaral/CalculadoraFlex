import * as SQLite from "expo-sqlite";

const dbPromise = SQLite.openDatabaseAsync("fuel_manager.db");

// Função para executar consultas SQL
const ExecuteQuery = (sql, params = []) => {
  console.log("Executando SQL:", sql, "com parâmetros:", params);
  return new Promise((resolve, reject) => {
    db.transaction((trans) => {
      trans.executeSql(
        sql,
        params,
        (trans, result) => {
          console.log("SQL executado com sucesso:", result);
          resolve(result);
        },
        (error) => {
          console.error("Erro ao executar SQL:", error);
          reject(error);
        }
      );
    });
  });
};

// Criar tabela ao iniciar o banco
dbPromise.then((db) => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS gastos (id INTEGER PRIMARY KEY NOT NULL, tipo INT NOT NULL, data TEXT NOT NULL, preco REAL NOT NULL, valor REAL NOT NULL, odometro INT NOT NULL);",
      [],
      () => console.log("Tabela criada com sucesso!"),
      (error) => console.log("Erro ao criar tabela:", error)
    );
  });
});

// Exportando conexão e método de execução
const Database = {
  getConnection: () => dbPromise,
  ExecuteQuery: ExecuteQuery,
};

export default Database;
