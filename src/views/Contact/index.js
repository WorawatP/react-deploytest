import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            
            <div>

               <h1>Contact me</h1>
                <p align = "left"><h6><img src="https://www.flaticon.com/premium-icon/icons/svg/1148/1148888.svg" width="40px" ></img>Tel : 0888296580 </h6></p>
                <p align = "left"><h6><img src="https://image.flaticon.com/icons/svg/609/609803.svg" width="40px" ></img> Addess : 114/33 M.1 T.katu A.katu Phuket 923000 </h6></p>
                <p align = "left"><h6><img src="https://image.flaticon.com/icons/svg/471/471204.svg" width="40px" ></img>E-mail : fastfood_123@hotmail.com</h6></p>
                {/* <center><div id="map" width="40px"></div></center> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15808.327833108526!2d98.35484696977538!3d7.886494100000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1574652501039!5m2!1sth!2sth"></iframe>
            </div>
        )
    }
}
