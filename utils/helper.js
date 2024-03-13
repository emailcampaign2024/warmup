import toast from "react-hot-toast";

export const handleInputChange = (e,stateName) => {
    const { name, value } = e.target;
    stateName((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };


 export const getFormattedDate = (offset) => {
  const today = new Date();
  today.setDate(today.getDate() - offset);
  const month = today.toLocaleString('default', { month: 'short' });
  const day = today.getDate();
  return `${month} ${day}`;
};


export const getDoughnutChartData = (data) => {
 const inbox = data.totalEmailsLandedInInbox/data.totalWarmUpEmailsSent * 100 ;
 const spam = data.totalEmailsSavedFromSpam/data.totalWarmUpEmailsSent * 100 ;
 return [inbox, spam]
}

export const getStackedBarChartData = (data) => {
  return [data.sent,data.replied,data.savedFromSpam]
}

export const validateLoginUser = (data) => {
  if(data.email === '') {
    toast.error('Please Enter Email Address.')
    return false
  }
  if(data.password === '') {
    toast.error("Please Enter Password")
    return false
  }

  return true
}

  