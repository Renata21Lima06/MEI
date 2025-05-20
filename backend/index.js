import express from "express";
import sequelize from "./config/sequelize.js";
import MEI from "./Mei.js";
import cors from "cors";
import Contador from "./Contador.js";

const app = express();
app.use(express.json());
app.use(cors());

sequelize.sync({ alter: true }).then(() => {
  console.log("Banco de dados sincronizado!");
});

// Rotas para CRUD de MEI
app.get("/meis", async (req, res) => {
  try {
    const meis = await MEI.findAll();
    res.json(meis);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar MEIs" });
  }
});

app.post("/cadastro-mei", async (req, res) => {
  try {
    const novoMei = await MEI.create(req.body);
    res.status(201).json({ mensagem: "MEI cadastrado com sucesso!" });
  } catch (erro) {
    res
      .status(500)
      .json({ mensagem: "Erro ao cadastrar MEI", erro: erro.message });
  }
});

app.post("/cadastro-contador", async (req, res) => {
  try {
    const novoContador = await Contador.create(req.body);
    console.log(req.body);
    res.status(201).json({ mensagem: "Contador cadastrado com sucesso!" });
  } catch (erro) {
    res
      .status(500)
      .json({ mensagem: "Erro ao cadastrar Contador", erro: erro.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
