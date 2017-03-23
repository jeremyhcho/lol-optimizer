export const ActualPlayerHeaders = [
  { name: 'ID', fixedPos: true, width: 50 },
  { name: 'Name', fixedPos: true },
  { name: 'Position', fixedPos: true },
  { name: 'Team', fixedPos: true, width: 50 },
  { name: 'Kills', padding: true },
  { name: 'Deaths' },
  { name: 'Assists' },
  { name: 'Creep Score' },
  { name: '10+ K/A' },
  { name: '3K' },
  { name: '4K' },
  { name: '5K' }
]

export const ActualPlayerCols = [
  { key: 'remote_id', fixedPos: true, width: 50 },
  { key: 'name', fixedPos: true },
  { key: 'position', fixedPos: true, defaultVal: 'N/A' },
  { key: 'team', fixedPos: true, width: 50 },
  { key: 'stats.kills', defaultVal: 0, padding: true },
  { key: 'stats.deaths', defaultVal: 0 },
  { key: 'stats.assists', defaultVal: 0 },
  { key: 'stats.cs', defaultVal: 0 },
  { key: 'stats.ten_ka', defaultVal: 0 },
  { key: 'stats.triple_kills', defaultVal: 0 },
  { key: 'stats.quad_kills', defaultVal: 0 },
  { key: 'stats.penta_kills', defaultVal: 0 }
]

export const PredictedPlayerHeaders = [
  { name: 'ID', fixedPos: true, width: 50 },
  { name: 'Name', fixedPos: true },
  { name: 'Position', fixedPos: true },
  { name: 'Team', fixedPos: true, width: 50 },
  { name: 'Kills', padding: true },
  { name: 'Deaths' },
  { name: 'Assists' },
  { name: 'Creep Score' },
  { name: '10+ K/A' },
  { name: '3K' },
  { name: '4K' },
  { name: '5K' }
]

export const PredictedPlayerCols = [
  { key: 'remote_id', fixedPos: true, width: 50 },
  { key: 'name', fixedPos: true },
  { key: 'position', fixedPos: true, defaultVal: 'N/A' },
  { key: 'team', fixedPos: true, width: 50 },
  { key: 'prediction.kills', defaultVal: 0, padding: true },
  { key: 'prediction.deaths', defaultVal: 0 },
  { key: 'prediction.assists', defaultVal: 0 },
  { key: 'prediction.cs', defaultVal: 0 },
  { key: 'prediction.ten_ka', defaultVal: 0 },
  { key: 'prediction.triple_kills', defaultVal: 0 },
  { key: 'prediction.quad_kills', defaultVal: 0 },
  { key: 'prediction.penta_kills', defaultVal: 0 }
]

export const ComparePlayerHeaders = [
  { name: 'ID', fixedPos: true, width: 50 },
  { name: 'Name', fixedPos: true },
  { name: 'Position', fixedPos: true },
  { name: 'Team', fixedPos: true, width: 50 },
  { name: 'Kills', padding: true },
  { name: 'Deaths' },
  { name: 'Assists' },
  { name: 'Creep Score' },
  { name: '10+ K/A' },
  { name: '3K' },
  { name: '4K' },
  { name: '5K' },
]

export const ComparePlayerCols = [
  { key: 'remote_id', fixedPos: true, width: 50 },
  { key: 'name', fixedPos: true },
  { key: 'position', fixedPos: true, defaultVal: 'N/A' },
  { key: 'team', fixedPos: true, width: 50 },
  {
    key: 'stats.kills|prediction.kills',
    defaultVal: 0,
    padding: true,
    innerHTML: 'stats.kills | <span class="predicted">prediction.kills</span>'
  },
  {
    key: 'stats.deaths|prediction.deaths',
    defaultVal: 0,
    innerHTML: 'stats.deaths | <span class="predicted">prediction.deaths</span>'
  },
  {
    key: 'stats.assists|prediction.assists',
    defaultVal: 0,
    innerHTML: 'stats.assists | <span class="predicted">prediction.assists</span>'
  },
  {
    key: 'stats.cs|prediction.cs',
    defaultVal: 0,
    innerHTML: 'stats.cs | <span class="predicted">prediction.cs</span>'
  },
  {
    key: 'stats.ten_ka|prediction.ten_ka',
    defaultVal: 0,
    innerHTML: 'stats.ten_ka | <span class="predicted">prediction.ten_ka</span>'
  },
  {
    key: 'stats.triple_kills|prediction.triple_kills',
    defaultVal: 0,
    innerHTML: 'stats.triple_kills | <span class="predicted">prediction.triple_kills</span>'
  },
  {
    key: 'stats.quad_kills|prediction.quad_kills',
    defaultVal: 0,
    innerHTML: 'stats.quad_kills | <span class="predicted">prediction.quad_kills</span>'
  },
  {
    key: 'stats.penta_kills|prediction.penta_kills',
    defaultVal: 0,
    innerHTML: 'stats.penta_kills | <span class="predicted">prediction.penta_kills</span>'
  }
]

