const data = [
	{id: "3.1", name: "Alex Smith", amount: "$-497"},
	{id: "3.2", name: "Henry Jones", amount: "$-189"},
	{id: "3.3", name: "Geoffrey Anderson", amount: "$-421"},
	{id: "3.4", name: "John Moore", amount: "$-231"},
	{id: "3.5", name: "William Thompson", amount: "$-562"},
	{id: "3.6", name: "Jane Clark", amount: "$-135"}
];

export const balancesSection = {
	css: "webix_layout_custom",
	borderless: true,
	minWidth: 230,
	padding: {
		top: 5
	},
	rows: [
		{
			paddingX: 20,
			rows: [
				{
					view: "label",
					height: 50,
					label: "Outstanding balances"
				},
				{
					template(obj) {
						const html = `
						<div class="template-summary">
							<div style="display:inline-block;">
								<div class="font-18 red">$${obj.total_outstanding || 0}</div>
								<div class="text-secondary uppercase gray">Total outstanding</div>
							</div>
							<div style="display:inline-block; float:right;">
								<div class="text-right font-18 gray">${obj.customers || 0}</div>
								<div class="text-right text-secondary uppercase gray">Customers</div>
							</div>
						</div>
						`;
						return html;
					},
					type: "clean",
					autoheight: true,
					borderless: true,
					data: {
						customers: 6,
						total_outstanding: "-2,035"
					}
				}
			]
		},
		{
			view: "datatable",
			borderless: true,
			scroll: "y",
			css: "custom-table",
			headerRowHeight: 30,
			rowHeight: 40,
			columns: [
				{
					id: "name",
					header: {text: "Customer", css: "table-gray-header uppercase"},
					fillspace: true,
					css: "semi-bold"
				},
				{
					id: "amount",
					header: {text: "Amount", css: "text-right table-gray-header uppercase"},
					css: "text-right semi-bold"

				}
			],
			data
		},
		{
			view: "button",
			label: "<span>View All Customers</span><span class='webix_icon wxi-angle-right'></span>",
			css: "webix_transparent"
		}
	]
};
