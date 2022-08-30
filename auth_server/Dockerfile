FROM node as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine3.15
WORKDIR /app
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/dist/ .
CMD ["node","app.js"]