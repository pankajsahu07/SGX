stm_bm(["menu4b6c",730,"","blank.gif",0,"","",0,0,250,0,1000,1,0,0,"","",0,0,1,2,"default","hand",""],this);
stm_bp("p0",[0,4,0,0,0,4,0,16,100,"",-2,"",-2,90,0,0,"#999999","transparent","",3,0,0,"#E6FAB4 #788C32 #788C32 #E6FAB4"]);
stm_ai("p0i0",[6,1,"#d6ceac","",-1,-1,0]);
stm_ai("p0i1",[0," Home  ","","",-1,-1,0,"displayHomePage.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#9cc2c9",0,"#6b0046",0,"bg_24.gif","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF","8pt Verdana","8pt Verdana",0,0],0,3);
stm_aix("p0i2","p0i1",[0," Recruit & Appoint","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"",0,"#b28800"],0,3);
stm_bp("p1",[1,4,0,0,0,0,0,0,100,"stEffect(\"slip\")",-2,"stEffect(\"slip\")",-2,55,0,0,"#999999","transparent","",3,0,0,"#000000"]);
stm_aix("p1i0","p0i1",[0," New Registration","","",-1,-1,0,"displayGeneralInformation.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#b28800",0,"","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF","8pt Verdana","8pt Verdana"],0,3);
stm_aix("p1i1","p1i0",[0," Update Profile","","",-1,-1,0,"displayRecruitmentReport.do"],0,3);
stm_aix("p1i2","p1i1",[0," Reruitment Report"],0,3);
stm_aix("p1i3","p1i0",[0," Appointment New Employee","","",-1,-1,0,"displayAppointment.do"],0,3);
stm_aix("p1i4","p1i0",[0," View All Employee Profile","","",-1,-1,0,"displayEmployeeList.do"],0,3);
stm_aix("p1i5","p1i0",[0," Character Verification","","",-1,-1,0,""]);
stm_bpx("p1","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p1i5","p1i0",[0," Add Records","","",-1,-1,0,""]);
stm_bpx("p1","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p1i0","p0i0",[0," Exiting Employee","","",-1,-1,0,"displayCharacterVerificationEmployeeSearch.do?hiddenOperation=Add&empType=ExistingEmployee"]);
stm_aix("p1i1","p1i0",[0," Ex Employee","","",-1,-1,0,"displayCharacterVerificationEmployeeSearch.do?hiddenOperation=Add&empType=Ex-Employee"]);
stm_ep();
stm_aix("p1i5","p1i0",[0," Forwarded Records","","",-1,-1,0,""]);
stm_bpx("p1","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p1i0","p0i0",[0," Exiting Employee","","",-1,-1,0,"displayCharacterVerificationEmployeeSearch.do?hiddenOperation=Update&empType=ExistingEmployee"]);
stm_aix("p1i1","p1i0",[0," Ex Employee","","",-1,-1,0,"displayCharacterVerificationEmployeeSearch.do?hiddenOperation=Update&empType=Ex-Employee"]);
stm_ep();
stm_aix("p1i5","p1i0",[0," View Records","","",-1,-1,0,"displayCharacterVerificationEmployeeSearch.do?hiddenOperation=View"]);
stm_ep();
stm_ep();
stm_aix("p0i2","p0i0",[]);
stm_aix("p0i3","p0i1",[0," Shift","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#b28800"],70,0);
stm_bpx("p2","p1",[1,4,0,0,0,0,0,16]);
stm_aix("p2i0","p1i0",[0," Shift Allocation To All","","",-1,-1,0,"displayShiftAllocation.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#a81515"],0,4);
stm_aix("p2i2","p1i0",[0," Shift Report","","",-1,-1,0,"displayShiftReportAction.do"],0,4);
stm_aix("p2i4","p1i0",[0," Update Shift","","",-1,-1,0,"displayUpdateAllocatedShift.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#005591"],0,4);
stm_aix("p2i2","p2i0",[0," OT Allocation","","",-1,-1,0,"displayShiftAllocationReport.do"],0,4);
//stm_aix("p2i5","p2i0",[0," OT Allocation","","",-1,-1,0,"displayOtAllocation.do"],0,4);
stm_aix("p2i6","p2i0",[0," OT Report","","",-1,-1,0,"displayOtReportAction.do"],0,4);
stm_ep();
stm_aix("p0i4","p0i1",[0," Attendance ","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#005591"],0,3);
stm_bpx("p3","p1",[1,4,0,0,0,0,0,16]);
stm_aix("p3i0","p1i0",[0," Attandence Sheet-Daily","","",-1,-1,0,"displayAttendanceReport.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#005591"],0,3);
stm_aix("p3i1","p3i0",[0," Attendance Report- Monthly","","",-1,-1,0,"displayReportAttendance.do"],0,3);
stm_aix("p3i2","p3i0",[0," Manual Attendance","","",-1,-1,0,"displayAttendanceAction.do"],0,3);
stm_aix("p3i3","p3i0",[0," Upload Attendance","","",-1,-1,0,""]);
stm_bpx("p3","p1",[]);
stm_aix("p3i0","p1i0",[0," By B-One","","",-1,-1,0,"http://localhost:8080/UploadProject/Report.jsp"]);
stm_aix("p3i1","p1i0",[0," By Just Look","","",-1,-1,0,"http://localhost:8080/Sgx1/UploadAttendanceByJustLookNew.jsp"]);
stm_ep();
stm_aix("p3i4","p3i0",[0," View In And Out Time","","",-1,-1,0,"displayInAndOutTimeAction.do"]);
stm_ep();
stm_aix("p0i5","p0i1",[0," My Information  ","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#996633"],0,3);
stm_bpx("p4","p1",[1,4,0,0,0,0,0,16]);
stm_aix("p4i0","p1i0",[0," My Profile","","",-1,-1,0,"displayRecruitmentReportPerson.do?principalEmployerId=0","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#996633"]);
stm_aix("p4i1","p0i1",[0," My Shift ","","",-1,-1,0,"displayShiftReportAction.do?lookShift=0","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#996633",0,""],0,3);
stm_aix("p4i2","p4i1",[0," My Attendance ","","",-1,-1,0,"displayIndividualAttendance.do"],0,3);
stm_aix("p4i3","p4i1",[0," My Salary","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9],0,3);
stm_bpx("p5","p1",[1,2]);
stm_aix("p5i0","p4i0",[0," Salary Sheet","","",-1,-1,0,"displayIndividualSalry.do"],0,3);
stm_aix("p5i1","p4i0",[0," My Salary Account","","",-1,-1,0,"displayEmployeeSavingAccountInformationAction.do"],0,3);
stm_ep();
stm_aix("p4i4","p4i1",[0," My EPF  ","","",-1,-1,0,"displayEpf6AFormAction.do?principalEmployerLocationId=0"],0,3);
stm_aix("p4i5","p4i1",[0," My ESIC ","","",-1,-1,0,""],0,3);
stm_aix("p4i6","p4i5",[0," My PeHR"]);
stm_ep();
stm_aix("p0i6","p0i1",[0," Application Forms","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#999966"],0,3);
stm_bpx("p6","p1",[1,4,0,0,0,0,0,16]);
stm_aix("p6i0","p4i1",[0," Application for Advance Salary","","",-1,-1,0,"displayEmployeeAdvanceSalaryApplicationAction.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#999966"]);
stm_aix("p6i1","p6i0",[0," Application for Leave","","",-1,-1,0,"displayApplicationForLeaveForEmployees.do"],0,3);
stm_aix("p6i2","p6i0",[0," Application for EPF","","",-1,-1,0,""],0,3);
stm_aix("p6i3","p6i0",[0," Application for ESIC","","",-1,-1,0,""],0,3);
stm_bpx("p7","p1",[]);
stm_aix("p7i0","p6i1",[0,"Sickness/TDB/Meternity Benefit","","",-1,-1,0,"displayClaimForSicknessESIC.do?displayFormFor=employee"]);
stm_aix("p7i1","p6i0",[0,"Permanent Disablement","","",-1,-1,0,"displayPermanentDisablementESIC.do?displayFormFor=employee"]);
stm_aix("p7i1","p6i0",[0,"Dependants Benefit","","",-1,-1,0,"displayClaimForDependantsBenefit.do?displayFormFor=employee"]);
stm_aix("p7i1","p6i0",[0,"Periodical Payment Dependants Benefit","","",-1,-1,0,"displayPeriodicalDependantsBenefit.do?displayFormFor=employee"]);
stm_aix("p7i1","p6i0",[0,"Maternity Benefit","","",-1,-1,0,"displayMaternityBenefitESIC.do?displayFormFor=employee"]);
stm_aix("p7i1","p6i0",[0,"Maternity Benefit After Death","","",-1,-1,0,"displayMaternityBenefitAfterDeathESIC.do?displayFormFor=employee"]);
stm_aix("p7i1","p6i0",[0,"Funeral Expenses","","",-1,-1,0,"displayFuneralExpensesClaimESIC.do?displayFormFor=employee"]);
stm_ep();

stm_aix("p6i4","p6i0",[0," Application for Loan","","",-1,-1,0,""],0,3);
stm_aix("p6i5","p6i0",[0," Manual Attendance Authenticate","","",-1,-1,0,"displayManualAttendanceAutho.do"],0,3);
stm_ep();
stm_aix("p0i9","p0i1",[0," Approvals","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#999966"],0,3);
stm_bpx("p9","p1",[1,4,0,0,0,0,0,16]);
stm_aix("p9i0","p4i1",[0," Application for Advance Salary","","",-1,-1,0,"displayEmployeeAdvanceSalaryListApplicationAction.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#999966"]);
stm_aix("p9i1","p9i0",[0," Application for Leave" ,"","",-1,-1,0,"displayApplicationForLeaveList.do"],0,3);
stm_aix("p9i2","p9i0",[0," Application for EPF","","",-1,-1,0,""],0,3);
stm_aix("p9i3","p9i0",[0," Application for ESIC","","",-1,-1,0,""],0,3);
stm_aix("p9i4","p9i0",[0," Application for Loan","","",-1,-1,0,""],0,3);
stm_aix("p9i5","p9i0",[0," Employee Approval For Police Verification","","",-1,-1,0,"displaySPApprovalList.do?operation=List"],0,3);
stm_ep();
stm_aix("p0i7","p0i1",[0," Help ","","",-1,-1,0,"","_self","","","","",0,0,0,"","",0,0,0,0,1,"#9cc2c9",0,"#003300"],0,3);
stm_aix("p0i8","p0i1",[0," Logs","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#0000CC"],0,3);
stm_bpx("p7","p1",[1,4,0,0,0,0,0,16]);
stm_aix("p7i0","p1i0",[0," LogOut","","",-1,-1,0,"displayLoginAction.do?operation=LogOut","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#0000CC"],0,3);
stm_aix("p7i1","p7i0",[0," Home Page","","",-1,-1,0,"displayHomePage.do"],0,3);
stm_aix("p7i2","p7i0",[0," Change Password","","",-1,-1,0,"displayChangePassword.do"],0,3);
stm_ep();
stm_ep();
stm_em();
