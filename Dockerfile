# Get node image from dockerhub
FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8181

CMD ["node", "app.js"]