import React from 'react'
import './rightcontainer.css'
import Introduction from './Introduction/Introduction'
import OrderRegistrationRequest from './OrderRegistrationRequest/OrderRegistrationRequest'
import CheckThreedsVersionRequest from './CheckThreedsVersionRequest/CheckThreedsVersionRequest'
import PaymentRequest from './PaymentRequest/PaymentRequest'
import Refund from './Refund/Refund'
import StatusCheck from './StatusCheck/StatusCheck'
import BalanceCheck from './BalanceCheck/BalanceCheck'
import MerchantNotificationService from './MerchantNotificationService/MerchantNotificationService'
import ListOfErrorCodes from './ListOfErrorCodes/ListOfErrorCodes'
import Faq from './Faq/Faq'

function RightContainer() {
  return (
    <div className='rightContainer' >
      <Introduction />
      <OrderRegistrationRequest />
      <CheckThreedsVersionRequest />
      <PaymentRequest />
      <Refund />
      <StatusCheck />
      <BalanceCheck/>
      <MerchantNotificationService/>
      <ListOfErrorCodes/>
      <Faq/>
    </div>
  )
}

export default RightContainer