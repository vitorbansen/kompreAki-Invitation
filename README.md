# 🛍️ Kompreaki — Landing Page

Página de convite para grupo de promoções no WhatsApp, otimizada para alta conversão em tráfego pago (Meta Ads, Google Ads, TikTok Ads).

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Zero dependências extras.

---

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar localmente
npm run dev
# Abre em http://localhost:3000
```

Para deploy: `npm run build && npm run start`, ou faça push pra Vercel (build automático).

---

## 🎨 Identidade visual

| Elemento | Token Tailwind | Valor |
| --- | --- | --- |
| Laranja vibrante (CTAs, destaque) | `bg-primary` / `text-primary` | `#FF8C1A` |
| Cinza antracite (texto) | `text-text-primary` | `#333333` |
| Branco (fundo) | `bg-bg-primary` | `#FFFFFF` |
| Cinza suave (bordas/divisores) | `border-border-light` | `#E5E7EB` |

Tipografia: **Inter** (`--font-body`), carregada via `next/font/google` em `app/layout.tsx`.

Paleta e fontes controladas em `tailwind.config.ts`. Efeitos (shimmer, pulse, ripple, glow, fade-in) em `app/globals.css`.

---

## 🎯 Estrutura da página (padrão replicado do benchmark do setor)

```
app/
  layout.tsx       → Metadata SEO + fonte Inter
  page.tsx         → Composição das seções
  globals.css       → Tailwind + utilitários customizados (shimmer, pulse, ripple, glow)
components/
  Hero.tsx              → Headline shimmer + logo em destaque + CTA com auto-ripple
  Benefits.tsx          → 4 cards de benefício com fade-in ao rolar a tela
  HowItWorks.tsx        → 3 passos numerados com seta conectora
  FinalCTA.tsx          → Última chamada com glow radial
  FloatingCTA.tsx       → Botão fixo mobile (aparece após rolar)
  WhatsappButton.tsx    → Componente reutilizável do CTA (com efeito de pulso opcional)
  FadeInOnScroll.tsx    → Wrapper de animação via IntersectionObserver
```

### Trocar o link do WhatsApp
Edite a constante `WHATSAPP_INVITE_URL` em `components/WhatsappButton.tsx` e `components/FloatingCTA.tsx`.

### Mudar textos/ofertas
- **Headline, tags e badges do hero:** `components/Hero.tsx`
- **Cards de benefício:** `components/Benefits.tsx` (array `items`)
- **Passos do "como funciona":** `components/HowItWorks.tsx` (array `steps`)

### Tracking de conversão (Meta Pixel, GA)
Os CTAs já têm `data-event="cta_whatsapp_click"` e `data-event="cta_floating_click"`. Adicione um script no `app/layout.tsx` ou use o Tag Manager pra disparar eventos quando esses cliques acontecerem.

---

## 📈 Próximos passos sugeridos

1. **Pixel do Meta** + Google Analytics no `layout.tsx`
2. **Página de obrigado** (`/obrigado`) com pixel de conversão disparado
3. **A/B testing** de headlines via Vercel Edge Config ou similar
4. **Sitemap + robots.txt** se for indexar
5. **Imagem OG personalizada** (1200×630) — coloque em `/public/og.jpg` e referencie no `metadata.openGraph.images`
