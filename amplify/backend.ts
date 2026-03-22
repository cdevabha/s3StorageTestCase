import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

import { storage, firstBucket, secondBucket } from './storage/resource';
import { RemovalPolicy } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

const backend = defineBackend({
  auth,
  data,
  storage,
  firstBucket,
  secondBucket
});


const s3Bucket = backend.storage.resources.bucket;
const cfnBucket = s3Bucket.node.defaultChild as s3.CfnBucket;


cfnBucket.addPropertyOverride('AutoDeleteObjects', false);

s3Bucket.applyRemovalPolicy(RemovalPolicy.RETAIN);