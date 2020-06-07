# Pull node 12.18.0 version
FROM node:14.4.0

# Create work directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY *.json ./
RUN npm install

COPY . ./
EXPOSE 8080
CMD ["npm", "start"]
