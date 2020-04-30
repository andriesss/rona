import {Key} from '../models/key';
import {APIGatewayEvent} from 'aws-lambda';

export class UploadKeys {
    constructor(
        private readonly keyModel: Key
    ) {}

    handler = async (event: APIGatewayEvent) => {
        const keys = JSON.parse(event.body!);

        const promises: Promise<any>[] = [];
        keys.forEach(key => {
            promises.push(this.keyModel.storeTek(key[0], key[1]));
        });

        return Promise.all(promises);
    }
}
