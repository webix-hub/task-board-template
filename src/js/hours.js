const data = [
	{id: "6.1", customer: "Alex Smith", hours: "1 h"},
	{id: "6.2", customer: "Henry Jones", hours: "3 h"},
	{id: "6.3", customer: "Geoffrey Anderson", hours: "2.5 h"},
	{id: "6.4", customer: "John Moore", hours: "4 h"},
	{id: "6.5", customer: "William Thompson", hours: "1 h"},
	{id: "6.6", customer: "Jane Clark", hours: "5 h"}
];

export const hoursSection = {
	css: "webix_layout_custom",
	minWidth: 230,
	padding: {
		top: 5
	},
	rows: [
		{
			view: "label",
			height: 50,
			label: "Today's hours",
			css: "header-label"
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
					id: "customer",
					header: {text: "Name", css: "table-gray-header uppercase"},
					fillspace: true,
					css: "semi-bold"
				},
				{
					id: "hours",
					header: {text: "Time", css: "text-right table-gray-header uppercase"},
					css: "text-right semi-bold"

				}
			],
			data
		}
	]
};
