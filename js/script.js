const sheetID = '1e0H2HeT_IJgb-p4s4yfhFTBaxKwnjY17LiQ0PHQV8Lo';
const sheetName = 'Página1';
const url = `https://opensheet.elk.sh/${sheetID}/${sheetName}`;

// Extrai o ID do link do Google Drive
function extractDriveID(link) {
  try {
    const match = link.match(/\/d\/(.*?)\//);
    return match ? match[1] : null;
  } catch (e) {
    return null;
  }
}

fetch(url)
  .then(res => res.json())
  .then(data => {
    const membersDiv = document.getElementById('members');

    data.forEach(member => {
      const driveID = extractDriveID(member["ID da Foto"]);
      const imageURL = driveID
        ? `https://drive.google.com/uc?export=view&id=${driveID}`
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
