import { useState } from 'react';
import { contact } from '../content/site';

const roles = [
  'Healthcare provider',
  'Government or public sector',
  'Manufacturer or supplier',
  'Logistics provider (3PL or 4PL)',
  'Development partner or NGO',
  'Technology partner',
  'Other',
];

const reasons = [
  'Medical logistics',
  'Technology solutions',
  'Project management',
  'Partnership opportunity',
  'General inquiry',
  'Other',
];

function SelectField({ id, label, name, options }) {
  return (
    <div className="contact-form__field">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} defaultValue="" required>
        <option value="" disabled>Select</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    fields._subject = 'New website contact request';
    fields._replyto = fields.email;
    fields._template = 'table';

    setStatus({ state: 'sending', message: '' });
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(fields),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'We could not send your message. Please try again.');
      }

      form.reset();
      setStatus({ state: 'success', message: 'Thank you. Your message has been sent.' });
    } catch (error) {
      setStatus({
        state: 'error',
        message: error.message || 'We could not send your message. Please try again.',
      });
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="_honey" type="text" tabIndex="-1" autoComplete="off" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" placeholder="Enter name" autoComplete="name" required />
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" placeholder="Enter email" autoComplete="email" required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="contact-phone">Phone number</label>
          <input id="contact-phone" name="phone" type="tel" placeholder="Enter number" autoComplete="tel" required />
        </div>
      </div>

      <SelectField id="contact-role" label="Which of these best describe you?" name="role" options={roles} />
      <SelectField id="contact-reason" label="Contact reason" name="reason" options={reasons} />

      <div className="contact-form__field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" placeholder="Enter message" required />
      </div>

      <button className="contact-form__submit" type="submit" disabled={status.state === 'sending'}>
        {status.state === 'sending' ? 'Sending…' : 'Get in touch'}
      </button>
      <p className={`contact-form__status contact-form__status--${status.state}`} role="status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
