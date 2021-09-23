import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_LOCALHOST}/api/contact`,
      header: {
        'Content-Type': 'application/json',
      },
      data: {
        data,
      },
    };
    try {
      const response = await axios(config);
      if (response.status == 200) {
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="formRow">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            {...register('name', {
              required: { value: true, message: 'Your name is required' },
            })}
            name="name"
            type="text"
            placeholder="name"
          />
          <span className="error">{errors?.name?.message}</span>
        </div>
        <div className="inputGroup">
          <label htmlFor="company">Company:</label>
          <input
            {...register('company', {
              required: { value: true, message: 'Company Name is required' },
            })}
            name="company"
            type="text"
            placeholder="Company Name"
          />
          <span className="error">{errors?.company?.message}</span>
        </div>
      </div>
      <div className="formRow">
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>

          <input
            {...register('email', {
              required: { value: true, message: 'Email is required' },
            })}
            name="email"
            type="email"
            placeholder="Email"
          />
          <span className="error">{errors?.email?.message}</span>
        </div>
        <div className="inputGroup">
          <label htmlFor="phone">Phone:</label>

          <input
            {...register('phone', {
              required: { value: true, message: 'Phone Number is required' },
            })}
            name="phone"
            type="tel"
            placeholder="Phone Number"
          />
          <span className="error">{errors?.phone?.message}</span>
        </div>
      </div>
      <div className="formRow">
        <div className="inputGroup">
          <label htmlFor="message">Message:</label>

          <textarea
            {...register('message', {
              required: { value: true, message: 'A message is required' },
            })}
            name="message"
            rows="20"
            placeholder="Message"
          ></textarea>
          <span className="error">{errors?.message?.message}</span>
        </div>
      </div>

      <div className="formRow">
        <input type="submit" className="submit" />
      </div>
    </ContactFormContainer>
  );
}

const ContactFormContainer = styled.form`
    display: flex;
    flex-direction: column;

    gap: 1rem;
    .formRow {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
          flex-direction: column;
      }
      .inputGroup{
          width: 100%;
          padding-bottom: 1.5rem;
          position: relative;
          .error{
              position: absolute;
              color: lightcoral;
              bottom: -0;
              left: 10px;
          }
          label{
            padding: 0px 0px 50px 10px;  
          }
      }
    }
    input,
    textarea,
    button {
      width: 100%;
      background: none;
      /* color: black; */
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(5px);
      border: none;
      border-radius: 10px;
      padding: 1rem;
      outline: none;
    }
  }
  button, .submit {
    background-color: var(--color3);
    max-width: 300px;
    font-weight: bold;
    font-size: large;
  
`;

export default ContactForm;
