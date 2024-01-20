import styled from 'styled-components';
const StyledDiv = styled.div`
<style>
*,
::after,
::before {
    box-sizing: border-box;
}
[_ngcontent-ng-cli-universal-c81].footer {
    background: #202124;
    color: #ababab;
}

/* @media all and (min-width:992px) */
:not(.footer-without-link).wrapper footer {
    min-height: 570px;
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

.container {
    width: 100%;
    padding: 0 1.07142857rem;
    margin: 0 auto;
}

/* @media all and (min-width:1200px) */
.container {
    max-width: 1200px;
}

.footer>.container {
    padding-bottom: 6.07rem;
    padding-top: 3.57rem;
}

/* @media all and (min-width:992px) */
.footer>.container {
    padding-bottom: 1.42rem;
}

.social-link {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex-direction: column;
    flex-direction: column;
}

/* @media all and (min-width:992px) */
.social-link {
    -ms-flex-direction: row;
    flex-direction: row;
}

hr {
    margin-top: 1.28rem;
    margin-bottom: 1.28rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, .1);
}

/* @media all and (min-width:768px) */
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -0.71rem;
    margin-left: -0.71rem;
}

/* @media all and (min-width:767px) */
[_ngcontent-ng-cli-universal-c81].badge {
    padding: 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: Oswald, sans-serif;
    font-weight: 700;
    margin-bottom: 1.42rem;
}

h2 {
    font-size: 2rem;
    line-height: 34px;
}

p {
    margin-bottom: 1.78rem;
}





/* @media all and (min-width:992px) */
.footer :first-child.footer-bottom-wrap {
    margin-top: 1.07rem;
}

.footer .footer-bottom-wrap div {
    display: -ms-flexbox;
    display: flex;
}

.footer .footer-bottom-wrap div a {
    display: inline-block;
    margin-right: 1.28rem;
}

.footer .footer-bottom-wrap div a:last-child {
    margin: 0;
}

.footer .footer-bottom-wrap div a.footer-icon {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 50%;
    text-align: center;
    position: relative;
    border: 1px solid #494949;
    width: 40px;
    height: 40px;
    transition: all .4s;
}

.footer .footer-bottom-wrap div a.footer-icon::after,
.footer .footer-bottom-wrap div a.footer-icon::before {
    top: 0px;
    left: 0px;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.footer .footer-bottom-wrap div a.footer-icon::before {
    border: 1px solid rgba(0, 0, 0, 0);
}

.footer .footer-bottom-wrap div a.footer-icon::after {
    border: 0 solid rgba(0, 0, 0, 0);
}

[class^=icon-] {
    background: url(https://static.kfcvietnam.com.vn/images/web/sprite.png?v=5.0) no-repeat;
    width: 25px;
    display: inline-block;
    height: 25px;
    vertical-align: middle;
}

.footer [class^=icon-] {
    width: 29px;
}

.footer .icon-twitter {
    background-position: -152px -7px;
}

.footer .icon-youtube {
    background-position: -9px -7px;
}

.footer .icon-instagram {
    background-position: -63px -7px;
}

.footer .icon-facebook {
    background-position: -108px -7px;
}

/* @media all and (min-width:992px) */
.footer .accordian app-accordian-group {
    display: -ms-flexbox;
    display: flex;
}

.accordian .card {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    display: block;
}


</style>
`;

function Footer(){
    return(
        <StyledDiv>
        <>
         <footer class="footer" id="footer-element" _ngcontent-ng-cli-universal-c81="">
                        <section class="container common-footer" _ngcontent-ng-cli-universal-c81="">
                            <div class="row" _ngcontent-ng-cli-universal-c81="">
                                <div class="badge" _ngcontent-ng-cli-universal-c81="">
                                    <h2 _ngcontent-ng-cli-universal-c81="">CÔNG TY LIÊN DOANH TNHH KFC VIỆT NAM</h2>
                                    <div _ngcontent-ng-cli-universal-c81="">Số 292 Bà Triệu, P. Lê Đại Hành, Q. Hai Bà
                                        Trưng, TP. Hà Nội.</div>
                                    <div _ngcontent-ng-cli-universal-c81="">Điện thoại: (028) 38489828</div>
                                    <div _ngcontent-ng-cli-universal-c81="">Email: lienhe@kfcvietnam.com.vn</div>
                                    <div _ngcontent-ng-cli-universal-c81="">Mã số thuế: 0100773885</div>
                                    <div _ngcontent-ng-cli-universal-c81="">Ngày cấp: 29/10/1998 - Nơi cấp: Cục Thuế
                                        Thành Phố Hà Nội</div>
                                </div>
                                <app-footer-bottom _ngcontent-ng-cli-universal-c81="">
                                <div class="footer-bottom-wrap">
                                    <div><a class="footer-icon" href="https://www.facebook.com/KFCVietnam/"
                                            target="_blank"><i class="icon-facebook"></i></a><a class="footer-icon"
                                            href="https://www.instagram.com/kfc_vietnam/" target="_blank"><i
                                                class="icon-instagram"></i></a><a class="footer-icon"
                                            href="https://www.youtube.com/user/KFCVietnam2011" target="_blank"><i
                                                class="icon-youtube"></i></a><a class="footer-icon"
                                            href="https://twitter.com/kfc_vietnam" target="_blank"><i
                                                class="icon-twitter"></i></a></div>
                                </div>
                            </app-footer-bottom>
                              </div>
                           
                        </section>
                    </footer>
        </>
        </StyledDiv>
    )
}
export default Footer;