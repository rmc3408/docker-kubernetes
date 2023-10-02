# Create network 
__use host.docker.internal without network to connect containers__
__if have network, change code from host.docker.internal to name of container__
__publish ports to expose conatiner to outside applications__
docker network create goals
docker network ls


# Create MONGO container with named persist data, set network, and enviroment username and password
docker run -d --network goals -e MONGO_INITDB_ROOT_USERNAME=rmc3408 -e MONGO_INITDB_ROOT_PASSWORD=secret123 --name mongo-server -v mongo-db:/data/db mongo:6


# Create BACKEND image and container with interconnection backend-database and publish connection to browser frontEnd, and persist data
docker build -t goal-back:0.1 .
docker run -d --network goals --name back-app -v "/home/rmc3408/docker-kubernetes/section5-multi/backend:/app" -v /app/node_modules --rm -p 3001:3001 goal-back:0.1


# Create FRONTEND image and container with expose port to User, access to backend and bind mount 
docker build -t goal-front:0.1 .
docker run -d -it --rm --name front-app -p 3000:3000 -v $PWD:/app goal-front:0.1
__use bind mounts with path *%cd% - window*, *$PWD - WSL2 linux*__


# Stop and remove all containers, images and network 
docker volume ls
docker container stop movie-app mongo-tiny
docker container rm movie-app mongo-tiny
docker image rmi movie:1
docker network rm movies-network