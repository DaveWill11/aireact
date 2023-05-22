import axios from 'axios';

// Define some OpenAI API whatnots
const apiURL = 'https://api.openai.com/v1/chat/completions';
const apiKey = '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';
// This will be changed
//var prompt = 'Hello, ChatGPT';
const maxTokens = 2200;

//sendCall(prompt);
// POST call turned into Function
export async function sendCall(prompt1) {
    let payload = "Uh oh";
    return axios.post(apiURL, {
        'model': 'gpt-3.5-turbo',
        'messages': [
            {'role': 'user', 'content': prompt1}
        ],
        max_tokens: maxTokens
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        // This is where the response is spit out
        //console.log(response.data.choice[0].text);
        console.log("Here is the entirety of the response.data:\n" + JSON.stringify(response.data.choices[0].message.content));
        payload = JSON.stringify(response.data.choices[0].message.content);
        return payload;
    }).catch(error => {
        console.log('Error: ', error);
    });
}
