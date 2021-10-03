import Commerce from '@chec/commerce.js'

// true means that this is going to create a new ecommerce store 
// for a fully functional application , we need a proper backend , database everything but this is again a REST API 
export const commerce=new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY , true );