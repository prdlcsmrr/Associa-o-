# Associa-o-

Sistema de gestão de associados — carteirinhas, cadastro, cobranças e verificação de credenciais.

---

## Qualidade de Código

### Validações automáticas (CI)

A cada push ou Pull Request, o GitHub Actions executa dois jobs:

| Job | Ferramenta | O que verifica |
|---|---|---|
| **Validação HTML** | `html-validate` | Erros de marcação, tags obrigatórias, atributos inválidos |
| **Acessibilidade** | `pa11y` (WCAG2AA) | Contraste, labels, hierarquia de headings, navegação por teclado |

Os resultados aparecem na aba **Actions** do repositório. PRs com falhas nesses checks **não devem ser mergeados**.

### Como rodar as validações localmente

**Pré-requisitos:** Node.js ≥ 18

```bash
# Instalar ferramentas
npm install -g html-validate pa11y serve

# Validar HTML de todos os arquivos do projeto
find . -maxdepth 2 -name "*.html" ! -name "BACKUP_*" ! -name "index_backup.html" \
  | xargs -I{} html-validate {}

# Checar acessibilidade (inicie um servidor local primeiro)
serve -s . -l 8080 &
pa11y --standard WCAG2AA http://localhost:8080/index.html
pa11y --standard WCAG2AA http://localhost:8080/carteirinha.html
pa11y --standard WCAG2AA http://localhost:8080/cadastro-membro.html
pa11y --standard WCAG2AA http://localhost:8080/verificar.html
```

### Critérios mínimos antes de merge

1. **CI verde** — todos os checks do GitHub Actions devem passar.
2. **HTML válido** — zero erros reportados pelo `html-validate` nos arquivos alterados.
3. **Acessibilidade** — zero erros de nível WCAG2AA reportados pelo `pa11y` nas páginas principais.
4. **Sem regressão visual** — o visual do site não pode ser alterado.
5. **Sem frameworks novos** — não introduzir dependências de runtime externas.
6. **Sem segredos** — nenhuma credencial, token ou dado sensível no código.
7. **Checklist do PR** — todos os itens aplicáveis do template de PR devem estar marcados.