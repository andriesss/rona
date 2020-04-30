import {createListKeysHandler} from '../providers/create-list-keys-handler';

export async function handler(event) {
    return createListKeysHandler().handler(event);
}
