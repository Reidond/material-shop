FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3004
ENTRYPOINT [ "./node_modules/.bin/json-server", "--watch", "db.json", "--port", "3004" ]
