import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
      const indexPath = path.join(process.cwd(), 'index.html');
          const html = fs.readFileSync(indexPath, 'utf-8');

                  res.setHeader('Content-Type', 'text/html; charset=utf-8');
                      res.setHeader('Cache-Control', 'public, max-age=3600');
                          res.status(200).send(html);
                            } catch (error) {
                                res.status(500).json({ error: 'Failed to load page' });
                                  }
                                  }
