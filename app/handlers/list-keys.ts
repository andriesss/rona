import {Key} from '../models/key';
import {APIGatewayEvent} from 'aws-lambda';

export class ListKeys {
    constructor(
        private readonly keyModel: Key
    ) {}

    handler = async (event: APIGatewayEvent) => {
        console.log(event);
        const list = await this.keyModel.listTemporaryExposureKeys(event.queryStringParameters?.continuationToken);

        return {
            statusCode: 200,
            body: JSON.stringify(list)
        };
    }
}
