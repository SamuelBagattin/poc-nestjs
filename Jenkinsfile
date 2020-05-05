pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'chown -R 996:994 "/.npm"'
        sh 'npm -g install yarn'
        sh 'yarn install'
        sh 'yarn run build'
      }
    }

  }
}