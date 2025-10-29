FROM node:20

WORKDIR /app

COPY . .

RUN rm -rf node_modules
RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3333