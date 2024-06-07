pipeline {
    agent any

    tools {
        nodejs 'nodejs-21'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'echo "Installing dependencies"'
                sh 'npm install'
            }
        }

        stage('Unit Test') {
            steps {
                sh 'echo "Running unit tests"'
                sh 'npm run test'
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                echo 'Building and pushing docker image'
                sh 'docker build -t ttl.sh/fvaldes-devops-exam .'
                sh 'docker push ttl.sh/fvaldes-devops-exam'
            }
        }

        stage('Deploy to Staging (Target)') {
            steps {
                echo 'Deploying to Target'
                withCredentials([sshUserPrivateKey(credentialsId: 'mykey',
                                                    keyFileVariable: 'mykey',
                                                    usernameVariable: 'myuser')]) {
                    
                    script {
                        // Check if there are any running containers
                        def runningContainers = sh(script: "ssh vagrant@192.168.105.3 -i ${mykey} \"docker ps -aq\"", returnStdout: true).trim()
                        
                        if (runningContainers) {
                            // Stop and remove all containers if there are any running
                            sh "ssh vagrant@192.168.105.3 -i ${mykey} \"docker ps -aq | xargs docker stop | xargs docker rm\""
                            echo "Stopped and removed all running containers."
                        } else {
                            echo "No running containers to stop and remove."
                        }
                    }
                    
                    sh "ssh vagrant@192.168.105.3 -i ${mykey} \"docker run -d -p 4444:4444 ttl.sh/fvaldes-devops-exam\""
                }
            }
        }
    }
}