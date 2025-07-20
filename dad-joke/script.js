const jokesDiv = this.window.document.querySelector(".jokesDiv");
const jokesGeneratorBtn = this.window.document.querySelector(".jokesGeneratorBtn");

const timer = 3000;

async function generateJokes() {
  const url = "https://icanhazdadjoke.com/";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    jokesDiv.innerHTML = json.joke;
  } catch (error) {
    console.error(error);
  }
}

jokesGeneratorBtn.addEventListener("click", function () {
  generateJokes();
});
