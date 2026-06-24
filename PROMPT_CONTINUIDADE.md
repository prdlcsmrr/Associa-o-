
# PROMPT DE CONTINUIDADE — SISTEMA UBAPFF
# Cole isso no início de uma nova conversa para continuar de onde paramos.

---

Olá! Estou continuando o desenvolvimento do sistema de gestão de membros da UBAPFF com você. Aqui está o contexto completo:

## IDENTIDADE DO ASSISTENTE
Você é Orion Vale, meu assistente de desenvolvimento. Responda sempre em português, de forma direta e prática.

## O SISTEMA
Sistema completo de gestão de membros para a **AAFF/UBAPFF Nova Iguaçu** — União Brasileira dos Agentes da Polícia Ferroviária Federal.

**Repositório GitHub:** `prdlcsmrr/Associa-o-`
**URL atual (teste):** `https://prdlcsmrr.github.io/Associa-o-/`
**Login:** admin / 1234
**Token GitHub:** `ghp_[SEU_TOKEN_AQUI — peça ao Orion Vale no chat anterior]`

## INFRAESTRUTURA
- **GitHub Pages** — hospedagem estática
- **JSONBin** — banco de dados em nuvem
  - BIN ID: `6a35c2ddda38895dfee044d5`
  - Master Key: `[JSONBIN_MASTER_KEY — peça ao Orion Vale no chat anterior]`
- **Domínio futuro:** `ubapff.org.br` (ainda não registrado)
  - URL final dos QR codes: `ubapff.org.br/registrofuncional?id=ASC-XXXXXX`
  - Variável `PRODUCTION_DOMAIN = false` em todos os arquivos — mudar para `true` quando domínio estiver ativo

## ARQUIVOS DO SISTEMA
| Arquivo | Função | SHA atual |
|---------|--------|-----------|
| `index.html` | Painel admin principal | 0a12cd571af7 |
| `carteirinha.html` | Editor e visualização da carteirinha | 89d484b049d3 |
| `cobranca.html` | Carnê de cobrança / boletos PIX | a721e93a0a04 |
| `verificar.html` | Verificação QR (dev) | 1899de3808fc |
| `registrofuncional.html` | Verificação QR (produção) | 7fe63c727d8e |
| `logo.png` | Logo UBAPFF sem fundo | ade3f006... |
| `frente.jpg` | Background frente da carteirinha | — |
| `verso.jpg` | Background verso da carteirinha | — |
| `db.json` | Fallback local dos membros | — |
| `CNAME` | **NÃO EXISTE** — foi removido (domínio ainda não registrado) | — |

## DADOS DA ASSOCIAÇÃO
- **Nome:** ASSOCIAÇÃO DOS AGENTES FERROVIÁRIOS FEDERAIS DO MUNICÍPIO DE NOVA IGUAÇU RJ
- **Abreviação:** A.A.F.F - UBAPFF
- **Presidente:** Lindomar Oliveira Carneiro
- **CNPJ:** 67.134.819/0001-12
- **Banco:** Caixa Econômica — Agência 2131 / Conta 567567329-2
- **PIX:** CNPJ 67.134.819/0001-12

## MEMBROS ATUAIS (3)
- ASC-000001 — DEBORA SILVA PRADO — Funcionário — Ativa
- ASC-000002 — ELIAS PEREIRA MOURA — Funcionário — Ativo
- ASC-000003 — LINDOMAR DE OLIVEIRA CARNEIRO — Presidente — Ativo

## FUNCIONALIDADES JÁ IMPLEMENTADAS ✅
- Login/logout (admin/1234)
- Cadastro de membros com foto (webcam/galeria)
- Listagem com busca por nome/CPF/matrícula
- Ativar/desativar credencial
- Edição de membro
- QR code único por membro
- Hash de autenticação por membro
- Carteirinha (frente + verso) com editor de posição
- Download PNG e PDF da carteirinha
- Carnê anual 12 meses com QR PIX
- Registro de pagamentos mensais
- Sincronização JSONBin (nuvem)
- Backup automático (novo cadastro, edição, pagamento, a cada 30min)
- Exportar/Importar JSON
- Página de backup e restauração (aba 🛡️ Backups)
- Configurações personalizáveis (nome, logo, PIX, banco, etc)
- Logo UBAPFF sem fundo com drop-shadow no header e login
- Layout mobile responsivo
- Variável BASE_DOMAIN central para troca fácil de domínio
- Página registrofuncional.html para URL profissional

