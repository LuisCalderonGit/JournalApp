import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

import { NotesAppBar } from './NotesAppBar';


export const NoteScreen = () => {

    const { active: noteActive } = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] = useForm(noteActive);
    const { body, url } = formValues;


    const activeId = useRef(noteActive.id);
    useEffect(() => {
        if (noteActive.id !== activeId.current) {
            reset(noteActive);
            activeId.current = noteActive.id;
        }

    }, [noteActive, reset])





    return <div className='notes__main-content'>

        <NotesAppBar />
        <div className='notes__content'>
            <input type="text"
                placeholder='some awesome title'
                className='notes__title-input'
                value={noteActive.title}
                onChange={handleInputChange}
            />
            <textarea placeholder='what happened today'
                className='notes__textarea'
                value={body}
                onChange={handleInputChange}
            ></textarea>

            {
                url &&
                (<div className='notes__image'>
                    <img
                        src={`${url}`}
                    />

                </div>)
            }
        </div>
    </div>;
}; 
