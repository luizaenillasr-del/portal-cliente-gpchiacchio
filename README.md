# Portal do Cliente — Grupo Chiacchio

Interface pública do Portal do Cliente. Este repositório contém somente os arquivos públicos do portal; os dados e operações continuam no backend privado do sistema SAC.

## Deploy na Vercel

- Build Command: `node scripts/build.js`
- Output Directory: `dist`
- Install Command: `node --version`
- Framework: Other

A configuração em `vercel.json` encaminha somente as APIs públicas permitidas para o backend do SAC.
