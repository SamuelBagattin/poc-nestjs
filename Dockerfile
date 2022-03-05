FROM alpine
RUN
 apk add --update nodejs
WORKDIR /home
COPY ./dist/ ./
COPY ./node_modules ./node_modules

ENTRYPOINT node main.js
