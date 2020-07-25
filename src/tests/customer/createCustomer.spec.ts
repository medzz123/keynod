import { createCustomer } from './customerApi';

describe('Create customer', () => {
  const input = {
    name: 'Writing a blog post',
    address: '101010101',
    email: 'hey@email.com',
    phone: '1224',
  };

  it('Should create customer with valid input', async () => {
    const {
      data: { data },
    } = await createCustomer({ input });

    expect(data.createCustomer).toMatchObject({
      id: data.createCustomer.id,
      ...input,
    });
  });

  it('Should fail if input is missing', async () => {
    try {
      await createCustomer({ input: { name: 'Hi' } });
    } catch (e) {
      expect(e.response.status).toBe(400);
    }
  });
});
