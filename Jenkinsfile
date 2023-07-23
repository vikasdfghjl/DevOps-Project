pipeline {
     
     agent any
     environment {
        DOCKERHUB_CREDS = 'docker-creds'
        DOCKERHUB_USERNAME = credentials('DOCKERHUB_USERNAME') // Jenkins credential ID for DockerHub username
        DOCKERHUB_PASSWORD = credentials('DOCKERHUB_PASSWORD') // Jenkins credential ID for DockerHub password
        DOCKER_IMAGE_NAME = 'vikasdfghjl/todo_app'
    }
       
      tools{
        dockerTool 'Docker'
        nodejs 'Node-18.16.1' 
     }        
        stages {
            stage("build"){
                steps{
                    echo 'Executing npm...'
                    sh 'npm install'                                       
                    
                }
            }
        

            stage("test"){
                steps{
                    echo 'testing the application...'                    
                }
            }

            stage("deploy"){
                steps{
                    echo 'deploying the application...'
                    
                }
            }

            stage("docker build and Push"){
                steps{
                script{
                    // this will automatically login into docker
                    docker.withRegistry([url: 'https://index.docker.io/v1/', credentialId: DOCKERHUB_CREDS]) {

                        sh "docker build -t ${DOCKER_IMAGE_NAME} ."

                        sh "docker push ${DOCKER_IMAGE_NAME}"
                    }
                }
              }
            }
            
        }     
}