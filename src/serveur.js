import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = 3000;

const dossierCourant = path.dirname(fileURLToPath(import.meta.url));
const dossierPublic = path.join(dossierCourant, '..', 'public');

app.use(express.static(dossierPublic));

app.get('/api/sante', (req, res) => {
  res.json({ statut: 'ok' });
});

app.listen(PORT, () => {
  console.log(`GesNote démarré sur http://localhost:${PORT}`);
});