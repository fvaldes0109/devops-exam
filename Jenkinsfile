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
    }
}