import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, 'data.json');

interface Certificate { id: number; name: string; image_url: string; }
interface Machine { id: number; name: string; description: string; image_url: string; }
interface Reference { id: number; name: string; image_url: string; }
interface Sample { id: number; name: string; image_url: string; }
interface Data {
  certificates: Certificate[];
  machines: Machine[];
  references_list: Reference[];
  samples: Sample[];
  nextId: { cert: number; machine: number; ref: number; sample: number };
}

function loadData(): Data {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch {}
  return {
    certificates: [
      { id: 1, name: 'ISO 9001:2015', image_url: 'https://picsum.photos/seed/cert1/400/600' },
      { id: 2, name: 'ISO 14001:2015', image_url: 'https://picsum.photos/seed/cert2/400/600' },
      { id: 3, name: 'ISO 45001:2018', image_url: 'https://picsum.photos/seed/cert3/400/600' },
    ],
    machines: [
      { id: 1, name: 'CNC İşleme Merkezi', description: 'Yüksek hassasiyetli 5 eksenli işleme kapasitesi.', image_url: 'https://picsum.photos/seed/m1/800/600' },
      { id: 2, name: 'Lazer Kesim Makinası', description: 'Hızlı ve temiz kesim teknolojisi.', image_url: 'https://picsum.photos/seed/m2/800/600' },
    ],
    references_list: [],
    samples: [],
    nextId: { cert: 4, machine: 3, ref: 1, sample: 1 }
  };
}

function saveData(data: Data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json({ limit: '50mb' }));

  // API Routes
  app.get('/api/content', (req, res) => {
    const data = loadData();
    res.json({
      certificates: data.certificates,
      machines: data.machines,
      references: data.references_list,
      samples: data.samples,
    });
  });

  app.post('/api/admin/login', (req, res) => {
    const { password } = req.body;
    if (password === 'admin123') {
      res.json({ success: true, token: 'fake-jwt-token' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid password' });
    }
  });

  app.post('/api/admin/certificates', (req, res) => {
    const data = loadData();
    const { name, image_url } = req.body;
    const newItem = { id: data.nextId.cert++, name, image_url };
    data.certificates.push(newItem);
    saveData(data);
    res.json({ id: newItem.id });
  });

  app.delete('/api/admin/certificates/:id', (req, res) => {
    const data = loadData();
    data.certificates = data.certificates.filter(c => c.id !== Number(req.params.id));
    saveData(data);
    res.json({ success: true });
  });

  app.post('/api/admin/machines', (req, res) => {
    const data = loadData();
    const { name, description, image_url } = req.body;
    const newItem = { id: data.nextId.machine++, name, description, image_url };
    data.machines.push(newItem);
    saveData(data);
    res.json({ id: newItem.id });
  });

  app.delete('/api/admin/machines/:id', (req, res) => {
    const data = loadData();
    data.machines = data.machines.filter(m => m.id !== Number(req.params.id));
    saveData(data);
    res.json({ success: true });
  });

  app.post('/api/admin/references', (req, res) => {
    const data = loadData();
    const { name, image_url } = req.body;
    const newItem = { id: data.nextId.ref++, name, image_url };
    data.references_list.push(newItem);
    saveData(data);
    res.json({ id: newItem.id });
  });

  app.delete('/api/admin/references/:id', (req, res) => {
    const data = loadData();
    data.references_list = data.references_list.filter(r => r.id !== Number(req.params.id));
    saveData(data);
    res.json({ success: true });
  });

  app.post('/api/admin/samples', (req, res) => {
    const data = loadData();
    const { name, image_url } = req.body;
    const newItem = { id: data.nextId.sample++, name, image_url };
    data.samples.push(newItem);
    saveData(data);
    res.json({ id: newItem.id });
  });

  app.delete('/api/admin/samples/:id', (req, res) => {
    const data = loadData();
    data.samples = data.samples.filter(s => s.id !== Number(req.params.id));
    saveData(data);
    res.json({ success: true });
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
