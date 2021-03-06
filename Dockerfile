FROM alpine

RUN apk add --update \
    curl \
    && rm -rf /var/cache/apk/*
RUN apk add bash
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
RUN apk add --update nodejs npm
RUN npm -g install yarn
RUN yarn global add @nestjs/cli
