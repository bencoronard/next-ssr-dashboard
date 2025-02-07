# Stage 1: Build the Next.js application
FROM node:23-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first for better caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the app
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Create a minimal runtime image
FROM node:23-alpine AS runner

# Set working directory
WORKDIR /app

# Install only production dependencies
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --only=production

# Copy the built Next.js output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port Next.js will run on
EXPOSE 3000

# Run the Next.js application
CMD ["node", "./node_modules/.bin/next", "start"]
