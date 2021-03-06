pipeline {
   environment {
        SEM_VER = ''
    }
  agent {
     node {
        label 'ec2 '
       customWorkspace "${JOB_NAME}/${BUILD_NUMBER}"
    }
  }
  stages {
    stage('SemVer'){
      steps {
        script {
         def semver = sh(script: 'dotnet gitversion -showvariable SemVer', returnStdout: true).trim()
          env.SEM_VER = semver
        }
         echo "${env.SEM_VER}"
      }
    }
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
        sh 'mkdir -p ./output/artifacts && zip -r ./output/artifacts/poc.nestjs."${env.SEM_VER}" ./output/build/'
      }
    }
  }
    post {
        always {
            archiveArtifacts artifacts: 'output/artifacts/poc.nestjs."${env.SEM_VER}".zip', fingerprint: true
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/cobertura-coverage.xml'])
        }
    }
}
