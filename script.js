function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat-box");

  const userText = input.value.trim();
  if (!userText) return;

  chat.innerHTML += `<div><strong>Você:</strong> ${userText}</div>`;

  let response = "Estamos aqui para acolher você. Respire fundo e confie que não está sozinho(a).";

  const text = userText.toLowerCase();

  if (text.includes("depress")) {
    response = "A depressão é uma dor silenciosa. Buscar apoio espiritual e humano é um ato de coragem.";
  } else if (text.includes("ansiedad")) {
    response = "A ansiedade pode ser amenizada com respiração consciente, oração e acolhimento.";
  } else if (text.includes("vício") || text.includes("vicio")) {
    response = "A libertação dos vícios é um processo. Há sempre esperança e novos caminhos.";
  } else if (text.includes("horário") || text.includes("data")) {
    response = "O encontro acontece dia 21 de fevereiro, a partir das 18h.";
  }

  chat.innerHTML += `<div><strong>Campanha:</strong> ${response}</div>`;
  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
