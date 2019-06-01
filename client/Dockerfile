FROM node:alpine

WORKDIR /usr/apps/portfolio/client

COPY package*.json /usr/apps/portfolio/client/

RUN npm install

COPY . /usr/apps/portfolio/client/

CMD ["npm", "start"]