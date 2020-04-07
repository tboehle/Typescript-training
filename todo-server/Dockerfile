FROM node:12.16.1-alpine3.11

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY ./src .
COPY tsconfig.json .
COPY tsoa.json .

RUN npm run generate

EXPOSE 8080

CMD ["npm", "run", "start"]