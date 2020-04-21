import React from 'react';
import {Spring} from 'react-spring/renderprops';
import {ResultWrapper, ImageWrapper} from './styled';


const Result = ({result, i}) => {
    return (
        <ResultWrapper>
            <Spring
                from = {{opacity: 0, transform: 'translateY(30px)'}}
                to = {{opacity: 1, transform: 'translateY(0)'}}
                config={{delay: i*100}}>
                {springProps => <div style={springProps}>
                    <a href={result.toJS().trackViewUrl} target="_blank"><ImageWrapper src = {result.toJS().artworkUrl100} alt = {result.artistName} /></a>
                </div>}
            </Spring>
        </ResultWrapper>
    )
}

export default Result;
