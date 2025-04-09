document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
  
    fetch('https://rickandmortyapi.com/api/character?page=1')
      .then(response => response.json())
      .then(data => {
        const characters = data.results.slice(0, 10);
  
        characters.forEach(character => {
          const col = document.createElement('div');
          col.className = 'col';
  
          col.innerHTML = `
            <div class="card h-100">
              <img src="${character.image}" class="card-img-top" alt="${character.name}">
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">Especie: ${character.species}</p>
                <p class="card-text">Género: ${character.gender}</p>
                <p class="card-text"><small class="text-body-secondary">Estado: ${character.status}</small></p>
              </div>
            </div>
          `;
  
          cardContainer.appendChild(col);
        });
      })
  });
  
