pipeline {
  agent {
     node {
        label 'ec2 '
       customWorkspace "~/workspace/${JOB_NAME}/${BUILD_NUMBER}"
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
    stage('Build') {
      steps {
        sh 'mkdir --parents ./output/build'
        sh 'yarn run build'
        sh 'mv ./dist/* ./output/build/'
        sh 'rimraf node_modules'
        sh 'yarn --production'
        sh 'mv ./node_modules ./output/build/node_modules'
        sh 'zip -r ./output/artifacts/dist ./output/build/*'
      }
    }
  }
    post {
        always {
            archiveArtifacts artifacts: './output/artifacts/dist.zip', fingerprint: true
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/cobertura-coverage.xml'])
        }
    }
}