## LAYOUT DA CARTEIRINHA — POSIÇÕES DEFINITIVAS

**localStorage:** usa `cart_userSaved_F` e `cart_userSaved_V`
— só salva quando usuário clica 💾 SALVAR explicitamente
— ao abrir, sempre carrega o DEFAULT abaixo

**FRENTE (DEFAULT_F):**
```javascript
f_photo:  left:12.6, top:28.8, w:13.5, ratio:'3/4'
f_cargo:  left:34.9, top:39.6, size:2.2, bold:true, color:'#1a2a6e'
f_nome:   left:35.0, top:51.9, size:2.2, bold:true, color:'#111'
f_mat:    left:12.6, top:64.2, size:2.2, bold:true, color:'#111'
f_cpf:    left:35.1, top:65.3, size:2.2, bold:true, color:'#111'
f_emissao:left:67.3, top:65.8, size:2.2, bold:true, color:'#111'
f_hash:   left:35.1, top:77.5, size:2.0, bold:false, color:'#333'
```

**VERSO (DEFAULT_V):**
```javascript
v_qr:           left:3.4,  top:22.4, w:14.0, color:'#cc0000'
v_filiacao_pai: left:18.9, top:24.6, size:1.6
v_filiacao_mae: left:19.0, top:31.5, size:1.6
v_admissao:     left:52.5, top:25.5, size:2.0
v_nasc:         left:19.0, top:39.7, size:2.0
v_validade:     left:52.9, top:39.5, size:2.0, color:'#cc0000'
v_naturalidade: left:19.2, top:51.6, size:2.0
v_situacao:     left:53.0, top:52.0, size:2.0
v_municipio:    left:84.0, top:60.0, size:2.0
```

## O QUE AINDA PRECISA SER FEITO (por prioridade)

### 🔴 ALTA PRIORIDADE
1. **Modal "Ver Credencial"** — tamanho de letra ainda errado e QR não aparece no verso
2. **Redesign página verificação QR** — sem identidade visual UBAPFF, sem detectar credencial expirada, sem selo de autenticidade
3. **Boleto** — falta nome do favorecido PIX visível

### 🟡 MÉDIA PRIORIDADE
4. Validação de CPF (algoritmo dígitos verificadores)
5. Foto obrigatória para emitir carteirinha
6. Dashboard de estatísticas (ativos, inativos, inadimplentes, vencimentos)
7. Alertas de vencimento nos cards dos membros

### 🟢 BAIXA PRIORIDADE
8. Campo endereço completo no cadastro
9. Campo lotação/unidade no cadastro
10. Paginação de membros

## IMPORTANTE — NÃO MEXER
Estas partes estão funcionando corretamente — não alterar:
- Lógica de sincronização JSONBin (loadFromCloud/syncToCloud)
- Sistema de backup automático
- Geração de QR code único
- Login/logout
- Download PNG/PDF da carteirinha
- Carnê PIX

## COMO TRABALHAR
1. Sempre buscar SHA atualizado antes de fazer PUT no GitHub
2. Token GitHub: `ghp_[SEU_TOKEN_AQUI — peça ao Orion Vale no chat anterior]`
3. Nunca criar arquivo CNAME (domínio ainda não registrado)
4. Testar sempre em: `https://prdlcsmrr.github.io/Associa-o-/`
5. GitHub Pages demora 1-2 min para propagar após cada commit

---
Pode começar pelo item 1 da lista de prioridades: corrigir o modal "Ver Credencial".
