import { createServer } from 'miragejs';

export default function (config) {
	createServer({
		routes() {
			this.get('/api/content', (schema) => {
				return { content: schema.db.content };
			});
		},
		seeds(server) {
			server.db.loadData({
				content: [
					{
						createdAt: '2023-02-03T03:35:50.089Z',
						description: 'Content description',
						id: 'eead015a-3322-4776-bb4d-4c8e1d905ef9',
						isPublic: false,
						title: 'Content Title 1',
						token: 'LLAMAS.test2',
						updatedAt: '2023-02-03T03:35:50.089Z',
						walletId: '1FBuCHMw5e5yTNKbf1eJq1bXZjoGaXeqwV',
					},
					{
						createdAt: '2023-02-03T03:35:50.089Z',
						description: 'Content description',
						id: 'b14dfe56-b03b-407a-bb6f-7a214ee32d0e',
						isPublic: false,
						title: 'Content Title 2',
						token: 'LLAMAS.test2',
						updatedAt: '2023-02-03T03:35:50.089Z',
						walletId: '1FBuCHMw5e5yTNKbf1eJq1bXZjoGaXeqwV',
					},
				],
			});
		}
	});
}
