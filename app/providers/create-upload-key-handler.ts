import {UploadKeys} from '../handlers/upload-keys';
import {createKeyModel} from './create-key-model';

let instance: UploadKeys|null = null;

export function createUploadKeyHandler(): UploadKeys {
    if (instance !== null) {
        return instance;
    }

    instance = new UploadKeys(createKeyModel());
    return instance;
}
