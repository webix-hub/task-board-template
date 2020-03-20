import {actionsSection} from "./js/actions";
import {assignmentsSection} from "./js/assignments";
import {balancesSection} from "./js/balances";
import {invoicesSection} from "./js/invoices";
import {jobsSection} from "./js/jobs";
import {hoursSection} from "./js/hours";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize && webix.CustomScroll) {
		webix.CustomScroll.init();
	}

	webix.ui({
		padding: 10,
		type: "wide",
		margin: 20,
		rows: [
			{
				cols: [
					{
						view: "template",
						type: "header",
						css: "webix_clean font-18",
						borderless: true,
						template: "Activities of the day"
					},
					{
						view: "button",
						width: 150,
						align: "right",
						css: "webix_primary",
						label: "<span>Assignements</span><span class='webix_icon wxi-angle-down'></span>"
					}
				]
			},
			{
				margin: 20,
				cols: [
					actionsSection,
					assignmentsSection
				]
			},
			{
				margin: 20,
				cols: [
					balancesSection,
					invoicesSection,
					jobsSection,
					hoursSection
				]
			}
		]
	});
});
