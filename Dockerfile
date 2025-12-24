FROM node:20.16.0-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    openssh-client \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Install Gatsby CLI globally
RUN npm install -g gatsby-cli

# Copy dependency files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the project
COPY . .

# Copy setup script and make it executable
COPY setup.sh /usr/local/bin/setup.sh
RUN chmod +x /usr/local/bin/setup.sh

# Expose Gatsby dev server port
EXPOSE 8000

# Start Gatsby via your setup script
CMD ["/usr/local/bin/setup.sh"]
