# Use the official Node.js image as the base image
FROM node:20

# Create and change to the app directory
WORKDIR /counter-backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies

RUN npm install
# Copy Prisma schema
COPY prisma ./prisma

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 4000

# Command to run the application
CMD ["node", "dist/server.js"]
