export const handleInputChange = (e,stateName) => {
    const { name, value } = e.target;
    stateName((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };