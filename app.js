alert("JS CARGADO CORRECTAMENTE");

const btn = document.getElementById("generateBtn");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  output.textContent = "Conectando con la API...";

  try {
    const response = await fetch(
      "https://baconipsum.com/api/?type=meat-and-filler&paras=2"
    );

    const data = await response.json();
    output.textContent = data.join("\n\n");
  } catch (error) {
    output.textContent = "❌ Error al conectar con la API.";
  }
});

