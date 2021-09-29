import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import { Button, IconButton, Icon } from '@material-ui/core';


  

class NavBar extends Component {
    constructor(props) {
        super(props);
        
      }

    createTier = () => {
        this.props.handleClick("tier");
    }

    handlePages(){
        this.props.handleClick("home"); 
     }
    

    render () {
        const Logo = () => (
            <Icon>
                <img src={"./icons/shadowtiericon.png"} height={25} width={25}/>
            </Icon>
        )

     
       

        return(
            console.log(this.props.bcolor),
            <div>
            <AppBar style={{background:this.props.bcolor}} position="static" boxShadow={10}>
                <Toolbar>
                <Button><img onClick={() => this.handlePages()} style={{ flex: 0.1 }} src="./logos/tiermakerlogo.jpg" alt="logo" /></Button>
                    <div style={{ flex: 0.35 }}></div>
                    <Button onClick={() => this.props.handleClick("tier")} variant="outlined" size="Medium" style={{border: '1px double deeppurple', background:this.props.bcolor, color:this.props.tcolor}} 
                        startIcon={<Logo />}>
                        Rate Some Videos
                    </Button>
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}
export default NavBar;
//ViewListRoundedIcon