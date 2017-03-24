export const ActualPlayerHeaders = [
  { name: 'ID', key: 'remote_id', numeric: 1, fixedPos: true, width: 50 },
  { name: 'Name', key: 'name', numeric: 0, fixedPos: true },
  { name: 'Position', key: 'position', numeric: 0, fixedPos: true },
  { name: 'Team', key: 'team', numeric: 0, fixedPos: true, width: 50 },
  { name: 'Kills', key: 'stats.kills', numeric: 1, padding: true },
  { name: 'Deaths', key: 'stats.deaths', numeric: 1 },
  { name: 'Assists', key: 'stats.assists', numeric: 1 },
  { name: 'Creep Score', key: 'stats.cs', numeric: 1 },
  { name: '10+ K/A', key: 'stats.ten_ka', numeric: 1 },
  { name: '3K', key: 'stats.triple_kills', numeric: 1 },
  { name: '4K', key: 'stats.quad_kills', numeric: 1 },
  { name: '5K', key: 'stats.penta_kills', numeric: 1 }
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
  { name: 'ID', key: 'remote_id', numeric: 1, fixedPos: true, width: 50 },
  { name: 'Name', key: 'name', numeric: 0, fixedPos: true },
  { name: 'Position', key: 'position', numeric: 0, fixedPos: true },
  { name: 'Team', key: 'team', numeric: 0, fixedPos: true, width: 50 },
  { name: 'Kills', key: 'prediction.kills', numeric: 1, padding: true },
  { name: 'Deaths', key: 'prediction.deaths', numeric: 1 },
  { name: 'Assists', key: 'prediction.assists', numeric: 1 },
  { name: 'Creep Score', key: 'prediction.cs', numeric: 1 },
  { name: '10+ K/A', key: 'prediction.ten_ka', numeric: 1 },
  { name: '3K', key: 'prediction.triple_kills', numeric: 1 },
  { name: '4K', key: 'prediction.quad_kills', numeric: 1 },
  { name: '5K', key: 'prediction.penta_kills', numeric: 1 }
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
  { name: 'ID', key: 'remote_id', numeric: 1, fixedPos: true, width: 50 },
  { name: 'Name', key: 'name', numeric: 0, fixedPos: true },
  { name: 'Position', key: 'position', numeric: 0, fixedPos: true },
  { name: 'Team', key: 'team', numeric: 0, fixedPos: true, width: 50 },
  { name: 'Kills', key: 'stats.kills', numeric: 1, padding: true },
  { name: 'Deaths', key: 'stats.deaths', numeric: 1 },
  { name: 'Assists', key: 'stats.assists', numeric: 1 },
  { name: 'Creep Score', key: 'stats.cs', numeric: 1 },
  { name: '10+ K/A', key: 'stats.ten_ka', numeric: 1 },
  { name: '3K', key: 'stats.triple_kills', numeric: 1 },
  { name: '4K', key: 'stats.quad_kills', numeric: 1 },
  { name: '5K', key: 'stats.penta_kills', numeric: 1 }
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
  { name: 'ID', key: 'remote_id', numeric: 1, fixedPos: true, width: 50 },
  { name: 'Name', key: 'name', numeric: 0, fixedPos: true, width: 115 },
  { name: 'Position', key: 'position', numeric: 0, fixedPos: true },
  { name: 'Wins', key: 'stats.wins', numeric: 1, padding: true },
  { name: 'Losses', key: 'stats.losses', numeric: 1 },
  { name: 'First Bloods', key: 'stats.first_bloods', numeric: 1, width: 100 },
  { name: 'Dragons', key: 'stats.dragon_kills', numeric: 1 },
  { name: 'Barons', key: 'stats.baron_kills', numeric: 1 },
  { name: 'Towers', key: 'stats.towers_destroyed', numeric: 1 },
  { name: '< 30 Min', key: 'stats.win_in_30_mins', numeric: 1 }
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
  { name: 'ID', key: 'remote_id', numeric: 1, fixedPos: true, width: 50 },
  { name: 'Name', key: 'name', numeric: 0, fixedPos: true, width: 115 },
  { name: 'Position', key: 'position', numeric: 0, fixedPos: true },
  { name: 'Wins', key: 'prediction.wins', numeric: 1, padding: true },
  { name: 'Losses', key: 'prediction.losses', numeric: 1 },
  { name: 'First Bloods', key: 'prediction.first_bloods', numeric: 1, width: 100 },
  { name: 'Dragons', key: 'prediction.dragon_kills', numeric: 1 },
  { name: 'Barons', key: 'prediction.baron_kills', numeric: 1 },
  { name: 'Towers', key: 'prediction.towers_destroyed', numeric: 1 },
  { name: '< 30 Min', key: 'prediction.win_in_30_mins', numeric: 1 }
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
  { name: 'ID', key: 'remote_id', numeric: 1, fixedPos: true, width: 50 },
  { name: 'Name', key: 'name', numeric: 0, fixedPos: true, width: 115 },
  { name: 'Position', key: 'position', numeric: 0, fixedPos: true },
  { name: 'Wins', key: 'stats.wins', numeric: 1, padding: true },
  { name: 'Losses', key: 'stats.losses', numeric: 1 },
  { name: 'First Bloods', key: 'stats.first_bloods', numeric: 1, width: 100 },
  { name: 'Dragons', key: 'stats.dragon_kills', numeric: 1 },
  { name: 'Barons', key: 'stats.baron_kills', numeric: 1 },
  { name: 'Towers', key: 'stats.towers_destroyed', numeric: 1 },
  { name: '< 30 Min', key: 'stats.win_in_30_mins', numeric: 1 }
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