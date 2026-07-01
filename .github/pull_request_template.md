## Descrição das mudanças

<!-- Descreva brevemente o que foi alterado e por quê. -->

---

## Checklist de qualidade

### Código / Arquivos
- [ ] As mudanças não alteram o visual do site (sem regressão visual).
- [ ] Nenhum framework novo foi introduzido.
- [ ] Arquivos de backup (`BACKUP_*.html`) não foram modificados.
- [ ] Nenhuma credencial, token ou dado sensível foi adicionado ao código.

### HTML
- [ ] O HTML dos arquivos modificados é válido (sem erros no `html-validate`).
- [ ] Tags semânticas foram usadas quando possível (`<header>`, `<main>`, `<section>`, etc.).
- [ ] Todas as imagens possuem atributo `alt` preenchido.

### Acessibilidade
- [ ] O pa11y não reportou erros críticos (nível WCAG2AA) nas páginas alteradas.
- [ ] Elementos interativos são acessíveis por teclado.
- [ ] Contraste de cores está adequado.

### Testes manuais
- [ ] Testado no navegador (Chrome ou Firefox).
- [ ] Fluxos principais verificados manualmente (cadastro, carteirinha, verificação).

### Documentação
- [ ] O README foi atualizado caso a mudança afete como o projeto é usado ou configurado.

---

## Tipo de mudança

- [ ] Correção de bug
- [ ] Nova funcionalidade
- [ ] Refatoração / melhoria interna
- [ ] CI / configuração / documentação
- [ ] Outro: ___________
