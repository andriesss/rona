import {ListKeys} from '../handlers/list-keys';
import {createKeyModel} from './create-key-model';

let instance: ListKeys|null = null;

export function createListKeysHandler(): ListKeys {
    if (instance !== null) {
        return instance;
    }

    instance = new ListKeys(createKeyModel());
    return instance;
}
