stm_bm(["menu4b6c",730,"","blank.gif",0,"","",0,0,250,0,1000,1,0,0,"","",0,0,1,2,"default","hand",""],this);
stm_bp("p0",[0,4,0,0,0,4,0,16,100,"",-2,"",-2,90,0,0,"#999999","transparent","",3,0,0,"#E6FAB4 #788C32 #788C32 #E6FAB4"]);
stm_ai("p0i0",[0," Home Page ","","",-1,-1,0,"displayHomePage.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#9cc2c9",1,"#CC0066",0,"bg_24.gif","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF","8pt Verdana","8pt Verdana",0,0],0,4);
stm_aix("p0i1","p0i0",[0,"Approval","","",-1,-1,0,"","_self","","","","",0,0,0,"","",12,9,0,0,1,"#0066CC",1,"#468BE0"],80,0);
stm_bp("p1",[1,4,0,0,0,0,0,16,100,"stEffect(\"slip\")",-2,"stEffect(\"slip\")",-2,55,0,0,"#999999","transparent","",3,0,0,"#000000"]);
stm_aix("p1i0","p0i0",[0," Give Approval To","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#FFFFFF",0,"#468BE0",0,""],120,0);
stm_bpx("p2","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p2i0","p1i0",[0," Sales Executive","","",-1,-1,0,"displaySalesExcutiveRequestAction.do?operation=List","_self","","","","",0,0,0,"","",0,0],120,0);
stm_aix("p2i0","p1i0",[0," Schedule","","",-1,-1,0,"displaySalesExcutiveScheduleRequestAction.do?operation=ApprovedSalesExecutiveOwnList","_self","","","","",0,0,0,"","",0,0],120,0);
stm_ep();
stm_aix("p1i1","p1i0",[0," Status","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#FFFFFF",0,"#679DE0"],120,0);
stm_bpx("p2","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p2i0","p1i0",[0," Sales Executive","","",-1,-1,0,"displaySalesExcutiveRequestAction.do?operation=Status","_self","","","","",0,0,0,"","",0,0],120,0);
stm_aix("p2i0","p1i0",[0," Schedule","","",-1,-1,0,"displaySalesExcutiveScheduleRequestAction.do?operation=Admin2Approved","_self","","","","",0,0,0,"","",0,0],120,0);
stm_ep();
//stm_aix("p1i1","p1i0",[0," Denied List","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#FFFFFF",0,"#679DE0"],120,0);
//stm_bpx("p2","p1",[1,2,0,0,0,0,0,0]);
//stm_aix("p2i0","p1i0",[0," Sales Executive","","",-1,-1,0,"displaySalesExcutiveRequestAction.do?operation=Denied","_self","","","","",0,0,0,"","",0,0],120,0);
//stm_aix("p2i0","p1i0",[0," Schedule","","",-1,-1,0,"displaySalesExcutiveScheduleRequestAction.do?operation=Admin2Denied","_self","","","","",0,0,0,"","",0,0],120,0);


//stm_ep();
stm_ep();
stm_aix("p0i4","p0i0",[0,"Profile","","",-1,-1,0,"","_self","","","","",0,0,0,"","",12,9,0,0,1,"#9cc2c9",0,"#83A04A"],70,0);
stm_bpx("p12","p2",[1,4]);
stm_aix("p12i0","p1i0",[0,"See Employee Profile","","",-1,-1,0,"displaySgxEmployeeFormAction.do?operation=List","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#83A04A"],120,0);
stm_ep();
//stm_aix("p0i8","p0i0",[0,"Help","","",-1,-1,0,"","_self","","","","",0,0,0,"","",12,9,0,0,1,"#9cc2c9",1,"#993366"],60,0);
stm_aix("p0i7","p0i0",[0,"Logs","","",-1,-1,0,"","_self","","","","",0,0,0,"","",12,9,0,0,1,"#9cc2c9",1,"#2BA9E0"],60,0);
stm_bpx("p16","p12",[]);
stm_aix("p16i0","p1i0",[0," LogOut","","",-1,-1,0,"displayAdminLoginAction.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#2BA9E0"],120,0);
stm_aix("p16i1","p16i0",[0," Home Page","","",-1,-1,0,"displayHomePage.do"],120,0);
stm_aix("p16i2","p16i0",[0," Change Password","","",-1,-1,0,"displayChangePassword.do"],120,0);
stm_ep();
stm_ep();
stm_em();
