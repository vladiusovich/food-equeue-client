pipeline {
    agent any

    environment {
        // Docker image name (use your own)
        IMAGE_NAME = "food-equeue/client"
        VERSION = '1.0'
        DOCKER_NAME = "food-equeue-client"
    }

    stages {
        stage('Clone GitHub Repo') {
            steps {
                // Check out the code from GitHub (public repository)
                git branch: 'main', url: 'https://github.com/vladiusovich/food-equeue-client.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${IMAGE_NAME}:${VERSION}.${BUILD_NUMBER} .'
                }
            }
        }

        stage('Save Docker Image to workspace') {
            steps {
                sh 'echo "Cleanup the workspace"'
                sh 'rm -rf .[!.]* *'
                sh 'echo "Save docker img"'
                sh 'mkdir img'
                sh 'docker save --output $WORKSPACE/img/${DOCKER_NAME}.${VERSION}.${BUILD_NUMBER}.tar ${IMAGE_NAME}:${VERSION}.${BUILD_NUMBER}'
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Check if the container is running and stop it
                    sh 'echo "Stop current container"'
                    sh '''
                        if [ $(docker ps -q -f name=${DOCKER_NAME}) ]; then
                            docker stop ${DOCKER_NAME}
                            docker rm ${DOCKER_NAME}
                        fi
                    '''

                    // sh 'docker rm ${DOCKER_NAME}'
                    sh 'echo "Run new build"'
                    sh 'docker run -d -p 4001:80 --name ${DOCKER_NAME} ${IMAGE_NAME}:${VERSION}.${BUILD_NUMBER}'
                }
            }
        }
    }

    // post {
    //     always {
    //         // Clean up the Docker container after the build process
    //         script {
    //             sh 'docker rm -f ${IMAGE_NAME}:${VERSION} || true'
    //             sh 'docker rmi ${IMAGE_NAME}:${VERSION} || true'
    //         }
    //     }
    // }
}
