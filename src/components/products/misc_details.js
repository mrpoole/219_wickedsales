import React from 'react';
import { toWords } from '../../helpers';

export default props => {
    const { details } = props;
    const parsedDetails = JSON.parse(details);
    console.log('Misc Details Props:', parsedDetails);
    console.log('Object keys:', Object(parsedDetails));

    const additionalInfo = Object.keys(parsedDetails).map(key => {
        let values = parsedDetails[key];

        if(Array.isArray(values)){
            values = values.join(',');
        };

        return (
            <tr key={key}>
                <td>{toWords(key)}</td>
                <td>{toWords(values)}</td>
            </tr>
        );
    })

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Additional Information</th>
                </tr>
            </thead>
            <tbody>
                {additionalInfo}
            </tbody>
        </table>
    );
}