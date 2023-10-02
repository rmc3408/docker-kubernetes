
# Create network 
docker network create goals
docker network ls

# Create container for mongo with persist data

# Create image and container with connection to database and connection to frontEnd

# Create image and container with expose port to User, access to backend

# Run all test

# Stop and remove all containers, images and network 
docker volume ls
docker container stop movie-app mongo-tiny
docker container rm movie-app mongo-tiny
docker image rmi movie:1
docker network rm movies-network