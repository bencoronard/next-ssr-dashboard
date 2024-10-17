# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app ./

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port Next.js will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
