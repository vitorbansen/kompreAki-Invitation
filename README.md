# 🥷 Ninja da Promo — Landing Page

Página de convite para grupo de promoções no WhatsApp, otimizada para alta conversão em tráfego pago (Meta Ads, Google Ads, TikTok Ads).

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Zero dependências extras.

---

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Configurar o link do grupo
cp .env.example .env.local
# Edite .env.local e coloque seu link real do WhatsApp

# 3. Rodar localmente
npm run dev
# Abre em http://localhost:3000
```

Para deploy: `npm run build && npm run start`, ou faça push pra Vercel (build automático).

---

## 🎯 Princípios de conversão aplicados

| Elemento | Onde | Por quê |
|---|---|---|
| **CTA acima da dobra** | Hero | Visitante decide em 3s |
| **Prova social imediata** | Badge "+12.847 ninjas" | Reduz risco percebido |
| **Múltiplos CTAs** | Hero, meio, final, floating | Diferentes momentos de decisão |
| **CTA flutuante mobile** | `FloatingCTA.tsx` | 70%+ do tráfego pago é mobile |
| **Numbers grid** | Hero + Final | Quantificar benefício |
| **Risk reversal** | "100% grátis · Saia quando quiser" | Remove fricção |
| **FAQ com objeções** | `FAQ.tsx` | Antecipa dúvidas |
| **Urgência sutil** | Final CTA "oferta perdida" | Sem ser apelativo |
| **Depoimentos com valor** | `Testimonials.tsx` | "Economizou R$ 1.480" é específico |

---

## 🎨 Personalizando

### Trocar o link do WhatsApp
Edite `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_INVITE_URL=https://chat.whatsapp.com/SEU_CODIGO
```

### Mudar números/textos
- **Membros, avaliação, economia:** `components/Hero.tsx` e `components/FinalCTA.tsx`
- **Ofertas mostradas:** `components/DealsShowcase.tsx` (array `deals`)
- **Depoimentos:** `components/Testimonials.tsx` (array `testimonials`)
- **FAQ:** `components/FAQ.tsx` (array `items`)

### Mudar cores
`tailwind.config.ts` → seção `colors.ninja`. Toda a paleta é controlada por essas variáveis.

### Tracking de conversão (Meta Pixel, GA)
Todos os CTAs já têm `data-event="cta_whatsapp_click"` e `data-event="cta_floating_click"`. Adicione um script no `app/layout.tsx` ou use o Tag Manager pra disparar eventos quando esses cliques acontecerem.

---

## 📁 Estrutura

```
app/
  layout.tsx       → Metadata SEO + fontes (Bebas Neue + Inter)
  page.tsx         → Composição das seções
  globals.css      → Tailwind + utilitários customizados
components/
  Hero.tsx              → Headline + CTA primário
  Marquee.tsx           → Faixa de lojas parceiras
  Benefits.tsx          → 3 pilares (do banner original)
  HowItWorks.tsx        → 3 passos pra entrar
  DealsShowcase.tsx     → Cards de ofertas exemplo
  Testimonials.tsx      → Depoimentos com valor economizado
  FAQ.tsx               → 6 perguntas frequentes (objeções)
  FinalCTA.tsx          → Última chamada com urgência
  Footer.tsx
  FloatingCTA.tsx       → Botão fixo mobile
  WhatsappButton.tsx    → Componente reutilizável do CTA
```

---

## 📈 Próximos passos sugeridos

1. **Pixel do Meta** + Google Analytics no `layout.tsx`
2. **Página de obrigado** (`/obrigado`) com pixel de conversão disparado
3. **A/B testing** de headlines via Vercel Edge Config ou similar
4. **Sitemap + robots.txt** se for indexar
5. **Imagem OG personalizada** (1200×630) — coloque em `/public/og.jpg` e referencie no `metadata.openGraph.images`
