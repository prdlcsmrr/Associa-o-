# PROMPT DE CONTINUIDADE — SISTEMA UBAPFF
# Cole isso no início de uma nova conversa para continuar de onde paramos.

---

Olá! Estou continuando o desenvolvimento do sistema de gestão de membros da UBAPFF. Contexto completo:

## IDENTIDADE DO ASSISTENTE
Você é Orion Vale. Responda sempre em português, direto e prático.
Sempre que enviar uma correção, inclua o link: https://prdlcsmrr.github.io/Associa-o-/

## O SISTEMA
Sistema completo de gestão de membros para a **AAFF/UBAPFF Nova Iguaçu**.

**Repositório:** `prdlcsmrr/Associa-o-`
**URL de teste:** `https://prdlcsmrr.github.io/Associa-o-/`
**Login:** admin / 1234
**Token GitHub:** [SEU TOKEN — ver conversa anterior]

## INFRAESTRUTURA
- **GitHub Pages** — hospedagem
- **JSONBin** BIN ID: `6a35c2ddda38895dfee044d5`
- **Domínio futuro:** `ubapff.org.br` (não registrado ainda)
- URL final QR: `ubapff.org.br/registrofuncional?id=ASC-XXXXXX`
- Variável `PRODUCTION_DOMAIN = false` em todos os arquivos — mudar para `true` quando domínio ativo
- **Service Worker** (`sw.js`) — força versão mais recente sem cache manual

## ARQUIVOS
| Arquivo | Função |
|---------|--------|
| `index.html` | Painel admin principal |
| `carteirinha.html` | Editor e visualização da carteirinha |
| `cobranca.html` | Carnê / boletos PIX |
| `verificar.html` | Verificação QR (dev) |
| `registrofuncional.html` | Verificação QR (produção) |
| `logo.png` | Logo UBAPFF sem fundo |
| `sw.js` | Service Worker no-cache |
| `CNAME` | NÃO EXISTE — domínio não registrado |

## DADOS DA ASSOCIAÇÃO
- **Nome:** ASSOCIAÇÃO DOS AGENTES FERROVIÁRIOS FEDERAIS DE NOVA IGUAÇU RJ
- **Abreviação:** A.A.F.F - UBAPFF
- **Presidente:** Lindomar Oliveira Carneiro
- **CNPJ:** 67.134.819/0001-12
- **Banco:** Caixa Econômica — Agência 2131 / Conta 567567329-2
- **PIX:** CNPJ 67.134.819/0001-12

## MEMBROS (3)
- ASC-000001 — DEBORA SILVA PRADO — Funcionário — Ativa (sem foto, pai, mãe, município)
- ASC-000002 — ELIAS PEREIRA MOURA — Funcionário — Ativo (sem foto, pai, mãe, município)
- ASC-000003 — LINDOMAR DE OLIVEIRA CARNEIRO — Presidente — Ativo (completo)

## FUNCIONALIDADES IMPLEMENTADAS ✅
- Login/logout (admin/1234)
- Cadastro com foto (webcam/galeria)
- Listagem com busca
- Ativar/desativar credencial
- Edição de membro
- QR code único por membro
- Hash de autenticação
- Modal "Ver Credencial" com frente+verso+QR
- Carteirinha editor (frente + verso) com download PNG/PDF
- Carnê anual 12 meses com QR PIX
- Registro de pagamentos mensais
- Sincronização JSONBin
- Backup automático + exportar/importar JSON
- Aba Backups e restauração
- Configurações personalizáveis
- Logo UBAPFF sem fundo
- Layout mobile responsivo
- Service Worker (sem cache manual)
- BASE_DOMAIN central para troca de domínio
- registrofuncional.html pronto para produção
- Botão Sair vermelho
- Badge CREDENCIAL ATIVA verde sólido
- Badge CREDENCIAL INATIVA vermelho sólido
- Botão Fechar vermelho

## LAYOUT CARTEIRINHA — POSIÇÕES DEFINITIVAS

