import React, { useEffect } from 'react';

import './SplashPage.css';

function SplashPage() {

    async function getCheckins() {
        const res = await fetch('/api/checkins');

        return await res.json();
    }

    console.log(getCheckins());
    return (
        <div className='checkins'>

        </div>
    )
}


export default SplashPage;
