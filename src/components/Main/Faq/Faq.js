import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq-container'>
            <div className='question-wrapper'>
                <h2 className='question'>How does react works?</h2>
                <p className='answer'>Basically, React uses two packages  and <b>React</b> and <b>React DOM</b>. We create a component in Javascript. We need to convert this javascript code into HTML because the webpages we seen into browser all are HTML code. So,we use react package to convert is js file to html code. React automatically  convert the component into html code.
                    <br /> <br></br>
                    Now er need to inject this converted html code to a html file. For this step we use react DOM.
                </p>
            </div>

            <div className='question-wrapper'>
                <h2 className='question'>Difference between props and state in react</h2>
                <p className='answer'>In a React component, props(short for properties) are variables passed to it by its parent component.
                <br /> <br></br>
                    State on the other hand is still variables, but directly initialized and managed by the component.The state can be initialized by props.
                </p>
            </div>

            <div className='question-wrapper'>
                <h2 className='question'>Use of useeffect in react</h2>
                <p className='answer'>
                    <ul>
                        <li>Running once on mount: fetch API data</li>
                        <li>Running on state change: validating input field</li>
                        <li>Running on state change: live filtering</li>
                        <li>Running on state change: trigger animation on new array value</li>
                        <li>Running on props change: updating fetched API data</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Faq;