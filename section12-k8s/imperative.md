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
`docker tag node-local-img rmc3408/node-remote-sec12`  
`docker push rmc3408/node-remote-sec12`

2. Create new deployment object from remote image only (via dockerhub)  
`kubectl create deployment node-app --image=rmc3408/node-remote-sec12`

- check deployments in the cluster  
`kubectl get deployments`

- If errors, remove deployment with pods  
`kubectl delete deployment node-app`  

- check pods in the cluster  
`kubectl get pods`  

- check in dashboard  
`minikube dashboard`  

3. Expose publish ports by service object, type service is NodePort(external access) OR ClusterIP(IP only used inside cluster) OR loadBalancer(distribute equal)  
`kubectl expose deployment node-app --type=LoadBalancer --port=8080`

- check services  
`kubectl get services`  

- create a SSH tunnel from the pod to your host and open a window in your default browser that’s connected to the service.  
`minikube service node-app`  
__if you are using LoadBalanced(fixed IP) instead NodePort(dynamicIP)__, you can use `minikube tunnel`

- Choose external port to forward  
`kubectl port-forward service/node-app 3000:8080`  


### Kubernetes functionallities


- Restart once Container fails, kubernetes automatically make POD restart!


- AutoScaling 
`kubectl scale deployment/node-app --replicas=3`
`kubectl get deployments`
`kubectl get rs`
`kubectl get pods -o wide`


- Updating Deployments (In case any changes in the source code)  
  1. To build and push to docker Hub, Image <b> MUST HAVE different Tag </b>
  ```
  docker build -t node-local-img:0.2 .
  docker tag node-local-img:0.2 rmc3408/node-simple-img:0.2
  docker push  rmc3408/node-simple-img:0.2
  ```

  2. `kubectl describe pods` to get container name

  3. Use command __kubectl set image__ in
  deployments/{DEPLOYMENT_NAME} {CONTAINER_NAME}=rmc3408/node-simple-img:{VERSION}  
  `kubectl set image deployments/node-app node-simple-img=rmc3408/node-simple-img:0.2`

- rollout
  1. Verify what is happening.
  `kubectl rollout status deployment/node-app`

  2. Remove the lastest update in the deployment - it will block a wrong update (typo in image tag)  
  `kubectl rollout undo deployment/node-app`

  3. More details  
  `kubectl rollout history deployment/node-app`  
  `kubectl rollout history deployment/node-app --revision=1`  
  `kubectl rollout undo deployment/node-app --to-revision=1`  


## STOP

```
kubectl delete services/node-app 
kubectl delete deployment/node-app
```

ensure check deployments, pods, services, replicas, namespace