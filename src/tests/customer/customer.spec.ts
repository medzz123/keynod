import { getCustomer } from './customerApi';

describe('Get customer by id', () => {
  it('Should return customer if correct id', async () => {
    const {
      data: {
        data: { customer },
      },
    } = await getCustomer({
      id: '1',
    });

    expect(customer).toMatchObject({
      id: '1',
      name: 'Mr Felipe Rich',
      phone: '07412341234',
      email: 'mrFelipe@spoiled.boat',
      address: 'Spoiled Land, Oceanic Floor, Cars',
      vehicles: [
        {
          regNo: 'BDF41V',
          model: 'Ford',
        },
        {
          regNo: 'AB2CPY',
          model: 'Tesla',
        },
      ],
      payments: [
        {
          paymentStatus: 'PENDING',
        },
      ],
    });
  });
});
