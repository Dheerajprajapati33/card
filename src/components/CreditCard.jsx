import { useContext } from "react"
import { CardContext } from "../context/CardContext"
import chip from '../assets/chip.png';


const CreditCard = () => {
// card flip property will be shown here using context API
  const {cardData, flip, setFlip} = useContext(CardContext)
  return (
    <>
    {/* container  */}
      <div className="container my-5">
        {/* card container which contain the property of flip */}
        <div className={`card-container ${flip ? "flip" : ""}`}>
{/*front side of card part will be start here   */}
          <div className="card-inner">
        {/*  */}
        <div className="card-front text-center shadow-lg p-4" style={{width:"350px", height: "200px", borderRadius: "15px", background:"linear-gradient(135deg, #6294f0, #2a5298"}}>
          {/* div for image and choose card type */}
          <div className="d-flex justify-content-between align-items-center">
            {/* image of the chip will be shown here which is inside the assests */}
            <img src={chip} alt="chip" style={{width: "50px", height:"40px"}}/>
            {/* show the logo VISA/RUPAY?masterCard */}
            <h5>{cardData.cardType}</h5>
          </div>
          
          {/* its user for showing card number  */}
          <div className="mt-3">
            <h4>{cardData.cardNumber}</h4>
          </div>

          {/* its shows the card holder name  */}
            <div className="d-flex justify-content-between mt-4">
              <div>
              <h6>Card Holder</h6>
              <p className="">{cardData.cardName}</p>
            </div>

            {/* its shows the expiry date  */}
             <div>
              <h6>Expires</h6>
              <p className="">{cardData.expiryDate}</p>
            </div>
          </div>
        </div>

{/* here its back side of card when user click on flip button*/}
          <div className="card-back">
            {/* mgnetic strip of black color will be shown */}
            <div className="magnetic-strip"></div>
            {/* its a signature part of user */}
              <div className="signature-area">
                {/* this shows the signature as it is  */}
                <div className="signature-strip">Authorized Signature</div>
                {/* the cvv will be shows which contain the 3 digits only  */}
                <div className="cvv-box">{cardData.cvv}</div>
              </div>
          </div>
        </div>
        {/* flip card button will be cretaed for showing front and back part of card */}
        <button className="btn btn-dark mt-3" onClick={()=>setFlip(!flip)}>flip-card</button>
        </div>
        </div>
    </>
  )
}

export default CreditCard
