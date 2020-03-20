/* eslint-disable */
const data = [
	{id: "item1", type: "folder", icon: "mdi mdi-calendar-blank", color: "violet", num: "44", value: "Scheduled items overdue", data: [
		{id: "item1.1", value: "Scheduled item 1"},
		{id: "item1.2", value: "Scheduled item 2"}
	]},
	{id: "item2", icon: "mdi mdi-bag-checked", type: "folder", color: "red", num: "11", value: "Jobs ending within 30 days", data: [
		{id: "item2.1", value: "Job 1"},
		{id: "item2.2", value: "Job 2"}
	]},
	{id: "item3", icon: "mdi mdi-file", num: "2", color: "green", value: "Jobs waiting for invoicing", data: [
		{id: "item3.1", value: "Job 1"},
		{id: "item3.2", value: "Job 2"}
	]},
	{id: "item4", icon: "mdi mdi-account", num: "41", color: "orange", value: "Unassigned sheduled items", data: [
		{id: "item4.1", value: "Item 1"},
		{id: "item4.2", value: "Item 2"}
	]},
	{id: "item5", icon: "mdi mdi-calendar-check", num: "1", color: "blue", value: "Approved quotes to convert to jobs", data: [
		{id: "item5.1", value: "Quote 1"},
		{id: "item5.2", value: "Quote 2"}
	]},
	{id: "item6", icon: "mdi mdi-clipboard-list", color: "violet", num: "1", value: "Requests with completed assessements", data: [
		{id: "item6.1", value: "Request 1"},
		{id: "item6.2", value: "Request 2"}
	]}
];
/* eslint-enable */

export const actionsSection = {
	css: "webix_layout_custom",
	padding: {
		top: 5
	},
	rows: [
		{
			view: "label",
			height: 50,
			label: "Recomended actions",
			css: "header-label"
		},
		{
			view: "grouplist",
			borderless: true,
			scroll: "y",
			data,
			css: "list-actions",
			item: {
				height: 50,
				template(obj) {
					let html;
					if (obj.$level !== 1) {
						html = obj.value;
					}
					else {
						html = `
						<span class="actions-sum color-${obj.color}">
							<span class="list-item-icon">
								<span class="${obj.icon}"></span> 
							</span>
							
							<strong>${obj.num}</strong>
						</span> -  ${obj.value}
						`;
					}
					return html;
				}
			}
		}
	]
};
