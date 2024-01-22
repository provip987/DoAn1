import styled from 'styled-components';
import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../MyContext/AuthContext';
const StyledDiv = styled.div`
<style>
*,
::after,
::before {
    box-sizing: border-box;
}

article,
aside,
dialog,
figcaption,
figure,
footer,
header,
main,
nav,
section {
    display: block;
}

header {
    border-bottom: 1px solid #ccc;
}

app-common-header,
app-header {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 99;
    background: #fff;
    display: block;
}

/* @media all and (min-width:992px) */
:not(.footer-without-link).wrapper main {
    min-height: calc(100vh - 445px);
}

body,
dl,
h1,
h2,
h3,
h4,
h5,
h6,
li,
ol,
p,
ul {
    margin: 0;
    padding: 0;
}

body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 20px;
    color: #202124;
    background: #fff;
}

/* @media all and (min-width:992px) */
body {
    font-size: 1.07rem;
}

html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
    font-size: 14px;
}

body,
html {
    height: 100%;
}

.align-items-center {
    -ms-flex-align: center !important;
    align-items: center !important;
}

.container {
    width: 100%;
    padding: 0 1.07142857rem;
    margin: 0 auto;
}

/* @media all and (min-width:1200px) */
.container {
    max-width: 1200px;
}

header .container {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    display: -ms-flexbox;
    display: flex;
    min-height: 43px;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
}

/* @media all and (min-width:768px) */
header .container {
    padding-top: 0.85rem;
    padding-bottom: 0.85rem;
}

/* @media all and (min-width:768px) */
.d-md-none {
    display: none !important;
}

header .container .header-left {
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
}

/* @media all and (min-width:768px) */
header .container .header-left {
    -ms-flex: 0 0 15%;
    flex: 0 0 15%;
}

header .container .header-nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}

header .container .header-right {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
}

/* @media all and (min-width:768px) */
header .container .header-right {
    -ms-flex: 0 0 17%;
    flex: 0 0 17%;
}

header[_ngcontent-ng-cli-universal-c61].common-header [_ngcontent-ng-cli-universal-c61].header-right {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex: 0 0 33%;
    flex: 0 0 33%;
}

a {
    color: #202124;
    text-decoration: none;
    cursor: pointer;
    transition: color .2s linear;
}

.mat-fab,
.mat-flat-button,
.mat-mini-fab,
.mat-raised-button {
    color: rgba(0, 0, 0, 0.87);
    background-color: #fff;
}

dl,
li,
ol,
ul {
    list-style-type: none;
}

.d-none,
.hidden {
    display: none !important;
}

[_ngcontent-ng-cli-universal-c61].lang-option {
    min-width: 70px;
}

.hamburger.ham-desktop-menu {
    width: 25px;
    margin-left: 1rem;
}

.mat-ripple {
    overflow: hidden;
    position: relative;
}

:not(:empty).mat-ripple {
    transform: translateZ(0px);
}

.mat-ripple.mat-ripple-unbounded {
    overflow: visible;
}

:not([class*=mat-elevation-z]).mat-raised-button {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

header .container .header-right a {
    cursor: pointer;
    font-family: Roboto, sans-serif;
}

header[_ngcontent-ng-cli-universal-c61].common-header [_ngcontent-ng-cli-universal-c61].header-right ul[_ngcontent-ng-cli-universal-c61] {
    display: -ms-flexbox;
    display: flex;
    line-height: 19px;
    -ms-flex-align: center;
    align-items: center;
}

/* @media all and (min-width:768px) */
.d-md-block {
    display: block !important;
}

.hamburger {
    width: 20px;
}

.hamburger span {
    display: block;
    margin: .21428571rem 0;
    background: #000;
    height: 2px;
}

.hamburger.ham-desktop-menu span {
    margin: .42857143rem 0;
    height: 3px;
}

header[_ngcontent-ng-cli-universal-c61].common-header [_ngcontent-ng-cli-universal-c61].header-right ul[_ngcontent-ng-cli-universal-c61] li[_ngcontent-ng-cli-universal-c61] {
    margin-left: 0.71rem;
}

/* @media all and (min-width:768px) */
header[_ngcontent-ng-cli-universal-c61].common-header [_ngcontent-ng-cli-universal-c61].header-right ul[_ngcontent-ng-cli-universal-c61] li[_ngcontent-ng-cli-universal-c61] {
    margin-left: 1.07rem;
}

[_ngcontent-ng-cli-universal-c55].shopping-cart [_ngcontent-ng-cli-universal-c55].lines {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    width: 34px;
}

[_ngcontent-ng-cli-universal-c55].shopping-cart [_ngcontent-ng-cli-universal-c55].basket {
    width: 30px;
    height: 43px;
    background: url(https://static.kfcvietnam.com.vn/images/web/cart.png?v=5.0) no-repeat -53px 1px;
    background-size: 350%;
    text-align: center;
    line-height: 50px;
    font-family: Roboto, sans-serif;
    display: block;
    letter-spacing: -1px;
}

[_ngcontent-ng-cli-universal-c55].shopping-cart [_ngcontent-ng-cli-universal-c55].basket.blank {
    background-position: -7px 1px;
}

[_ngcontent-ng-cli-universal-c55].shopping-cart [_ngcontent-ng-cli-universal-c55].lines span[_ngcontent-ng-cli-universal-c55] {
    height: 2px;
    width: 0px;
    background: #000;
    -ms-transform: rotate(-120deg);
    transform: rotate(-120deg);
    -ms-transform-origin: top left;
    transform-origin: top left;
}

[_ngcontent-ng-cli-universal-c55].shopping-cart [_ngcontent-ng-cli-universal-c55].lines span[_ngcontent-ng-cli-universal-c55].second {
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
}

[_ngcontent-ng-cli-universal-c55].shopping-cart [_ngcontent-ng-cli-universal-c55].lines span[_ngcontent-ng-cli-universal-c55].third {
    -ms-transform: rotate(-60deg);
    transform: rotate(-60deg);
}

[class^=icon-] {
    background: url(https://static.kfcvietnam.com.vn/images/web/sprite.png?v=5.0) no-repeat;
    width: 25px;
    display: inline-block;
    height: 25px;
    vertical-align: middle;
}

.icon-login {
    background-position: -10px -60px;
    width: 30px;
    height: 30px;
}

.mat-raised-button {
    box-sizing: border-box;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    outline: none;
    border: none;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    margin: 0;
    min-width: 64px;
    line-height: 36px;
    padding: 0 16px;
    border-radius: 4px;
    overflow: visible;
    transform: translate3d(0px, 0px, 0px);
    transition: background 400ms cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

a.btn,
button.btn,
input.btn {
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    padding: .85714286rem 1.71428571rem;
    background-color: #e4002b;
    border: 1px solid #e4002b;
    line-height: 20px;
    font-size: 15px;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    border-radius: 25px;
}

header .btn {
    text-transform: none;
    margin-right: 0.71rem;
}

header[_ngcontent-ng-cli-universal-c61].common-header [_ngcontent-ng-cli-universal-c61].header-right app-button.inactive a {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear .3s, opacity .8s;
    width: 184px;
    height: 46px;
}

.mat-button-focus-overlay {
    background: #000;
}

.mat-button-ripple.mat-ripple,
.mat-button-focus-overlay {
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    position: absolute;
    pointer-events: none;
    border-radius: inherit;
}

.mat-button-focus-overlay {
    opacity: 0;
    transition: opacity 200ms cubic-bezier(0.35, 0, 0.25, 1), background-color 200ms cubic-bezier(0.35, 0, 0.25, 1);
}

.mat-button .mat-button-wrapper>*,
.mat-flat-button .mat-button-wrapper>*,
.mat-stroked-button .mat-button-wrapper>*,
.mat-raised-button .mat-button-wrapper>*,
.mat-icon-button .mat-button-wrapper>*,
.mat-fab .mat-button-wrapper>*,
.mat-mini-fab .mat-button-wrapper>* {
    vertical-align: middle;
}

header .container .logo {
    width: 70px;
    background: url(https://static.kfcvietnam.com.vn/images/web/kfc-logo-mobile.svg?v=5.0) no-repeat;
    height: 23px;
    text-indent: -9999px;
    background-size: cover;
    overflow: hidden;
}

/* @media all and (min-width:768px) */
header .container .logo {
    width: 90px;
    height: 30px;
}

/* @media all and (min-width:768px) */
header[_ngcontent-ng-cli-universal-c61].common-header [_ngcontent-ng-cli-universal-c61].container [_ngcontent-ng-cli-universal-c61].logo {
    background-image: url(https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0);
    width: 78px;
    height: 78px;
}

header[_ngcontent-ng-cli-universal-c61] [_ngcontent-ng-cli-universal-c61].header-nav ul[_ngcontent-ng-cli-universal-c61] {
    margin-top: 0.21rem;
    text-transform: uppercase;
}

/* @media all and (min-width:1200px) */
header[_ngcontent-ng-cli-universal-c61] [_ngcontent-ng-cli-universal-c61].header-nav ul[_ngcontent-ng-cli-universal-c61] {
    font-size: 1.28rem;
}

header[_ngcontent-ng-cli-universal-c61] [_ngcontent-ng-cli-universal-c61].header-nav ul[_ngcontent-ng-cli-universal-c61] li[_ngcontent-ng-cli-universal-c61] {
    display: inline-block;
    margin-left: 1.78rem;
}

/* @media all and (min-width:1200px) */
header[_ngcontent-ng-cli-universal-c61] [_ngcontent-ng-cli-universal-c61].header-nav ul[_ngcontent-ng-cli-universal-c61] li[_ngcontent-ng-cli-universal-c61] {
    margin-left: 2.5rem;
}

header[_ngcontent-ng-cli-universal-c61] [_ngcontent-ng-cli-universal-c61].header-nav ul[_ngcontent-ng-cli-universal-c61] li[_ngcontent-ng-cli-universal-c61] a[_ngcontent-ng-cli-universal-c61] {
    position: relative;
    font-family: Roboto, sans-serif;
    transition: color .5s ease;
}

header[_ngcontent-ng-cli-universal-c61] [_ngcontent-ng-cli-universal-c61].header-nav ul[_ngcontent-ng-cli-universal-c61] li[_ngcontent-ng-cli-universal-c61] a[_ngcontent-ng-cli-universal-c61]::after {
    content: "";
    transition: all .5s ease;
    position: absolute;
    bottom: 0px;
    height: 1px;
    width: 0px;
    background-color: #202124;
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}

header[_ngcontent-ng-cli-universal-c61] [_ngcontent-ng-cli-universal-c61].header-nav ul[_ngcontent-ng-cli-universal-c61] li[_ngcontent-ng-cli-universal-c61].active a[_ngcontent-ng-cli-universal-c61]::after,
header[_ngcontent-ng-cli-universal-c61] [_ngcontent-ng-cli-universal-c61].header-nav ul[_ngcontent-ng-cli-universal-c61] li[_ngcontent-ng-cli-universal-c61] a[_ngcontent-ng-cli-universal-c61]:hover::after {
    width: 100%;
}

header .container .header-left a.hamburger {
    display: block;
}

header[_ngcontent-ng-cli-universal-c61].common-header [_ngcontent-ng-cli-universal-c61].header-left a[_ngcontent-ng-cli-universal-c61] {
    display: block;
}
</style>
`;

