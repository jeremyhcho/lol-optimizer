task :sync_players => [:environment] do
  SyncPlayers.perform
end