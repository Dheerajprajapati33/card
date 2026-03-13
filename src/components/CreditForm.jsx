import { useFormik } from 'formik'
import * as Yup from 'yup'
import {useContext} from 'react'
import { CardContext } from '../context/CardContext'
import { useNavigate } from 'react-router'

const CreditForm = () => {
  // navigate to locate on that particular page 

  const navigate = useNavigate();
  // set the cardData and flip property

  const {setCardData, setFlip} = useContext(CardContext);
  //here we initialize the data what we want to show here 
  const initialValues={
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    cardType: "VISA"
  }

  // Formik will be used 
  const{values, errors, touched, handleChange, handleBlur, handleSubmit}=(
    useFormik({
      initialValues,
      // yup validation schema 
      validationSchema: Yup.object({
      cardNumber: Yup.string().required("Don't be blank"),
      cardName: Yup.string().required("Name should be proper"),
      expiryDate: Yup.string().required("Expiry date shoould be month and year only"),
      cvv: Yup.string().required("Should be required").min(3,"3 number should be mandatory")
      }),
      //  submit the data 
        onSubmit: (value)=>{
          setCardData(value)
          // navigate to card page 
          navigate("/card")
        }
    })
  )

  // card number in formatted 
  const formatCardNumber = (value)=>{
    return value
    .replace(/\D/g, "")
    // its divided into 4 slots 
    .replace(/(.{4})/g, "$1 ")
    // trim will be used to combine
    .trim()
  }

  // expiry date should be format
  const formatExpiry = (value)=>{
    const cleaned = value.replace(/\D/g, "");
    // 
    const trimmed = cleaned.slice(0,4);
    // here we check for 01 to 12 month will be used 
    if(trimmed.length >= 2){
      const month = parseInt(trimmed.slice(0,2));
      // check condition
      if(month < 1 || month > 12){
        return "";
      }
    }
    // Then now check the total 4 element contains 
    if(trimmed.length >=3){ 
      // first its used to value then use / after that 2 value more to store 
      return trimmed.slice(0,2) + "/" + trimmed.slice(2,4);
    }
    return trimmed;
  }

  return (
    <>
      <div className="container mt-5">
        {/* use for handle submitting data */}
        <form className='' onSubmit={handleSubmit}>
          {/* here the card form will be design  */}
        <div className="card p-4 shadow">
          {/* heading to show the user to fill the data */}
          <h3 className='text-center mb-3'>Enter Card Details</h3>

          {/* card number */}
          <div className='mb-3 fs-5'>
            <label>Card Number</label>
            <input type='text' className='form-control' name='cardNumber' maxLength={19} onChange={(e)=>{
              // here we use the formatted card number
              const formatted = formatCardNumber(e.target.value)
              handleChange({
                target:{name:"cardNumber", value:formatted}
              })
              }} onBlur={handleBlur} value={values.cardNumber}/>
            {
              touched.cardNumber && errors.cardNumber && (
                 <small className='text-danger'>{errors.cardNumber}</small>
            )}
          </div>

          {/* card holder name  */}
          <div className='mb-3 fs-5'>
            <label>Card Holder name</label>
            <input type='text' className='form-control' name='cardName' onChange={handleChange} onBlur={handleBlur} value={values.cardName}/>
            {
              touched.cardName && errors.cardName && (
                 <small className='text-danger'>{errors.cardName}</small>
            )}
          </div>

          {/* expiryDate */}
          <div className='mb-3 fs-5'>
            <label>Expiry Date </label>
            <input type='text' className='form-control' name='expiryDate' onChange={(e)=>{
              // const the expiry date 
              const formatted = formatExpiry(e.target.value)
              handleChange({
                target:{name: "expiryDate", value:formatted}
              })
            }} onBlur={handleBlur} value={values.expiryDate}/>
            {
              touched.expiryDate && errors.expiryDate && (
                 <small className='text-danger'>{errors.expiryDate}</small>
            )}
          </div>

          {/* card type */}
          <div className="mb-3 fs-5">
            <label>Select Card Type</label>
            <select className='form-control' name='cardType' value={values.cardType} onChange={handleChange}>
              <option value="VISA">VISA</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
          </div>

          {/* cvv number  */}
          <div className='mb-3 fs-5'>
            <label>CVV</label>
            <input type='text' className='form-control' name='cvv' onChange={(e)=>{
              const numbers = e.target.value.replace(/\D/g, "")
              handleChange({
                target:{name: "cvv", value:numbers}
              })
            }}value={values.cvv} maxLength={3}
            // here its shows the flip property when its back side show then its true and shows the cvv number otherwise the front part will be false its not shows 
            onFocus={()=>setFlip(true)} onBlur={()=>setFlip(false)}
            />
            {
              touched.cvv && errors.cvv && (
                 <small className='text-danger'>{errors.cvv}</small>
            )}
          </div>
  
          {/* submit button */}
          <input type='submit' className='btn btn-primary' value="Submit"/>

        </div>
        </form>
      </div>
    </>
  )
}

export default CreditForm
