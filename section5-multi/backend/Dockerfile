FROM mhart/alpine-node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ENV MONGO_USERNAME=rmc3408
ENV MONGO_PASSWORD=secret123

EXPOSE 3001

CMD ["npm", "start"]
