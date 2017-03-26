export const TeamConstants = {
  FETCH_TEAM: 'FETCH_TEAM',
  RECEIVE_TEAM: 'RECEIVE_TEAM'
}

export const fetchTeam = (teamId, params = {}) => ({
  type: TeamConstants.FETCH_TEAM,
  teamId,
  params
})

export const receiveTeam = (team) => ({
  type: TeamConstants.RECEIVE_TEAM,
  team
})