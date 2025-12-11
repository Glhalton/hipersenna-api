FROM node:20

WORKDIR /app

COPY . .

RUN npm install

RUN npx prisma generate

CMD ["npm", "run", "dev"]

EXPOSE 3333