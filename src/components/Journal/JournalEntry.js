import React from 'react';

export const JournalEntry = ({ id, tittle, date, body, url }) => {
    // console.log(id, tittle, date, body, url);
    return <div className='journal__entry pointer'>
        {
            url &&
            <div className='journal__entry-picture' style={{
                backgroundSize: 'cover',
                backgroundImage: `url()`,
            }}></div>
        }

        <div className='journal__entry-body'>

            <p className='journal__entry-title'>{tittle}</p>
            <p className='journal__entry-content'>
                {body}
            </p>
        </div>
        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>24</h4>
        </div>
    </div>;
};
