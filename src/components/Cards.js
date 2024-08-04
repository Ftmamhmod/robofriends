import React from 'react'

function Card(props) {
  const {name, email , id } = props;
  return (<>
        <div className=' bg-light-green br3 pa3 ma2 dib bw2 shadow-5 tc grow'>
        <img alt='ropot' src={`https://robohash.org/${id}?200x200`} />
          <div>

            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </div>
      </>
      )
}

      export default Card
