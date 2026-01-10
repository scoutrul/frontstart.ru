#!/usr/bin/env node
import { postRandomTopic, postTopicById } from './posting.js';

const command = process.argv[2];
const topicId = process.argv[3];

async function main() {
  try {
    if (command === 'random') {
      console.log('Posting random topic...');
      const result = await postRandomTopic();
      console.log(JSON.stringify(result, null, 2));
      process.exit(result.success ? 0 : 1);
    } else if (command === 'topic' && topicId) {
      console.log(`Posting topic: ${topicId}...`);
      const result = await postTopicById(topicId);
      console.log(JSON.stringify(result, null, 2));
      process.exit(result.success ? 0 : 1);
    } else {
      console.error('Usage:');
      console.error('  npm run post:random');
      console.error('  npm run post:topic <topic-id>');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
