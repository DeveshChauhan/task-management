# Stage 1: Build
FROM node:20.18-alpine AS builder

WORKDIR /client

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies 
RUN npm install 

# Copy the rest of the application code
COPY . .

# Build the project
RUN echo "Building stage" && npm run build

# Stage 2: Runtime
FROM node:20.18-alpine AS runtime

WORKDIR /client

# Install serve globally
RUN npm install -g serve

# Copy built assets and dependencies from the builder stage
COPY --from=builder /client/node_modules ./node_modules
COPY --from=builder /client/public ./public
COPY --from=builder /client/build ./build
COPY --from=builder /client/package.json ./package.json
COPY --from=builder /client/.env ./.env.local

# Expose the port your app runs on
EXPOSE 3000

# Start the application
ENTRYPOINT ["sh", "-c", "serve -s build -l 3000"]