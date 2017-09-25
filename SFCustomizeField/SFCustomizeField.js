
/**
 * Salesforce UI Automation Demo
 * Customize field length
 */

function Test()
{
	Navigator.Open("");
	SeS('Setup').DoClick();
	SeS('Customize_icon').DoEnsureVisible();
	SeS('Customize_icon').DoClick();
	SeS('Lead_icon').DoClick();
	SeS('Fields').DoClick();
	SeS('Edit_Minus_Record_5_Minus_SICCod').DoEnsureVisible();
	SeS('Edit_Minus_Record_5_Minus_SICCod').DoClick();
	SeS('StarLength').DoClick();
	SeS('StarLength').DoSetText("15");
	if (Global.DoWaitFor('simpleDialog0button0', '1000'))
	{
		SeS('simpleDialog0button0').DoClick(10, 0);
	}
	SeS('save').DoClick();
	SeS('Text_15_').DoEnsureVisible();
	Tester.AssertEqual("Verify that: InnerText=Text(15) ", SeS('Text_15_').GetInnerText(), "Text(15) ");
	SeS('Accounts_Tab').DoClick();

}

g_load_libraries=["%g_browserLibrary:Chrome HTML%"];
