pipeline {
  agent {
     node {
        label 'ec2 '
    }
  }
  stages {
    stage('Install dependencies'){
      steps {
       sh 'yarn'
      }
    }
    stage('Unit test'){
      steps {
       sh 'yarn run test:cov'
      }
    }
    stage('E2E test'){
      steps {
       sh 'yarn run test:e2e'
      }
    }
      stage('Install prod dependencies'){
          steps {
              sh 'rimraf node_modules'
              sh 'yarn --production'
          }
      }
    stage('Build') {
      steps {
        sh 'yarn run build'
        sh 'mv ./dist/* ./output/build/'
        sh 'mv ./node_modules ./output/build/node_modules'
        sh 'zip -r -j ./output/artifacts/dist ./output/build/*'
      }
    }
  }
    post {
        always {
            archiveArtifacts artifacts: 'dist.zip', fingerprint: true
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/cobertura-coverage.xml'])
        }
    }
}
