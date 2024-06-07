pipeline {
    agent any

    tools {
        go 'go-1.22'
        nodejs 'nodejs-21'
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