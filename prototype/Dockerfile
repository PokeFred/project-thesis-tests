FROM node:25-alpine AS builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM ubuntu:25.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install apache2 -y
COPY --from=builder /app/build /var/www/html
EXPOSE 80
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
