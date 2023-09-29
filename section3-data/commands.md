# Build Image
docker build -t feedback:0.3 .

# Run Container
docker run 
  -p 3000:80                    <!-- externalPort *Your browser, postman* : ContainerPort *to your code* -->
  -env-file ./.env.local        <!--  uses a .ENV file for variables  -->
  -v feedback:/app/feedback     <!--  named volume  -->
  -v /app/node_modules          <!-- anonymous volune -->
  -v $(pwd):/app                <!-- bind mount volume -->
  --name feedback-app           <!-- give your container a name  -->
  feedback:0.3                  <!-- Image name:tag  -->


# list all volumes 
docker volume ls

