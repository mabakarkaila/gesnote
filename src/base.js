import Database from 'better-sqlite3';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dossierCourant = path.dirname(fileURLToPath(import.meta.url));
const cheminBase = path.join(dossierCourant, '..', 'gesnote.db');

const db = new Database(cheminBase);

// Active la vérification des clés étrangères (désactivée par défaut dans SQLite)
db.pragma('foreign_keys = ON');

export default db;