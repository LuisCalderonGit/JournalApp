import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import { activeNote } from "../../actions/notes";

export const NoteScreen = () => {

    const { active: noteActive } = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm(noteActive);
    const { body, url } = formValues;


    const activeId = useRef(noteActive.id);
    useEffect(() => {
        if (noteActive.id !== activeId.current) {
            reset(noteActive);
            activeId.current = noteActive.id;
        }

    }, [noteActive, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch])




    return <div className='notes__main-content'>

        <NotesAppBar />

        <div className='notes__content'>
            <input type="text"
                placeholder='some awesome title'
                className='notes__title-input'
                value={noteActive.title}
                onChange={handleInputChange}
                name="title"
            />
            <textarea placeholder='what happened today'
                className='notes__textarea'
                value={body}
                onChange={handleInputChange}
                name="body"
            ></textarea>

            {
                url &&
                (<div className='notes__image'>
                    <img
                        src={`${url}`}
                        alt="pic note"
                    />

                </div>)
            }
        </div>
    </div>;
}; 
