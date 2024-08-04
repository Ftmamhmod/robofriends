import React from 'react'

function SearchBox( {searchfiled ,SearchChange}) {
    return (<>
    <div className='pa2 '>
    <input className='pa3 ba b--green bg-lightest-blue'  placeholder='Search robots' type='search' onChange={SearchChange}/>
    </div>
    <br/>
    </>
        
    )
}

export default SearchBox
