# Arrays em JavaScript

Uma **array** no JavaScript é uma estrutura de dados que permite armazenar e organizar vários valores em uma única variável. Os valores em uma array podem ser de **qualquer tipo de dado**, como:

- Números  
- Strings  
- Objetos  
- Outras arrays  
- E muito mais

As arrays em JavaScript são **indexadas**, o que significa que cada valor dentro dela é associado a um índice numérico, começando geralmente do índice **0**.

---

## Criando uma array

Você pode criar uma array em JavaScript declarando uma variável e atribuindo-lhe valores entre colchetes `[]`:

```javascript
let frutas = ["Maçã", "Uva", "Laranja"];
```
## Acessando os valores

Os elementos de uma array são acessados usando **índices numéricos**, que começam em 0:

| Índice | Elemento  |
|--------|-----------|
| 0      | "Maçã"    |
| 1      | "Uva"     |
| 2      | "Laranja" |

```javascript
console.log(frutas[0]); // Saída: "Maçã"
console.log(frutas[2]); // Saída: "Laranja"
```

# Adicionando novos elementos
Para adicionar um elemento ao final da array, use o método push:

```javascript
frutas.push("Morango");
console.log(frutas);
// Saída: ["Maçã", "Uva", "Laranja", "Morango"]
```

#  Removendo o último elemento
Para remover o último elemento, use o método pop:
```javascript
frutas.pop();
console.log(frutas);
// Saída: ["Maçã", "Uva", "Laranja"]
```