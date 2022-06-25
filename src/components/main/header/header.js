import React from 'react';
import bg from "./../../../assets/img/image 202 (Traced).svg";
import user from "./../../../assets/img/User.svg"

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
                        <div className="header--general__block">
                            <img src={bg} alt="img"/>
                            <h1>Тарифы</h1>
                        </div>
                    </div>
                    <div className="header--general__gen">
                        <img src={user} alt="img"/>
                        <div>
                            <h1>Cholponbaevvna</h1>
                            <p>cholponbaevnashi.....</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;