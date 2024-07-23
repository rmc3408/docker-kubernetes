# Steps

## Step 1: Deploy USERS alone


__Modify `users-app.js` routers: login and signup to do not call auth axios__

1. create 3 remote repositories in Docker Hub containers for: users, auth, tasks
`kub-sec14-XXX`

2. build, tag and push image to docker hub
`docker build -t kub-sec14-users .`
`docker tag kub-sec14-users rmc3408/kub-sec14-users:0.1`
`docker push rmc3408/kub-sec14-users:0.1`

3. Create YAML and Run kubectl to deploy `kubectl apply -f users-deploy.yaml`  

4. Create service and Run `kubectl apply -f users-service.yaml` and `minikube tunnel`  


## Step 2: Connect Auth and User API inside different POD (same POD can be same YAML file).

__Modify `users-app.js` back to call auth axios__

1. build, tag and push update USERS image to docker hub - version 0.2

2. build, tag and push AUTH image to docker hub - version 0.1

- Inside same Pod, All containers can communicate via `localhost`.  

- From different Pod, containers can communicate via ClusterIP address via:  
  1. manually getting IP address (kubectl get services)  
  2. Automatic generated environment in the code (process.env.X_SERVICE_HOST)  
  3. generated-domains name inside service DOT Namespace (service_name.namespace).  

## Step 3: Communicate between namespace services (ingress and default).
- [NAME_OF_SERVICE].[NAMESPACE].svc.cluster.local
- ingress-nginx-controller.ingress-nginx.svc.cluster.local



