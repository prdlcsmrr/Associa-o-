# 🛡️ PROTEÇÃO DO SISTEMA UBAPFF

## REGRA PRINCIPAL
**Antes de qualquer alteração no index.html ou carteirinha.html, verificar:**

### ✅ Checklist obrigatório antes de upload

1. **Sintaxe JS válida** — sem erros de `{` / `}`
2. **Funções críticas presentes:** login, renderList, salvar, save, openCred, openEdit, saveEdit, toggleMenu, loadFromCloud, reloadMembers, gerarCarteirinha, gerarCobranca, buscarCep, loadConfig
3. **Blocos intrusos máximo 2x:** updatePixPlaceholder, updateDadosBancariosPreview
4. **Chaves balanceadas** — `{` abertas == `}` fechadas
5. **loadFromCloud** — fecha corretamente e chama renderList()
6. **3 membros no JSONBin** — ASC-000001, ASC-000002, ASC-000003

---

## ⚠️ FUNÇÕES QUE NÃO DEVEM SER ANINHADAS
As seguintes funções SEMPRE devem estar no nível raiz (depth=0):
- syncToCloud, toggleMenu, closeMenus, gerarCobranca, gerarCarteirinha
- del, clearAll, loadConfig, shadeColor, goToConfig
- openPag, togglePag, savePag, closePag, closePagDirect
- updatePixPlaceholder, updateDadosBancariosPreview

## 🔑 CREDENCIAIS DO SISTEMA
- Login: admin / 1234
- JSONBin ID: 6a35c2ddda38895dfee044d5
- Repositório: prdlcsmrr/Associa-o-
- Site: https://prdlcsmrr.github.io/Associa-o-/

## 📋 PROBLEMAS CONHECIDOS E SOLUÇÕES

### "Membro sumiu" / "3 pontos não abre"
- Verificar se há blocos intrusos (updatePixPlaceholder) dentro de reloadMembers ou loadFromCloud
- Verificar se loadFromCloud fecha corretamente antes de syncToCloud

### "Login não funciona"  
- Verificar chaves balanceadas — `{` == `}`
- Verificar se loadFromCloud está fechada corretamente

### "Carteirinha não carrega"
- JSONBin deve ser consultado PRIMEIRO (não db.json)
- Verificar sintaxe JS da carteirinha.html

### "Boleto não abre"
- Mesmo problema — JSONBin deve ser primeiro no cobranca.html
