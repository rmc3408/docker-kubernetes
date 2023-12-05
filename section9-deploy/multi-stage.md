# Front End deployment

Node is necessary just to build Image.

Once Built, use NGINX web server

localhost is used in same container and webserver.
For Nginx, remove both localhost, just '/'

```
docker build -f Dockerfile.prod -t [rmc3408/name] ./deploy-1
docker push rmc3408/name
```


__Problem with port 80 are conflicting. Get new URL - constant IP domain__

*Solution:*
- On ECS, Create new task - wait 

- OnEC2, create load balance.
  - Choose same VPC, subnets
  - same security group
  - target group via IP = HTTP 80
  - No register targets

Get DNS name from backend. and Copy in the CODE app.js to connect NGINX from frontend call endpoints to backend 

DNS name for reach frontEnd SPA
DNS name for frontend call backend

- Back to ECS, add security group for frontend, load balance for frontend. 

