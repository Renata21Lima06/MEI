router.post('/cadastro-mei', async (req, res) => {
  try {
      const novoMei = await MEI.create(req.body);
      res.status(201).json({ mensagem: 'MEI cadastrado com sucesso!' });
  } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao cadastrar MEI', erro: erro.message });
  }
});

router.post('/cadastro-contador', async (req, res) => {
  try {
      const novoContador = await Contador.create(req.body);
      res.status(201).json({ mensagem: 'Contador cadastrado com sucesso!' });
  } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao cadastrar Contador', erro: erro.message });
  }
});
