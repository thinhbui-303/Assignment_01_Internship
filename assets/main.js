(function () {
  "use strict";

  var page = document.body.getAttribute("data-page") || "";

  var headerHTML =
    '\
    <div class="top-banner" role="banner">\
        <div class="container">\
            <div class="top-banner-text">\
                <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>\
                <a href="#">ShopNow</a>\
            </div>\
            <div class="language-selector">\
                <label for="header-language" class="sr-only">Select language</label>\
                <select id="header-language">\
                    <option value="en">English</option>\
                </select>\
            </div>\
        </div>\
    </div>\
    <header class="header" role="banner">\
        <div class="container">\
            <a href="index.html" class="logo" aria-label="Exclusive Home">Exclusive</a>\
            <nav class="nav-links" aria-label="Main navigation">\
                <a href="index.html" data-nav="home">Home</a>\
                <a href="contact.html" data-nav="contact">Contact</a>\
                <a href="about.html" data-nav="about">About</a>\
                <a href="signup.html" data-nav="signup">Sign Up</a>\
            </nav>\
            <div class="header-right">\
                <div class="search-box" role="search">\
                    <label for="header-search" class="sr-only">Search for products</label>\
                    <input type="text" id="header-search" placeholder="What are you looking for?">\
                    <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>\
                </div>\
                <div class="header-icons">\
                    <a href="wishlist.html" class="icon-badge-wrap" aria-label="Wishlist (4 items)"><i class="fa-regular fa-heart" aria-hidden="true"></i><span class="badge" aria-hidden="true">4</span></a>\
                    <a href="cart.html" class="icon-badge-wrap" aria-label="Shopping cart (2 items)"><i class="fa-solid fa-cart-shopping" aria-hidden="true"></i><span class="badge" aria-hidden="true">2</span></a>\
                    <div class="user-dropdown-wrap">\
                        <a href="account.html" aria-label="My Account"><i class="fa-regular fa-user" aria-hidden="true"></i></a>\
                        <div class="user-dropdown">\
                            <a href="account.html"><i class="fa-regular fa-user" aria-hidden="true"></i> Manage My Account</a>\
                            <a href="#"><i class="fa-solid fa-bag-shopping" aria-hidden="true"></i> My Order</a>\
                            <a href="#"><i class="fa-regular fa-circle-xmark" aria-hidden="true"></i> My Cancellations</a>\
                            <a href="#"><i class="fa-regular fa-star" aria-hidden="true"></i> My Reviews</a>\
                            <a href="#"><i class="fa-solid fa-arrow-right-from-bracket" aria-hidden="true"></i> Logout</a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </header>';

  var footerHTML =
    '\
    <footer class="footer" role="contentinfo">\
        <div class="container footer-content">\
            <div class="footer-col">\
                <div class="footer-logo">Exclusive</div>\
                <h3>Subscribe</h3>\
                <p>Get 10% off your first order</p>\
                <div class="subscribe-input">\
                    <label for="footer-subscribe" class="sr-only">Email address</label>\
                    <input type="email" id="footer-subscribe" placeholder="Enter your email">\
                    <i class="fa-regular fa-paper-plane" aria-hidden="true"></i>\
                </div>\
            </div>\
            <div class="footer-col">\
                <h3>Support</h3>\
                <p>111 Bijoy sarani, Dhaka,<br>DH 1515, Bangladesh.</p>\
                <p>exclusive@gmail.com</p>\
                <p>+88015-88888-9999</p>\
            </div>\
            <div class="footer-col">\
                <h3>Account</h3>\
                <ul>\
                    <li><a href="account.html">My Account</a></li>\
                    <li><a href="login.html">Login / Register</a></li>\
                    <li><a href="cart.html">Cart</a></li>\
                    <li><a href="wishlist.html">Wishlist</a></li>\
                    <li><a href="index.html">Shop</a></li>\
                </ul>\
            </div>\
            <div class="footer-col">\
                <h3>Quick Link</h3>\
                <ul>\
                    <li><a href="#">Privacy Policy</a></li>\
                    <li><a href="#">Terms Of Use</a></li>\
                    <li><a href="#">FAQ</a></li>\
                    <li><a href="contact.html">Contact</a></li>\
                </ul>\
            </div>\
            <div class="footer-col">\
                <h3>Download App</h3>\
                <p class="footer-download-text">Save $3 with App New User Only</p>\
                <div class="app-links">\
                    <img src="../images/Qrcode 1.png" alt="QR Code to download app" style="background:white; padding:2px;" loading="lazy">\
                    <div class="app-stores">\
                        <img src="../images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png" alt="Get it on Google Play" style="background:black; border:1px solid white;" loading="lazy">\
                        <img src="../images/download-appstore.png" alt="Download on the App Store" style="background:black; border:1px solid white;" loading="lazy">\
                    </div>\
                </div>\
                <div class="social-links" aria-label="Social media links">\
                    <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>\
                    <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter" aria-hidden="true"></i></a>\
                    <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>\
                    <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>\
                </div>\
            </div>\
        </div>\
        <div class="copyright">\
            <p>&copy; Copyright Exclusive 2024. All right reserved</p>\
        </div>\
    </footer>';

  var headerTarget = document.getElementById("site-header");
  if (headerTarget) {
    headerTarget.innerHTML = headerHTML;
    if (page) {
      var link = headerTarget.querySelector('.nav-links a[data-nav="' + page + '"]');
      if (link) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    }
  }

  var footerTarget = document.getElementById("site-footer");
  if (footerTarget) {
    footerTarget.innerHTML = footerHTML;
  }
})();

