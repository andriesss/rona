import * as AWS from 'aws-sdk';

export class Key {
    constructor(
        private readonly bucket: string,
        private readonly s3Client: AWS.S3,
    ) {
    }

    async listTemporaryExposureKeys(continuationToken: string | undefined = undefined): Promise<any> {
        const opts: AWS.S3.Types.ListObjectsV2Request = {
            Bucket: this.bucket,
            ContinuationToken: continuationToken,
            Prefix: 'tek/',
        };

        const data = await this.s3Client.listObjectsV2(opts).promise();
        if (!data.Contents) {
            return[];
        }

        return {
            keys: data?.Contents.map(object => object.Key!.split('/').pop()),
            continuationToken: data.NextContinuationToken,
        }
    }

    async storeTek(tek: string, tpk: string): Promise<any> {
        return Promise.all([
            this.storeFileInS3(`tek/${tek}`, tpk),
            this.storeFileInS3(`tpk/${tpk}`, tek),
        ])
    }

    private async storeFileInS3(filename: string, content: string): Promise<any> {
        const putObjectRequest = {
            Bucket: this.bucket,
            Key: filename,
            Body: content,
        }

        return this.s3Client.putObject(putObjectRequest).promise();
    }
}
