FROM mhart/alpine-node:8

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 80
CMD ["node", "server.js"]
