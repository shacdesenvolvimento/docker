const express = require('express')
const app = express()
const port = 3000

// Rota para exibir o formulário
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label for="nome">Digite seu nome:</label>
      <input type="text" id="nome" name="nome" required>
      <button type="submit">Enviar</button>
    </form>
  `);
});

// Rota para processar o formulário e mostrar o nome
app.post('/submit', (req, res) => {
  const nome = req.body.nome;
  res.send(`Olá, ${nome}!`);
});

app.listen(port, () => {
  console.log(`Executando na porta: ${port}`)
});