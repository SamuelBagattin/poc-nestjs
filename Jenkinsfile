pipeline {
  agent {
    docker {
      image 'node'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm -g install yarn'
        sh 'yarn install'
        sh 'yarn run build'
      }
    }

  }
}