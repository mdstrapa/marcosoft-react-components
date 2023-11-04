# Use the official Node.js image as the base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy your React app's package.json and package-lock.json
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your React app's source code
COPY . .

# Build your React app
RUN npm run build

# Expose a port if needed
# EXPOSE 80

# Define the command to start your app (for production)
CMD ["npm", "start"]
