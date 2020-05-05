pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'yarn install'
        sh 'yarn run build'
      }
    }

  }
}