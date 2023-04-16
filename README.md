# Boas-vindas ao repositório do projeto Carta Misteriosa

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

- Você irá desenvolver um site que gere cartas misteriosas.

- Neste projeto, você implementará um gerador de cartas misteriosas.

**Ou seja, dado um valor digitado em um campo de texto, as palavras terão a aparência de uma carta onde cada palavra possui uma estilização própria.**

💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar a todas as pessoas!

![](mistery-letter-example.gif)
⚠️ Leia os requisitos atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

</details>

# Requisitos Obrigatórios

## 1 - Crie um `input` com o `ID` `carta-texto` onde a pessoa usuária poderá digitar o conteúdo da carta

<details>
  <summary>Sua página deve conter um input com <code>ID</code> <code>carta-texto</code> </summary><br />

**O que será testado**

- O input deve possuir o `ID` `carta-texto`.

</details>

## 2 - Crie um parágrafo com a `tag` `p` e `ID` `carta-gerada` onde a pessoa usuária verá o resultado de sua carta misteriosa

<details>
  <summary>Sua página deve conter um parágrafo <code>p</code> com <code>ID</code> <code>carta-gerada</code></summary><br />

**O que será testado**

- O parágrafo deve possuir a `tag` `p` e `ID` `carta-gerada`.

</details>

## 3 - Crie um botão com `ID` `criar-carta` que deve gerar a carta misteriosa ao ser clicado

<details>
  <summary>Sua página deve conter um botão que, ao ser clicado, gera a carta misteriosa dentro do parágrafo criado no requisito 2</summary><br />

- Crie um botão com `ID` `criar-carta`;

- Crie a carta misteriosa colocando a `tag` `span` em cada palavra.

- Se ao criar uma nova carta misteriosa, já existir uma carta dentro do elemento com `id` `carta-gerada`, a carta antiga deverá ser apagada antes de gerar uma nova.

**O que será testado**

- O botão deve possuir o `ID` `criar-carta`;

- A carta misteriosa deve ser gerada com a tag `span` em volta de cada palavra, ao receber o clique do botão.

- Se uma carta já existente é apagada antes de gerar uma nova carta

</details>

## 4 - Faça com que o input com `ID` `carta-texto` permaneça com o texto digitado após clicar no botão de `ID` `criar-carta`

<details>
  <summary>O input com o <code>ID</code> <code>carta-texto</code> deve permanecer com o texto digitado</summary><br />

**O que será testado**

- O input com `ID` `carta-texto` deve permanecer com o texto digitado após clicar no botão de `ID` `criar-carta`.

</details>

## 5 - Crie a mensagem 'Por favor, digite o conteúdo da carta.' para caso a pessoa usuária não preencha o campo ou preencha apenas com espaços em branco

<details>
  <summary>Deve aparecer a mensagem "Por favor, digite o conteúdo da carta." no parágrafo criado no requisito 2 quando não houver texto digitado pela pessoa usuária</summary><br />

**O que será testado**

- A mensagem "Por favor, digite o conteúdo da carta." deve aparecer no elemento `p` com o `ID` `carta-gerada` caso o input de `ID` `carta-texto` não seja preenchido;
- A mensagem "Por favor, digite o conteúdo da carta." deve aparecer no elemento `p` com o `ID` `carta-gerada` caso o input de `ID` `carta-texto` seja preenchido com espaços em branco.

</details>

## 6 - Crie a classe `newspaper`

<details>
  <summary>A classe <code>newspaper</code> deve possuir cor de fundo, fonte Times New Roman e peso de fonte com o valor 700</summary><br />

- Cria a classe `newspaper` com `background-color` igual a `rgb(250, 235, 215)`;
- A classe `newspaper` deve possuir `font-family` igual a `Times New Roman`;
- A classe `newspaper` deve possuir `font-weight` igual a `700`.

**O que será testado**

- A classe `newspaper` deve possuir `background-color` igual a `rgb(250, 235, 215)`;
- A classe `newspaper` deve possuir `font-family` igual a `Times New Roman`;
- A classe `newspaper` deve possuir `font-weight` igual a `700`.

</details>

## 7 - Crie a classe `magazine1`

<details>
  <summary>A classe <code>magazine1</code> deve possuir cor de fundo, cor de fonte diferente, fonte do tipo Verdana, peso de fonte com o valor 900 e todas as letras maiúsculas</summary><br />

- Crie a classe `magazine1` com `background-color` igual a `rgb(0, 128, 128)`;
- A classe `magazine1` deve possuir `color` igual a `rgb(255, 255, 255)`;
- A classe `magazine1` deve possuir `font-family` igual a `Verdana`;
- A classe `magazine1` deve possuir `font-weight` igual a `900`;
- A classe `magazine1` deve possuir `text-transform` igual a `uppercase`.

**O que será testado**

- A classe `magazine1` deve possuir `background-color` igual a `rgb(0, 128, 128)`;
- A classe `magazine1` deve possuir `color` igual a `rgb(255, 255, 255)`;
- A classe `magazine1` deve possuir `font-family` igual a `Verdana`;
- A classe `magazine1` deve possuir `font-weight` igual a `900`;
- A classe `magazine1` deve possuir `text-transform` igual a `uppercase`.

</details>

## 8 - Crie a classe `magazine2`

