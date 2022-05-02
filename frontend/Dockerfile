FROM node:lts-alpine
RUN chmod a+wrx .
WORKDIR /app

# ENV PATH /frontend/node_modules/.bin:$PATH

# COPY package.json /frontend/package.json

COPY package*.json .

RUN npm install

COPY . .
RUN chown -R node:node node_modules
EXPOSE 3000
ENV PORT=3000
ENV CHOKIDAR_USEPOLLING=true
USER node

# RUN npm run build

CMD ["npm", "start"]