# Villagr Application Back End Production Test

from dotenv import load_dotenv
load_dotenv()
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin
import os

# Init app:
# app = Flask(__name__)
app = Flask(__name__,static_folder='../build',static_url_path='/')

# Enable CORS:
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# database config:
db_password = os.environ.get('PGPASSWORD')
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://postgres:{db_password}@localhost:5432/villagr_data'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# database init
db = SQLAlchemy(app)

# init MA
ma = Marshmallow(app)

class Villagr(db.Model):
    __tablename__ = 'villagr_geodata'
    id_ = db.Column(db.Integer,primary_key=True)
    business_name = db.Column(db.Text,nullable=False)
    street_address = db.Column(db.Text,nullable=False)
    city = db.Column(db.Text,nullable=False)
    state = db.Column(db.Text,nullable=False)
    zip_code_first5 = db.Column(db.Text,nullable=False)
    loan_amount = db.Column(db.Float,nullable=False)
    # full_address = db.Column(db.Text,nullable=False)
    loan_amount = db.Column(db.Float,nullable=False)
    loan_size_rank_by_state = db.Column(db.Float,nullable=False)
    zipcode_urgency = db.Column(db.Text,nullable=False)
    type_urgency = db.Column(db.Text,nullable=False)
    city_urgency = db.Column(db.Text,nullable=False)
    loan_size_urgency = db.Column(db.Text,nullable=False)
    lat = db.Column(db.Float,nullable=False)
    lng = db.Column(db.Float,nullable=False)
    # lat_long = db.Column(lat_long1,nullable=False)

    def __init__(self,id_,business_name,street_address,city,state,zip_code_first5,loan_amount,loan_size_rank_by_state,zipcode_urgency,type_urgency,city_urgency,loan_size_urgency,lat_long):
        self.id_ = id_
        self.business_name = business_name
        self.street_address = street_address
        self.city = city
        self.state = state
        self.zip_code_first5 = zip_code_first5
        self.loan_amount = loan_amount
        self.loan_size_rank_by_state = loan_size_rank_by_state
        self.zipcode_urgency = zipcode_urgency
        self.type_urgency = type_urgency
        self.city_urgency = city_urgency
        self.loan_size_urgency = loan_size_urgency
        self.lat = lat
        self.lng = lng
        

# Villagr Database Schema:
class VillagrSchema(ma.Schema):
    class Meta:
        fields = ('id_','business_name','street_address','city','state','zip_code_first5','loan_amount','full_address','loan_size_rank_by_state','zipcode_urgency','type_urgency','city_urgency','loan_size_urgency','lat','lng')

# Concerns to be separated at this boundary between Database objects and routes:

# Init Schema
villagr_schema = VillagrSchema()
villagrs_schema = VillagrSchema(many=True)


# Routes:
# retrieve business info by different filters and categories:
# get all businesses: Apply page and limit filters here:

# include homepage front URL:
@app.errorhandler(404)
def _not_found(e):
    return app.send_static_file('index.html')

# include homepage front URL:
@app.route('/')
def index():
    return app.send_static_file('index.html')

# Option of all items from database:
@app.route('/api',methods=['GET'])
def get_all():
    all_businesses = Villagr.query.all()
    result = villagrs_schema.dump(all_businesses)
    return jsonify(result)

# Inital amount populated at homepage:
@app.route('/api/limit-view',methods=['GET'])
def get_all_limit():
    all_businesses = Villagr.query.limit(25000).all()
    # all_businesses = Villagr.query.order_by(Villagr.id_).limit(1000).all()
    result = villagrs_schema.dump(all_businesses)
    return jsonify(result)

# Pagination Test:
@app.route('/api/page/<int:page>',methods=['GET'])
def get_all_paged(page):
    page=1
    per_page=10
    # page1 = Villagr.query.order_by(Villagr.id_).paginate(page=page,per_page=per_page,error_out=True)
    page1 = Villagr.query.paginate(page=page,per_page=per_page,error_out=True)
    result = villagrs_schema.dump(page1.items)
    return jsonify(result)

# Angle bracket route parameters must match DB schema column names:
# get single business by primary key with get method.
@app.route('/api/<id>',methods=['GET'])
def get_business(id_):
    # business = Villagr.query.get(id_)
    business = Villagr.query.get_or_404(id_)
    # result = villagrs_schema.dump(all_businesses)
    return villagr_schema.jsonify(business)

# get all businesses by state:
# Dropdown menu at Mapview
@app.route('/api/state/<state>',methods=['GET'])
def get_all_state(state):
    state_filter = Villagr.query.filter_by(state=state).all()
    return villagrs_schema.jsonify(state_filter)
    # result = villagrs_schema.dump(state)
    # return jsonify(result)

# get all businesses by city:
# Dropdown menu at mapview
@app.route('/api/city/<city>',methods=['GET'])
def get_all_city(zip_code_first5):
    city_filter = Villagr.query.filter_by(city=city).all()
    return villagrs_schema.jsonify(city_filter)

# get all businesses by zip:
@app.route('/api/zip/<zip_code_first5>',methods=['GET'])
def get_all_zip(zip_code_first5):
    zip_filter = Villagr.query.filter_by(zip_code_first5=zip_code_first5).all()
    return villagrs_schema.jsonify(zip_filter)

# Could populate new page based on JS profile src component:
# get business by name:
@app.route('/api/name/<business_name>',methods=['GET'])
def get_by_name(business_name):
    name_filter = Villagr.query.filter_by(business_name=business_name).first_or_404()
    return villagrs_schema.jsonify(name_filter)

# run server: Debugger is active for both dev and production.
if __name__ == '__main__':
    app.run(debug=False)
