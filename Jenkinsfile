pipeline {
     
     agent any
     environment{
        dockerCredentials = 'docker-login'
        dockerImageName = 'vikasdfghjl/todo_app'
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
                    docker.withRegistry('https://index.docker.io/v1/', dockerCredentials) {

                        def dockerImage = docker.build(dockerImageName)

                        dockerImage.push()
                    }
                }
              }
            }
            
        }     
}