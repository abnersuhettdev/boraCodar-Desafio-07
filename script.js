const blocos = [
  {
    img: "assets/python-do-vovo.png",
    title: "O Python do vovô não sobe mais",
    location: "São Paulo - SP",
  },
  {
    img: "assets/todo-mundo-null.png",
    title: "Todo mundo null",
    location: "Salvador - BA",
  },
  {
    img: "assets/hoje-dou-exception.png",
    title: "Hoje dou exception",
    location: "Rio de Janeiro - RJ",
  },
  {
    img: "assets/manda-node.png",
    title: "Manda Node",
    location: "Rio de Janeiro - RJ",
  },
  {
    img: "assets/so-no-backend.png",
    title: "Só no back-end",
    location: "Recife - PE",
  },
  {
    img: "assets/esse-anel-nao-e-ruby.png",
    title: "Esse anel não é de Ruby",
    location: "São Paulo - SP",
  },
  {
    img: "assets/pimenta.png",
    title: "Pimenta no C# dos outros é refresco",
    location: "Salvador - BA",
  },
  {
    img: "assets/encache-aqui.png",
    title: "EnCACHE aqui",
    location: "Recife - PE",
  },
  {
    img: "assets/nao-valho-nada-mas-java-li.png",
    title: "Não valho nada mas JAVA li",
    location: "Rio de Janeiro - RJ",
  },
];

const sectionCards = document.querySelector("section.cards");

function criarCards() {
  blocos.forEach((bloco) => {
    sectionCards.innerHTML += `<div class="card">
    <img
      src= ${bloco.img}
      alt="Homem fantasiado curtindo carnaval"
    />
    <div class="body">
      <h3>${bloco.title}</h3>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
        amet sint.
      </p>
      <div class="location">
        <i class="ph-map-pin"></i>
        ${bloco.location}
      </div>
    </div>
  </div>`;
  });
}

function filtraBloco(e) {
  sectionCards.innerHTML = "";
  e.preventDefault();

  const form = document.querySelector("form");

  let nomeBuscado = form.name.value.toLowerCase();
  let cidadeBuscada = form.city.value;

  let blocosFiltrados = blocos.filter((bloco) => {
    return (
      bloco.title.toLowerCase().includes(nomeBuscado) &&
      bloco.location.includes(cidadeBuscada)
    );
  });
  console.log(nomeBuscado);
  console.log(cidadeBuscada);
  console.log(blocosFiltrados);

  blocosFiltrados.forEach((bloco) => {
    sectionCards.innerHTML += `<div class="card">
    <img
      src= ${bloco.img}
      alt="Homem fantasiado curtindo carnaval"
    />
    <div class="body">
      <h3>${bloco.title}</h3>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
        amet sint.
      </p>
      <div class="location">
        <i class="ph-map-pin"></i>
        ${bloco.location}
      </div>
    </div>
  </div>`;
  });
}

document.onload = criarCards();