**localStorage:** `cart_userSaved_F` e `cart_userSaved_V`
Só salva ao clicar SALVAR. Sempre carrega DEFAULT ao abrir.

**FRENTE (DEFAULT_F):**
```
f_photo:  left:12.6, top:28.8, w:13.5, ratio:3/4
f_cargo:  left:34.9, top:39.6, size:2.2, color:#1a2a6e, bold
f_nome:   left:35.0, top:51.9, size:2.2, color:#111, bold
f_mat:    left:12.6, top:64.2, size:2.2, color:#111, bold
f_cpf:    left:35.1, top:65.3, size:2.2, color:#111
f_emissao:left:67.3, top:65.8, size:2.2, color:#111
f_hash:   left:35.1, top:77.5, size:2.0, color:#333
```

**VERSO (DEFAULT_V):**
```
v_qr:           left:3.4,  top:22.4, w:14.0, color:#cc0000
v_filiacao_pai: left:18.9, top:24.6, size:1.6
v_filiacao_mae: left:19.0, top:31.5, size:1.6
v_admissao:     left:52.5, top:25.5, size:2.0
v_nasc:         left:19.0, top:39.7, size:2.0
v_validade:     left:52.9, top:39.5, size:2.0, color:#cc0000
v_naturalidade: left:19.2, top:51.6, size:2.0
v_situacao:     left:53.0, top:52.0, size:2.0
v_municipio:    left:84.0, top:60.0, size:2.0
```

**MODAL "Ver Credencial" — posições hardcoded no HTML:**
```
cp-photo:       left:12.6%, top:28.8%, width:13.5%
cp-cargo:       left:34.9%, top:39.6%, font:2.2cqw
cp-nome:        left:35%,   top:51.9%, font:2.2cqw
cp-mat:         left:14%,   top:65%,   font:2.0cqw
cp-cpf:         left:35.1%, top:65.3%, font:2.2cqw
cp-emissao:     left:67.3%, top:65.8%, font:2.2cqw
cp-hash:        left:35.1%, top:77.5%, font:2.0cqw
cp-qr:          left:3.4%,  top:22.4%, width:14%
cp-filiacao:    left:18.9%, top:24.6%, font:1.1cqw
cp-admissao:    left:52.5%, top:25.5%, font:2.2cqw
cp-nasc:        left:19%,   top:39.7%, font:2.2cqw
cp-validade:    left:52.9%, top:39.5%, font:2.2cqw, color:#cc0000
cp-naturalidade:left:19.2%, top:51.6%, font:2.2cqw
cp-situacao:    left:53%,   top:52%,   font:2.2cqw
cp-municipio:   left:84%,   top:60%,   font:2.2cqw
```

## PENDENTE — POR PRIORIDADE

### 🔴 ALTA
1. **Página verificação QR** — sem identidade visual UBAPFF, sem detectar credencial expirada, sem selo
2. **Boleto** — falta nome do favorecido PIX

### 🟡 MÉDIA
3. Validação CPF (algoritmo dígitos verificadores)
4. Foto obrigatória para emitir carteirinha
5. Dashboard (ativos, inativos, inadimplentes, vencimentos)
6. Alertas de vencimento nos cards

### 🟢 BAIXA
7. Campo endereço e lotação no cadastro
8. Paginação de membros

## NÃO MEXER ✅
- Sincronização JSONBin
- Sistema de backup
- QR único por membro
- Login/logout
- Download PNG/PDF
- Carnê PIX
- Service Worker
- Modal Ver Credencial (está perfeito)

## REGRAS DE TRABALHO
1. Sempre buscar SHA atual antes de PUT no GitHub
2. Nunca criar CNAME (domínio não registrado)
3. Sempre incluir link após enviar correção
4. Testar em: https://prdlcsmrr.github.io/Associa-o-/
5. GitHub Pages propaga em 1-2 min após commit

---
Próximo passo: redesign da página de verificação QR (registrofuncional.html)
