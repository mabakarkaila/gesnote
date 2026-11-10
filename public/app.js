async function verifierServeur() {
  const zone = document.getElementById('etat-serveur');
  try {
    const reponse = await fetch('/api/sante');
    const donnees = await reponse.json();
    zone.textContent = 'Serveur : ' + donnees.statut;
  } catch (erreur) {
    zone.textContent = 'Serveur injoignable';
  }
}

verifierServeur();