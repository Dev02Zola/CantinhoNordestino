from server.instance import server

server.run()


#Desenvolvido pela Consultoria Técnica da Efí

import requests
import base64

credentials = {
  "client_id": "YOUR-CLIENT-ID",
  "client_secret": "YOUR-CLIENT-SECRET",
}

certificado = './certificado.pem'  # A variável certificado é o diretório em que seu certificado em formato .pem deve ser inserido

auth = base64.b64encode(
  (f"{credentials['client_id']}:{credentials['client_secret']}"
   ).encode()).decode()

url = "https://pix.api.efipay.com.br/oauth/token"  #Para ambiente de Desenvolvimento

payload="{\r\n    \"grant_type\": \"client_credentials\"\r\n}"
headers = {
  'Authorization': f"Basic {auth}",
  'Content-Type': 'application/json'
}

response = requests.request("POST",
                          url,
                          headers=headers,
                          data=payload,
                          cert=certificado)

print(response.text)