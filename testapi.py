import requests

# Base URL for your API
BASE_URL = 'http://127.0.0.1:5000'

def test_signup(username, email, password):
    url = f'{BASE_URL}/signup'
    payload = {
        'username': username,
        'email': email,
        'password': password
    }
    response = requests.post(url, json=payload)
    print(f'Signup Response: {response.status_code} - {response.json()}')

def test_login(email, password):
    url = f'{BASE_URL}/login'
    payload = {
        'email': email,
        'password': password
    }
    response = requests.post(url, json=payload)
    print(f'Login Response: {response.status_code} - {response.json()}')

if __name__ == '__main__':
    # Test data
    test_username = 'testuser'
    test_email = 'testuser@example.com'
    test_password = 'password123'

    # Testing signup
    test_signup(test_username, test_email, test_password)

    # Testing login
    test_login(test_email, test_password)
