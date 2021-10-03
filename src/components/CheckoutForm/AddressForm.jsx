import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { commerce } from "../../lib/commerce";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";
const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setshippingCountries] = useState([]);
  const [shippingCountry, setshippingCountry] = useState("");
  const [shippingOptions, setshippingOptions] = useState([]);
  const [shippingOption, setshippingOption] = useState("");
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenID) => {
    //this countries is in object notation
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenID
    );
    setshippingCountries(countries);
    //this gives me the keys of each object
    setshippingCountry(Object.keys(countries)[0]);
  };
  //   now this becomes an array with id of code and labell name
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const fetchShippingOptions=async(checkoutTokenId,country)=>{
      const options=await commerce.checkout.getS
  }
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <CustomTextField required name="firstName" label="First Name" />
            <CustomTextField required name="lastName" label="Last Name" />
            <CustomTextField required name="Address1" label="Address" />
            <CustomTextField required name="City" label="City" />
            <CustomTextField required name="Email" label="Email" />
            <CustomTextField required name="postalCode" label="Zip Code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setshippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
              Country
            </Grid>
            {/* 

            <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select value={} fullWidth onChange={}>
                    <MenuItem key={} value={}>
                        Select me
                    </MenuItem> 
                </Select>
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
