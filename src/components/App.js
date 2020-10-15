import React from "react";
import Header from '@app-universal/Header';
import Footer from '@app-universal/Footer';
import RecordsList from '@app-pages/index/RecordsList';

import '@styles/style.css';

function App(props) {
    return (
        <div>
            <Header />
            <RecordsList />
            <Footer
                isLogged={false}
            />
        </div>
    );
}

export default App;