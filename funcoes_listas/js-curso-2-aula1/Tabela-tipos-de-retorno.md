| Tipo de Função               | Exemplo de Código                              | Uso                                                  |
|-----------------------------|-------------------------------------------------|------------------------------------------------------|
| Sem retorno e sem parâmetro | `function saudacao() { ... }`                  | Execução de bloco de código simples.                |
| Sem retorno e com parâmetro | `function cumprimentar(nome) { ... }`          | Execução de bloco de código com argumentos.         |
| Com retorno e sem parâmetro | `function gerarNumeroAleatorio() { ... }`      | Cálculo e retorno de um valor específico.           |
| Com retorno e com parâmetro | `function somar(a, b) { ... }`                 | Cálculo e retorno baseado em argumentos.            |
| Função anônima              | `let saudacao = function() { ... };`           | Definição de função sem nome localmente.            |
| Arrow function              | `let quadrado = x => x * x;`                   | Definição concisa de funções curtas.                |
---
<br>


# Exemplos:

| Tipo de Função               | Exemplo de Código Real                                                        | Uso                                                  |
|-----------------------------|--------------------------------------------------------------------------------|------------------------------------------------------|
| Sem retorno e sem parâmetro | ```js\nfunction saudacao() {\n  console.log("Olá! Seja bem-vindo.");\n}\nsaudacao();\n``` | Execução de bloco de código simples.                |
| Sem retorno e com parâmetro | ```js\nfunction cumprimentar(nome) {\n  console.log(`Olá, ${nome}!`);\n}\ncumprimentar("Aline");\n``` | Execução de bloco de código com argumentos.         |
| Com retorno e sem parâmetro | ```js\nfunction gerarNumeroAleatorio() {\n  return Math.floor(Math.random() * 10) + 1;\n}\nlet numero = gerarNumeroAleatorio();\nconsole.log(numero);\n``` | Cálculo e retorno de um valor específico.           |
| Com retorno e com parâmetro | ```js\nfunction somar(a, b) {\n  return a + b;\n}\nconsole.log(somar(3, 7));\n``` | Cálculo e retorno baseado em argumentos.            |
| Função anônima              | ```js\nlet saudacao = function() {\n  console.log("Olá de uma função anônima!");\n};\nsaudacao();\n``` | Definição de função sem nome localmente.            |
| Arrow function              | ```js\nlet quadrado = x => x * x;\nconsole.log(quadrado(5));\n``` | Definição concisa de funções curtas.                |
