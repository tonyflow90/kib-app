import {
    html,
    render
} from 'https://unpkg.com/lit-html?module';

class KibApp extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            'mode': 'open'
        });
        render(this.template(), this._shadowRoot, {
            eventContext: this
        });
    }

    template() {
        return html `
                <style>
                :host {
                    display: block;
                }

                .flex-container {
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    /* background-color: #008b8b; */
                    min-height: 100vh;
                }

                .header {
                    display: flex;
                    justify-content: center;
                    border-bottom: 1px solid #ebebeb;
                    height: 72px;
                }

                .header-content {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    max-width: 800px;
                }
                .content {
                    display: flex;
                    flex-direction: column;
                    flex: auto;
                    justify-content: center;
                    align-items: center;
                    margin:20px;
                }

                .footer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    padding: 12px;
                    bottom: 0;
                }

                .logo {
                    width:54px;
                    border-radius: 15px;
                    margin: 4px 16px;
                }
                
                .icon {
                    width: 38px;
                    margin: 18px;
                }

                .main {
                    max-width: 700px;
                    text-transform: lowercase;
                    margin-top: 120px;
                    margin-bottom: 120px;
                }
                
                .item {
                    width:100%;
                    max-width: 350px;
                    text-transform: lowercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 50px;
                }
                
                .item .item-header {
                    /* color: #a8a8a8; */
                    color: #373737;
                    font-size: 12px;
                    font-weight: 400;
                    position: relative;
                    padding-bottom: 40px;
                }
                .item .item-header:after {
                    content: " ";
                    position: absolute;
                    left: 0px;
                    bottom: 20px;
                    width: 30px;
                    height: 1px;
                    background-color: #d3d3d3;
                }
                h1 {
                    color: #373737;
                    font-weight: 600;
                    font-size: 48px;
                    margin: 0;
                }
                
                h3 {
                    font-weight: 400;
                    font-size: 24px;
                    margin: 0;
                }


                h4 {
                    margin: 0;
                    line-height: 1;
                    font-size: 18px;
                    font-weight: 600;
                }
                
                h6 {
                    margin: 0;
                    margin-bottom: 25px;
                    font-size: 13px;
                    font-weight: 400;
                }
                </style>
                <div class="flex-container">
                    <div class="header">
                        <div class="header-content">
                            <div>
                                <a href="https://tonyflow90.github.io/kip-app"><img alt="Kib Logo" class="logo" src="./images/logo.png"/></a>
                            </div>
                            <div>
                                <a href="https://github.com/tonyflow90"><img alt="Github Logo" class="icon" src="./images/github.svg"/></a>
                                <a href="https://twitter.com/itzeme"><img alt="Twitter Logo" class="icon" src="./images/twitter.svg"/></a>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <div class="main">
                            <h1>Keno Itze Bohlen</h1>
                            <h3>frontend web developer based in Osnabrück, Germany</h3>
                        </div>
                        <div class="item">
                            <div class="item-header">About</div>
                            <div class="item-content">
                            Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-header">Current</div>
                            <div class="item-content">
                                <h4>GMH Systems GmbH</h4>
                                <h6>Web Developer</h6>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-header">Previous</div>
                            <div class="item-content">
                                <h4>Hochschule Osnabrück</h4>
                                <h6>Student</h6>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-header">Contact</div>
                            <div class="item-content">
                                <h4>Email</h4>
                                <h6><a href="mailto:keno.bohlen@gmail.com">keno.bohlen@gmail.com</a></h6>
                                <h4>GitHub</h4>
                                <h6><a href="https://github.com/tonyflow90">github.com/tonyflow90</a></h6>
                                <h4>Twitter</h4>
                                <h6><a href="https://twitter.com/itzeme">twitter.com/itzeme</a></h6>
                            </div>
                        </div>
                    </div>

                    <div class="footer">
                    </div>
                </div>
        `;
    }
}

window.customElements.define('kib-app', KibApp);