<details>
  <summary>A classe <code>magazine2</code> deve possuir uma imagem de fundo, cor de fonte diferente, fonte do tipo Verdana e peso de fonte com o valor 900</summary><br />

- Crie a classe `magazine2` com `background-image` igual a `images/pink-pattern.png`;
- A classe `magazine2` deve possuir `color` igual a `rgb(255, 0, 255)`;
- A classe `magazine2` deve possuir `font-family` igual a `Verdana`;
- A classe `magazine2` deve possuir `font-weight` igual a `900`.

**O que será testado**

- A classe `magazine2` deve possuir `background-image` igual a `images/pink-pattern.png`;
- A classe `magazine2` deve possuir `color` igual a `rgb(255, 0, 255)`;
- A classe `magazine2` deve possuir `font-family` igual a `Verdana`;
- A classe `magazine2` deve possuir `font-weight` igual a `900`.

</details>

## 9 - Crie a classe `medium`

<details>
  <summary>A classe <code>medium</code> deve possuir <code>font-size</code> com o valor <code>20px</code> e <code>padding</code> com o valor <code>8px</code></summary><br />

**O que será testado**

- A classe `medium` deve possuir `font-size` igual a  `20px`;
- A classe `medium` deve possuir `padding` igual a `8px`.

</details>

## 10 - Crie a classe `big`

<details>
  <summary>A classe <code>big</code> deve possuir <code>font-size</code> com o valor <code>30px</code> e <code>padding</code> com o valor <code>10px</code>.</summary><br />

**O que será testado**

- A classe `big` deve possuir `font-size` com o valor `30px`;
- A classe `big` deve possuir `padding` com o valor `10px`.

</details>

## 11 - Crie a classe `reallybig`

<details>
  <summary>A classe <code>reallybig</code> deve possuir <code>font-size</code> com o valor <code>40px</code> e <code>padding</code> com o valor <code>15px</code>.</summary><br />

**O que será testado**

- A classe `reallybig` deve possuir `font-size` com o valor `40px`;
- A classe `reallybig` deve possuir `padding` com o valor `15px`.

</details>

## 12 - Crie a classe `rotateleft`

<details>
  <summary>A classe <code>rotateleft</code> deve possuir a propriedade <code>transform</code> com o valor <code>rotate(-5deg)</code></summary><br />

**O que será testado**

- A classe `rotateleft` deve possuir a propriedade `transform` igual a `rotate(-5deg)`.

</details>

## 13 - Crie a classe `rotateright`

<details>
  <summary>A classe <code>rotateright</code> deve possuir a propriedade <code>transform</code> com o valor <code>rotate(5deg)</code></summary><br />

**O que será testado**

- A classe `rotateright` deve possuir a propriedade `transform` igual a `rotate(5deg)`.

</details>

## 14 - Crie a classe `skewleft`

<details>
  <summary>A classe <code>skewleft</code> deve possuir a propriedade <code>transform</code> com o valor <code>skewX(10deg)</code></summary><br />

**O que será testado**

- A classe `skewleft` deve possuir a propriedade `transform` igual a `skewX(10deg)`.

</details>

## 15 - Crie a classe `skewright`

<details>
  <summary>A classe <code>skewright</code> deve possuir a propriedade <code>transform</code> com o valor <code>skewX(-10deg)</code></summary><br />

**O que será testado**

- A classe `skewright` deve possuir a propriedade `transform` igual a `skewX(-10deg)`.

</details>

## 16 - Adicione as classes de forma aleatória a fim de estilizar as palavras

<details>
  <summary>Separe as classes, criadas nos requisitos anteriores, em grupos e utilize o <code>Javascript</code> para atribuir essas classes de forma aleatória para as palavras com a tag <code>span</code> </summary><br />

- Utilize as classes:
  - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
  - `medium`, `big`, `reallybig` (Grupo tamanho)
  - `rotateleft`, `rotateright` (Grupo rotação)
  - `skewleft`, `skewright` (Grupo inclinação)

- As classes devem ser adicionadas às tags `span` de forma **aleatória**.

- Sempre adicione mais de uma classe em uma palavra.

**O que será testado**

- Cada palavra da carta gerada deve possuir classes atribuídas aleatoriamente;

- Cada palavra de uma segunda carta gerada, deve possuir classes atribuídas aleatoriamente;

- As classes atribuídas na primeira carta não devem ser iguais às classes atribuídas na segunda carta.

</details>

# Requisitos Bônus

## 17 - Adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela

<details>
  <summary>Adicione a função para atribuir novamente as classes nas palavras quando clicadas </summary><br />

**O que será testado**

- A palavra clicada deve conter uma classe de cada grupo;

- A palavra clicada deve ter suas classes alteradas aleatoriamente;

- A palavra clicada deve ter suas classes alteradas novamente de forma diferente da anterior caso clicada novamente;

</details>

## 18 - Crie um parágrafo com o `ID` `carta-contador` que deve contar o número de palavras geradas naquela carta

<details>
  <summary>Sua página deve conter um parágrafo <code>p</code> com <code>ID</code> <code>carta-contador</code> que conte quantas palavras foram geradas na carta</summary><br />

**O que será testado**

- O parágrafo `p` deve possuir o `ID` `carta-contador`;

- O parágrafo `p` deve conter a quantidade de palavras geradas na carta.

</details>
