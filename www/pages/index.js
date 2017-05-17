import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import Spinner from '../copied-src/src/';

class SpinnerExamples extends React.Component {
  render() {
    return (
      <div>
        <h1>React-Spinkit</h1>
        <a href="https://github.com/KyleAMathews/react-spinkit">Browse code on GitHub</a>

        <br /><br /><br />

        <h3>Spinner Types</h3>

        <code>&lt;Spinner spinnerName="three-bounce" /&gt;</code>
        <Spinner spinnerName="three-bounce" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="double-bounce" /&gt;</code>
        <Spinner spinnerName="double-bounce" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="rotating-plane" /&gt;</code>
        <Spinner spinnerName="rotating-plane" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="folding-cube" /&gt;</code>
        <Spinner spinnerName="folding-cube" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="wave" /&gt;</code>
        <Spinner spinnerName="wave" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="wandering-cubes" /&gt;</code>
        <Spinner spinnerName="wandering-cubes" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="pulse" /&gt;</code>
        <Spinner spinnerName="pulse" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="chasing-dots" /&gt;</code>
        <Spinner spinnerName="chasing-dots" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="circle" /&gt;</code>
        <Spinner spinnerName="circle" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="cube-grid" /&gt;</code>
        <Spinner spinnerName="cube-grid" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="wordpress" /&gt;</code>
        <Spinner spinnerName="wordpress" />

        <br /><br /><br />

        <h3>Spinner Options</h3>

        <code>&lt;Spinner spinnerName="wordpress" fadeIn="none" /&gt;</code>
        <Spinner spinnerName="wordpress" fadeIn="none" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="wordpress" fadeIn="half" /&gt;</code>
        <Spinner spinnerName="wordpress" fadeIn="half" />

        <br /><br /><br />

        <code>
          &lt;Spinner spinnerName="wordpress" overrideSpinnerClassName="my-class-to-override" /&gt;
        </code>

        <Spinner spinnerName="wordpress" overrideSpinnerClassName="my-class-to-override" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="wordpress" className="my-class" /&gt;</code>
        <Spinner spinnerName="wordpress" className="my-class" />

        <br /><br /><br />

        <code>&lt;Spinner spinnerName="wordpress" color="green" /&gt;</code>
        <Spinner spinnerName="wordpress" color="green" />
      </div>
    );
  }
}

export default SpinnerExamples;
