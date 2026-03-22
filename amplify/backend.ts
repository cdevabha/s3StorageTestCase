import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

import { storage, firstBucket, secondBucket } from './storage/resource';
import { RemovalPolicy } from 'aws-cdk-lib';

const backend = defineBackend({
  auth,
  data,
  storage,
  firstBucket,
  secondBucket
});

backend.firstBucket.resources.bucket.applyRemovalPolicy(RemovalPolicy.RETAIN);