async function main() {
  const pokes = await fetch("https://pokeapi.co/api/v2/pokedex/");
  const pokesData = await pokes.json();
  const pokeListEl = document.querySelector(".poke-list");
  console.log(pokesData);
  pokeListEl.innerHTML = pokesData.map((poke) => pokeHTML(poke)).join("");
}

main();