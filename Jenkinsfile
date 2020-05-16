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
    stage('Package') {
      steps {
       sh 'zip -r dist dist/* node_modules' 
      }
    }
  }
    post {
        always {
            archiveArtifacts artifacts: 'dist.zip', fingerprint: true
        }
    }
}
