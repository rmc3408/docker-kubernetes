# Volume - Storing data

### In docker, storing data are in:
- anonymous volume
- named volume
- bind mounts

## Volumes POD initiated and run by Kubernetes

Kubernetes Volumes are stored in Pods. If restart Pod, lost all data. But here is some options in case container crash:  

1. **emptyDir** is good for create a volume inside Pod in same container, but is not good for replicas.  

2. **hostPath** is similar to named volume, it will create a folder inside pod which can be share to any replicas or different container.  

3. **CSI** is Amazon EFS cloud storage as kubernetes volume, you can attach any POD to this data center. 

#### 

## Persistent Volume
This is a problem for Persistence volume (PV) data. To solve this use, kubernetes save data independent POD/worker node. The volume is dettach from Pod. The cluster adminstrate this volume, define which pod can use this volume.  
PV Claim inside Node can reach out and access to read/write in the PV.  

**hostPath** can be used for only Single Node.  

#### Check Persistence Volumes, they must be STATUS=Bound or CLAIM:

`kubectl get sc`  
`kubectl get pv`  
`kubectl get pvc`  


## Environment variable

ConfigMap can be create a new YAML file.  

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: data-story-env
data:
  #key: value
  folder: 'story'
  STORY_FOLDER: 'story'
```

In deployment file, Spec -> Template -> Container:  

```
env:
  - name: STORY_FOLDER
  #value: 'story'
  valueFrom:
    configMapKeyRef: 
      name: data-story-env 
      key: folder
```
