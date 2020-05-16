pipeline {
  agent {
     node {
        label 'ec2 '
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn'
        sh 'yarn run build'
      }
    }

  }
}
