'use server'
import db from './db'

export const newContact = async (contactForm: contactForm) => {
  const contact = await db.contacts.create({
    data: {
      firstName: contactForm.get('first'),
      lastName: contactForm.get('last'),
      email: contactForm.get('email'),
      phone: contactForm.get('phone'),
      comment: contactForm.get('comment')
    }
  })
  return contact
}
