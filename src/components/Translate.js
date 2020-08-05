import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Swedish',
        value: 'sv'
    },
    {
        label: 'Slovak',
        value: 'sk'
    },
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'Norwegian',
        value: 'no'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Latin',
        value: 'la'
    },
    {
        label: 'Maori',
        value: 'mi'
    },
    {
        label: 'Italian',
        value: 'it'
    },
    {
        label: 'Icelandic',
        value: 'is'
    },
    {
        label: 'Hebrew',
        value: 'he'
    },
    {
        label: 'Greek',
        value: 'el'
    },
    {
        label: 'Irish',
        value: 'ga'
    },
    {
        label: 'Scots Gaelic',
        value: 'gd'
    },
    {
        label: 'Zulu',
        value: 'zu'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form" style={{marginBottom:"10px"}}>
                <div className="field">
                    <label>Enter Text:</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
                options={options} 
                selected={language}
                onSelectedChange={setLanguage}
                label="Select a Language"
            />
            <hr style={{marginTop:"30px"}} />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate;