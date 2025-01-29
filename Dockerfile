FROM node:20.16.0-slim

WORKDIR /app

RUN apt-get update && apt-get install -y git && apt-get clean

# Install Gatsby CLI globally
RUN npm install -g gatsby-cli && npm cache clean --force

# Install project dependencies
RUN yarn install

# Copy remaining files
COPY . .

# Move setup script and make it executable
COPY setup.sh /usr/local/bin/setup.sh
RUN chmod +x /usr/local/bin/setup.sh

# Expose the Gatsby development server port
EXPOSE 8000

# Use CMD instead of ENTRYPOINT to allow easy overriding
CMD ["/usr/local/bin/setup.sh"]
