const data1 = [
	{id: "4.1", sum: "1,044", invoice: "3", color: "red", num: "50+"},
	{id: "4.2", sum: "100", invoice: "1", color: "yellow", num: "20-30"},
	{id: "4.3", sum: "324", invoice: "0", color: "blue", num: "<20"}
];

const data2 = [
	{id: "4.2.1", customer: "Alex Smith", sum: "300", ago: "6"},
	{id: "4.2.2", customer: "Henry Jones", sum: "100", ago: "5"},
	{id: "4.2.3", customer: "Geoffrey Anderson", sum: "221", ago: "7"},
	{id: "4.2.4", customer: "Jane Clark", sum: "479", ago: "3"}
];

export const invoicesSection = {
	css: "webix_layout_custom",
	minHeight: 400,
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
					label: "Past due invoices"
				},
				{
					view: "list",
					borderless: true,
					autoheight: true,
					css: "list-with-badges",
					type: {
						height: 50,
						template(obj) {
							const html =
								`
		<div class="list-item-section semi-bold font-16">
		<div>
						   $ ${obj.sum}
		</div>
		
		<div class= "text-secondary gray">
							${obj.invoice} invoices
		</div>
		 </div>
		<div class="list-item-section text-right"> <span class="badge color-${obj.color}"> ${obj.num} </span> </div>
		`;
							return html;
						}
					},
					data: data1
				}
			]
		},
		{
			view: "datatable",
			borderless: true,
			scroll: "y",
			css: "custom-table",
			headerRowHeight: 30,
			rowHeight: 45,
			columns: [
				{
					id: "customer",
					header: {text: "Customer", css: "table-gray-header uppercase"},
					fillspace: true,
					css: "semi-bold"
				},
				{
					id: "sum",
					header: {text: "Amount/Time", css: "text-right table-gray-header uppercase"},
					template(obj) {
						const html = `
						<div class="semi-bold">$ ${obj.sum}</div>
						<div> ${obj.ago} months ago</div>
						`;
						return html;
					},
					fillspace: true,
					css: "text-right"
				}
			],
			data: data2
		},
		{
			view: "button",
			type: "icon",
			label: "<span>View All Invoices</span><span class='webix_icon wxi-angle-right'></span>",
			css: "webix_transparent"
		}
	]
};
