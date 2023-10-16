FROM node:20-alpine3.17

# RUN apk update && apk add bash

WORKDIR /app
COPY . .
ARG DATABASE_URL=mongodb://admin:password@mongo:27017/db?authSource=admin
RUN npm install
# RUN npx prisma generate
# CMD ["npx", "prisma", "generate"]
CMD ["npm", "run", "production"]