import { Page, expect } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async navegarPara(caminho: string): Promise<void> {
    await this.page.goto(caminho);
  }

  async preencherCampoPorTestId(testId: string, valor: string): Promise<void> {
    await this.page.getByTestId(testId).fill(valor);
  }

  async clicarPorTestId(testId: string): Promise<void> {
    await this.page.getByTestId(testId).click();
  }

  async validarTextoPorTestId(testId: string, textoEsperado: string): Promise<void> {
    await expect(this.page.getByTestId(testId)).toContainText(textoEsperado);
  }

  async validarElementoVisivelPorTestId(testId: string): Promise<void> {
    await expect(this.page.getByTestId(testId)).toBeVisible();
  }
}