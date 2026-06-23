# 🌐 Ativação do Domínio ubapff.org.br

## Passo 1 — Registrar o domínio
Acesse: https://registro.br
- Buscar: `ubapff.org.br`
- Registrar (~R$40/ano)
- Categoria: Associação (org.br)

## Passo 2 — Configurar DNS no Registro.br
Adicionar os seguintes registros DNS:

| Tipo | Nome | Valor |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | prdlcsmrr.github.io |

## Passo 3 — Configurar no GitHub
1. Abrir: https://github.com/prdlcsmrr/Associa-o-/settings/pages
2. Em "Custom domain", digitar: `ubapff.org.br`
3. Clicar Save
4. Marcar "Enforce HTTPS"

## Passo 4 — Criar arquivo CNAME no repositório
O arquivo `CNAME` já está criado neste repositório com o conteúdo:
```
ubapff.org.br
```

## Passo 5 — Avisar para atualizar QR codes
Após domínio ativo, os QR codes dos membros existentes precisam ser 
regenerados. Isso é feito automaticamente pelo sistema ao editar/salvar 
cada membro, ou via script de migração.

## Status dos arquivos preparados
- ✅ index.html — 9 URLs atualizadas
- ✅ carteirinha.html — 4 URLs atualizadas  
- ✅ cobranca.html — 2 URLs atualizadas
- ✅ verificar.html — 2 URLs atualizadas
- ✅ membros qrUrl — prontos para migração

## Propagação DNS
Aguardar 24-48h após configurar DNS para propagar globalmente.
Testar em: https://dnschecker.org/#A/ubapff.org.br
