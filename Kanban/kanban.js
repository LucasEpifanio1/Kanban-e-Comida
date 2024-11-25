document.querySelectorAll('.add-card').forEach(button => {
    button.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'kanban-card';
      card.innerHTML = `
        <div class="badge medium"><span>Nova Tarefa</span></div>
        <p class="card-title">Título do novo cartão</p>
        <div class="card-infos">
          <div class="card-icons">
            <p><i class="fa-regular fa-comment"></i></p>
            <p><i class="fa-solid fa-paperclip"></i></p>
          </div>
        </div>
      `;
      button.parentElement.parentElement.appendChild(card);
    });
  });
  