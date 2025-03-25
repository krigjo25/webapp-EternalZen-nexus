#   Nest Docker Image

#   Offical Node.js Runtime Image
FROM node:20-lts-alpine AS builder

#   Working directory in the container
WORKDIR /app

#   Copy package.json and package-lock.json
COPY package*.json ./

#   Install the dependencies
RUN npm install

#   Copy the rest of the application
COPY --from=builder /app/dist ./dist

#   Copy package.json and package-lock.json
COPY package*.json ./
COPY package-lock.json ./

#   Expose the application port ( Node.JS)
EXPOSE 3000

CMD ["node", "dist/main.js"]