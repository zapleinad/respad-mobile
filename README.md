# 📱 RESPAD Mobile

**Sistema de Padronização Pós-Desastre - Aplicativo Mobile**

**Desenvolvido por:** Daniel Lima da Paz  
**Organização:** MJSP/SENASP/DIOPI/CGOI

[![Build APK](https://github.com/SEU-USUARIO/respad-mobile/actions/workflows/build-apk.yml/badge.svg)](https://github.com/SEU-USUARIO/respad-mobile/actions)

---

## 🎯 Sobre o Aplicativo

O RESPAD Mobile é um aplicativo desenvolvido para operações de resposta a desastres, permitindo que equipes em campo:

- ✅ Selecionem o tipo de desastre (Alagamento, Terremoto, Incêndio, Produtos Perigosos)
- ✅ Acessem checklists padronizados de equipamentos
- ✅ Marquem itens conforme são verificados
- ✅ Trabalhem 100% offline

---

## 📥 Download do APK

### Método 1: Releases Automáticos (Recomendado)

1. Vá em [Releases](../../releases)
2. Baixe o arquivo `app-release.apk` da versão mais recente
3. Instale no smartphone

### Método 2: Build Actions

1. Vá em [Actions](../../actions)
2. Clique no build mais recente com ✅
3. Baixe o artefato `RESPAD-Mobile-v1.0.0`
4. Extraia o APK e instale

---

## 🚀 Como Fazer Upload no GitHub

### Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Faça login ou crie uma conta gratuita
3. Clique em **New repository** (botão verde)
4. Nome: `respad-mobile`
5. Descrição: `Sistema de Padronização Pós-Desastre`
6. Marque **Public**
7. Clique em **Create repository**

### Passo 2: Fazer Upload dos Arquivos

**Opção A: Via Interface Web (Mais Fácil)**

1. No repositório criado, clique em **uploading an existing file**
2. Arraste TODOS os arquivos e pastas do projeto
3. Escreva na mensagem: `Initial commit - RESPAD Mobile`
4. Clique em **Commit changes**

**Opção B: Via Git (Se tiver instalado)**

```powershell
cd C:\AppAtualizado\respad-mobile-github

git init
git add .
git commit -m "Initial commit - RESPAD Mobile"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/respad-mobile.git
git push -u origin main
```

### Passo 3: Aguardar o Build

1. Após o push, vá em **Actions** no repositório
2. O build iniciará automaticamente
3. Aguarde 10-15 minutos
4. Quando aparecer ✅, o APK está pronto!

### Passo 4: Baixar o APK

1. Clique no build concluído
2. Role até "Artifacts"
3. Baixe `RESPAD-Mobile-v1.0.0.zip`
4. Extraia e instale o APK no smartphone

---

## 📱 Instalação no Smartphone

1. Transfira o `app-release.apk` para o smartphone
2. Abra o arquivo no celular
3. Permita "Instalar de fontes desconhecidas" (se solicitado)
4. Clique em **Instalar**
5. Abra o app RESPAD Mobile

---

## 🛠️ Desenvolvimento Local (Opcional)

Se quiser desenvolver localmente:

```powershell
# Instalar dependências
npm install

# Iniciar Metro bundler
npm start

# Em outro terminal, rodar no Android
npm run android
```

---

## 📋 Estrutura do Projeto

```
respad-mobile/
├── .github/
│   └── workflows/
│       └── build-apk.yml      # GitHub Actions para build automático
├── android/                    # Projeto Android nativo
│   ├── app/
│   │   ├── build.gradle
│   │   └── src/main/
│   │       ├── AndroidManifest.xml
│   │       └── java/com/respadmobile/
│   ├── build.gradle
│   └── settings.gradle
├── App.js                      # Código principal do app
├── index.js                    # Entry point
├── package.json                # Dependências
└── README.md                   # Este arquivo
```

---

## ✨ Funcionalidades

### Cenários Implementados

1. **🌊 Alagamento**
   - Colete salva-vidas tipo III
   - Capacete com lanterna
   - Luvas impermeáveis
   - Botas de borracha
   - Corda de resgate
   - Kit de primeiros socorros
   - Rádio HT à prova d'água
   - GPS portátil

2. **🏚️ Terremoto**
   - Capacete de resgate tipo III
   - Óculos de proteção
   - Luvas de couro reforçadas
   - Botas com biqueira de aço
   - Alavanca hidráulica
   - Serra circular
   - Kit de estabilização
   - Rádio HT dual band

3. **🔥 Incêndio Florestal**
   - Roupa aluminizada
   - Capacete com viseira
   - Balaclava Nomex
   - Luvas anti-chama
   - Abafador McLeod
   - Mochila costal (20L)
   - Abrigo de emergência
   - Rádio HT VHF

4. **☢️ Produtos Perigosos**
   - Roupa de proteção nível A
   - Aparelho de respiração autônoma
   - Luvas de nitrilo duplas
   - Botas químicas
   - Detector multigas
   - Kit de contenção
   - Manual ERG
   - Piscina de descontaminação

---

## 🔄 Atualizações Futuras

### Versão 1.1 (Planejada)
- [ ] Salvar progresso do checklist
- [ ] Modo offline completo
- [ ] Exportar relatório em PDF

### Versão 1.2 (Planejada)
- [ ] GPS e localização
- [ ] Câmera para documentação
- [ ] Sincronização com backend

### Versão 2.0 (Planejada)
- [ ] Módulo de triagem de vítimas
- [ ] Protocolos de manobras
- [ ] Integração com LIGABOM

---

## 📞 Suporte

**Desenvolvedor:** Daniel Lima da Paz  
**Email:** daniel.paz@mjsp.gov.br  
**Organização:** CGOI/DIOPI/SENASP/MJSP

---

## 📄 Licença

Este software é propriedade do Ministério da Justiça e Segurança Pública.

**© 2026 MJSP/SENASP - Todos os direitos reservados**

Desenvolvido para uso oficial em operações de resposta a desastres.

---

## 🙏 Agradecimentos

Agradecemos às equipes de Bombeiros, Defesa Civil e Forças Armadas que participaram dos testes e forneceram feedback valioso.

---

**Versão:** 1.0.0  
**Data:** Janeiro 2026  
**Build:** Automático via GitHub Actions
