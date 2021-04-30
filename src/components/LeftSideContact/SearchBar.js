import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";

import './SearchBar.css';

class Search extends React.Component {
    state = {
        value: ''
    }
    render() {

        return (
            <div>
                <Grid container spacing={1} style={{ margin: '0% 15% 2% 2%' }}>
                    <Grid item xs={10}>
                        <SearchBar
                            value={this.state.value}
                            onChange={(newValue) => this.setState({ value: newValue })}
                            placeholder="Search here..."
                            style={{marginTop:'2%'}}
                         //onRequestSearch={() => doSomethingWith(this.state.value)}
                        />
                        {/* <div className="SearchBar">
                            <input type="text" placeholder="Search here..." />
                                <SearchIcon />
                        </div> */}
                        
                    </Grid>
                        <Grid item xs={2}>
                            <AddCircleRoundedIcon style={{ fontSize: '28px', marginTop: '15px', marginRight:'3px' }} />
                        </Grid>
                    </Grid>

            </div>
        )
    }
}

export default Search;