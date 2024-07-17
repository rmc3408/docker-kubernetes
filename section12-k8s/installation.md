# Installation

1 cluster -> 1 master node -> X workernode

*KUBECTL*
it communicates to send instruction to cluster and master node

*Minikube*
minikube is LOCAL Kubernetes, focusing on making it easy to learn and develop for Kubernetes
https://minikube.sigs.k8s.io/docs/start/

__using choco __
```
minikube start / stop
minikube status
minikube dashboard
```

# Kubernetes

Contains several objects: 
    
- Pod object  
  -  is smallest unit contain one or multi-containers.  
  - They can share volumes with othe pods, has clusterIP address.    
  - Inside one cluster (task) can communicate using localhost  
  - lose all state if removed.  


- Deployment Object = "Controller"  
  - kubectl create and controls multiple pods - pause, delete, restart, previous roll back  
  - Set a target state of number instance (autoscale based on CPU, memory, incoming traffic).  


- Service Object  
  - kubectl expose pods to cluster and externally access. Each pod has internal IP in cluster by default.Need to create Services connect working nodes (between Pods), this create shared IP unchangable and provider external access between Pods and internet.
  
  
*types of services*
- ClusterIP - Exposes Service only reachable from within the cluster.
- NodePort - Exposes Service accessible from outside the cluster using <NodeIP>:<NodePort>. Superset of ClusterIP.
- LoadBalancer - Creates an external load balancer and assigns a fixed external IP to the Service. Superset of NodePort.
- ExternalName - Maps the Service to the contents of the externalName field.