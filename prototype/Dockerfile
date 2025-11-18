FROM node:25-alpine AS builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM httpd:2-alpine
COPY --from=builder /app/build /usr/local/apache2/htdocs/
