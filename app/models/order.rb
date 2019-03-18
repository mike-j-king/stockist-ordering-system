class Order < ApplicationRecord
  belongs_to :stockist
  has_many :items, through: :items
end
