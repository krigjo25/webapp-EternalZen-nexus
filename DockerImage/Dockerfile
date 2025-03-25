#   EnternalZen Docker Image

#   Offical Node.js Runtime Image
FROM node:20-lts-alpine AS builder

#   Working directory in the container
WORKDIR /app

#   Copy package.json and package-lock.json
COPY package*.json ./

#   Running the installation procsess
RUN npm install

#   Copy the rest of the application
COPY . .

#   Expose the application port ( Node.JS)
EXPOSE 3000

CMD ["npm", "start"]