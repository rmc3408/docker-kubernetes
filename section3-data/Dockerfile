FROM mhart/alpine-node:8

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ARG REACT_ENV=DEV

ENV DOCKER_SERVER_PORT 80
ENV NODE_ENV ${REACT_ENV}

EXPOSE $DOCKER_SERVER_PORT

# CMD ["npx", "nodemon", "server.js"]
CMD ["npm", "start"]