function Banner({ cartCount }) {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // Hàm xử lý khi nhấn vào nút đăng nhập
    const handleLoginClick = (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            navigate('/quanlychitiet'); // Chuyển đến trang chi tiết tài khoản nếu đã đăng nhập
        }
    };

    // Hàm xử lý khi nhấn vào nút giỏ hàng
    const handleCartClick = (e) => {
        e.preventDefault();
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            navigate('/gio_hang'); // Chuyển đến trang giỏ hàng nếu đã đăng nhập
        }
    };

    return (
        <StyledDiv>

            <>
                <header class="common-header" _ngcontent-ng-cli-universal-c61="">
                    <section class="container align-items-center" _ngcontent-ng-cli-universal-c61="">
                        <div class="header-left d-md-none" _ngcontent-ng-cli-universal-c61="">
                            <a class="hamburger" href="javascript:void(0);" _ngcontent-ng-cli-universal-c61="">
                                <span _ngcontent-ng-cli-universal-c61=""></span>
                                <span _ngcontent-ng-cli-universal-c61=""></span>
                                <span _ngcontent-ng-cli-universal-c61=""></span>
                            </a>
                        </div>
                        <div class="header-nav" _ngcontent-ng-cli-universal-c61=""><a class="logo" href="/"
                            _ngcontent-ng-cli-universal-c61=""></a>
                            <ul class="d-none d-md-block" _ngcontent-ng-cli-universal-c61="">
                                <li class="active ng-star-inserted" _ngcontent-ng-cli-universal-c61="">
                                    <Link
                                        class="mat-ripple mat-ripple-unbounded" to="/"
                                        _ngcontent-ng-cli-universal-c61="" matripple="">THỰC ĐƠN
                                    </Link></li>
                                <li class="ng-star-inserted" _ngcontent-ng-cli-universal-c61=""><a
                                    class="mat-ripple mat-ripple-unbounded" href="/khuyenmai"
                                    _ngcontent-ng-cli-universal-c61="" matripple="">Khuyến mãi</a></li>

                            </ul>
                        </div>
                        <div class="header-right" _ngcontent-ng-cli-universal-c61="">
                            <div class="ng-star-inserted" _ngcontent-ng-cli-universal-c61=""><app-button
                                tabindex="0" class="inactive" _ngcontent-ng-cli-universal-c61=""><a
                                    tabindex="0"
                                    class="mat-focus-indicator mat-raised-button mat-button-base btn d-none d-md-block ng-star-inserted"
                                    aria-disabled="false" href="javascript:void(0)"
                                    mat-raised-button=""><span class="mat-button-wrapper"><span
                                        class="button-content ng-star-inserted"
                                        _ngcontent-ng-cli-universal-c61=""></span></span>
                                    <div class="mat-ripple mat-button-ripple" matripple=""></div>
                                    <div class="mat-button-focus-overlay"></div>
                                </a></app-button>
                            </div>
                            <ul _ngcontent-ng-cli-universal-c61="">
                                <li >
                                    <app-sign-in >
                                        <a onClick={handleLoginClick}><i className="icon-login"></i></a>
                                    </app-sign-in>

                                </li>

                                <li _ngcontent-ng-cli-universal-c61="">
                                    <app-shopping-cart>
                                        <div class="shopping-cart" _ngcontent-ng-cli-universal-c55="">
                                            {/* Điều chỉnh Link và xử lý onClick nếu cần */}
                                            <Link to="/gio_hang" onClick={handleCartClick} class="mat-ripple basket blank mat-ripple-unbounded"
                                                _ngcontent-ng-cli-universal-c55=""
                                                matripple="">{cartCount}</Link>
                                        </div>
                                    </app-shopping-cart>
                                </li>

                            </ul>
                            {/* <a class="hamburger ham-desktop-menu d-none d-md-block"
                                href="javascript:void(0);" _ngcontent-ng-cli-universal-c61=""><span
                                    _ngcontent-ng-cli-universal-c61=""></span><span
                                        _ngcontent-ng-cli-universal-c61=""></span><span
                                            _ngcontent-ng-cli-universal-c61=""></span></a> */}
                        </div>
                    </section>
                </header>
                <body>

                    <div class></div>
                </body>





            </>
        </StyledDiv>
    )
}
export default Banner;