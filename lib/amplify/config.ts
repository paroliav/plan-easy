import { Amplify } from 'aws-amplify';
import awsExports from './exports';

export function configureAmplify() {
  Amplify.configure(awsExports);
}
