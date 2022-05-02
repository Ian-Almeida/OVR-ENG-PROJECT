FROM node:lts-alpine

WORKDIR /app

ENV PATH node_modules/.bin:$PATH

COPY package*.json .
RUN npm install
RUN npm install -g @nestjs/cli
# RUN npm install @nestjs/common
# RUN npm install @nestjs/core

COPY . .

EXPOSE 3000
ENV PORT=3000
ENV CHOKIDAR_USEPOLLING=true
USER node

CMD ["nest", "start", "--watch"]