export const ActualTeamHeaders = [
  { name: 'ID', fixedPos: true, width: 50 },
  { name: 'Name', fixedPos: true, width: 115 },
  { name: 'Position', fixedPos: true },
  { name: 'Wins', padding: true },
  { name: 'Losses' },
  { name: 'First Bloods', width: 100 },
  { name: 'Dragons' },
  { name: 'Barons' },
  { name: 'Towers' },
  { name: '< 30 Min' }
]

export const ActualTeamCols = [
  { key: 'remote_id', fixedPos: true, width: 50 },
  { key: 'name', fixedPos: true, width: 115 },
  { key: 'position', fixedPos: true, defaultVal: 'N/A' },
  { key: 'stats.wins', defaultVal: 0, padding: true },
  { key: 'stats.losses', defaultVal: 0 },
  { key: 'stats.first_bloods', defaultVal: 0, width: 100 },
  { key: 'stats.dragon_kills', defaultVal: 0 },
  { key: 'stats.baron_kills', defaultVal: 0 },
  { key: 'stats.towers_destroyed', defaultVal: 0 },
  { key: 'stats.win_in_30_mins', defaultVal: 0 }
]

export const PredictedTeamHeaders = [
  { name: 'ID', fixedPos: true, width: 50 },
  { name: 'Name', fixedPos: true, width: 115 },
  { name: 'Position', fixedPos: true },
  { name: 'Wins', padding: true },
  { name: 'Losses' },
  { name: 'First Bloods', width: 100 },
  { name: 'Dragons' },
  { name: 'Barons' },
  { name: 'Towers' },
  { name: '< 30 Min' }
]

export const PredictedTeamCols = [
  { key: 'remote_id', fixedPos: true, width: 50 },
  { key: 'name', fixedPos: true, width: 115 },
  { key: 'position', fixedPos: true, defaultVal: 'N/A' },
  { key: 'prediction.wins', defaultVal: 0, padding: true },
  { key: 'prediction.losses', defaultVal: 0 },
  { key: 'prediction.first_bloods', defaultVal: 0, width: 100 },
  { key: 'prediction.dragon_kills', defaultVal: 0 },
  { key: 'prediction.baron_kills', defaultVal: 0 },
  { key: 'prediction.towers_destroyed', defaultVal: 0 },
  { key: 'prediction.win_in_30_mins', defaultVal: 0 }
]

export const CompareTeamHeaders = [
  { name: 'ID', fixedPos: true, width: 50 },
  { name: 'Name', fixedPos: true, width: 115 },
  { name: 'Position', fixedPos: true },
  { name: 'Wins', padding: true },
  { name: 'Losses' },
  { name: 'First Bloods', width: 100 },
  { name: 'Dragons' },
  { name: 'Barons' },
  { name: 'Towers' },
  { name: '< 30 Min' }
]

export const CompareTeamCols = [
  { key: 'remote_id', fixedPos: true, width: 50 },
  { key: 'name', fixedPos: true, width: 115 },
  { key: 'position', fixedPos: true, defaultVal: 'N/A' },
  {
    key: 'stats.wins|prediction.wins',
    defaultVal: 0,
    padding: true,
    innerHTML: 'stats.wins | <span class="predicted">prediction.wins</span>'
  },
  {
    key: 'stats.losses|prediction.losses',
    defaultVal: 0,
    innerHTML: 'stats.losses | <span class="predicted">prediction.losses</span>'
  },
  {
    key: 'stats.first_bloods|prediction.first_bloods',
    defaultVal: 0,
    width: 100,
    innerHTML: 'stats.first_bloods | <span class="predicted">prediction.first_bloods</span>'
  },
  {
    key: 'stats.dragon_kills|prediction.dragon_kills',
    defaultVal: 0,
    innerHTML: 'stats.dragon_kills | <span class="predicted">prediction.dragon_kills</span>'
  },
  {
    key: 'stats.baron_kills|prediction.baron_kills',
    defaultVal: 0,
    innerHTML: 'stats.baron_kills | <span class="predicted">prediction.baron_kills</span>'
  },
  {
    key: 'stats.towers_destroyed|prediction.towers_destroyed',
    defaultVal: 0,
    innerHTML: 'stats.towers_destroyed | <span class="predicted">prediction.towers_destroyed</span>'
  },
  {
    key: 'stats.win_in_30_mins|prediction.win_in_30_mins',
    defaultVal: 0,
    innerHTML: 'stats.win_in_30_mins | <span class="predicted">prediction.win_in_30_mins</span>'
  }
]