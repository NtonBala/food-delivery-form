import { useForm, SubmitHandler } from 'react-hook-form';
import { getRenderCount } from './utils/getRenderCount';

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

const RenderCount = getRenderCount();

export const FoodDeliveryForm = () => {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>();

  const onSubmit: SubmitHandler<FoodDeliveryFormType> = (data) => {
    console.log('form data:', data);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <RenderCount />

      <div className="form-floating mb-3">
        <input type="text" className="form-control" placeholder="Customer Name" {...register('customerName', { value: 'Fiona' })} />
        <label>Customer Name</label>
      </div>

      <div className="form-floating mb-3">
        <input type="text" className="form-control" placeholder="Mobile" {...register('mobile')} />
        <label>Mobile</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
