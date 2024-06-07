pipeline {
    agent any

    tools {
        nodejs 'nodejs-21'
    }

    stage('Install Dependencies') {
        steps {
            sh 'echo "Installing dependencies"'
            sh 'npm install'
        }
    }

    stages {
        stage('Unit Test') {
            steps {
                sh 'echo "Running unit tests"'
                sh 'npm run test'
            }
        }
    }
}