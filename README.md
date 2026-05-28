# 🤖 AI Chatbot QA Framework

![CI](https://github.com/ryan23nobrega/-ai-chatbot-qa-framework/actions/workflows/ci.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Jest](https://img.shields.io/badge/Jest-29.0-green)
![License](https://img.shields.io/badge/license-MIT-yellow)

Framework de testes automatizados para APIs de Chatbot com IA, utilizando **TypeScript**, **Jest** e **GitHub Actions CI/CD**.

---

## 🎯 Sobre o Projeto

Este framework valida a qualidade, confiabilidade e segurança das respostas de chatbots com IA através de testes automatizados. Desenvolvido com boas práticas de QA e integrado a um pipeline de CI/CD totalmente automatizado.

**API utilizada:** Groq Cloud (Llama 3.1)

---

## 🧪 Cobertura de Testes

| Categoria | Testes | Descrição |
|---|---|---|
| ✅ Funcionais | 5 testes | Conectividade da API, estrutura da resposta, uso de tokens |
| ✅ Qualidade | 5 testes | Tamanho da resposta, palavras-chave relevantes, coerência |
| ✅ Performance | 3 testes | Tempo de resposta sob diferentes cargas |
| ✅ Segurança | 4 testes | Proteção de API key, prompt injection, exposição de dados |

**Total: 17 testes automatizados**

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** TypeScript
- **Test Runner:** Jest + ts-jest
- **Cliente HTTP:** Axios
- **API de IA:** Groq Cloud (Llama 3.1 8B)
- **CI/CD:** GitHub Actions
- **Relatórios:** jest-html-reporters

---

## 📁 Estrutura do Projeto

ai-chatbot-qa-framework/
├── src/
│   ├── client/
│   │   └── anthropicClient.ts   # Cliente da API
│   └── helpers/
│       └── validators.ts        # Utilitários de teste
├── tests/
│   ├── functional/              # Testes funcionais
│   ├── quality/                 # Testes de qualidade
│   ├── performance/             # Testes de performance
│   └── security/                # Testes de segurança
├── .github/
│   └── workflows/
│       └── ci.yml               # Pipeline CI/CD
└── reports/                     # Relatórios HTML

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- Chave de API do Groq (gratuita em [console.groq.com](https://console.groq.com))

### Instalação

```bash
git clone https://github.com/ryan23nobrega/-ai-chatbot-qa-framework.git
cd ai-chatbot-qa-framework
npm install
```

### Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
GROQ_API_KEY=sua_chave_aqui
BASE_URL=https://api.groq.com/openai/v1
MODEL=llama-3.1-8b-instant
```

### Executando os Testes

```bash
# Todos os testes
npx jest --runInBand

# Por categoria
npm run test:functional
npm run test:quality
npm run test:performance
npm run test:security
```

---

## ⚙️ Pipeline CI/CD

A cada push na branch `main`, o pipeline automaticamente:
1. Instala as dependências
2. Executa os 17 testes
3. Faz upload do relatório HTML como artefato

---

## 📊 Relatório de Testes

Após executar os testes, abra o relatório HTML gerado em:

reports/report.html

---

## 👨‍💻 Autor

**Ryan Nobrega**
QA Engineer | [LinkedIn] https://www.linkedin.com/in/ryantech23/

---

## 📄 Licença

MIT License