# Command line - Imperative mode

## Minikube - Create cluster and master node
Minikube is virtual machine Cluster directed connect to kubectl. KubeCTL runs in the virtual machine (inside cluster), not local machine.

### Starting
`minikube start --driver=docker`

### clean up
`minikube delete --all --purge`

### check running
`minikube status`

### dashboard
`minikube dashboard`


# Running Node-Simple application

### Step 1
0. Ensure minikube is running as docker driver

1. Build image
`docker build -t node-local-img .`
`docker tag node-local-img rmc3408/node-simple-img`
`docker push rmc3408/node-simple-img`

2. Create new deployment object from remote image only (via dockerhub)
`kubectl create deployment node-app --image=rmc3408/node-simple-img`

- check deployments in the cluster
`kubectl get deployments`

- check pods in the cluster
`kubectl get pods`

- check in dashboard
`minikube dashboard`

3. Expose publish ports by service object, type service is NodePort(external access) OR ClusterIP(inside cluster) OR loadBalancer(distribute equal)
`kubectl expose deployment node-app --type=LoadBalancer --port=8080`

- check services
`kubectl get services`

- create a SSH tunnel from the pod to your host and open a window in your default browser that’s connected to the service.
`minikube service node-app`

- Choose external port to forward
`kubectl port-forward service/node-app 3000:8080`


### Kubernetes functionallities


- Restart once Container fails, kubernetes automatically make POD restart!


- AutoScaling 
`kubectl scale deployment/node-app --replicas=3`
`kubectl get deployments`
`kubectl get rs`
`kubectl get pods -o wide`


- updating Deployments (changes source code)
  build and push to docker Hub...
  ```
  docker build -t node-local-img:0.2 .
  docker tag node-local-img:0.2 rmc3408/node-simple-img:0.2
  docker push  rmc3408/node-simple-img:0.2
  ```

  `kubectl describe pods` to get container name

  __kubectl set image__ 
  deployments/{DEPLOYMENT_NAME} {CONTAINER_NAME}=rmc3408/node-simple-img:{VERSION}
  `kubectl set image deployments/node-app node-simple-img=rmc3408/node-simple-img:0.2`

- rollout


## STOP

```
kubectl delete services/node-app 
kubectl delete deployment/node-app
```

ensure check deployments, pods, services, replicas, namespace