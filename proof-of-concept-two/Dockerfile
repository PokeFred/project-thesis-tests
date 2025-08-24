FROM node:24-alpine AS builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM httpd:2-alpine
WORKDIR /usr/local/apache2/htdocs/
COPY --from=builder /app/build ./
EXPOSE 80
