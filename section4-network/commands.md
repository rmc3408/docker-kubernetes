
# Create network 
docker network create movies-network
docker network ls


# Build Mongo and App image - add same network, named volume and expose port
docker run -d --network movies-network -v movie:/data/db --name mongo-tiny mongo
docker run -d --network movies-network --name movie-app -p 4000:3000 movie:1

# Run all tests


# Stop and remove all containers, images and network 
docker volume ls
docker container stop movie-app mongo-tiny
docker container rm movie-app mongo-tiny
docker image rmi movie:1
docker network rm movies-network