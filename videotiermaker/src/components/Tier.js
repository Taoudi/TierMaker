import React, {  useCallback, useEffect, useState  } from 'react';
import { TextField, Box,Avatar, List, ListItem, ListItemAvatar, IconButton, ListItemText, ListItemSecondaryAction, Button } from '@material-ui/core';
import { Delete, Folder, AddToQueue }  from '@material-ui/icons';



function Tier(props) {
    
        const [list, setList] = useState([]);
        const [currentURL, setCurrentURL] = useState('');
        const [URL, setURL] = useState('');
        const [results, setResults] = useState([]);


        const updateURL = useCallback((url) => {
            setCurrentURL(url);
        },[]);

        const addToList = useCallback((newData) =>{
            console.table(newData);
            /*setList(prevList => (
                [prevList.concat(newData)]
              ));*/
            setList(list.concat(newData));
            console.log(list);
            setCurrentURL("");
        },[]);
        
        const removeItem = useCallback((idx) =>{
            console.log(idx)
            setList(prevList => (prevList.filter((_,i) => i !== idx)));
        },[]);
        
        /*const displayItems = useCallback(() =>{
           return list.map(el => {<div>yo</div>});
        },[]);*/
 
        useEffect(() => {
            // POST request using fetch inside useEffect React hook
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 'URLS': URL })
            };
            if(currentURL!=="")
                fetch('/api/handleURLS', requestOptions)
                    .then(response => response.json())
                    .then(data => addToList(data.videos))
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
        }, [URL]);
    
        const Logo = () => (
            <AddToQueue/>
        )

        const listItems = list.map((el,idx) => 
            <ListItem >
            <ListItemAvatar>
                <Avatar>
                    <Folder />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={el.title}
                secondary={el.id}
                />
            <ListItemSecondaryAction>
                <IconButton onClick={()=>removeItem(idx)} edge="end"  aria-label="delete">
                    <Delete  style={{ color:props.theme.palette.primary.light }}/>
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
                        onChange={(e)=>updateURL(e.target.value)}
                        borderColor= 'green'
                    />
                    <Button startIcon={<Logo/>} 
                        variant="outlined" size="large" 
                        style={{border: '2px double deeppurple', 
                        background:props.theme.palette.primary.dark, 
                        color:props.theme.palette.primary.contrastText,
                        iconSize:'large'}} 
                        //onClick={this.addToList} 
                        onClick={()=>setURL(currentURL)}
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
export default Tier;