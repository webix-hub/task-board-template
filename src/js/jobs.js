const data1 = [
	{id: "5.1", sum: "544", jobs: "3", color: "green", label: "Next 2 Days"},
	{id: "5.2", sum: "100", jobs: "1", color: "bright-blue", label: "Next 2 Days"},
	{id: "5.3", sum: "124", jobs: "0", color: "gray", label: "Next 2 Days"}
];

const data2 = [
	{id: "5.1.1", customer: "Alex Smith", hours: "1 h"}
];

export const jobsSection = {
	css: "webix_layout_custom",
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
					label: "Upcoming Jobs"
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
							${obj.jobs} invoices
		</div>
		 </div>
		<div class="list-item-section text-right"> <span class="badge color-${obj.color}"> ${obj.label} </span> </div>
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
					id: "hours",
					header: {text: "Amount/Time", css: "text-right table-gray-header uppercase"},
					fillspace: true,
					css: "text-right semi-bold"
				}
			],
			data: data2
		},
		{
			view: "button",
			type: "icon",
			label: "<span>View All Jobs</span><span class='webix_icon wxi-angle-right'></span>",
			css: "webix_transparent"
		}
	]
};
