import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  
  
  return (  
    <nav class="navbar navbar-expand-lg bg-body-secondary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="./Login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./Registration">Registration</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-3" type="search" placeholder="Search tasks..." aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
