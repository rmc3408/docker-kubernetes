
# Kubernetes

Issues:
1- once container crash, need restart
2 - users Traffic have spikes during specific times
3- Incoming traffic must be equal distributed

Solution:
1 - checks + automatic re-deploy
2 - autoscaling
3 - load balancer


#### Even ECS has all 3 (downsize is: Be locked with AWS only, hard to switch)
Has cluster VPC/subnets, Fargate Configuration and EC2 load balancer


## Kubernetes Helps
- automatic deploy
- scaling 
- load balance
- management indendent of cloud services


__Facts:__
- configuration file can be used to any cloud provider
- A Standardized file
- You can merge cloud provider into this file
- Collecting of concept and tools
- Works with Docker

## Kubernetes is like docker-compose for multiple machines


