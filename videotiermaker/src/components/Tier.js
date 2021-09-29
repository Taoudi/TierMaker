import React, { Component, useState  } from 'react';
import { TextField, Box,Avatar, List, ListItem, ListItemAvatar, IconButton, ListItemText, ListItemSecondaryAction, Button } from '@material-ui/core';
import { Delete, Folder, AddToQueue }  from '@material-ui/icons';


class Tier extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list:[],
            currentURL:""
        };
        this.addToList = this.addToList.bind(this);
        this.updateURL = this.updateURL.bind(this);
        this.displayItems = this.displayItems.bind(this);
        this.removeItem = this.removeItem.bind(this);
      }


    updateURL(url) {
        this.setState({currentURL:url});
    }
    addToList() {
        this.setState(prevState => ({
            list: [...prevState.list, {'URL':this.state.currentURL, 'Title':this.state.currentURL}]
          }))
        this.setState({currentURL:""});
    }

    removeItem(idx){
        console.log(idx)
        this.setState(prevState => ({list: prevState.list.filter((_,i) => i !== idx)}));
    }

    displayItems(){
       return  this.state.list.map(el => {<div>yo</div>});
    }
    
    render () { 
        const Logo = () => (
            <AddToQueue/>
        )

        const listItems = this.state.list.map((el,idx) => 
            <ListItem >
            <ListItemAvatar>
                <Avatar>
                    <Folder />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={el.URL}
                secondary={el.URL}
                />
            <ListItemSecondaryAction>
                <IconButton onClick={()=>this.removeItem(idx)} edge="end"  aria-label="delete">
                    <Delete  style={{ color:this.props.theme.palette.primary.light }}/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        );

        return(
            <Box inputProps={{style: { textAlign: 'center' }}}>
                <Box m={2} >
                    <TextField size='small' autoFocus multiline rows="10"
                        label="Youtube/Twitch URL"
                        defaultValue=""
                        helperText="Youtube videos and Twitch.tv clips are supported"
                        variant="outlined"
                        onChange={e=>this.updateURL(e.target.value)}
                        borderColor= 'green'
                    />
                    <Button startIcon={<Logo/>} 
                        variant="outlined" size="large" 
                        style={{border: '2px double deeppurple', 
                        background:this.props.theme.palette.primary.dark, 
                        color:this.props.theme.palette.primary.contrastText,
                        iconSize:'large'}} 
                        //onClick={this.addToList} 
                        onClick={()=>this.props.setURL(this.state.currentURL)}
                    >
                        Add URLS
                    </Button>  
                </Box>
                <List dense={false}  display='inline-block'>
                    {listItems}
                </List>
            </Box>
        );
    }
}
export default Tier;