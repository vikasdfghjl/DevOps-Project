FROM node:19-alpine

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node","/home/app/app.js"]