from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

# Product Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    description = db.Column(db.String(200))
    price = db.Column(db.Float)
    image = db.Column(db.String(100))
    
    def __init__(self, name, description, price, image):
        self.name = name
        self.description = description
        self.price = price
        self.image = image

# Product Schema
class ProductSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description', 'price', 'image')

product_schema = ProductSchema()
products_schema = ProductSchema(many=True)

# Routes
@app.route('/product', methods=['POST'])
def add_product():
    name = request.json['name']
    description = request.json['description']
    price = request.json['price']
    image = request.json['image']
    
    new_product = Product(name, description, price, image)
    db.session.add(new_product)
    db.session.commit()
    return product_schema.jsonify(new_product)

@app.route('/product', methods=['GET'])
def get_products():
    all_products = Product.query.all()
    result = products_schema.dump(all_products)
    return jsonify(result)

@app.route('/product/<id>', methods=['GET'])
def get_product(id):
    product = Product.query.get(id)
    return product_schema.jsonify(product)

@app.route('/product/<id>', methods=['PUT'])
def update_product(id):
    product = Product.query.get(id)
    
    name = request.json['name']
    description = request.json['description']
    price = request.json['price']
    image = request.json['image']
    
    product.name = name
    product.description = description
    product.price = price
    product.image = image
    
    db.session.commit()
    return product_schema.jsonify(product)

@app.route('/product/<id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get(id)
    db.session.delete(product)
    db.session.commit()
    return product_schema.jsonify(product)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)