import React, { Component } from 'react';
import Box from '@material-ui/core/Box';


class Home extends Component {
    constructor(props) {
        super(props);
        
      }


      
    render () {


     
       

        return(
            <Box sx={{width:'50%', top:'25%',left:'25%', padding: '10px', position:'absolute', textAlign:'center', border: '1px double grey' }}>
                <div>Welcome to TierMaker, Video Edition</div>
            </Box>
        );
    }
}
export default Home;