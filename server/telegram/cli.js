#!/usr/bin/env node
import { postRandomTopic, postTopicById, postDailySchedule, postSingleScheduledTopic } from './posting.js';
import { previewNextPosts, formatPreview } from './scheduler.js';
import { loadState } from '../services/telegram/state.js';
import { getTopicsByMetaCategory } from '../services/topics.js';
import { POSTING_CONFIG } from '../config/posting.js';

const command = process.argv[2];
const arg = process.argv[3];

async function main() {
  try {
    if (command === 'random') {
      console.log('Posting random topic...');
      const result = await postRandomTopic();
      console.log(JSON.stringify(result, null, 2));
      process.exit(result.success ? 0 : 1);
    } else if (command === 'topic' && arg) {
      console.log(`Posting topic: ${arg}...`);
      const result = await postTopicById(arg);
      console.log(JSON.stringify(result, null, 2));
      process.exit(result.success ? 0 : 1);
    } else if (command === 'schedule') {
      console.log('Posting daily schedule (4 posts at once)...');
      const result = await postDailySchedule();
      console.log(JSON.stringify(result, null, 2));
      process.exit(result.success ? 0 : 1);
    } else if (command === 'single') {
      console.log('Posting single scheduled topic...');
      const result = await postSingleScheduledTopic();
      console.log(JSON.stringify(result, null, 2));
      process.exit(result.success ? 0 : 1);
    } else if (command === 'preview') {
      const days = arg ? parseInt(arg, 10) : POSTING_CONFIG.defaultPreviewDays;
      console.log(`Previewing next ${days} days...`);
      
      const state = await loadState();
      const topicsByMeta = getTopicsByMetaCategory();
      const preview = previewNextPosts(state, topicsByMeta, days, POSTING_CONFIG.resetOnEnd);
      
      console.log(formatPreview(preview));
      process.exit(0);
    } else {
      console.error('Usage:');
      console.error('  npm run post:random              # Post random topic');
      console.error('  npm run post:topic <topic-id>    # Post specific topic');
      console.error('  npm run post:schedule            # Post daily schedule (4 posts at once)');
      console.error('  npm run post:single              # Post single scheduled topic (for cron)');
      console.error('  npm run post:preview [days]      # Preview schedule (default: 7 days)');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
