import React, { useEffect, useState } from 'react'

const Loading = () => {
    const [loadingContent, setLoading] = useState(true);

    useEffect(() => {
        const handleContentLoaded = () => {
            setLoading(false);
        };

        // DOMContentLoaded eventini tinglash
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', handleContentLoaded);
        } else {
            // DOMContentLoaded allaqachon bo'lgan bo'lsa
            setLoading(false);
        }

        // Clean-up
        return () => {
            document.removeEventListener('DOMContentLoaded', handleContentLoaded);
        };
    }, []);
    if(!loadingContent){
        return null
    }
    return (<div class="preloader">
        <div class="loading">
            <span></span><span></span><span></span><span></span>
        </div>
    </div>
    )
}

export default Loading