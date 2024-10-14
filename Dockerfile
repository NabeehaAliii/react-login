# Step 1: Build the React app
FROM node:18-alpine AS build
WORKDIR /app

RUN npm config set fetch-timeout 600000
RUN npm config set fetch-retries 5
RUN npm cache clean --force


COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

# Step 2: Use Nginx to serve the static files
FROM nginx:alpine

# Install Certbot inside the container
RUN apk add --no-cache certbot certbot-nginx openssl
# Copy the built files to Nginx's web directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default)
EXPOSE 80

# Start Nginx 
# -g "daemon off;" overrides Nginx’s default behavior and makes it run in the foreground instead of the background.
CMD ["nginx", "-g", "daemon off;"]