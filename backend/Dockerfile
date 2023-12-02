# Pull the Node image from Docker Hub
FROM node:lts-slim

# Setting Working Directory
WORKDIR /usr/app

# Copying only package.json
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy rest of the code to container
COPY . .

EXPOSE 4000

# Run the API on Nodemon
CMD ["npm", "start"]# Pull the Node image from Docker Hub
