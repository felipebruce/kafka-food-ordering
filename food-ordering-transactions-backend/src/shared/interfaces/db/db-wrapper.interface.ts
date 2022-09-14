import { HydratedDocument } from 'mongoose';

export interface DbWrapperInterface {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    save<T>(hydratedDocument: HydratedDocument<T>): Promise<any>;
}
