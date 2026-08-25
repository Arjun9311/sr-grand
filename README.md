# SR Grand Family Restaurant Website

Premium, config-first restaurant website for SR Grand Family Restaurant in Bhongir / Bhuvanagiri, Telangana.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

## Edit Business Data

The canonical source of truth is `lib/site-config.ts`.

Menu, gallery, testimonials and FAQs live in:

- `data/menu.ts`
- `data/gallery.ts`
- `data/testimonials.ts`
- `data/faqs.ts`

Before launch, replace all `TODO_VERIFY` values with owner-approved phone, address, service modes, photos, final menu prices, marketplace links, FSSAI details and the final domain via `NEXT_PUBLIC_SITE_URL`.
