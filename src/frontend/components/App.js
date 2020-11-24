import React from 'react';
import Header from '@app-universal/Header';
import Footer from '@app-universal/Footer';
import RecordsList from '@app-pages/index/RecordsList';
import ArticlesList from '@app-pages/Article/ArticlesList';


function App(props) {
    return (
        <>
            <Header />
            <ArticlesList />
            <Footer />
        </>
    );
}

export default App;
