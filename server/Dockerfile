# Dockerfile for Node.js and Express Application
FROM node:20.18-alpine AS runtime

# Set working directory
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
ENTRYPOINT ["node", "app.js"]