stm_bm(["menu4b6c",730,"","blank.gif",0,"","",0,0,250,0,1000,1,0,0,"","",0,0,1,2,"default","hand",""],this);
stm_bp("p0",[0,4,0,0,0,0,0,16,100,"",-2,"",-2,90,0,0,"#999999","transparent","",3,0,0,"#E6FAB4 #788C32 #788C32 #E6FAB4"]);
stm_ai("p0i0",[0," Delegates","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"",0,"#a84200",0,"bg_24.gif","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF","8pt Verdana"," 8pt Verdana",0,0],80,0);
stm_bp("p1",[1,4,0,0,0,0,0,0,100,"stEffect(\"slip\")",-2,"stEffect(\"slip\")",-2,55,0,0,"#999999","transparent","",3,0,0,"#000000"]);
stm_aix("p1i0","p0i0",[0," Add","","",-1,-1,0,"displayListForSOASOSSDelegate.do?hiddenOperation=insert","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#b28800",0,"","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF"," 8pt Verdana","8pt Verdana"],80,0);
stm_aix("p1i1","p1i0",[0," Update","","",-1,-1,0,"displayListForSOASOSSDelegate.do?hiddenOperation=update"],80,0);
stm_aix("p1i2","p1i0",[0," View","","",-1,-1,0,"displayListForSOASOSSDelegateView.do?hiddenOperation=view"],80,0);
stm_ep();

stm_aix("p0i1","p0i0",[0," Recruitment/Appointment","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#b28800"],80,0);
stm_bpx("p2","p1",[]);
stm_aix("p2i0","p1i0",[0," Add Profile","","",-1,-1,0,"displayGeneralInformation.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#6b0046"],180,0);
stm_aix("p2i1","p2i0",[0," Update Profile","","",-1,-1,0,"displayRecruitmentReport.do"],180,0);
stm_aix("p2i2","p2i1",[0," Delete Profile","","",-1,-1,0,"displayRecruitmentReport.do"],180,0);
stm_aix("p2i3","p1i0",[0," Reruitment Report","","",-1,-1,0,"displayRecruitmentReport.do"],180,0);
stm_aix("p2i4","p1i0",[0," Appointment New Employee","","",-1,-1,0,"displayAppointment.do"],180,0);
stm_aix("p2i5","p2i0",[0," View All Employee Profile","","",-1,-1,0,"displayEmployeeList.do"],180,0);
stm_aix("p1i6","p1i0",[0," Character Verification","","",-1,-1,0,""]);
stm_bpx("p1","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p1i6","p1i0",[0," Add Records","","",-1,-1,0,""]);
stm_bpx("p1","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p1i0","p0i0",[0," Exiting Employee","","",-1,-1,0,"displayCharacterVerificationEmployeeSearch.do?hiddenOperation=Add&empType=ExistingEmployee"]);
stm_aix("p1i1","p1i0",[0," Ex Employee","","",-1,-1,0,"displayCharacterVerificationEmployeeSearch.do?hiddenOperation=Add&empType=Ex-Employee"]);
stm_ep();
stm_aix("p1i6","p1i0",[0," Forwarded Records","","",-1,-1,0,""]);
stm_bpx("p1","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p1i0","p0i0",[0," Exiting Employee","","",-1,-1,0,"displayCharacterVerificationEmployeeSearch.do?hiddenOperation=Update&empType=ExistingEmployee"]);
stm_aix("p1i1","p1i0",[0," Ex Employee","","",-1,-1,0,"displayCharacterVerificationEmployeeSearch.do?hiddenOperation=Update&empType=Ex-Employee"]);
stm_ep();
stm_aix("p1i6","p1i0",[0," View Records","","",-1,-1,0,"displayCharacterVerificationEmployeeSearch.do?hiddenOperation=View"]);
stm_ep();
stm_ep();

stm_aix("p0i2","p0i0",[0," Shift","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#6b0046"],80,0);
stm_bpx("p3","p1",[]);
stm_aix("p3i0","p2i0",[0," Shift Allocation To All","","",-1,-1,0,"displayShiftAllocation.do"],160,0);
stm_aix("p3i1","p2i0",[0," Shift Allocation To ASO","","",-1,-1,0,""],160,0);
stm_aix("p3i2","p1i0",[0," OT Allocation","","",-1,-1,0,"displayShiftAllocationReport.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#a81515"],160,0);
stm_aix("p3i3","p3i2",[0," Shift Report","","",-1,-1,0,"displayShiftReportAction.do?lookShift=1"],160,0);
stm_aix("p3i4","p3i2",[0," Update Shift","","",-1,-1,0,"displayUpdateAllocatedShift.do"],160,0);
stm_ep();

stm_aix("p0i3","p0i0",[0," Attendance","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#a81515"],80,0);
stm_bpx("p4","p1",[]);
stm_aix("p4i0","p1i0",[0," Attendance Sheet","","",-1,-1,0,"displayAttendanceReport.do"],130,0);
stm_aix("p4i1","p1i0",[0," Attendance Report","","",-1,-1,0,"displayReportAttendance.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#005591"],130,0);
stm_aix("p4i2","p4i1",[0," Manual Attendance","","",-1,-1,0,"displayAttendanceAction.do"],130,0);
stm_aix("p4i2","p4i1",[0," Upload Attendance","","",-1,-1,0,"http://localhost:8080/UploadProject/Report.jsp"],130,0);
stm_ep();

stm_aix("p0i4","p0i0",[0," My Shift","","",-1,-1,0,"displayShiftReportAction.do?lookShift=0","_self","","","","",0,0,0,"","",0,0,0,0,1,"#a84200",0,"#005591"],80,0);
stm_aix("p0i5","p0i4",[0," My Attendance","","",-1,-1,0,"displayIndividualAttendance.do"],0,25);
stm_aix("p0i6","p0i2",[0," My Salary"],80,0);
stm_bpx("p5","p1",[]);
stm_aix("p5i0","p4i1",[0," Salary Sheet","","",-1,-1,0,"displayIndividualSalry.do"],130,0);
stm_aix("p5i1","p4i1",[0," My Salary Account","","",-1,-1,0,"displayEmployeeSavingAccountInformationAction.do"],130,0);
stm_ep();

stm_aix("p0i7","p0i4",[0," MY EPF","","",-1,-1,0,"displayEpf6AFormAction.do?principalEmployerLocationId=0"],80,0);
stm_aix("p0i8","p0i4",[0," MY ESIC","","",-1,-1,0,""],80,0);
stm_aix("p0i9","p0i2",[0," Logs"],80,0);
stm_bpx("p6","p1",[]);
stm_aix("p6i0","p4i1",[0," LogOut","","",-1,-1,0,"displayLoginAction.do?operation=LogOut"],130,0);
stm_aix("p6i1","p6i0",[0," Home Page","","",-1,-1,0,"displayHomePage.do"],130,0);
stm_aix("p6i2","p6i0",[0," Change Password","","",-1,-1,0,"displayChangePassword.do"],130,0);
stm_ep();
stm_ep();
stm_em();
