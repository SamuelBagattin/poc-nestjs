pipeline {
  agent {
     node {
        label 'ec2'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn install'
        sh 'yarn run build'
      }
    }

  }
}
