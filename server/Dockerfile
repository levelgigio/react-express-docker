FROM node:alpine

WORKDIR /usr/apps/portfolio/server

COPY package*.json /usr/apps/portfolio/server/

RUN npm install

COPY . /usr/apps/portfolio/server/

CMD ["npm", "start"]