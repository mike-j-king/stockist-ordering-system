class Item < ApplicationRecord
  has_many :orders, through: :orders
end
