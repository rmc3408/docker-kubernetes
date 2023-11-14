
# Deploy-1 in EC2

#### local deploy - development mode
docker build -t sec09-1 . 
docker run -d --rm -p 3000:80 --name node-section9-1 sec09-1

#### remote deploy - production mode
1. Create a instance in AWS with key pair
2. connect to SSH client
3. install docker [https://cloudkatha.com/how-to-install-docker-on-amazon-linux-2023/]
```
sudo yum update -y
sudo yum -y install docker

sudo service docker start
sudo systemctl enable docker
sudo usermod -a -G docker ec2-user

sudo systemctl status docker
```

4. Locally docker build, tag and push to docker hub remote as public repo
```
docker build .
docker tag de7181c8c43d rmc3408/sec9-deploy-1
docker push rmc3408/sec9-deploy-1
```

5. Inside EC2, grab public repo and docker run
```
docker run -d --rm -p 3000:80 rmc3408/sec9-deploy-1
```

6. Add inbound rules to security group. Accept new port
HTTP if port 80
Custom TCP to get port 3000.

7. To update code again, build and push locally and docker pull and run on SSH


# DOCKER-COMPOSE


# DOCKERFILE
