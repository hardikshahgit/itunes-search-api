import React from 'react';
import {connect} from 'react-redux';
import {getSearchResults} from './action';
import {SearchWrapper, InputStyle, ImageWrapper} from './styled';
import logo from '../../images/ituneslogo.png';

const Search = (props) => {
    
    return (
        <SearchWrapper>
            <ImageWrapper src={logo}/>
            <InputStyle onChange = {e=> onInputChange(e,props)} />
        </SearchWrapper>
    )
}

const onInputChange = async (e,props) => {
    if(e.target.value.trim() !== ''){
        props.getSearchResults(e.target.value);
    }
}

const mapDispatchToProps = {
    getSearchResults
};  


export default connect(null, mapDispatchToProps)(Search);
