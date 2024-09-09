const url = "https://hp-api.onrender.com/api/characters";

function convertPersonagemToLi(personagem) {
    return `
        <li class="personagem">
            <span class="name">${personagem.name}</span>
            <div class="detail">
                <div class="info">
                    <span class="species">Specie: ${personagem.species}</span>
                    <span class="gender">Gender: ${personagem.gender}</span>
                    <span class="birthdate">Birth: ${personagem.dateOfBirth}</span>
                    <span class="actor">Actor: ${personagem.actor}</span>
                </div>
                <img src="${personagem.image}" alt="${personagem.name}" class="image">
            </div>
        </li>    
    `;
}

const listaPotters = document.getElementById("lista_personagens")

fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => listaPotters.innerHTML += jsonResponse.map(convertPersonagemToLi).join(""))