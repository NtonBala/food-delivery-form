type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

export const FoodDeliveryForm = () => {
  return (
    <form autoComplete="off">
      <div className="form-floating mb-3">
        <input type="text" className="form-control" placeholder="Customer Name" />
        <label>Customer Name</label>
      </div>

      <div className="form-floating mb-3">
        <input type="text" className="form-control" placeholder="Mobile" />
        <label>Mobile</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
