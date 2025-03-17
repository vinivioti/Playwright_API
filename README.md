# Playwright_API

## 📌 Visão Geral
Este repositório contém testes automatizados de API utilizando **Playwright**. O Playwright é uma ferramenta poderosa para automação de testes, e além de testes de UI, ele também pode ser utilizado para testes de API, permitindo chamadas HTTP diretas e validação de respostas.

## 🚀 Tecnologias Utilizadas
- [Playwright](https://playwright.dev/)
- Node.js
- JavaScript
- Allure Report (para relatórios de teste)

## 📂 Estrutura do Projeto
```
Playwright_API/
│── tests/                 # Diretório com os testes
│   ├── api/               # Testes de API
│   │   ├── API_GET_example.spec # Exemplo de teste de API
│── utils/                 # Funções utilitárias
│── playwright.config.js   # Configuração do Playwright
│── package.json           # Dependências do projeto
│── README.md              # Documentação do projeto
```

## 🔧 Configuração e Instalação
### 1️⃣ Clone o repositório
```sh
git clone https://github.com/seu-usuario/Playwright_API.git
cd Playwright_API
```

### 2️⃣ Instale as dependências
```sh
npm install
```

### 3️⃣ Execute os testes
```sh
npx playwright test
```

## 🛠️ Uso do Playwright para Testes de API
O Playwright oferece um conjunto de métodos para testes de API, como **request.get**, **request.post**, **request.put** e **request.delete**.

### 📌 Exemplo de Teste de API com Playwright
```ts
import { test, expect } from '@playwright/test';

test('Deve obter uma resposta válida da API', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.id).toBe(1);
});
```

## 📊 Relatório de Testes com Allure
Este projeto utiliza **Allure Report** para gerar relatórios detalhados dos testes.
### 🔹 Gerar e abrir o relatório:
```sh
npx allure serve allure-results
```

## 📜 Contribuição
Se quiser contribuir, siga os passos:
1. Faça um **fork** do repositório
2. Crie uma **branch** (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Envie para o repositório remoto (`git push origin minha-feature`)
5. Abra um **Pull Request**

## 📄 Licença
Este projeto é licenciado sob a [MIT License](LICENSE).

---
✉️ **Dúvidas ou sugestões?** Entre em contato!

