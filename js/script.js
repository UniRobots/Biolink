const sheetID = '1e0H2HeT_IJgb-p4s4yfhFTBaxKwnjY17LiQ0PHQV8Lo';
const sheetName = 'Página1';
const url = `https://opensheet.elk.sh/${sheetID}/${sheetName}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const membersDiv = document.getElementById('members');

    data.forEach(member => {
      const imageID = member["ID da Imagem"];
      const imageURL = imageID
        ? `membros/${imageID}.png`
        : 'https://robohash.org/default.png?set=set3';

      const div = document.createElement('div');
      div.className = 'membros';

      div.innerHTML = `
        <img 
          src="${imageURL}" 
          alt="${member.Nome}" 
          title="${member.Nome}" 
          onerror="this.onerror=null; this.src='https://robohash.org/default.png?set=set3';"
        >
        <p>${member.Nome}</p>
      `;

      membersDiv.appendChild(div);
    });
  })
  .catch(err => console.error('Erro ao carregar membros:', err));
