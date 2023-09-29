FROM mhart/alpine-node:8

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

EXPOSE 80

CMD ["npx", "nodemon", "server.js"]
