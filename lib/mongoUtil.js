// lib/mongoUtil.js
import { MongoClient, ObjectId as MongoObjectId } from 'mongodb';

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(process.env.MONGODB_URI, {});
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(process.env.MONGODB_URI, {});
  clientPromise = client.connect();
}

export { MongoObjectId, clientPromise };
