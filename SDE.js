function lambda(input, callback) {
  // import FaaS Toolbelt
  const { Toolbelt, SDETypes } = require("lp-faas-toolbelt");

  // Create instance
  const sdeUtil = Toolbelt.SDEUtil();

  // Define parameters
  const visitorId = input.payload.visitorId;
  const sessionId = input.payload.sessionId;
  const sdes = [
    {
        type: SDETypes.PERSONAL_INFO,
        personal: {
          firstname: input.payload.firstName,
          lastname: input.payload.lastName,
            contacts: [
                {
                  phone: input.payload.visitorPhone,
                  email: input.payload.visitorMail
                }
            ],
          language: input.payload.visitorLanguage
        }
    },
    {
        type: SDETypes.CUSTOMER_INFO,  //MANDATORY
           info: {
             customerId: input.payload.customerId,  //UNIQUE CUSTOMER IDENTIFIER
             
             },

        },
        
        ];

  // Add SDEs
  sdeUtil.addSDEs(sdes, visitorId, sessionId)
  .then(response => {return callback(null, "Success")}) //TODO: react to the response
  .catch(err => {}); //TODO: React to error
}
