import React from 'react';
import bg from "./../../../assets/img/code.svg"

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header--general">
                    <div className="header--general__group">
                        <div><i className="fas fa-search"/></div>
                        <label htmlFor="in">поиск</label>
                        <input
                            id="in"
                            type="search"
                            autoComplete='off'
                            name='search'
                        />
                    </div>

                    <div>
                        <div className="header--general__block"/>
                    </div>
                    <div className="header--general__gen">
                        <img src={bg} alt="ig"/>
                        <div>
                            <h1>lorem</h1>
                            <p>Lorem ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;