# from flask import Flask, request, jsonify
# import requests

# app = Flask(__name__)

# cart = []

# @app.route('/add-to-cart', methods=['POST'])
# def add_to_cart():
#     product_id = request.form['product_id']
#     quantity = request.form['quantity']
#     cart.append({'product_id': product_id, 'quantity': quantity})
#     update_total()
#     return jsonify({'message': 'Produto adicionado ao carrinho com sucesso'}), 200

# def update_total():
#     total = 0
#     for item in cart:
#         product_info = requests.get(f'https://api.example.com/products/{item["product_id"]}').json()
#         total += product_info['price'] * item['quantity']
#     # Substitua este print por uma chamada de API para atualizar o valor total no servidor
#     print(f'O valor total do carrinho é: {total}')

# if __name__ == '__main__':
#     app.run(debug=True)






# import hashlib
# import base64
# from flask import Flask, request, jsonify
# from requests import Request, Session

# app = Flask(__name__)

# def hash_dynamic_key(dynamic_key):
#     sha256 = hashlib.sha256()
#     sha256.update(dynamic_key.encode())
#     hash_dynamic_key = sha256.hexdigest()
#     return hash_dynamic_key

# def calculate_mac(transaction_id, ephemeral_key, client_identifier, dynamic_key):
#     mac_string = f"{transaction_id};{ephemeral_key};{client_identifier}"
#     mac = hashlib.sha256(mac_string.encode()).hexdigest()
#     mac_with_key = hashlib.sha256(f"{mac}{dynamic_key}".encode()).hexdigest()
#     return mac_with_key

# def validate_mac(transaction_id, ephemeral_key, client_identifier, mac, dynamic_key):
#     return calculate_mac(transaction_id, ephemeral_key, client_identifier, dynamic_key) == mac

# def make_payment(pix_key, amount, description):
#     endpoint = "https://pix-api.example.com/api/v1/pix"
#     transaction_id = base64.b64encode(hashlib.sha256(description.encode()).digest()).decode()
#     mac = calculate_mac(transaction_id, "random ephemeral key", "client identifier", hash_dynamic_key("dynamic key"))

#     payload = {
#         "transaction_id": transaction_id,
#         "pix_key": pix_key,
#         "amount": amount,
#         "description": description,
#         "mac": mac,
#     }

#     response = requests.post(endpoint, json=payload)
#     return response.json()

# @app.route('/api/v1/pix', methods=['POST'])
# def create_pix():
#     pix_key = request.json['pix_key']
#     amount = request.json['pix_key']


from requests.auth import HTTPSignatureAuth

url = "https://pix-api.example.com/api/v1/pix"
headers = {"content-type": "application/json"}
data = {"pixKey": "00020126580014br.gov.bcb.pix0136a629-2a62-4f77-985b-305983f3c7e3.2544402628817372599465731965.490113", "value": 250.99, "description": "Descrição do pagamento", "expiresAt": "2023-05-02T17:32:07.602Z"}
