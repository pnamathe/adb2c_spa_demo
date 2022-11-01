const msalConfig = {
    auth: {
    clientId: "57c226c8-71c9-424e-bed8-10e9e4ed2530", 
    authority: b2cPolicies.authorities.signUpSignIn.authority, 
    knownAuthorities: [b2cPolicies.authorityDomain], 
    redirectUri: "http://localhost:6420",
    },
    cache: {
    cacheLocation: "localStorage", 
    storeAuthStateInCookie: false, 
    }
};

const loginRequest = {
scopes: ["openid", ...apiConfig.b2cScopes],
};

const tokenRequest = {
scopes: [...apiConfig.b2cScopes],
forceRefresh: false
};