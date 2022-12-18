import w3logo from '../images/w3-logo.png';
import '../Styling/feereceipt.css';
import {useState} from 'react';
import axios from 'axios';

const FeeReceipt = ()=>{

    const [date,setDate] = useState('');
    const [validateDate,setValidateDate] = useState('');
    const [focusDate,setFocusDate] = useState('');
    const [receipt,setReceipt] = useState('');
    const [validateReceipt,setValidateReceipt] = useState('');
    const [focusReceipt,setFocusReceipt] = useState('');
    const [name,setName] = useState('');
    const [validateName,setValidateName] = useState('');
    const [focusName,setFocusName] = useState('');
    const [course,setCourse] = useState('');
    const [validateCourse,setValidateCourse] = useState('');
    const [focusCourse,setFocusCourse] = useState('');
    const [rupeesInWords,setRupeesInWords] = useState('');
    const [validateRupeesInWords,setValidateRupeesInWords] = useState('');
    const [focusRupeesInWords,setFocusRupeesInWords] = useState('');
    const [rupees,setRupees] = useState('');
    const [validateRupees,setValidateRupees] = useState('');
    const [focusRupees,setFocusRupees] = useState('');
    let response = false;

    //for validating the date input
    const dateValidation = (e)=>{
      setDate(e.target.value);
      var today = new Date();
      var cDate = today.toJSON().slice(0, 10);
      var nDate = cDate.slice(8, 10) + '/'
                    + cDate.slice(5, 7) + '/'
                    + cDate.slice(0, 4);
      if(e.target.value === nDate)
      {
        setValidateDate(true);
      }
      else
      {
        setValidateDate(false);
      }
    }

    //for validating the student name
    const nameValidation = (e)=>{
      console.log("inside nameValidation");
      const NAME_REGEX = /^[a-zA-Z][a-zA-Z ]{2,}$/;
      const display = NAME_REGEX.test(e.target.value);
      setName(e.target.value);
      if(display)
      {
        setValidateName(true);
      }
      else 
      {
        setValidateName(false);
      }
      
    }

    //for validating the receipt number
    const receiptValidation = (e)=>{
       
      const RECEIPT_REDUX = /^[0-9]{1,}$/;
      const display = RECEIPT_REDUX.test(e.target.value);
      if(display)
      {
        setValidateReceipt(true);
      }
      else
      {
        setValidateReceipt(false);
      }
        
    }
    
    //for validating the course entered
    const courseValidation = (e)=>{
       setCourse(e.target.value);
       const COURSE_REGEX = /^[a-zA-Z][a-zA-Z ]{2,}/;
       const display = COURSE_REGEX.test(e.target.value);
       if(display)
       {
        setValidateCourse(true);
       }
       else
       {
        setValidateCourse(false);
       }
    }

    //for validating the rupessInWords
    const rupeesInWordsValidation = (e)=>{
          setRupeesInWords(e.target.value);
          const RUPEESINWORDS_REGEX = /^[a-zA-Z][a-zA-Z, ]{2,}$/;
          const display = RUPEESINWORDS_REGEX.test(e.target.value);
          if(display)
          {
            setValidateRupeesInWords(true);
          }
          else
          {
            setValidateRupeesInWords(false);
          }
    }

    //for validating the rupees
    const rupeesValidation = (e)=>{
      setRupees(e.target.value);
      const RUPEES_REGEX = /^[0-9][0-9,]{2,}$/;
      const display = RUPEES_REGEX.test(e.target.value);
      if(display)
      {
         setValidateRupees(true);
      }
      else
      {
        setValidateRupees(false);
      }

    }

    //for handling the submittion.
    const handleSubmit = async (e)=>{
        e.preventDefault();
        window.print();
        var bodyFormData = new FormData();
        bodyFormData.append("date",date);
        bodyFormData.append("receipt",receipt);
        bodyFormData.append("name",name);
        bodyFormData.append("course",course);
        bodyFormData.append("rupeesInWords",rupeesInWords);
        bodyFormData.append("rupees",rupees);
        response = await axios({
                method: 'post',
                url: 'http://localhost:8080/saveFeeReceiptData',
                data: bodyFormData,
                headers: { "Content-Type": "application/json" },
              }).then(function (response) {
                //handle success
                console.log(response);
              })
              .catch(function (response) {
                //handle error
                console.log(response);
              });
            }

    return (<div className='formoutline'>
            <div className='heading'><img src={w3logo}></img></div>
            <div className='heading'><span>2nd Floor, Pottem Plaza Complex, Opp Vennela Ice Creams ,Near VRC,Nellore-524001.</span><span><h4 style={{"marginTop":"0px"}}>Ph:7416939333</h4></span><span><h2 style={{"marginTop":"0px","fontFamily":"serif","fontWeight":"bold"}}>FeeReceipt</h2></span></div>
            <div className="flexdiv">
                <span><label className='name'>Date:</label>
                <input type="text" className="dateinput" onChange={(e)=>{dateValidation(e)}} onFocus={()=>setFocusDate(true)} onBlur={()=>setFocusDate(false)}></input>
                { !validateDate && focusDate ?  <p className="datevalidate">Please enter date in dd/mm/yyyy format</p>:<span></span> }
                </span>
                <span><label className="receipt">Receipt:</label>
                <input type="text" className="receiptinput" onChange={(e)=>receiptValidation(e)} onFocus={()=>setFocusReceipt(true)} onBlur={()=>setFocusReceipt(false)}></input>
                { !validateReceipt && focusReceipt ? <p className="receiptvalidate">Only enter the number</p>:<span></span> }
                </span>
            </div>
            <div className="inputdivs">
                <label className="name">Student Name:</label>
                <input type="text"  className="inputstyle" onChange={(e)=>{nameValidation(e)}} onFocus={()=>setFocusName(true)} onBlur={()=>setFocusName(false)}></input>
                { !validateName && focusName ?  <p className="namevalidate">Name should contain only alphabets and spaces and more than 2 alphabets</p>:<span></span> }
            </div>
            <div className="inputdivs">
                <label className='name'>Course:</label>
                <input type="text" className="coursestyle" onChange={(e)=>courseValidation(e)} onFocus={()=>{setFocusCourse(true)}} onBlur={()=>setFocusCourse(false)}></input>
                { !validateCourse && focusCourse ? <p className="coursevalidate">course should contain only alphabets and spaces and more than 2 alphabets</p>:<span></span> }
            </div>
            <div className="inputdivs">
                <label className='name'>Rupees In Words:</label>
                <input type="text" className="rupeesinwordsinputstyle" onChange={(e)=>rupeesInWordsValidation(e)} onFocus={()=>setFocusRupeesInWords(true)} onBlur={()=>setFocusRupeesInWords(false)}></input>
                {!validateRupeesInWords && focusRupeesInWords ? <p className="rupeesInWordsvalidate">rupeesInWords  should contain only alphabets and spaces and more than 2 alphabets and commas</p>:<span></span>}
            </div>
            <div className="inputdivs">
                <label className="name">Rupees:</label>
                <input type="text" onChange={(e)=>rupeesValidation(e)} onFocus={()=>setFocusRupees(true)} onBlur={()=>setFocusRupees(false)} className="rupeesinput"></input>
                { !validateRupees && focusRupees? <p className="rupeesvalidate">rupees should contains only numbers and commas</p> : <span></span>}
            </div>
            <div className="signature"><span>Signature Of Authority</span></div>
            <center><button className='submitbutton' onClick={(e)=>{handleSubmit(e)}}>Submit&Print</button></center>
            </div>)
};

export default FeeReceipt;