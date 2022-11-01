const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_spa_susi",
        editProfile: "B2C_1_profileedit"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://pnamathe.b2clogin.com/pnamathe.onmicrosoft.com/b2c_1_spa_susi",
        },
        editProfile: {
            authority: "https://pnamathe.b2clogin.com/pnamathe.onmicrosoft.com/Your-B2C-EditProfile-Policy-Id"
        }
    },
    authorityDomain: "pnamathe.b2clogin.com"
}