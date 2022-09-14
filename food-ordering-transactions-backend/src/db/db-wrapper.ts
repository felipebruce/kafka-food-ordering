import mongoose, { HydratedDocument } from 'mongoose';
import { DbWrapperInterface } from '../shared/interfaces/db/db-wrapper.interface';

export class DBWrapper implements DbWrapperInterface {
  private dbUri: string;

  public constructor(dbUri: string) {
    this.dbUri = dbUri;
  }

  async connect(): Promise<void> {
    await mongoose.connect(this.dbUri, { dbName: 'food-order-db' });
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }

  save<T>(hydratedDocument: HydratedDocument<T>): Promise<any> {
    return hydratedDocument.save();
  }
}
