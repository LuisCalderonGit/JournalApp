import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return <div className='notes__main-content'>
        <NotesAppBar />
        <div className='notes__content'>
            <input type="text"
                placeholder='some awesome title'
                className='notes__title-input'
            />
            <textarea placeholder='what happened today'
                className='notes__textarea'></textarea>
            <div className='notes__image'>
                <img
                    src='https://tierragamer.com/wp-content/uploads/2021/08/luffy-b-450x300.jpg'
                    alt='luffy'
                />

            </div>
        </div>
    </div>;
}; 
