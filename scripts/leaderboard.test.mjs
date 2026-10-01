import test from 'node:test';
import assert from 'node:assert/strict';
import {cleanRows,formatTime,readLeaderboard} from '../public/leaderboard.js';
const config={supabaseUrl:'https://jkvoldzojtbvifbilumm.supabase.co',publishableKey:'sb_publishable_test',leaderboardVersion:'tower-v1'};
test('Malformed response is not mistaken for an empty board',()=>assert.throws(()=>cleanRows({error:'unavailable'})));
test('Invalid heights and ranks are rejected; identity fields never leave normalization',()=>{
  const rows=cleanRows([{rank:2,nickname:'Second',best_height_m:1,user_id:'private',build_time_seconds:null,blocks_used:null},{rank:1,nickname:'<img onerror=alert(1)>',best_height_m:2},{rank:11,nickname:'Outside public top ten',best_height_m:5},{rank:3,nickname:'Bad',best_height_m:Infinity}]);
  assert.equal(rows.length,2);assert.equal(rows[0].rank,1);assert.equal(rows[0].nickname,'<img onerror=alert(1)>');assert.equal(rows[1].seconds,null);assert.equal(rows[1].blocks,null);assert.equal('user_id' in rows[1],false);
});
test('Legacy missing time remains unavailable rather than zero',()=>{assert.equal(formatTime(null),'—');assert.equal(formatTime(61.9),'1:01');});
test('Only public read RPC is called without credentials or authorization',async()=>{
  const rows=await readLeaderboard(config,undefined,async(url,options)=>{
    assert.equal(url,config.supabaseUrl+'/rest/v1/rpc/get_tower_leaderboard');assert.equal(options.credentials,'omit');assert.equal('Authorization' in options.headers,false);assert.deepEqual(JSON.parse(options.body),{p_leaderboard_version:'tower-v1'});
    return new Response('[]',{status:200});
  });assert.deepEqual(rows,[]);
});
test('Rate limit preserves server retry delay and never returns fake scores',async()=>{
  await assert.rejects(()=>readLeaderboard(config,undefined,async()=>new Response('{}',{status:429,headers:{'Retry-After':'900'}})),error=>error.retryAfter===900);
});
