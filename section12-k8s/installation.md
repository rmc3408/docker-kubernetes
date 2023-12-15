

# Installation

1 cluster -> 1 master node -> X workernode


# Tool

*KUBECTL*
it communicates to send instruction to cluster and master node

*Minikube*
minikube is local Kubernetes, focusing on making it easy to learn and develop for Kubernetes
https://minikube.sigs.k8s.io/docs/start/

__using choco __
```
minikube status
minikube dashboard
```

## KubeCTL 

- Deployment Object 
kubectl choose worknode, create a pods and container



- Service Object
kubectl expose pods to cluster and externally access. Each pod has internal IP, Services connect between Pods, make IP unchangable and provider external access between Pods and internet.

*types of services*
- ClusterIP - Exposes Service only reachable from within the cluster.
- NodePort - Exposes Service accessible from outside the cluster using <NodeIP>:<NodePort>. Superset of ClusterIP.
- LoadBalancer - Creates an external load balancer and assigns a fixed external IP to the Service. Superset of NodePort.
- ExternalName - Maps the Service to the contents of the externalName field.