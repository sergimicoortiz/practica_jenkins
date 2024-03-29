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
                    sshagent(credentials: ['1']) {
                        env.R_PUSH = sh(script:"sh ./jenkinsScripts/PushChanges.sh ${env.EJECUTOR} ${env.MOTIVO}", returnStatus: true)
                    }
                    }
            }
        }
        stage('Deploy to Vercel') {
            steps {
                script {
                    if (env.R_INSTALL == '0' && env.R_LINTER == '0' && env.R_TEST == '0' && env.R_BUILD == '0' && env.R_README == '0' && env.R_PUSH == '0') {
                        withCredentials([string(credentialsId: 'VERCEL_TOKEN', variable: 'token'), string(credentialsId: 'VERCEL_PROYECT    ', variable: 'proyect')]) {
                            env.R_DEPLOY = sh(script:"sh ./jenkinsScripts/Vercel.sh ${token} ${proyect}", returnStatus: true)
                        }
                    }
                    else {
                        env.R_DEPLOY = '1'
                    }
                }
            }
        }
        stage('Notificación') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'MAILTRAP', passwordVariable: 'pass', usernameVariable: 'user')]) {
                        env.R_BUILD = sh(script:"node ./jenkinsScripts/Email.js ${user} ${pass} ${env.CORREO} ${env.R_LINTER} ${env.R_TEST} ${env.R_README} ${env.R_DEPLOY}", returnStatus: true)
                    }
                }
            }
        }
    }
}
