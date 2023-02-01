FROM node as builder
WORKDIR /app
COPY ./package*.json ./
RUN npm ci --quit
COPY . .
RUN npm run build

FROM node:18-alpine3.15
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/dist/ .
COPY ./prisma/ /app/prisma/
CMD ["npm","run","prod:migrate"]