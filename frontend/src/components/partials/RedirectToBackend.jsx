import { useEffect } from 'react';

function RedirectToBackend() {
    useEffect(() => {
        window.location.replace = 'http://localhost:5000/admin';
    }, []);

    return <p>Redirecting to backend admin panel...</p>;
}

export default RedirectToBackend;