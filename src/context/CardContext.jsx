import { createContext, useState } from "react";

export const CardContext = createContext();

const CardProvider =({children})=>{
//  here the card data will be set 
  const [cardData , setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });
  //flip button will be here set here 
  const [flip, setFlip] = useState(false);

  return(
    <>
  {/* providing global card state (card details + flip animation state) to all child components     using react context */}
     <CardContext.Provider value={{cardData, setCardData, flip, setFlip}}>{children}</CardContext.Provider>
    </>
  )
}
export default CardProvider;