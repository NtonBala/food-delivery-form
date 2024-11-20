import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

export const FoodDeliveryForm = () => {
  const [values, setValues] = useState<FoodDeliveryFormType>({
    customerName: '',
    mobile: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="customerName"
          className="form-control"
          placeholder="Customer Name"
          value={values.customerName}
          onChange={handleInputChange}
        />
        <label>Customer Name</label>
      </div>

      <div className="form-floating mb-3">
        <input type="text" name="mobile" className="form-control" placeholder="Mobile" value={values.mobile} onChange={handleInputChange} />
        <label>Mobile</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
