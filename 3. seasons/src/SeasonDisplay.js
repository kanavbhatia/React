import React from 'react';

const getSeason = (lat, month)=>{
    if(month>3 && month<9){
        return lat>0? 'summer' :'winter'
    }
    else{
        return lat>0? 'winter' :'summer'
    }

}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const text = season === 'winter' ? 'Burr, its chilly' : 'Lets, go to the beach'
    return(
        <div>{text}</div>
    )
}

export default SeasonDisplay