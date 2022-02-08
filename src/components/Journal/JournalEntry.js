import React from 'react';

export const JournalEntry = () => {
    return <div className='journal__entry pointer'>
        <div className='journal__entry-picture' style={{
            backgroundSize: 'cover',
            background: 'url(https://static.dw.com/image/45807139_303.jpg)',
        }}></div>

        <div className='journal__entry-body'>

            <p className='journal__entry-title'>un nuevo dia</p>
            <p className='journal__entry-content'>
                Cillum excepteur voluptate occaecat consequat ut ea ut.
            </p>
        </div>
        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>24</h4>
        </div>
    </div>;
};
