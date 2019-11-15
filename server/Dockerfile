FROM node:10-alpine
RUN apk add --no-cache bash yarn

WORKDIR /usr/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3001

CMD [ "yarn", "dev" ]
