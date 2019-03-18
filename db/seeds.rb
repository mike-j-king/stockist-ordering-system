# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.create(name:"Raspberry", price:"4.00")
Item.create(name:"Turmeric", price:"6.50")
Item.create(name:"Ginger", price:"8.50")

Stockist.create(name:"Jims Grocer", notes:"deliveries accepted out back")
Stockist.create(name:"Healthy Joes", notes:"deliver before 5pm")