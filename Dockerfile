FROM node:14.17.4

RUN mkdir /app 

RUN cd /app

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm install --global expo-cli

COPY . /app

CMD ["npm","start"]