'use client'
import {fetchMailchimp} from "@/utils/callMailchimp"
import axios from "axios"

const ContactForm = () => {
    return (
      <form className="max-w-sm rounded border-secondary overflow-hidden shadow-lg bg-primary pt-10" action={fetchMailchimp}>
        <div className="px-6 pt-4 pb-2">
          <div className="email block flex items-center mb-4">
            <label htmlFor="frm-email" className="m-2">Email</label>
            <input className="box-border border-2 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="block phone flex items-center">
        <label htmlFor="frm-phone" className="m-1">Phone</label>
        <input
            className="box-border border-2 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
        />
      </div>
      <div className="name block flex items-center mt-4 mb-4">
        <div className="mr-2">
          <label htmlFor="frm-first" className="m-1 ">First Name</label>
          <input
          className="box-border border-2 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label htmlFor="frm-last">Last Name</label>
          <input
          className="box-border border-2  block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      
      <div className="comment block">
        <label htmlFor="frm-comment">Comment</label>
        <textarea className="box-border border-2 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="frm-comment" rows="6" name="comment"></textarea>
      </div>
      </div>
      <div className="flex px-6 py-4 float-right">
        <button className="bg-transparent hover:bg-secondary text-white font-semibold  py-2 px-4 border border-secondary hover:border-transparent rounded" type="submit">Submit</button>
      </div>
        </form>
    )
}

export default ContactForm