# Create image based on the official Node 8 image from dockerhub
FROM node:8

# Create a directory where our app will be placed
RUN mkdir -p /monitoringappfiware

# Change directory so that our commands run inside this new directory
WORKDIR /monitoringappfiware

# Copy dependency definitions
COPY package.json /monitoringappfiware

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY /dist /monitoringappfiware

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]