import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../Components/styles.css"
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [insta, setInsta] = useState("");

    const form = useRef();
    const [selectedDate, setSelectedDate] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the selected date to IST
        const formattedDate = selectedDate ? selectedDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) : '';

        //create a new object that contains dynamic template params
        const templateParams = {
            name: name,
            age: age,
            insta: insta,
            date: formattedDate
        }

        //send the email using EmailJS
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setName('');
                setAge('');
                setInsta('');
                setSelectedDate('');
            }, (error) => {
                console.log(error.text);
            });

        //Redirecting to Thanks page
        navigate("/thanks")
    };

    return (
        <section className='formSection'>
            <div className='formBox'>
                <div className='square' style={{ '--i': 0 }}></div>
                <div className='square' style={{ '--i': 1 }}></div>
                <div className='square' style={{ '--i': 2 }}></div>
                <div className='square' style={{ '--i': 3 }}></div>
                <div className='square' style={{ '--i': 4 }}></div>
                <div className='formContainer'>
                    <div className='form'>
                        <h2>Let's Select a date !</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className='formInputBox'>
                                <input type="text" name="name" placeholder="Name" value={name} required onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='formInputBox'>
                                <input type="text" name="age" placeholder="Age" value={age} required onChange={(e) => setAge(e.target.value)} />
                            </div>
                            <div className='formInputBox'>
                                <input type="text" name="insta" placeholder="Insta-id" value={insta} required onChange={(e) => setInsta(e.target.value)} />
                            </div>
                            <div className='formInputBox'>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    placeholderText="Select Date"
                                    dateFormat='dd/MM/yyyy'
                                    minDate={new Date()}
                                    name="date"
                                    required
                                />
                            </div>
                            <div className='formInputBox'>
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form