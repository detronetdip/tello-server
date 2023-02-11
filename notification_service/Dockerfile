FROM node as builder
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine3.15
WORKDIR /app
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/dist/ .
COPY ./src/key/ ./key/
CMD ["node","app.js"]