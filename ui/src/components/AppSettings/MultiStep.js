import React, {useState} from 'react'
import axios from '../../axios-jobs';
// import Alert from 'react-s-alert';
const getNavStyles = (indx, length) => {
  let styles = []
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push('done')
    } else if (i === indx) {
      styles.push('doing')
    } else {
      styles.push('todo')
    }
  }
  return styles
}

const getButtonsState = (indx, length) => {
  if (indx > 0 && indx < length - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true
    }
  } else if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true
    }
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false
    }
  }
}

export default function MultiStep(props) {
  const [stylesState, setStyles] = useState(getNavStyles(0, props.steps.length))
  const [compState, setComp] = useState(0)
  const [buttonsState, setButtons] = useState(getButtonsState(0, props.steps.length))
  
  // const [tables, settables] = useState([])
  function setStepState(indx) {
    if(indx === 1) {
      console.log(props.myData)
      axios.post('/api/sources', props.myData)
      .then((response) => {
        axios.get('/api/sources/1/tables')
        .then((response) => {
          console.log(response.data)
          // this.setState({tables:response.data});
          // settables(response.data);
          props.setTable(response.data);
          setWizardPage(indx);
        })
        .catch((error) => {
          console.log(error);
        })
      })
      .catch((error) => {
        console.log(error);
      })
    } else {
      setWizardPage(indx)
    }
  }

  function setWizardPage(indx) {
    setStyles(getNavStyles(indx, props.steps.length))
    setComp(indx < props.steps.length? indx : compState)
    setButtons(getButtonsState(indx, props.steps.length))
  }

  const next = () => setStepState(compState + 1)
  
  const previous = () => setStepState((compState > 0) ? compState - 1 : compState)

  const handleKeyDown = (evt) => evt.which === 13 ? next(props.steps.length) : {}

  const handleOnClick = (evt) => {
    if (evt.currentTarget.value === props.steps.length - 1 && compState === props.steps.length - 1) {
      setStepState(props.steps.length)
    } else {
      setStepState(evt.currentTarget.value)
    }
  }

  const renderSteps = () => 
    props.steps.map((s, i) => (
      <li
        className={'progtrckr-' + stylesState[i]}
        onClick={handleOnClick}
        key={i}
        value={i}
      >
        <em>{i + 1}</em>
        <span>{props.steps[i].name}</span>
      </li>
    ))

  return (
      <div className='container' onKeyDown={handleKeyDown}>
        <ol className='progtrckr'>
          {renderSteps()}
        </ol>
        {props.steps[compState].component}
        <div style={props.showNavigation ? {} : { pointerEvents: 'none', background: 'gray' }}>
          <button className="btn btn-primary"
            style={buttonsState.showPreviousBtn ? {} : { pointerEvents: 'none', background: 'gray' }}
            onClick={previous}
          >
            Previous
          </button>
          <button className="btn btn-primary"
            style={buttonsState.showNextBtn ? {} : { pointerEvents: 'none', background: 'gray' }}
            onClick={next}
          >
            Next
          </button>
        </div>
      </div>
  )
}

MultiStep.defaultProps = {
  showNavigation: true
}
