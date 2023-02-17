import React from "react";


function Navbar() {

    return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body- " style="background-color: rgba(37, 204, 247,0.3);">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Cl!ck</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown" style="position: absolute; right: 3%;">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Hi, UserName
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Dashboard</a></li>
              {/* <li><hr class="dropdown-divider"></li> */}
              <li><a class="dropdown-item" href="#">Log Out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    </div>
    );
}

export default Navbar;