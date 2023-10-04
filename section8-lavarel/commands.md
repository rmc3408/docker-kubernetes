
# First container run only composer + command: "create-project --prefer-dist laravel/laravel" + folder
docker-compose run --rm composer create-project --prefer-dist laravel/laravel .

# Run Server with dependes_on MySQL and php
docker-compose up -d server

# Run database first, then artisan container
docker-compose up -d --build mysql
docker-compose run --rm artisan migrate


# DOCKER-COMPOSE
docker-compose up
-d __detach mode__
--build __rebuilt if changes images__
--rm __remove after stop__

docker-compose down
-v __remove all named volumes__

docker-compose run <name of container> <ENTRYPOINT commands>


# DOCKERFILE
__RUN__ Execute command when building image in linux bash
__CMD__ Sets the command to be executed by default after the container is started.
__ENTRYPOINT__ configures the command to run  with "appended text and pass it as an argument to the docker run", CMD is ignored if passing any arguments when starting the container.