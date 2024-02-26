import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'admin', value: 'admin' },
        { label: 'student', value: 'student' },
      ],
    },
  ],
};

export default Users;
