pipeline {
    agent any
    tools {
        nodejs '19.6.0'
    }
    stages {
        stage('Petición de datos') {
            steps {
                script {
                    env.EJECUTOR = input message: 'Nombre ejecutor',
                             parameters: [string(defaultValue: '',
                                          description: '',
                                          name: 'Ejecutor')]
                    env.MOTIVO = input message: 'Motivo de la ejecucion',
                             parameters: [string(defaultValue: '',
                                          description: '',
                                          name: 'Motivo')]
                    env.CORREO = input message: 'Correo para la notificación',
                             parameters: [string(defaultValue: '',
                                          description: '',
                                          name: 'correo')]
                }
            }
        }
        stage('Node install') {
            steps {
                script {
                    env.R_INSTALL = sh(script:'npm install -D', returnStatus: true)
                }
            }
        }
        stage('Linter') {
            steps {
                script {
                    env.R_LINTER = sh(script:'npm run lint', returnStatus: true)
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    env.R_TEST = sh(script:'npm run test', returnStatus: true)
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    env.R_BUILD = sh(script:'npm run build', returnStatus: true)
                }
            }
        }
        stage('Update_Readme') {
            steps {
                script {
                    env.R_README = sh(script:"node ./jenkinsScripts/UpdateReadme.js ${env.R_TEST}", returnStatus: true)
                }
            }
        }
        stage('Push_Changes') {
            steps {
                script {
                    env.R_PUSH = sh(script:"sh ./jenkinsScripts/PushChanges.sh ${env.EJECUTOR} ${env.MOTIVO}", returnStatus: true)
                }
            }
        }
    }
}
