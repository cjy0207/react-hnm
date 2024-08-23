import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];
  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate('/login');
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      const keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="login-button" onClick={gotoLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>login</div>
      </div>

      <div className="nav-section">
        <img
          width={100}
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg"
          alt="Navbar Logo"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" onKeyPress={search} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
