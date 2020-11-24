import React from 'react';
import Header from '@app-universal/Header';
import Footer from '@app-universal/Footer';
import ArticlesList from '@app-pages/Article/ArticlesList';
import NotFoundPage from '@app-pages/NotFoundPage/NotFoundPage';
import UsersList from '@app-pages/User/UsersList';
import CategoryList from '@app-pages/Category/CategoryList';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import '@styles/style.css';

function App(props) {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Redirect exact from="/" to="/article/list" />
                    <Route path="/article/list" component={ArticlesList} />
                    <Route path="/category/list" component={CategoryList} />
                    <Route path="/user/list" component={UsersList} />
                    <Route path="*" exact component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>

            <Footer />
        </>
    );
}

export default App;
