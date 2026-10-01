// Public read only. No Auth, cookies, identity storage, tickets or score writes.
export function cleanRows(value) {
  if (!Array.isArray(value)) throw new Error('Invalid leaderboard response');
  return value.filter(r => r && Number.isSafeInteger(r.rank) && r.rank > 0 && r.rank <= 10
    && typeof r.nickname === 'string' && Number.isFinite(r.best_height_m) && r.best_height_m > 0)
    .sort((a,b) => a.rank-b.rank).slice(0,10).map(r => ({
      rank:r.rank, nickname:[...r.nickname].slice(0,24).join(''), height:r.best_height_m,
      blocks:Number.isInteger(r.blocks_used)&&r.blocks_used>0?r.blocks_used:null,
      seconds:Number.isFinite(r.build_time_seconds)&&r.build_time_seconds>0?r.build_time_seconds:null
    }));
}
export function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) return '—';
  const whole=Math.floor(seconds);
  return `${Math.floor(whole/60)}:${String(whole%60).padStart(2,'0')}`;
}
export async function readLeaderboard(config, signal, request=fetch) {
  if(config.supabaseUrl!=='https://jkvoldzojtbvifbilumm.supabase.co'
    || !config.publishableKey?.startsWith('sb_publishable_') || config.leaderboardVersion!=='tower-v1') throw new Error('Invalid public configuration');
  const response=await request(config.supabaseUrl+'/rest/v1/rpc/get_tower_leaderboard',{
    method:'POST', credentials:'omit', signal,
    headers:{apikey:config.publishableKey,'Content-Type':'application/json'},
    body:JSON.stringify({p_leaderboard_version:config.leaderboardVersion})
  });
  if(!response.ok) {
    const error=new Error('Leaderboard unavailable');
    error.retryAfter=response.status===429?Math.max(30,Number(response.headers.get('Retry-After'))||60):30;
    throw error;
  }
  return cleanRows(await response.json());
}
