Technology Stack
```
Frontend : Next.js
Api : Next.js
Database : Mongodb
authentication : Google Oauth
```

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
Members
```
Korrawit Opassamutchai 630615017
Nichapat Thammawit 630615027
Pollachaet Putthapanasub 630615034
Pheerawadee Chantakhat 630615036
Yooradet Khamon 630615037
Sorawich Yeampraseot 630615042
Sunida Riensakunudee 630615043
Arissawat Tresresiri 630615045
```

