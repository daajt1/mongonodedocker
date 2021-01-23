FROM node:14

RUN mkdir - p /usr/src/app

WORKDIR /usr/src/app

ENV PORT 80

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]

