FROM node:20

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y libaio1 unzip

# Baixar e instalar o Instant Client
RUN curl -O https://download.oracle.com/otn_software/linux/instantclient/2326000/instantclient-basiclite-linux.x64-23.26.0.0.0.zip \
    && unzip instantclient-basiclite-linux.x64-23.26.0.0.0.zip -d /opt/oracle \
    && rm instantclient-basiclite-linux.x64-23.26.0.0.0.zip

ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_23_26
ENV OCI_LIB_DIR=/opt/oracle/instantclient_23_26
ENV OCI_INC_DIR=/opt/oracle/instantclient_23_26/sdk/include

RUN npm install

RUN npx prisma generate

CMD ["npm", "run", "dev"]

EXPOSE 3333