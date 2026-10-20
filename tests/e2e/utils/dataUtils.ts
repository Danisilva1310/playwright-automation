// tests/e2e/utils/dataUtils.ts
import fs from 'fs';
import path from 'path';

const caminhoMassa = path.resolve(process.cwd(), 'tests', 'e2e', 'fixtures', 'massaDinamica.json');

export interface MassaDinamica {
  emailUsuario?: string;
  nomeUsuario?: string;
  protocoloGerado?: string;
  dataCriacao?: string;
}

export function salvarMassaDinamica(dados: Partial<MassaDinamica>): void {
  const pastaFixtures = path.dirname(caminhoMassa);
  if (!fs.existsSync(pastaFixtures)) {
    fs.mkdirSync(pastaFixtures, { recursive: true });
  }

  let dadosExistentes: MassaDinamica = {};
  if (fs.existsSync(caminhoMassa)) {
    try {
      dadosExistentes = JSON.parse(fs.readFileSync(caminhoMassa, 'utf-8'));
    } catch {
      dadosExistentes = {};
    }
  }

  const novosDados = {
    ...dadosExistentes,
    ...dados,
    dataCriacao: new Date().toISOString(),
  };

  fs.writeFileSync(caminhoMassa, JSON.stringify(novosDados, null, 2), 'utf-8');
}

export function obterMassaDinamica(): MassaDinamica {
  if (!fs.existsSync(caminhoMassa)) {
    throw new Error(`Arquivo de massa não encontrado em: ${caminhoMassa}`);
  }
  return JSON.parse(fs.readFileSync(caminhoMassa, 'utf-8'));
}