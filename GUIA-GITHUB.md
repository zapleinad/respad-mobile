# 🚀 GUIA COMPLETO - RESPAD Mobile com GitHub Actions

**Desenvolvido por:** Daniel Lima da Paz  
**MJSP/SENASP/DIOPI/CGOI**

---

## 📋 RESUMO

Este guia mostra como fazer upload do projeto RESPAD Mobile no GitHub e obter o APK automaticamente, sem precisar compilar localmente.

**Tempo total:** 30-40 minutos  
**Resultado:** APK pronto para instalar

---

## 🎯 PASSO 1: Criar Conta no GitHub (Se não tiver)

1. Acesse: https://github.com
2. Clique em **Sign up**
3. Preencha:
   - Email: seu email
   - Password: senha forte
   - Username: escolha um nome de usuário
4. Clique em **Create account**
5. Verifique seu email
6. Faça login

---

## 📂 PASSO 2: Criar Repositório

1. No GitHub, clique no **+** (canto superior direito)
2. Selecione **New repository**
3. Preencha:
   - **Repository name:** `respad-mobile`
   - **Description:** `Sistema de Padronização Pós-Desastre - MJSP/SENASP`
   - **Public** (marque essa opção)
   - **NÃO** marque "Add a README file"
4. Clique em **Create repository**

---

## 📤 PASSO 3: Fazer Upload dos Arquivos

### Método 1: Via Interface Web (RECOMENDADO - Mais Fácil)

1. No repositório criado, você verá uma página vazia
2. Clique em **uploading an existing file**
3. **Arraste TODA a pasta do projeto** para a área de upload
   - Ou clique em **choose your files** e selecione tudo
4. Aguarde o upload (pode levar 5-10 minutos)
5. Na caixa de texto, escreva: `Initial commit - RESPAD Mobile v1.0.0`
6. Clique em **Commit changes** (botão verde)

### Método 2: Via Git Desktop (Alternativo)

Se preferir usar aplicativo:

1. Baixe e instale: https://desktop.github.com/
2. Abra o GitHub Desktop
3. Clique em **File** > **Add local repository**
4. Selecione a pasta do projeto
5. Clique em **Publish repository**

---

## ⚙️ PASSO 4: Aguardar o Build Automático

1. Após o commit, vá na aba **Actions** (topo do repositório)
2. Você verá um workflow em execução: **Build Android APK**
3. Clique nele para ver o progresso
4. Aguarde 10-15 minutos (o GitHub compila tudo automaticamente)
5. Quando aparecer ✅ verde, está pronto!

---

## 📥 PASSO 5: Baixar o APK

### Opção A: Via Artifacts (Imediato)

1. Ainda na página do workflow concluído
2. Role até a seção **Artifacts** (no final)
3. Clique em **RESPAD-Mobile-v1.0.0**
4. Baixará um arquivo ZIP
5. Extraia o ZIP
6. Dentro terá o `app-release.apk`

### Opção B: Via Releases (Quando disponível)

1. Vá na aba **Releases** (lado direito do repositório)
2. Clique na release mais recente
3. Em **Assets**, baixe `app-release.apk`

---

## 📱 PASSO 6: Instalar no Smartphone

### Via USB (Recomendado)

1. Conecte o smartphone ao PC via USB
2. Copie o arquivo `app-release.apk` para a pasta **Downloads** do celular
3. No celular:
   - Abra o app **Arquivos** ou **Gerenciador de Arquivos**
   - Vá em **Downloads**
   - Toque em `app-release.apk`
   - Se aparecer aviso, permita "Instalar de fontes desconhecidas"
   - Toque em **Instalar**
4. Pronto! Abra o app **RESPAD Mobile**

### Via Email/WhatsApp (Alternativo)

1. Envie o APK para você mesmo por email ou WhatsApp
2. No celular, abra o arquivo
3. Permita instalação de fontes desconhecidas
4. Instale

