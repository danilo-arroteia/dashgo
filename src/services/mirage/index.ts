import { createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})

    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10, new Date()) 
        },
      })
    },

    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get("/users", function (schema, request) {
				const { page = 1, per_page = 10 } = request.queryParams;

				const pageAsNumber = Number(page);
				const perPageAsNumber = Number(per_page);

				const total = schema.all('user').length;

				const pageStart = (pageAsNumber - 1) * perPageAsNumber;
				const pageEnd = pageStart + perPageAsNumber;

				const users = this.serialize(schema.all('user')).users.slice(
					pageStart,
					pageEnd,
				);

				return new Response(200, { 'x-total-count': String(total) }, { users });
			});

      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }
  })

  return server;
}