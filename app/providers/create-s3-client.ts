import * as AWS from 'aws-sdk';

let instance: AWS.S3|null = null;

export function createS3Client(): AWS.S3 {
    if (instance !== null) {
        return instance;
    }

    const config: AWS.S3.ClientConfiguration = {
        s3ForcePathStyle: true,
        region: 'eu-central-1',
        httpOptions: {
            connectTimeout: 500,
        }
    };

    if (process.env.IS_OFFLINE) {
        config.accessKeyId = 'S3RVER';
        config.secretAccessKey = 'S3RVER';

        config.s3BucketEndpoint = false;
        config.endpoint = 'http://localhost:8000';
    }

    instance = new AWS.S3(config);
    return instance;
}
