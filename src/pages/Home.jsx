// here the creditcard import
import CreditCard from '../components/CreditCard'
// its a creditform import 
import CreditForm from '../components/CreditForm'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* creditform  */}
            <div className="col-md-6"><CreditForm/></div>
          {/* creditCard */}
            <div className="col-md-6"><CreditCard/></div>
        </div>
      </div>
    </>
  )
}

export default Home
