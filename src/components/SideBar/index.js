import React, { Component } from 'react'
import styles from '../../styles/sidebar.css'
import {
    Button,
    Navbar,
    NavDropdown,
    FormControl,
    Form,
    Nav,
    Card,
    ListGroup
} from 'react-bootstrap';
export default class SideBar extends Component {
    render() {
        return (
            // <div style={{ width: 250, display: 'flex', justifyContent: 'flex-start', paddingLeft: 25, paddingTop: 50, textAlign: 'left', height: '100%', backgroundColor: '#343a40', left: 0, top: 0, position: 'fixed' }}>
                <Nav defaultActiveKey="/information" className="sider-header flex-column">
                    <Nav.Link href="/Menu">Restaurant</Nav.Link>
                    <Nav.Link href="/Contact">Contect us</Nav.Link>
                    {this.props.children}
                </Nav>
            // </div>
        )
    }
}

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
// import { makeStyles } from '@material-ui/core/styles';

// import { Link } from "react-router-dom";

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   paper: {
//     marginRight: theme.spacing(2),
//   },
// }));

// export default function MenuListComposition() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);

//   const handleToggle = () => {
//     setOpen(prevOpen => !prevOpen);
//   };

//   const handleClose = event => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   const [open2, setOpen2] = React.useState(false);
//   const anchorRef2 = React.useRef(null);

//   const handleToggle2 = () => {
//     setOpen2(prevOpen2 => !prevOpen2);
//   };

//   const handleClose2 = event => {
//     if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
//       return;
//     }

//     setOpen2(false);
//   };

//   function handleListKeyDown2(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen2(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen2 = React.useRef(open2);
//   React.useEffect(() => {
//     if (prevOpen2.current === true && open2 === false) {
//       anchorRef2.current.focus();
//     }

//     prevOpen2.current = open2;
//   }, [open2]);

//   const [open3, setOpen3]= React.useState(false);
//   const anchorRef3 = React.useRef(null);

//   const handleToggle3 = () => {
//     setOpen3(prevOpen3 => !prevOpen3);
//   };

//   const handleClose3 = event => {
//     if (anchorRef3.current && anchorRef3.current.contains(event.target)) {
//       return;
//     }

//     setOpen3(false);
//   };

//   function handleListKeyDown3(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen3(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen3 = React.useRef(open3);
//   React.useEffect(() => {
//     if (prevOpen3.current === true && open3 === false) {
//       anchorRef3.current.focus();
//     }

//     prevOpen3.current = open3;
//   }, [open3]);

//   return (
//     <div className={classes.root}>
//     <table border="0">
//         <tr>
//             <td align="left">
//                 <div>
//                     <Button
//                     ref={anchorRef}
//                     aria-controls={open ? 'menu-list-grow' : undefined}
//                     aria-haspopup="true"
//                     onClick={handleToggle}
//                     >
//                     Restaurant
//                     </Button>
//                     <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//                     {({ TransitionProps, placement }) => (
//                         <Grow
//                         {...TransitionProps}
//                         style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//                         >
//                         <Paper>
//                             <ClickAwayListener onClickAway={handleClose}>
//                             <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
//                                 <Link to="/menu"><MenuItem onClick={handleClose}>โอวต้าวจี้เปี่ยน</MenuItem></Link>
//                                 <Link to="menu"><MenuItem onClick={handleClose}>ร้านตู้กับข้าว</MenuItem></Link>
//                                 <Link to="menu"><MenuItem onClick={handleClose}>ร้านวันจันทร์</MenuItem></Link>
//                                 <Link to="menu"><MenuItem onClick={handleClose}>ร้านชมจันทร์</MenuItem></Link>
//                                 <Link to="menu"><MenuItem onClick={handleClose}>โกเบ๊นซ์ ข้าวต้มแห้งภูเก็ต</MenuItem></Link>
//                             </MenuList>
//                             </ClickAwayListener>
//                         </Paper>
//                         </Grow>
//                     )}
//                     </Popper>
//                 </div>
//             </td>    
//             <td align="left">
//                 <div>
//                     <Button
//                     ref={anchorRef2}
//                     aria-controls={open2 ? 'menu-list-grow-2' : undefined}
//                     aria-haspopup="true"
//                     onClick={handleToggle2}
//                     >
//                     Drink or Cafe
//                     </Button>
//                     <Popper open={open2} anchorEl={anchorRef2.current} role={undefined} transition disablePortal>
//                     {({ TransitionProps, placement }) => (
//                         <Grow
//                         {...TransitionProps}
//                         style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//                         >
//                         <Paper>
//                             <ClickAwayListener onClickAway={handleClose2}>
//                             <MenuList autoFocusItem={open2} id="menu-list-grow-2" onKeyDown={handleListKeyDown2}>
//                                 <Link to="/menu"><MenuItem onClick={handleClose2}>DouBrew Coffee</MenuItem></Link>
//                                 <Link to="/menu"><MenuItem onClick={handleClose2}>B Cat Cafe</MenuItem></Link>
//                                 <Link to="/menu"><MenuItem onClick={handleClose2}>Pikgo Coffee & Zakka</MenuItem></Link>
//                                 <Link to="/menu"><MenuItem onClick={handleClose2}>The Shelter Coffee</MenuItem></Link>
//                                 <Link to="/menu"><MenuItem onClick={handleClose2}>The Circle Coffee Boutique</MenuItem></Link>
//                             </MenuList>
//                             </ClickAwayListener>
//                         </Paper>
//                         </Grow>
//                     )}
//                     </Popper>
//                 </div>
//             </td>    
//             <td align="left">
//                 <div>
//                     <Button
//                     ref={anchorRef3}
//                     aria-controls={open3 ? 'menu-list-grow-3' : undefined}
//                     aria-haspopup="true"
//                     onClick={handleToggle3}
//                     >
//                     Bakery
//                     </Button>
//                     <Popper open={open3} anchorEl={anchorRef3.current} role={undefined} transition disablePortal>
//                     {({ TransitionProps, placement }) => (
//                         <Grow
//                         {...TransitionProps}
//                         style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//                         >
//                         <Paper>
//                             <ClickAwayListener onClickAway={handleClose3}>
//                             <MenuList autoFocusItem={open3} id="menu-list-grow-3" onKeyDown={handleListKeyDown3}>
//                                 <Link to="/menu"><MenuItem onClick={handleClose3}>Monday Cafe'& Restaurant</MenuItem></Link>
//                                 <Link to="/menu"><MenuItem onClick={handleClose3}>Coff Cake</MenuItem></Link>
//                                 <Link to="/menu"><MenuItem onClick={handleClose3}>Mustard Phuket</MenuItem></Link>
//                                 <Link to="/menu"><MenuItem onClick={handleClose3}>Cofee Talk and Sweet Talk</MenuItem></Link>
//                                 <Link to="/menu"><MenuItem onClick={handleClose3}>Cafe'in</MenuItem></Link>
//                             </MenuList>
//                             </ClickAwayListener>
//                         </Paper>
//                         </Grow>
//                     )}
//                     </Popper>
//                 </div>
//             </td>    
//         </tr>    
//     </table>    
//     </div>
//   );
// }
