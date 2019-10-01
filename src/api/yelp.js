import axios from 'axios';

export default axios.create ({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: { 
    Authorization: 
      'Bearer PiA6sQ5uM-5voQVtePCTPGi4aD5m78lDVBKndElQBUhLVksgZ-05430El_Lk7lgn1iAa8vkmi_wjiRQWjLJnhhylzo9QtqXiyByD9GT_ifptrVN5_4mpD0FN92CIXXYx'
}
});





