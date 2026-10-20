import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { LoginPage } from '../pages/LoginPage';
import { salvarMassaDinamica } from '../utils/dataUtils';

test.describe('Autenticação de Usuários', () => {
  test('Deve cadastrar e realizar login com sucesso', async ({ page, request }) => {
    const loginPage = new LoginPage(page);
    const timestamp = Date.now();
    const nomeDinamico = `QA Daniela ${timestamp}`;
    const emailDinamico = `daniela_qa_${timestamp}@teste.com`;
    const senhaDinamica = 'Teste123!';

    allure.owner('Daniela Silva');
    allure.severity('critical');
    allure.tag('Autenticação', 'E2E');
    allure.description('Valida o cadastro de usuário e login com sucesso no ServeRest');

    await allure.step('Pré-requisito: Cadastrar usuário via API', async () => {
      const response = await request.post('https://serverest.dev/usuarios', {
        data: {
          nome: nomeDinamico,
          email: emailDinamico,
          password: senhaDinamica,
          administrador: 'true'
        }
      });
      expect(response.status()).toBe(201);
      salvarMassaDinamica({ emailUsuario: emailDinamico, nomeUsuario: nomeDinamico });
    });

    await allure.step('Acessar a página de login', async () => {
      await loginPage.acessarPaginaLogin();
    });

    await allure.step('Preencher formulário de autenticação', async () => {
      await loginPage.preencherCredenciais(emailDinamico, senhaDinamica);
    });

    await allure.step('Submeter e validar acesso à área logada', async () => {
      await loginPage.submeterFormulario();
      await loginPage.validarLoginSucesso();
    });
    const screenshot = await page.screenshot({ fullPage: true });
      allure.attachment('Evidência - Área Logada', screenshot, 'image/png');
    
  })
});