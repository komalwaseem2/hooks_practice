import { memo, useEffect } from 'react';

const Name = memo(function Name(props) {

    //useEffect(()=>{alert("rendering")});

  return (<>
    <label>{props.name}</label>
  </>)

});

export default Name;