import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados bem-sucedida!");
  } catch (error) {
    console.error("Erro de conexão com o banco de dados:", error);
  }
}

testConnection();

export default sequelize;
