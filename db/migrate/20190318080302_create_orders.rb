class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.references :stockist, foreign_key: true
      t.decimal :cost
      t.text :delivery_notes

      t.timestamps
    end
  end
end
