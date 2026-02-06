let idiomaAtual = "pt";

async function carregarIdioma(id){
  idiomaAtual = id;
  const r = await fetch(`lang/${id}.json`);
  const t = await r.json();

  document.getElementById("titulo").innerText = t.titulo;
  document.getElementById("subtitulo").innerText = t.subtitulo;
  document.getElementById("sobreTitulo").innerText = t.sobreTitulo;
  document.getElementById("textoSobre").innerText = t.sobreTexto;
  document.getElementById("chatTitulo").innerText = t.chatTitulo;
  document.getElementById("avisoLegal").innerText = t.avisoLegal;
}

async function carregarConteudo(){
  const r = await fetch("data/conteudo.json");
  const d = await r.json();

  d.cronograma.forEach(i=>{
    const li=document.createElement("li");
    li.innerText=i;
    listaCronograma.appendChild(li);
  });

  d.fotos.forEach(f=>{
    const a=document.createElement("a");
    a.href=f;
    a.download="";
    a.innerHTML=`<img src="${f}">`;
    fotos.appendChild(a);
  });
}

async function enviar(){
  const msg=entrada.value;
  const r=await fetch("/chat",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({mensagem:msg})
  });
  const d=await r.json();

  mensagens.innerHTML+=
    `<p><b>Você:</b> ${msg}</p><p><b>Atendente:</b> ${d.resposta}</p>`;
}

carregarIdioma("pt");
carregarConteudo();
