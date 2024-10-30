from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)

# Create the database
@app.before_first_request
def create_tables():
    db.create_all()

# Sign up route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data['username']
    email = data['email']
    password = data['password']

    # Check if user already exists
    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already registered.'}), 400

    # Hash the password and store the user
    new_user = User(username=username, email=email, password=generate_password_hash(password))
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully!'}), 201

# Login route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        return jsonify({'message': 'Login successful!'}), 200
    return jsonify({'message': 'Invalid email or password.'}), 401

if __name__ == '__main__':
    app.run(debug=True)
