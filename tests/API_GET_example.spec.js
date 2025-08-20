import { test, expect } from '@playwright/test';
import endpoints from '../endpoints.js'; // Importando as URLs


// Exemplo de teste para verificar o status de um endpoint GET
test('GET - Verificar status 200', async ({request, baseURL}) => {

   const response = await request.get(baseURL)

  expect(response).toBeDefined(); // Verifica se os dados são retornados
  expect(response.status()).toBe(200); // Verifica se o status é 200 OK
  

});

test('GET - Verificar Rick Sanchez', async ({request}) => {

  const response = await request.get(endpoints.characters)
  
  const JsonData = await response.json();

  expect(response).toBeDefined(); // Verifica se os dados são retornados
  expect(response.status()).toBe(200); // Verifica se o status é 200 OK
  expect(JsonData.results[0].name).toContain('Rick Sanchez') //Verifica se o nome é Rick Sanchez
  

});

test('GET - Verificar Rick Sanches inválido', async ({request}) => {

  const response = await request.get(endpoints.characters)
  
  const JsonData = await response.json();

  expect(response).toBeDefined(); // Verifica se os dados são retornados
  expect(response.status()).toBe(200); // Verifica se o status é 200 OK
  expect(JsonData.results[0].name).toContain('Rick Sanches') //Verifica se o nome é Rick Sanchez, Da erro pois é Sanchez com 'Z' e não com 'S'
  

});

test('GET - Verificar nome episodio como Pilot', async ({request}) => {

  const response = await request.get(endpoints.episodes)
  
  const JsonData = await response.json();

  expect(response).toBeDefined(); // Verifica se os dados são retornados
  expect(response.status()).toBe(200); // Verifica se o status é 200 OK
  expect(JsonData.results[0].name).toContain('Pilot') //Verifica se o nome é Rick Sanchez
  

});

test('GET - Verificar se o planeta é o C-137', async ({request}) => {

  const response = await request.get(endpoints.location)
  
  const JsonData = await response.json();

  expect(response).toBeDefined(); // Verifica se os dados são retornados
  expect(response.status()).toBe(200); // Verifica se o status é 200 OK
  expect(JsonData.results[0].dimension).toContain('Dimension C-137') //Verifica se a dimensao é a C-137
  

});
