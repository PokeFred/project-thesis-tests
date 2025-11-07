# Stage 1: Builder
FROM node:25-alpine AS builder
WORKDIR /app

COPY package.json ./
RUN npm install
COPY . /app
RUN npm run build

# Stage 2: Application
FROM ubuntu:25.04
WORKDIR /var/www/html/
ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && \
    apt install apache2 -y && \
    rm -rf /var/lib/apt/lists/* && \
    chown -R www-data:www-data /var/www/html/
COPY --from=builder /app/build /var/www/html/

USER www-data
EXPOSE 80
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
