import axios from 'axios';

// Define some OpenAI API whatnots
const apiURL = process.env.API_URL;
const apiKey = process.env.API_KEY;
// This will be changed
//var prompt = 'Hello, ChatGPT';
const maxTokens = 2200;

//sendCall(prompt);
// POST call turned into Function
export async function sendCall(prompt1, language) {
    let payload = "Uh oh";
    return axios.post(apiURL, {
        "model": "text-davinci-edit-001",
        "input": prompt1.toString(),
        "instruction": "Translate to " + language.toString(),
        //max_tokens: maxTokens
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        // This is where the response is spit out
        //console.log(response.data.choice[0].text);
        console.log("Here is the entirety of the response.data:\n" + JSON.stringify(response.data.choices[0].text));
        payload = JSON.stringify(response.data.choices[0].text);
        //payload = payload.substring(1, payload.length-3);
        return payload
    }).catch(error => {
        console.log('Error: ', error);
    });
}
