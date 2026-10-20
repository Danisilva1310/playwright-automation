# 🎭 Playwright E2E Automation Framework

[![E2E Tests](https://github.com/Danisilva1310/playwright-automation/actions/workflows/e2e.yml/badge.svg)](https://github.com/Danisilva1310/playwright-automation/actions/workflows/e2e.yml)

Boilerplate profissional de automação de testes End-to-End (E2E) utilizando **Playwright**, **TypeScript**, **Page Object Model (POM)** e relatórios com **Allure Reports**.

---

## 🚀 Tecnologias Utilizadas

* **[Playwright](https://playwright.dev/):** Framework principal de testes E2E.
* **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para maior robustez e legibilidade.
* **[Allure Reports](https://allurereport.org/):** Relatório gráfico e interativo com rastreabilidade detalhada.
* **[GitHub Actions](https://github.com/features/actions):** Pipeline de CI/CD para execução automatizada.
* **[ServeRest](https://serverest.dev/):** Aplicação e API alvo para os cenários de teste.

---

## 🏗️ Arquitetura do Projeto

```text
.
├── .github/workflows/        # Pipelines do GitHub Actions (CI/CD)
├── tests/
│   └── e2e/
│       ├── fixtures/         # Massas de dados estáticas e dinâmicas (JSON)
│       ├── pages/            # Classes do Page Object Model (BasePage, LoginPage)
│       ├── specs/            # Ficheiros de teste (.spec.ts)
│       └── utils/            # Utilitários auxiliares (dataUtils.ts)
├── playwright.config.ts      # Configurações globais do Playwright
├── package.json              # Dependências e scripts do projeto
└── README.md


🛠️ Como Executar o Projeto Localmente
Pré-requisitos
Node.js (v18 ou superior)

npm instalado

Instalação
1 - Clona o repositório:
git clone [https://github.com/Danisilva1310/playwright-automation.git](https://github.com/Danisilva1310/playwright-automation.git)
cd playwright-automation

2 - Instala as dependências:
npm install

3 - Instala o browser Chromium do Playwright:
npx playwright install chromium

🧪 Executando os Testes
Executar todos os testes E2E: npm run test:e2e

Gerar e abrir o relatório do Allure Report: npm run report:allure

📊 Boas Práticas ImplementadasEstratégia de Seletores: Uso estrito de data-testid para garantir estabilidade dos elementos.
Massa Dinâmica: Geração e manipulação de massa de dados em ficheiros JSON com process.cwd().
Rastreabilidade no Allure: Passos nomeados (allure.step) e metadados (severity, owner, description).
CI/CD: Configuração dinamicamente adaptada para pipelines com geração de relatório JUnit (junit.xml).   
