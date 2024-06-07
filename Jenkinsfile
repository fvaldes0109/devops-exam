pipeline {
    agent any

    tools {
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