import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.static("."));

const chatbot = JSON.parse(fs.readFileSync("data/chatbot.json"));

app.post("/chat",(req,res)=>{
  const texto=req.body.mensagem.toLowerCase();
  let resposta="Estamos aqui para acolher você com carinho e orientação espiritual.";

  for(let k in chatbot){
    if(texto.includes(k)){resposta=chatbot[k];break;}
  }

  res.json({resposta});
});

app.listen(3000,()=>console.log("Campanha pela Vida ativa"));
