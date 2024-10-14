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
