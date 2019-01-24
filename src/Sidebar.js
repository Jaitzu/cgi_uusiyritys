import React from 'react';
import styled from "styled-components";
import getSelectedLocatoinId from './locationGetter';

function Sidebar({selectedLocationId, observationLocations}) {
    const id = getSelectedLocatoinId(selectedLocationId);

    const loc = observationLocations.find(loc => loc.info.id === id);
    return <div>

        <pre>Measurement station: <br/> {loc && JSON.stringify(loc.info.name)}</pre>
        <pre>Temperature: {loc && JSON.stringify(loc.data.t.timeValuePairs[loc.data.t.timeValuePairs.length - 1].value,null, 2)  }°C </pre>
        <pre>Amount of rain: {loc && JSON.stringify(loc.data.r_1h.timeValuePairs[loc.data.r_1h.timeValuePairs.length - 1].value,null, 2)  } mm </pre>
        <pre>Snowdepth: {loc && JSON.stringify(loc.data.snowdepth.timeValuePairs[loc.data.snowdepth.timeValuePairs.length - 1].value,null, 2)  } cm </pre>

    </div>
}

export default styled(Sidebar)`
    width: 300px;
    height: 100vh;
`;