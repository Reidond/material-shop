FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm install -g json-server

EXPOSE 3004
ENTRYPOINT [ "json-server", "-H", "0.0.0.0", "--watch", "/usr/src/app/db.json", "--port", "3004" ]
