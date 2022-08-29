FROM node AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY --from=builder ./dist/ .
CMD ["node" "src/app.js"]