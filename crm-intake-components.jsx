function IntakeDataTable({columns,rows,emptyLabel}){
  if(!rows?.length)return <div style={{padding:"12px 0",fontSize:12,color:"#777"}}>{emptyLabel||"None entered."}</div>;
  return <div style={{overflowX:"auto",border:"1px solid #e1e5e2"}}>
    <table style={{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:620}}>
      <thead><tr>{columns.map(column=><th key={column.key} style={{padding:"8px 10px",textAlign:"left",background:"#f3f5f3",borderBottom:"1px solid #d9dedb",color:"#596660",fontSize:10,textTransform:"uppercase",whiteSpace:"nowrap"}}>{column.label}</th>)}</tr></thead>
      <tbody>{rows.map((row,rowIndex)=><tr key={row.id||rowIndex}>{columns.map(column=><td key={column.key} style={{padding:"9px 10px",borderBottom:rowIndex===rows.length-1?"none":"1px solid #edf0ee",verticalAlign:"top",color:"#434343",lineHeight:1.45}}>{column.render?column.render(row):row[column.key]||"-"}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}

function IntakePackageSection({title,meta,children}){
  return <section style={{padding:"20px 22px",borderBottom:"1px solid #e1e5e2"}}>
    <div style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"baseline",marginBottom:12}}>
      <h3 style={{fontSize:14,color:"#33423e",margin:0}}>{title}</h3>
      {meta&&<span style={{fontSize:11,color:"#7a8580"}}>{meta}</span>}
    </div>
    {children}
  </section>;
}

function IntakePackageView({intakePackage}){
  const bridge=window.BKFLIntakeBridge;
  const matter=intakePackage?.matter;
  const currency=(value)=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(Number(value)||0);
  if(!matter)return <div style={{padding:20,color:"#777"}}>Intake package is unavailable.</div>;
  const readiness=intakePackage.readiness||{};
  const debtors=matter.debtors||[];
  const financialAffairs=Object.entries(matter.financialAffairs||{}).map(([question,value])=>({id:question,question:question.replace(/-/g," "),answer:value.answer||"-",entries:(value.entries||[]).length,selections:Object.values(value.selections||{}).flat().join(", ")}));
  const total=(items,key)=>bridge.total(items,key);
  const maskedSsn=(debtor)=>`***-**-${debtor.ssnLast4||String(debtor.socialSecurityNumber||"").slice(-4)||"----"}`;
  const summaryItems=[
    ["Client",bridge.matterClientName(matter)],
    ["Chapter",`Chapter ${matter.chapter}`],
    ["Court",[matter.filingState,matter.district].filter(Boolean).join(" - ")],
    ["Submitted",new Date(intakePackage.submittedAt).toLocaleString()],
    ["Client goals",matter.clientGoals],
    ["Urgent concerns",matter.urgentConcerns||"None entered"],
  ];
  return <div style={{background:"#fff",border:"1px solid #d9dedb"}} data-testid="intake-package-view">
    <div style={{padding:"18px 22px",background:"#214e5f",color:"#fff",display:"flex",justifyContent:"space-between",gap:18,alignItems:"center",flexWrap:"wrap"}}>
      <div><div style={{fontSize:11,textTransform:"uppercase",fontWeight:700,opacity:.8}}>BK FastLane Intake package</div><div style={{fontSize:18,fontWeight:700,marginTop:4}}>{bridge.matterClientName(matter)}</div></div>
      <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
        <span style={{background:"#e5f0eb",color:"#285247",borderRadius:4,padding:"5px 9px",fontSize:11,fontWeight:700}}>{readiness.fieldsFilled}/{readiness.fieldsRequired} fields</span>
        <span style={{background:"#fbf1dc",color:"#704b11",borderRadius:4,padding:"5px 9px",fontSize:11,fontWeight:700}}>{readiness.documentsReady}/{readiness.documentsRequired} documents</span>
        <span style={{background:"#fff",color:"#214e5f",borderRadius:4,padding:"5px 9px",fontSize:11,fontWeight:700}}>Ready for attorney</span>
      </div>
    </div>
    <IntakePackageSection title="Submission summary" meta={`${intakePackage.source?.system} / ${intakePackage.source?.branch} branch`}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",border:"1px solid #e1e5e2"}}>
        {summaryItems.map(([label,value])=><div key={label} style={{padding:"11px 12px",borderBottom:"1px solid #edf0ee"}}><div style={{fontSize:10,textTransform:"uppercase",fontWeight:700,color:"#78837e",marginBottom:4}}>{label}</div><div style={{fontSize:12,lineHeight:1.45}}>{value||"-"}</div></div>)}
      </div>
    </IntakePackageSection>
    <IntakePackageSection title="Debtors and household" meta={`${debtors.length} debtor${debtors.length===1?"":"s"}; household size ${matter.household?.householdSize||0}`}>
      <IntakeDataTable rows={debtors} columns={[
        {key:"name",label:"Debtor",render:d=>bridge.debtorName(d)},
        {key:"dob",label:"Date of birth",render:d=>d.dateOfBirth},
        {key:"ssn",label:"SSN",render:maskedSsn},
        {key:"contact",label:"Contact",render:d=><span>{d.email}<br/>{d.phone}</span>},
        {key:"address",label:"Address",render:d=>bridge.formatAddress(d)},
      ]}/>
      <div style={{display:"flex",gap:20,flexWrap:"wrap",marginTop:12,fontSize:12,color:"#5d6863"}}><span><strong>Marital status:</strong> {matter.household?.maritalStatus||"-"}</span><span><strong>Joint filing:</strong> {matter.spouseFilingJointly||"-"}</span><span><strong>Dependents:</strong> {matter.household?.dependents?.length||0}</span></div>
    </IntakePackageSection>
    <IntakePackageSection title="Income and expenses" meta={`${currency(total(matter.income,"amount"))} income / ${currency(total(matter.expenses,"monthlyAmount"))} expenses`}>
      <IntakeDataTable rows={matter.income||[]} columns={[
        {key:"source",label:"Source"},{key:"employer",label:"Employer"},{key:"frequency",label:"Frequency"},{key:"amount",label:"Monthly amount",render:r=>currency(r.amount)},{key:"sixMonthTotal",label:"Six-month total",render:r=>currency(r.sixMonthTotal)},
      ]}/>
      <div style={{height:12}}/>
      <IntakeDataTable rows={matter.expenses||[]} columns={[
        {key:"category",label:"Expense"},{key:"monthlyAmount",label:"Monthly amount",render:r=>currency(r.monthlyAmount)},{key:"notes",label:"Notes"},
      ]}/>
    </IntakePackageSection>
    <IntakePackageSection title="Property and debts" meta={`${currency(total(matter.assets,"estimatedValue"))} assets / ${currency(total(matter.debts,"amount"))} debt`}>
      <IntakeDataTable rows={matter.assets||[]} columns={[
        {key:"description",label:"Asset"},{key:"category",label:"Category"},{key:"estimatedValue",label:"Value",render:r=>currency(r.estimatedValue)},{key:"lienAmount",label:"Lien",render:r=>currency(r.lienAmount)},{key:"keepIntent",label:"Intent"},
      ]}/>
      <div style={{height:12}}/>
      <IntakeDataTable rows={matter.debts||[]} columns={[
        {key:"creditor",label:"Creditor"},{key:"type",label:"Type"},{key:"amount",label:"Balance",render:r=>currency(r.amount)},{key:"arrears",label:"Arrears",render:r=>currency(r.arrears)},{key:"collateral",label:"Collateral"},
      ]}/>
    </IntakePackageSection>
    <IntakePackageSection title="Financial affairs and SOFA" meta={`${financialAffairs.length} answers; ${matter.sofaEvents?.length||0} events`}>
      <IntakeDataTable rows={financialAffairs} columns={[
        {key:"question",label:"Question"},{key:"answer",label:"Answer"},{key:"entries",label:"Entries"},{key:"selections",label:"Selections"},
      ]}/>
      <div style={{height:12}}/>
      <IntakeDataTable rows={matter.sofaEvents||[]} columns={[
        {key:"eventType",label:"Event"},{key:"date",label:"Date"},{key:"amount",label:"Amount",render:r=>currency(r.amount)},{key:"description",label:"Description"},
      ]}/>
    </IntakePackageSection>
    <IntakePackageSection title="Documents" meta={`${readiness.documentsReady}/${readiness.documentsRequired} received`}>
      <IntakeDataTable rows={matter.documents||[]} columns={[
        {key:"name",label:"Document"},{key:"category",label:"Category"},{key:"status",label:"Status",render:r=><span style={{color:"#315f57",fontWeight:700,textTransform:"capitalize"}}>{r.status}</span>},{key:"notes",label:"Notes"},
      ]}/>
    </IntakePackageSection>
    <IntakePackageSection title="Attorney review flags" meta={`${intakePackage.reviewFlags?.length||0} open`}>
      <IntakeDataTable rows={intakePackage.reviewFlags||[]} emptyLabel="No review flags." columns={[
        {key:"severity",label:"Severity",render:r=><span style={{textTransform:"uppercase",fontSize:10,fontWeight:700,color:r.severity==="warning"?"#9b6a1c":"#315f57"}}>{r.severity}</span>},{key:"title",label:"Flag"},{key:"sectionId",label:"Section"},{key:"detail",label:"Attorney detail"},
      ]}/>
    </IntakePackageSection>
    <details style={{padding:"16px 22px"}}><summary style={{cursor:"pointer",fontSize:12,fontWeight:700,color:"#315f57"}}>Canonical Intake JSON</summary><pre style={{marginTop:12,padding:14,background:"#f3f5f3",border:"1px solid #d9dedb",overflow:"auto",fontSize:11,lineHeight:1.5,maxHeight:420}}>{JSON.stringify(intakePackage,null,2)}</pre></details>
  </div>;
}

function IntakeInboxPage({leads,setPage,setSelectedLead}){
  const intakeLeads=(leads||[]).filter(lead=>lead.intakePackage).sort((a,b)=>String(b.intakePackage.submittedAt).localeCompare(String(a.intakePackage.submittedAt)));
  const openPackage=(lead)=>{setSelectedLead(lead.id);setPage("lead-detail");};
  return <div style={{flex:1,background:"#FBFAF7",minHeight:"100vh"}} data-testid="intake-inbox">
    <div style={{padding:"24px 28px 18px",background:"#fff",borderBottom:"1px solid #dedfdc",display:"flex",justifyContent:"space-between",gap:20,alignItems:"center",flexWrap:"wrap"}}>
      <div><div style={{fontSize:10,textTransform:"uppercase",fontWeight:700,color:"#6f7d78",marginBottom:5}}>BK FastLane handoff</div><h1 style={{fontSize:22,margin:0,color:"#3f4945"}}>Intake Inbox</h1><p style={{fontSize:12,color:"#6d7672",margin:"6px 0 0"}}>{intakeLeads.length} fake debtor packages ready for attorney review</p></div>
      <a href="./intake-demo.html" style={{display:"inline-flex",alignItems:"center",gap:7,padding:"9px 13px",borderRadius:4,background:"#315f57",color:"#fff",fontSize:12,fontWeight:700,textDecoration:"none"}}>Run fake debtor intake</a>
    </div>
    <div style={{padding:"20px 28px"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",border:"1px solid #d9dedb",background:"#fff",marginBottom:16}}>
        <div style={{padding:"12px 14px",borderRight:"1px solid #e1e5e2"}}><div style={{fontSize:10,textTransform:"uppercase",fontWeight:700,color:"#7b8581"}}>Ready packages</div><div style={{fontSize:20,fontWeight:700,color:"#315f57",marginTop:3}}>{intakeLeads.length}</div></div>
        <div style={{padding:"12px 14px",borderRight:"1px solid #e1e5e2"}}><div style={{fontSize:10,textTransform:"uppercase",fontWeight:700,color:"#7b8581"}}>Required fields</div><div style={{fontSize:20,fontWeight:700,color:"#315f57",marginTop:3}}>{intakeLeads.reduce((sum,lead)=>sum+(lead.intakePackage.readiness?.fieldsFilled||0),0)}</div></div>
        <div style={{padding:"12px 14px"}}><div style={{fontSize:10,textTransform:"uppercase",fontWeight:700,color:"#7b8581"}}>Documents received</div><div style={{fontSize:20,fontWeight:700,color:"#9b6a1c",marginTop:3}}>{intakeLeads.reduce((sum,lead)=>sum+(lead.intakePackage.readiness?.documentsReady||0),0)}</div></div>
      </div>
      <div style={{background:"#fff",border:"1px solid #d9dedb",overflowX:"auto"}}>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:820}}>
          <thead><tr>{["Client","Chapter","Submitted","Field coverage","Documents","Review flags","Source",""].map(label=><th key={label} style={{padding:"10px 12px",textAlign:"left",background:"#f0f3f1",borderBottom:"1px solid #d9dedb",fontSize:10,textTransform:"uppercase",color:"#68736f"}}>{label}</th>)}</tr></thead>
          <tbody>{intakeLeads.map((lead,index)=>{const pkg=lead.intakePackage;const ready=pkg.readiness||{};return <tr key={lead.id} style={{background:index%2?"#fbfcfb":"#fff"}}>
            <td style={{padding:"12px",borderBottom:"1px solid #edf0ee"}}><button onClick={()=>openPackage(lead)} style={{border:0,background:"none",padding:0,color:"#315f57",fontWeight:700,cursor:"pointer",textAlign:"left"}}>{lead.clientFullName||`${lead.firstName} ${lead.lastName}`}</button><div style={{fontSize:10,color:"#7c8682",marginTop:3}}>{lead.email}</div></td>
            <td style={{padding:"12px",borderBottom:"1px solid #edf0ee"}}>{lead.bankruptcyType}</td>
            <td style={{padding:"12px",borderBottom:"1px solid #edf0ee"}}>{new Date(pkg.submittedAt).toLocaleDateString()}</td>
            <td style={{padding:"12px",borderBottom:"1px solid #edf0ee"}}><span style={{fontWeight:700,color:"#315f57"}}>{ready.fieldsFilled}/{ready.fieldsRequired}</span></td>
            <td style={{padding:"12px",borderBottom:"1px solid #edf0ee"}}>{ready.documentsReady}/{ready.documentsRequired}</td>
            <td style={{padding:"12px",borderBottom:"1px solid #edf0ee"}}>{ready.reviewFlagCount||0}</td>
            <td style={{padding:"12px",borderBottom:"1px solid #edf0ee"}}><span style={{display:"inline-block",background:"#e3ece8",color:"#315f57",border:"1px solid #b8ccc4",borderRadius:4,padding:"3px 7px",fontSize:10,fontWeight:700}}>INTAKE / JIMMY</span></td>
            <td style={{padding:"12px",borderBottom:"1px solid #edf0ee"}}><button onClick={()=>openPackage(lead)} aria-label={`Open ${lead.clientFullName||lead.firstName}`} title="Open Intake package" style={{border:"1px solid #b9c8c3",background:"#fff",width:30,height:30,borderRadius:4,cursor:"pointer",color:"#315f57",fontSize:16}}>&#8594;</button></td>
          </tr>})}</tbody>
        </table>
        {!intakeLeads.length&&<div style={{padding:28,textAlign:"center",color:"#777"}}>No completed Intake packages.</div>}
      </div>
    </div>
  </div>;
}
