pipeline {
  agent {
    docker {
      image 'node:14.1.0-alpine3.10'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'sudo npm cache clean --force'
        sh 'npm -g install yarn'
        sh 'yarn install'
        sh 'yarn run build'
      }
    }

  }
}