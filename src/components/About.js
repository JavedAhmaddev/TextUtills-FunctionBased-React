import React from 'react'

export default function About(props) {

  // const [myStyle, setmyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
   
  // const[btntext ,setBtnText]=useState("Enable dark mode")


  // const toggleStyle = ()=>  {
  //   if(myStyle.color === 'black'){
  //     setmyStyle({
  //       color:'white',
  //       backgroundColor:'black', 
  //       border: '1px solid white'
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else{
  //     setmyStyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  // }

    let myStyle={
      color:props.mode === 'dark'?'white':'#042743',
      backgroundColor:props.mode === 'dark'?'rgb(36 73 104)':'white',
    }

  
  return (
    <div className="container" >
      <h1 className="container m-3" style={{color:props.mode === 'dark'?'white':'#042743'}}> About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong> Analyze your text </strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              
                  When you analyze a text, you give it meaning beyond what the text tells you directly. What is analysis? When you analyze a text, you ask questions about it so that <strong> you can offer an interpretation of the text</strong>.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong> Free to use </strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong> Free definition is</strong>  - not costing or charging anything. How to use free in a sentence. Can Something Be 'For free?' Synonym Discussion of free.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong> Browser compatible </strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            The term browser compatibility refers to the <strong>ability of a certain website to appear fully functional </strong> on different browsers that are available in the market. This means that the website's HTML coding, as well as the scripts on that website, should be compatible to run on the browsers.
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}
