# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170225074132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "matches", force: :cascade do |t|
    t.integer  "remote_id",    null: false
    t.integer  "blue_team_id", null: false
    t.integer  "red_team_id",  null: false
    t.string   "time",         null: false
    t.integer  "week",         null: false
    t.integer  "winner",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "matches", ["remote_id"], name: "index_matches_on_remote_id", using: :btree
  add_index "matches", ["week"], name: "index_matches_on_week", using: :btree
  add_index "matches", ["winner"], name: "index_matches_on_winner", using: :btree

  create_table "player_stats", force: :cascade do |t|
    t.integer  "player_id",   null: false
    t.integer  "team_id",     null: false
    t.integer  "match_id",    null: false
    t.integer  "game_number", null: false
    t.text     "stats",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "player_stats", ["player_id", "match_id", "game_number"], name: "index_player_stats_on_player_id_and_match_id_and_game_number", unique: true, using: :btree

  create_table "players", force: :cascade do |t|
    t.integer  "remote_id",                  null: false
    t.string   "name",                       null: false
    t.string   "position"
    t.integer  "team_id",                    null: false
    t.boolean  "active",     default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "players", ["position"], name: "index_players_on_position", using: :btree
  add_index "players", ["remote_id"], name: "index_players_on_remote_id", using: :btree
  add_index "players", ["team_id"], name: "index_players_on_team_id", using: :btree

  create_table "players_slates", id: false, force: :cascade do |t|
    t.integer "player_id",   null: false
    t.integer "slate_id",    null: false
    t.string  "game_info"
    t.integer "salary"
    t.string  "team_abbrev"
  end

  add_index "players_slates", ["player_id", "slate_id"], name: "index_players_slates_on_player_id_and_slate_id", unique: true, using: :btree

  create_table "slates", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "start_time"
  end

  create_table "slates_teams", id: false, force: :cascade do |t|
    t.integer "slate_id",    null: false
    t.integer "team_id",     null: false
    t.string  "game_info"
    t.integer "salary"
    t.string  "team_abbrev"
  end

  add_index "slates_teams", ["slate_id", "team_id"], name: "index_slates_teams_on_slate_id_and_team_id", unique: true, using: :btree

  create_table "team_stats", force: :cascade do |t|
    t.integer  "team_id",     null: false
    t.integer  "match_id",    null: false
    t.integer  "game_number", null: false
    t.text     "stats",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "team_stats", ["team_id", "match_id", "game_number"], name: "index_team_stats_on_team_id_and_match_id_and_game_number", unique: true, using: :btree

  create_table "teams", force: :cascade do |t|
    t.integer  "remote_id",                   null: false
    t.string   "league",                      null: false
    t.string   "short_name"
    t.string   "name",                        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "active",     default: false
    t.string   "position",   default: "TEAM"
  end

  add_index "teams", ["league"], name: "index_teams_on_league", using: :btree
  add_index "teams", ["remote_id"], name: "index_teams_on_remote_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string  "email"
    t.string  "password_digest"
    t.boolean "is_admin",        default: false
    t.string  "session_token",                   null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
