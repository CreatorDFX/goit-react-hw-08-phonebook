import { useDeleteContactMutation, useUpdateContactMutation } from "redux/contacts/api";
import React, { useState } from 'react';
import css from './ContactList.module.css';

export const ContactListItem = ({ contact, isBlock, setIsBlock, contacts }) => {
    const { id } = contact;
    const [isModify, setIsModify] = useState(false);
    const [name, setName] = useState(contact.name);
    const [number, setNumber] = useState(contact.number);
    const [deleteContact] = useDeleteContactMutation();
    const [updateContact] = useUpdateContactMutation();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value)
                break;
            default:
                return
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        const findContact = contacts.find(contact => contact.name === name);
        if (findContact) {
            alert(findContact.name + " is already in contacts.")
            return;
        } else {
            updateContact({ id, name, number });
            setIsModify(false);
            setIsBlock(false);
        }
        e.target.reset();
    }

    return (
        <>
            {!isModify ?
                <>
                    {!isBlock &&
                        <button disabled={isBlock}
                            type='button'
                            className={css.contactListItemBtn}
                            onClick={() => {
                                setIsModify(true);
                                setIsBlock(true);
                            }}>Update</button>}
                    {!isBlock &&
                        <button
                            disabled={isBlock}
                            type='button'
                            className={css.contactListItemBtn}
                            onClick={() => {
                                deleteContact(contact.id)
                            }}>Delete</button>}
                    {contact.name} : {contact.number}
                </>
                : <form
                    className={css.form}
                    style={{
                        border: '10px solid teal',
                        width: '387px',
                        padding: '20px 20px 20px 20px',
                        marginBottom: '20px',
                        marginTop: '20px'
                    }}
                    onSubmit={handleSubmit}>
                    Name <input
                        className={css.upd}
                        type="text"
                        name="name"
                        onChange={handleChange}
                        defaultValue={contact.name} />
                    Number
                    <input className={css.upd}
                        type="text"
                        name="number"
                        onChange={handleChange}
                        defaultValue={contact.number} />

                    <button
                        type='submit'
                        className={css.contactListItemBtn}
                    >Update</button>

                    <button
                        type='button'
                        className={css.contactListItemBtn}
                        onClick={() => {
                            setIsBlock(false);
                            setIsModify(false)
                        }}>Cancel</button>
                </form>
            }
        </>
    )
}