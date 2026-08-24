const express = require("express");

const app = express();

app.get("/", (request, response) => {

  const agora = new Date();

  const dataHoraFormatada = agora.toLocaleString("pt-BR", {
    timeZone: "America/Recife",
    dateStyle: "full",
    timeStyle: "medium",
  });

  response.status(200).json({
    mensagem: "Data e hora atuais",
    dataHora: dataHoraFormatada,
    iso: agora.toISOString(),
    fusoHorario: "America/Recife",
  });

});

module.exports = app;