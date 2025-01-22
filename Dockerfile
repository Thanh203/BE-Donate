
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

#COPY . .

EXPOSE 3000

CMD [ "npx", "ts-node-dev","src/app.ts" ]
