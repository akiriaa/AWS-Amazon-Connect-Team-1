import jwt

CONNECT_SECRET = "4YBiUClYL5mMINxlH+K9pPPe7Itq+W4iO3kdjAgxhS0="

payload = {
  'sub': '15fa5871-0412-4c4f-9d8f-ab63d671f2cf',
  'iat': datetime.datetime.utcnow(),
  'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=500),
  'attributes': {"name": "Jane", "memberID": "123456789", "email": "Jane@example.com", "isPremiumUser": "true", "age": "45"}
}

header = {
  'typ': "JWT",
  'alg': 'HS256'
}

encoded_token = jwt.encode((payload), CONNECT_SECRET, algorithm="HS256", headers=header)
});