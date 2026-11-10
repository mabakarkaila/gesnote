import express from 'express';

const app = express();
const PORT = 3000;

app.get('/api/sante', (req, res) => {
  res.json({ statut: 'ok' });
});

app.listen(PORT, () => {
  console.log(`GesNote démarré sur http://localhost:${PORT}`);
});