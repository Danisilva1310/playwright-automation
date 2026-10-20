import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async acessarPaginaLogin(): Promise<void> {
    await this.navegarPara('/login');
    await expect(this.page).toHaveURL(/\/login/i);
  }

  async preencherCredenciais(email: string, senha: string): Promise<void> {
    const emailInput = this.page.getByTestId('email');
    const senhaInput = this.page.getByTestId('senha');

    await expect(emailInput).toBeVisible({ timeout: 15000 });
    await expect(senhaInput).toBeVisible({ timeout: 15000 });

    await emailInput.fill(email);
    await senhaInput.fill(senha);
  }

  async submeterFormulario(): Promise<void> {
    const botaoEntrar = this.page.getByTestId('entrar');
    await expect(botaoEntrar).toBeVisible({ timeout: 15000 });
    await botaoEntrar.click();
  }

  async validarLoginSucesso(): Promise<void> {
    await expect(this.page.locator('body')).toContainText(/Home|Bem Vindo|Produtos/i, { timeout: 20000 });
  }
}