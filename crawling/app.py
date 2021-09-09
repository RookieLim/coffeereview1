from flask import Flask, render_template, jsonify, request
import requests
from pymongo import MongoClient
app = Flask(__name__)

client = MongoClient('localhost', 27017)
#client = MongoClient('mongodb://test:test@localhost', 27017)
db = client.dbsparta

@app.route('/')
def main():
    return render_template('login.html')

# 주문하기(POST) API
@app.route('/login', methods=['POST'])
def login():
    name_receive = request.form['name_give']
    img_url = request.form['img_url_give']
    print(img_url,name_receive)
    doc = {
        'name': name_receive,
        'quantity': img_url,
        }
    db.userinfo.insert_one(doc)
    #로그인 후 사용자 값 서버에 저장하고 화면 새로고침 후 조건문 거쳐서 템플릿 보여주기?
    return render_template('login.html')
    #return jsonify({'msg': '로그인 되었습니다.'})