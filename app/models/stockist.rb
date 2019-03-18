class Stockist < ApplicationRecord
  has_many :orders, through: :orders
end
