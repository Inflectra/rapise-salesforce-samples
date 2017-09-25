
/**
 * Salesforce UI Test Automation Demo
 * Create New Lead
 */

function Test()
{
	Navigator.Open("");
	SeS('Leads_Tab').DoClick();
	SeS('_new').DoClick();
	SeS('First_Name').DoSetText("John");
	SeS('StarLast_Name').DoSetText("Smith");
	SeS('StarCompany').DoSetText("CONTOSO");
	SeS('Lead_Source').DoSelect("Phone Inquiry");
	SeS('Industry').DoSelect("Healthcare");
	SeS('Street').DoSetText("Market st");
	SeS('City').DoSetText("San Francisco");
	SeS('State_Province').DoEnsureVisible();
	SeS('State_Province').DoSetText("CA");
	SeS('Country').DoSetText("USA");
	Global.DoSleep(1000);
	SeS('save').DoClick();
	Tester.AssertEqual("Verify that: InnerText=John Smith", SeS('John_Smith').GetInnerText(), "John Smith");
	Navigator.DoSetExpectedConfirmResult(true);
	SeS('del').DoClick();
	Navigator.DoCheckConfirmation("Are you sure?");

}

g_load_libraries=["%g_browserLibrary:Chrome HTML%"];


