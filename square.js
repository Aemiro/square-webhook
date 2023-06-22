const { Client, Environment, ApiError } = require("square");

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Production,
});

const { locationsApi } = client;

async function getLocations() {
  try {
    let listLocationsResponse = await locationsApi.listLocations();

    let locations = listLocationsResponse.result.locations;

    locations.forEach(function (location) {
      console.log(
        location.id + ": " +
          location.name +", " +
          location.address.addressLine1 + ", " +
          location.address.locality
      );
    });
  } catch (error) {
    if (error instanceof ApiError) {
      error.result.errors.forEach(function (e) {
        console.log(e.category);
        console.log(e.code);
        console.log(e.detail);
      });
    } else {
      console.log("Unexpected error occurred: ", error);
    }
  }
};
const getToken=async (payload)=>{
  try {
  const response = await client.oAuthApi.obtainToken({
    clientId: 'sq0idp-B10AJ7ZYeMBMC24rsmrTeA',
    clientSecret: 'EAAAFB6LbMdu2kuJRcP0gcv8vjZ88ey6oOCr3oaMyGlQJmDc5IlkH7Y02_vO_ob6',
    code: payload.Code,//'sq0cgp-JEICoNFJNeQMVgaukGHMDQ',
    redirectUri: payload.RedirectUrl,
    grantType: 'authorization_code',
    scopes: [
    ],
    shortLived: payload.ShortLived
  });

 return response;
} catch(error) {
  throw error;
}  
}
module.exports={getLocations, getToken};
// getLocations()