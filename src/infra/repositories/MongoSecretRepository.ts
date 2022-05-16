import mongoose from 'mongoose';
import { Secret } from '../../domain/models/Secret';
import { UrlId } from '../../domain/models/UrlId';
import { SecretRepository } from '../../services/SecretRepository';

export class MongoSecretRepository implements SecretRepository {
  constructor() {
    if (mongoose.connection.readyState !== 1) {
      mongoose.connect('mongodb://localhost:27017/onetimesecretdb');
    }
  }

  async getSecretByUrlId(urlId: UrlId): Promise<Secret> {
    throw new Error('method not implemented.');
  }
}
