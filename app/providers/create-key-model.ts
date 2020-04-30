import {Key} from '../models/key';
import {createS3Client} from './create-s3-client';

let instance: Key|null = null;

export function createKeyModel(): Key {
    if (instance !== null) {
        return instance;
    }

    instance = new Key(
        'rona-local-tek',
        createS3Client(),
    );

    return instance;
}
