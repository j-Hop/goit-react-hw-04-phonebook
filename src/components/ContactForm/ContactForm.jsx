import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import React from 'react';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handelInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    const contactData = { ...this.state };
    this.props.onAddContact(contactData);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form className={css.form} onSubmit={this.handelSubmit}>
        <span>Name</span>
        <label className={css.label}>
          <input
            onChange={this.handelInputChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <span>Number</span>
        <label>
          <input
            onChange={this.handelInputChange}
            type="text"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};