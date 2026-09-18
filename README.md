# Quiz Generator — UTFPR Campo Mourão Edition

<p align="center">
  <strong>Fork customizado para a Feira de Profissões da UTFPR Campus Campo Mourão</strong>
  <br />
  Testes interativos e quizzes para apresentar o campus e seus cursos aos visitantes.
</p>

---

<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#modificações-deste-fork">Modificações deste Fork</a></li>
        <li><a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#como-executar">Como Executar</a>
    </li>
    <li><a href="#como-usar">Como Usar</a></li>
    <li><a href="#créditos-e-projeto-original">Créditos e Projeto Original</a></li>
    <li><a href="#licença">Licença</a></li>
  </ol>
</details>

---

## Sobre o Projeto

Este repositório é um **fork** do projeto original [Quiz-Generator](https://github.com/githubcrce/Quiz-Generator?utm_source=gemini), adaptado especialmente para utilização durante a **Feira de Profissões da Universidade Tecnológica Federal do Paraná (UTFPR) — Campus Campo Mourão**.

O objetivo da aplicação é engajar os visitantes com um quiz dinâmico sobre a história do campus, seus cursos de graduação e as novidades acadêmicas.

### Modificações deste Fork

Para atender ao contexto da Feira de Profissões, a versão original passou pelas seguintes alterações:

* **Ocultação do Feedback Imediato:** A aplicação não exibe se o usuário respondeu corretamente nem revela a resposta certa após o clique, mantendo o ambiente dinâmico para a dinâmica do estande.
* **Temporizador por Pergunta:** Adicionado um limite de **30 segundos** para responder a cada questão.
* **Identidade Visual UTFPR:** Estilização personalizada com as cores oficiais da UTFPR (amarelo e preto).

### Tecnologias Utilizadas

* [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML?utm_source=gemini)
* [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS?utm_source=gemini)
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript?utm_source=gemini)

---

## Como Executar

1. Clone este repositório:
```sh
git clone https://github.com/seu-usuario/Quiz-Generator.git

```


2. Abra o arquivo `index.html` em qualquer navegador web.

---

## Como Usar

As perguntas e respostas do quiz estão concentradas no arquivo `question.js`. Você pode editar ou adicionar novas perguntas seguindo a estrutura do objeto:

```javascript
const quiz = [
    {
        q: 'Ciência da Computação é um dos cursos de graduação da UTFPR-CM?',
        options: ['Verdadeiro', 'Falso'],
        answer: 0,
        topic: "computer"
    }
]

```

---

## Créditos e Projeto Original

Agradecimentos especiais ao autor do projeto original por disponibilizar o código-fonte aberto que serviu de base para esta aplicação:

* **Projeto Original:** [Quiz-Generator](https://github.com/githubcrce/Quiz-Generator?utm_source=gemini)
* **Autor / Organização:** [GitHubCRCE](https://www.google.com/search?q=https://github.com/githubcrce&utm_source=gemini)
* **Demo Original:** [Quiz-Generator Demo](https://githubcrce.github.io/Quiz-Generator/?utm_source=gemini)
* **Demo UTFPR:** [Quiz-Generator_Demo_UTFPR](https://matheusoliveirat.github.io/Quiz-Generator/)

---

## Licença

Distribuído sob a licença **MIT**, mantendo a licença original do projeto base. Veja o arquivo `LICENSE` para mais informações.
