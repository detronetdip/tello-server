FROM node as builder
WORKDIR /app
COPY ./package*.json ./
RUN npm ci --quit
COPY ./prisma prisma
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:18-alpine3.15
WORKDIR /app
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/dist/ /app/dist
COPY --from=builder /app/prisma/ /app/prisma/
CMD ["node","dist/app.js"]