---

## ✅ VERIFICAÇÃO

Após instalar, o app deve:
- ✅ Abrir sem tela branca
- ✅ Mostrar "RESPAD" no topo
- ✅ Listar 4 cenários (Alagamento, Terremoto, Incêndio, Produtos Perigosos)
- ✅ Permitir selecionar um cenário
- ✅ Mostrar checklist do cenário
- ✅ Permitir marcar itens

---

## 🔄 PARA ATUALIZAR O APP

Quando quiser fazer mudanças:

1. Edite os arquivos localmente
2. Faça upload das mudanças no GitHub
3. O build automático roda novamente
4. Baixe o novo APK
5. Instale sobre o app antigo (não precisa desinstalar)

---

## 🆘 PROBLEMAS COMUNS

### ❌ Build falhou no GitHub Actions

**Solução:** Verifique se todos os arquivos foram enviados corretamente. Principalmente:
- `android/` (pasta completa)
- `App.js`
- `package.json`
- `.github/workflows/build-apk.yml`

### ❌ Não consigo instalar o APK

**Solução:** 
1. Vá em Configurações do Android
2. Segurança
3. Ative "Fontes desconhecidas" ou "Instalar apps desconhecidos"

### ❌ App abre tela branca

**Solução:** O APK foi gerado corretamente? Baixe da aba **Releases** ao invés de Artifacts.

---

## 📊 ESTRUTURA DO REPOSITÓRIO

Após upload, seu repositório deve ter:

```
respad-mobile/
├── .github/
│   └── workflows/
│       └── build-apk.yml         ← Configuração do GitHub Actions
├── android/                       ← Projeto Android completo
│   ├── app/
│   ├── build.gradle
│   ├── gradle/
│   └── settings.gradle
├── App.js                         ← Código do aplicativo
├── index.js
├── package.json
├── README.md
└── GUIA-GITHUB.md                ← Este arquivo
```

---

## 🎓 O QUE O GITHUB ACTIONS FAZ

Quando você faz upload:

1. ✅ GitHub detecta o arquivo `.github/workflows/build-apk.yml`
2. ✅ Inicia uma máquina virtual Linux
3. ✅ Instala Node.js e Java
4. ✅ Instala dependências (`npm install`)
5. ✅ Compila o APK Android (`gradlew assembleRelease`)
6. ✅ Disponibiliza o APK para download
7. ✅ Cria uma Release automática

**Tudo isso acontece nos servidores do GitHub, não no seu PC!**

---

## 💡 VANTAGENS DESTE MÉTODO

- ✅ **Não precisa instalar Android Studio** no seu PC
- ✅ **Não precisa configurar Gradle, SDK, etc**
- ✅ **Build sempre funciona** (ambiente controlado)
- ✅ **APK standalone** garantido
- ✅ **Grátis** (GitHub Actions tem minutos gratuitos)
- ✅ **Histórico de versões** automático
- ✅ **Link para compartilhar** com a equipe

---

## 📞 SUPORTE

**Desenvolvedor:** Daniel Lima da Paz  
**Organização:** CGOI/DIOPI/SENASP/MJSP

Se tiver problemas, verifique:
1. Todos os arquivos foram enviados?
2. O workflow aparece na aba Actions?
3. Há algum erro vermelho no log do workflow?

---

## 🎯 CHECKLIST RÁPIDO

- [ ] Criar conta no GitHub
- [ ] Criar repositório `respad-mobile`
- [ ] Fazer upload de TODOS os arquivos
- [ ] Aguardar build no Actions (10-15 min)
- [ ] Baixar APK dos Artifacts
- [ ] Instalar no smartphone
- [ ] Testar o app

---

**Tempo estimado total:** 30-40 minutos  
**Dificuldade:** ⭐⭐ Fácil

---

**Desenvolvido com ❤️ para MJSP/SENASP**  
**Janeiro 2026**
