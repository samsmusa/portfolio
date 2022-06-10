import React from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Loader from './Loader';

const Contact = () => {

    const [isLoading, setIsloading] = useState(false)
    const sendEmail = e => {
        setIsloading(true)
        e.preventDefault();
        const name = e.target.name.value
        console.log(name)
        emailjs.sendForm('service_uenzt48', 'template_k3ebxhr', e.target, 'SXvy-vKSL6aGCrILs').then(res =>{ if (res.status === 200) { setIsloading(false) }});
        e.target.reset();
    }
    return (
        <div className=''>

            <div className="contianer" style={{ backgroundColor: "#2d1950" }}>
                <div className="px-5 py-4 d-flex flex-column fw-bold  flex-lg-row justify-content-center align-items-center" >
                    <div className="px-3 text-center lg:text-left text-white" style={{ maxWidth: "400px" }}>
                        <h1 className="text-5xl font-bold">Let's Talk!</h1>
                        <p className="py-6">You can email me and we will have a chat! I am so excited. What about you?</p>
                    </div>
                    <div className="card ">
                        <div className="card-body text-start position-relative" style={{ width: "500px" }}>
                            {isLoading && <Loader />}
                            <form onSubmit={sendEmail}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label text-start">Your Name</label>
                                    <input type="text" class="form-control" name="name" />

                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Your Messages</label>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" name='message' id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>
                                </div>

                                <button type="submit" value={"SEND"} class="btn btn-primary">Submit</button>
                            </form>
                            {/* <form onSubmit={sendEmail}>
                                <div className="form-control  text-white">
                                    <label className="label">
                                        <span className="label-text text-white">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter you name..." name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter your email..." className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">What's in your mind?</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" type="text" name='message' placeholder="Your message..." required></textarea>

                                </div>
                                <input type="submit"  className="form-control w-full mt-2 btn btn-ghost text-white border-white" />
                            </form> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;