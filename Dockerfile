
# Stage 1
ARG NODE_VERSION=22.4.1

FROM node:${NODE_VERSION}-alpine as builder

# Set environment variables at build time
ARG API_URL
ARG SOCKET_URL

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build -- --env REACT_APP_API_URL=$API_URL --env REACT_APP_SOCKET_URL=$SOCKET_URL

# Stage 2
# Use a lightweight web server to serve the built application
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
