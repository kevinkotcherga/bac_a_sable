ActiveRecord::Schema[7.0].define(version: 2022_04_01_092207) do
  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end
