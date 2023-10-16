## Getting Started

First, setup docker then run docker compose:

```bash
docker compose up -d
```

Env setup

```
NEXTAUTH_SECRET => with any string
DATABASE_URL => mongodb://<username>:<password>@<server>/<database>?authSource=admin
GOOGLE_CLIENT_ID => generate from https://console.cloud.google.com/
GOOGLE_CLIENT_SECRET => generate from https://console.cloud.google.com/
NEXT_PUBLIC_BASE_URL => default is http://localhost:3000 replace with domain name
```

run the development server:

```bash
npm install

npx prisma generate

npm run dev

```

run the production server:

```bash
npm run production
```
