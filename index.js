import axios from 'axios';
import * as dotenv from 'dotenv'
import twilio from 'twilio'

const accountSid = process.env.ACCOUNT_SID; 
const authToken = process.env.AUTH_TOKEN; 
const client = new twilio(accountSid, authToken); 

export async function getHTML(url) {
  try {
      const { data: html, error } = await axios.get(url);
      return html;
  } catch (err) {
      console.log(`ERROR: ${err}`);
  }
  return null;
}
dotenv.config()
console.log(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN )
  

const triggerRegex = /ruolo|cattedre/im
const url = 'https://usr.istruzione.lombardia.gov.it/comunicazioni/'
const html = await getHTML(url)

if (triggerRegex.test(html)){
  client.messages 
      .create({ 
         body: 'Your appointment is coming up on July 21 at 3PM', 
         from: 'whatsapp:+14155238886',       
         to: `whatsapp:${SANDBOX_NUMBER}`
       }) 
      .then(message => console.log(message.sid)) 
      .done();
}




 
