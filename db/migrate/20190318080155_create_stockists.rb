class CreateStockists < ActiveRecord::Migration[5.2]
  def change
    create_table :stockists do |t|
      t.text :name
      t.text :notes

      t.timestamps
    end
  end
end
