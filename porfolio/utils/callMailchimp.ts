'use server'
import axios from "axios"
export const fetchMailchimp = async (contactForm: contactForm, res) => {
    try {
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
        const API_KEY = process.env.MAILCHIMP_API_KEY
        const DATACENTER = process.env.MAILCHIMP_API_SERVER

        const data = {
            email_address: contactForm.get('email'),
            merge_fields: {
                FNAME: contactForm.get('first'),
                LNAME: contactForm.get('last'),
                COMMENT: contactForm.get('comment'),
                PHONE: contactForm.get('phone')
               },
            status: "subscribed",
        }


        const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

        const options = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `api_key ${API_KEY}`
            }
        }


        const response =  await axios.post(url, data, options)
        if (response.status >= 400) {
            return res = "error"
          }
      
          return res = "success"
    }
    catch (error) {
        console.log(error)
    }
}