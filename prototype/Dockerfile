FROM node:25-alpine AS builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM ubuntu:25.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install apache2 -y && apt clean && rm -rf /var/lib/apt/lists/*
COPY --from=builder /app/build /var/www/html
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite
EXPOSE 80
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
