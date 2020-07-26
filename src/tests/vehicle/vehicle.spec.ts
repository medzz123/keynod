import { getVehicle } from './vehicleApi';

describe('Get vehicle by regNo', () => {
  it('Should return vehicle if correct regNo', async () => {
    const {
      data: {
        data: { vehicle },
      },
    } = await getVehicle({
      regNo: 'BDF41V',
    });

    expect(vehicle).toMatchObject({
      regNo: 'BDF41V',
      model: 'Ford',
      yearsUsed: '1',
      customer: {
        name: 'Mr Felipe Rich',
      },
    });
  });
});
