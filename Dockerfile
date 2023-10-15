FROM node:20-alpine3.17

WORKDIR /app
COPY . .

RUN npm install

# CMD ["npx", "prisma", "generate"]
CMD ["npm", "run", "production"]