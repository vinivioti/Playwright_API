import { test, expect } from '@playwright/test';

// Exemplo de teste para verificar o status de um endpoint GET
test('GET - Verificar status 200', async ({request}) => {

  const response = await request.get('https://rickandmortyapi.com/api/character')

  expect(response).toBeDefined(); // Verifica se os dados são retornados
  expect(response.status()).toBe(200); // Verifica se o status é 200 OK
  

});

test('GET - Verificar Rick Sanches', async ({request}) => {

  const response = await request.get('https://rickandmortyapi.com/api/character')
  
  const JsonData = await response.json();

  expect(response).toBeDefined(); // Verifica se os dados são retornados
  expect(response.status()).toBe(200); // Verifica se o status é 200 OK
  expect(JsonData.results[0].name).toContain('Rick Sanchez') //Verifica se o nome é Rick Sanchez
  

});

