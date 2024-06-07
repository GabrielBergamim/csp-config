# Dockerfile

# Use the official NGINX image from the Docker Hub
FROM nginx:alpine

# Copy the build files from your Angular project to the NGINX html directory
COPY /dist/csp-config /usr/share/nginx/html

# Copy the custom NGINX configuration file
COPY nginx.conf /etc/nginx/nginx.conf
