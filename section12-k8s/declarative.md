# Using YAML file

### start
`kubectl apply -f v2.yaml`

- Deployments
https://kubernetes.io/docs/concepts/workloads/controllers/deployment/


- Services
https://kubernetes.io/docs/concepts/services-networking/service/


### Still need to tunnel minikube service
`minikube service node-service`


### stop
`kubectl delete -f v2.yaml`


### extra
`-l group=frontend` select labels key-value and can delete or create.

