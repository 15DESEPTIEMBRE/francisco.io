const boton = document.getElementById("btnGenerar");
const resultado = document.getElementById("resultado");
const promptInput = document.getElementById("prompt");

boton.addEventListener("click", generarHistoria);

async function generarHistoria() {
  const prompt = promptInput.value.trim();

  if (prompt === "") {
    resultado.textContent = "Por favor escribe una idea inicial.";
    return;
  }

  resultado.textContent = "Generando historia...";

  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    const historia = `
${prompt}

${data.content}

— ${data.author}
    `;

    resultado.textContent = historia;

  } catch (error) {
    resultado.textContent = "Error al conectar con la API pública.";
  }
}
