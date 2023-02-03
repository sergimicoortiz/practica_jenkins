pipeline {
    agent any
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
                echo "${env.EJECUTOR}"
                echo "${env.MOTIVO}"
                echo "${env.CORREO}"
            }
        }
    }
}
