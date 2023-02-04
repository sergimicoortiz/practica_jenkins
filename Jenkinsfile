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
                sh 'npm install -D'
            }
        }
        stage('Linter') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
