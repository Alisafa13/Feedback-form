import React from 'react';

const Form = () => {
    const myFunc = (e) => {
        let name = document.querySelector(".name");
        let surname = document.querySelector(".surname");
        let email = document.querySelector(".email");
        let phone = document.querySelector(".phone");

        if (
            name.value.trim() !== "" &&
            surname.value.trim() !== "" &&
            email.value.trim() !== "" &&
            String(phone.value).trim() !== "") {
            alert("Message sent!");
        } else {
            e.preventDefault();
            alert("Message not sent! Please fill in all fields correctly.");
        }
    };



    return (
        <div>
            <form>
                <label>
                    Ad
                    <br />
                    <input className="name" type="text" />
                </label>
                <br />
                <br />
                <label>
                    Soyad
                    <br />
                    <input className="surname" type="text" />
                </label>
                <br />
                <br />
                <label>
                    Telefon
                    <br />
                    <input className="phone" type="text" />
                </label>
                <br />
                <br />
                <label>
                    Email
                    <br />
                    <input className="email" type="email" />
                </label>
                <br />
                <br />
                <label>
                    Şərh
                    <br />
                    <textarea className="feedback" name="" id="" cols="30" rows="10"></textarea>
                </label>
                <br />
                <button onClick={myFunc}>Submit</button>
            </form>
        </div>
    );
};

export default Form;
