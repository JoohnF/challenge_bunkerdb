FROM node:20.9

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g typescript nodemon ts-node

EXPOSE 3000

CMD ["npm", "start"]
