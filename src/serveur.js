import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import db from './base.js';

const app = express();
const PORT = 3000;

const dossierCourant = path.dirname(fileURLToPath(import.meta.url));
const dossierPublic = path.join(dossierCourant, '..', 'public');

app.use(express.static(dossierPublic));

app.get('/api/sante', (req, res) => {
  const version = db.prepare('SELECT sqlite_version() AS version').get();
  res.json({ statut: 'ok', sqlite: version.version });
});

app.listen(PORT, () => {
  console.log(`GesNote démarré sur http://localhost:${PORT}`);
});