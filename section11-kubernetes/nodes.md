
# Nodes 
are Computer / virtual machine (CPU and memory)


## Worker nodes
Contains Pods and resources

One pod can have:

multiples container + volume to share

You need to add to communicate:
- docker
- kubelet
- kube-proxy


## master node

You need to have :
- API server (API to communicate between nodes and pods)
- Scheduler (focus on new pods, run and setup of new worker nodes)
- kube-controller- manager (watch and controls worker nodes, pods numbers)
- cloud-controller-manager ( adaptor to interact to specific cloud provider)

