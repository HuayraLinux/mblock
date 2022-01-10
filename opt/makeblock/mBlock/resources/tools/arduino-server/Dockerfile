FROM node:6.10.2
MAINTAINER Yu Wang <wangyu@makeblock.com>

RUN apt-get update && apt-get install -f && apt-get install -qq default-jdk avr-libc gcc-avr xvfb

COPY . /var/www
ENV ARDUINO_SERVER_PORT 56739
RUN cd /var/www; npm install;
EXPOSE  56739
ENV X11_MODE_ARDUINO 1
WORKDIR /var/www/
CMD ["node", "/var/www/server.js"]