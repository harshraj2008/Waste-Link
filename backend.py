# Import necessary libraries
import openai
from flask import Flask, request, jsonify

app = Flask(__name__)

# Set up your OpenAI API key
openai.api_key = 'your_openai_api_key'

# Endpoint to handle chatbot input
@app.route('/api/chat', methods=['POST'])
def chat():
    user_input = request.json.get('user_input')
    
    # Define the prompt for waste estimation based on production input
    prompt = f"""
    The user provided the following production data: '{user_input}'.
    Based on this, provide an estimation of:
    1. The type of waste that would likely be produced.
    2. Approximate quantity (if possible).
    3. Any suggestions for managing or recycling this waste type.
    """
    
    # Call OpenAI's GPT-4 model
    try:
        response = openai.Completion.create(
            model="gpt-4",
            prompt=prompt,
            max_tokens=150,
            temperature=0.7
        )
        
        # Get the response text
        ai_response = response['choices'][0]['text'].strip()
        
        # Return the response as JSON
        return jsonify({'response': ai_response})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
