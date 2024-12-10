# Loja de Pranchas

Este é um backend simples em TypeScript para uma loja de pranchas, que permite cadastrar e consultar o estoque de pranchas.

## Como rodar o projeto

1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure o banco de dados no arquivo `config/database.ts`.
4. Execute o servidor: `npm run dev`.

## Exemplos de uso com cURL

### Consultar pranchas
```bash
curl -X GET http://localhost:3000/pranchas
