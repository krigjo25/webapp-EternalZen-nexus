#   React Docker Image

#   Offical Node.js Runtime Image
FROM node:20-lts-alpine AS builder

#   Working directory in the container
WORKDIR /webapp-EternalZen-nexus

#   Copy package.json and package-lock.json
COPY package*.json ./

#   Install the dependencies
RUN npm install

#   Copy the rest of the application
COPY . .

#   Build the application ( Dependent on pk.json)
RUN npm run build

#   Serve the React app
FROM nginx:stable-alpine

#   Copies the react files into Nignx's web server directory
COPY --from=builder /webapp-EternalZen-nexus/build /usr/share/nginx/html

#   Expose the application port ( NGINX)
EXPOSE 80

CMD ["nginx", "-g" "daemon off;"]