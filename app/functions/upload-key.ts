import {createUploadKeyHandler} from '../providers/create-upload-key-handler';

export async function handler(event) {
    return createUploadKeyHandler().handler(event);
}
