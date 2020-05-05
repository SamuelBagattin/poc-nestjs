FROM alpine

RUN apk add bash
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
RUN nvm install node
RUN npm -g install yarn
RUN yarn global add @nestjs/cli
