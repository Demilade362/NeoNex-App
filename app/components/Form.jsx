'use client';

import { useState } from "react";


export default function Form() {
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            'email': email,
            'title': title,
            'body': body
        })
    }
    return (
        <section>
            <div className="container mx-auto my-20">
                <h1 className="text-3xl mb-7 text-center">Send Us A Message</h1>
                <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@email.com" required />
                    </div>

                    <div className="mb-5">
                        <label for="title" className="block mb-2 text-sm font-medium text-gray-900">Your Message Title</label>
                        <input type="text" id="text" value={title} onChange={e => setTitle(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title of Message" required />
                    </div>

                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message body</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-5" placeholder="Leave a comment..." value={body} onChange={e => setBody(e.target.value)}></textarea>
                    <button type="submit" class="text-white bg-green-400 w-full hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit Message</button>
                </form>
            </div>
        </section>
    )
}
