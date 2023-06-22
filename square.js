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
    clientId: 'sq0idp-u6A3sYjkrBqJ2RzbHpoKVg',
    clientSecret: 'EAAAFMl6YyDra9NoASX74O-w-EVuJUr_hRbdXUq9WBlVsDupaGFkTlhRbTTUpBr3',
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