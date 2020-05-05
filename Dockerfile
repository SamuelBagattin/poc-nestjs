FROM alpine

RUN apk add --update nodejs npm
RUN npm -g install yarn
