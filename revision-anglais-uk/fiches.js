/* =====================================================================
   Fiches de synthèse — Legal English: The UK Legal System
   Cours de Florence Thépot (L2).

   Couvre TOUS les grands thèmes tombés dans les sujets d'anglais
   (corrigé rédigé, questions Q5–Q7 + sujets 9 et 10) ET les thèmes
   du cours qui n'ont PAS encore été abordés en sujet (badge « non traité »).

   Chaque fiche :
     part   : "Sources of law" | "The courts" | "People in courts"
     title  : intitulé de la fiche
     sub    : sous-titre / accroche
     exam   : true  -> déjà tombé en sujet (priorité révision)
              false -> thème du cours non encore abordé en sujet
     refs   : (exam=true) les sujets/questions concernés
     blocks : [{h: titre, p: paragraphe}] ou [{h: titre, l: [puces]}]

   Mini-formatage dans le texte : **gras**, *italique* (noms d'arrêts).
   ===================================================================== */

window.FICHE_PARTS = ["Sources of law", "The courts", "People in courts"];

window.FICHES = [

/* =================================================================
   PARTIE I — SOURCES OF LAW
   ================================================================= */

{
  part: "Sources of law",
  title: "La règle du précédent (stare decisis)",
  sub: "« Let the decision stand » — le précédent obligatoire",
  exam: true,
  refs: "Sujet 2 Q5 · Sujet 5 Q6",
  blocks: [
    { h: "L'essentiel", p: "*Stare decisis* (« let the decision stand ») = courts are **bound by previous decisions**, both **vertically** (lower courts must follow higher courts) and, to a degree, **horizontally** (a court tends to follow its own past decisions). It promotes **certainty, consistency and equality** before the law and depends on a clear **hierarchy of courts**." },
    { h: "À retenir", l: [
      "Only the **ratio decidendi** binds; *obiter dicta* are merely persuasive. Lower courts (Magistrates', County) do not set precedents.",
      "**Supreme Court / House of Lords** — *horizontal* binding: **before 1966** absolutely bound by itself (*London Tramways v LCC* [1898]); since the **Practice Statement [1966]** it may depart from its own decisions **« when it appears right to do so »**.",
      "The power to depart is used **sparingly** — the mere fact that a precedent is now thought wrong is **not enough** (need for certainty, esp. where people relied on the law: contract, property, fiscal, criminal).",
      "**Court of Appeal** — bound by the UKSC/HL and by its **own** decisions, save the three *Young v Bristol Aeroplane Co* [1944] exceptions: (1) two conflicting CA decisions; (2) a CA decision conflicting with the UKSC/HL; (3) a decision *per incuriam*. The Criminal Division adds a 4th: the **« liberty of the subject »** exception (*R v Taylor*).",
      "**Avoiding a precedent:** *distinguishing* (material facts differ — *Holwell Securities v Hughes*), *overruling* (a higher court declares an earlier *lower-court* decision wrong — **retrospective** effect), *reversing* (the higher court reverses the decision in the *same* case)."
    ]},
    { h: "Jurisprudence & textes clés", l: [
      "*London Tramways v LCC* [1898] — the HL was absolutely bound by its own decisions.",
      "**Practice Statement [1966]** — the HL/UKSC may depart « when it appears right to do so ».",
      "*R v Jogee* [2016] UKSC — leading modern use: corrected the law on **joint enterprise / secondary liability**.",
      "*Young v Bristol Aeroplane Co* [1944] — the three exceptions binding the Court of Appeal.",
      "*R v R* [1991] — overruled the marital-rape exemption (illustrates the **retrospective** effect of case law)."
    ]},
    { h: "Plan-type (dissertation)", p: "**I. A cornerstone providing certainty & consistency** — vertical & horizontal binding, the ratio, equality of treatment. **II. A flexible, not rigid, doctrine** — Practice Statement 1966, *Young* exceptions, distinguishing/overruling; underlying debate: should **unelected judges** make law? (declaratory theory — Lord Reid called it « a fairy tale »)." },
    { h: "⚠️ Piège à éviter", p: "Do not give the **same rule** to the House of Lords/Supreme Court (free to depart since 1966) and to the **Court of Appeal** (still bound by itself, save the *Young* exceptions — Lord Denning's « one-man crusade » in *Davis v Johnson* was **rejected**)." }
  ]
},

{
  part: "Sources of law",
  title: "Ratio decidendi & obiter dictum",
  sub: "Ce qui lie vs ce qui est dit « en passant »",
  exam: true,
  refs: "Sujet 7 Q1",
  blocks: [
    { h: "L'essentiel", p: "A judgment contains two kinds of statement of law. The **ratio decidendi** (« the reason for deciding ») is the legal principle **necessary** to the decision — the **binding** element. The **obiter dictum** (« said by the way ») is any other statement **not necessary** to the outcome — **not binding**, though it may be **persuasive**." },
    { h: "À retenir", l: [
      "Both come from the **same judge in the same judgment** — the distinction is not *who* speaks but *whether* the statement was essential to the decision.",
      "**Goodhart's test:** ratio = **material facts + the decision** based upon them. No perfect method — the ratio can always be argued (three possible ratios in *Donoghue v Stevenson*: ginger beer / food & drink / all manufactured goods).",
      "Obiter can shape later law: an *obiter* remark may subsequently be **adopted as ratio**."
    ]},
    { h: "Jurisprudence & textes clés", l: [
      "*Donoghue v Stevenson* [1932] — the « neighbour principle »; classic illustration of identifying the ratio.",
      "*R v Howe* [1987] — *ratio:* duress is no defence to **murder**; *obiter:* nor to **attempted** murder.",
      "*R v Gotts* [1992] — adopted the *Howe* **obiter as ratio** (duress no defence to attempted murder)."
    ]},
    { h: "⚠️ Piège à éviter", p: "*Obiter* is **NOT** « commentary by an outside actor » — it is the **judge's own** statement, simply one that was not necessary to the decision." }
  ]
},

{
  part: "Sources of law",
  title: "L'interprétation des lois (literal · golden · mischief)",
  sub: "Les trois règles d'interprétation statutaire",
  exam: true,
  refs: "Sujet 4 Q5 (literal) · Sujet 9 Q1 (golden) · Sujet 10 Q1 (mischief)",
  blocks: [
    { h: "L'essentiel", p: "Where a statute is unclear, judges use rules of interpretation to find what **Parliament (the sovereign) intended**. Three traditional rules — plus a modern trend toward a **unified contextual / purposive** approach." },
    { h: "Les trois règles", l: [
      "**Literal rule** — give the words their **ordinary, plain, grammatical / dictionary meaning**, even if the result seems unfortunate (respect for parliamentary sovereignty — Lord Diplock, *Duport Steels v Sirs*). *Fisher v Bell* [1961]: a flick knife displayed in a shop window was **not** « offered for sale » (only an *invitation to treat*).",
      "**Golden rule** — a **modification** of the literal rule: where the literal meaning produces an **absurdity or inconsistency**, depart from it to avoid that absurdity. *Adler v George* [1964]: « in the vicinity of » a prohibited place read to cover being **inside** it. (Broad approach: *Re Sigsworth* — a murderer cannot inherit from his victim.)",
      "**Mischief rule** — interpret by reference to the **« mischief »** (the defect/gap in the old law) Parliament meant to remedy — *Heydon's Case* (1584). *Smith v Hughes* [1960]: prostitutes soliciting from windows/balconies were caught by a ban on soliciting « in a street », because the mischief was the **harassment of people in the street**."
    ]},
    { h: "À retenir", l: [
      "Problem of the literal rule: a strict reading can **defeat Parliament's true intention** and produce absurdity (*Whiteley v Chappell* (1868) — a dead person is not literally « entitled to vote »). Hence the golden rule.",
      "Trend = a **unified contextual approach** (combination of rules + interpretive aids). Debate on judicial discretion: in *Magor and St Mellons* Lord Denning favoured « filling in the gaps », but the HL rejected this as « a naked usurpation of the judicial function » — « if a gap is disclosed, the remedy lies in an amending Act »."
    ]},
    { h: "Plan-type (« Explain the X rule; one problem; illustrate »)", p: "1) **definition + rationale**; 2) the **leading illustration** (case + facts + holding); 3) the **limit/problem** (literal rule → absurdity, hence the golden / mischief rules)." },
    { h: "⚠️ Piège à éviter", p: "The golden rule is a **modification of the literal rule** (not a free purposive approach). Tie each case to the **right** rule: *Fisher v Bell* = literal · *Adler v George* = golden · *Smith v Hughes* = mischief." }
  ]
},

{
  part: "Sources of law",
  title: "Le Human Rights Act 1998 & la CEDH",
  sub: "Donner « further effect » à la Convention en droit interne",
  exam: true,
  refs: "Sujet 5 Q5 · Sujet 7 Q2",
  blocks: [
    { h: "L'essentiel", p: "The **Human Rights Act 1998** — a « constitutional statute » — gives **further effect** in domestic law to the rights of the **European Convention on Human Rights**, so they may be relied on **directly before UK courts** rather than only at Strasbourg." },
    { h: "Les sections clés", l: [
      "**s.2** — courts must **« take into account »** (not blindly follow) the case law of the **ECtHR**. « Clear and constant jurisprudence » should normally be followed (Lord Slynn, *Alconbury*), but UK courts may refuse — *R v Horncastle* [2010] (hearsay & Art. 6).",
      "**s.3** — legislation must be read and given effect compatibly with Convention rights **« so far as it is possible to do so »**: a **strong interpretive obligation**. *Ghaidan v Godin-Mendoza* [2004]: « spouse » read to include a **same-sex partner**. *R v A* [2001]: the « rape-shield » read down to protect the **Art. 6** right to a fair trial.",
      "**s.4** — where a compatible reading is impossible, certain **higher courts** may make a **declaration of incompatibility**. It does **NOT** invalidate or disapply the statute: the law **stays in force**; it merely signals the incompatibility to **Parliament** (preserving sovereignty — s.4(6)), which may amend it, incl. by a fast-track **remedial order (s.10)**.",
      "**s.6** — it is unlawful for a **public authority** to act incompatibly with Convention rights (vertical effect; horizontal influence via the development of case law — *Campbell v MGN*, Art. 8)."
    ]},
    { h: "Plan-type (« effect of the HRA / a key section »)", p: "**I. A strong interpretive duty** (s.3 — *Ghaidan*, *R v A*; s.2 takes account of Strasbourg). **II. But parliamentary sovereignty preserved** (s.4 declaration ≠ striking down; remedial order s.10; political debate on a « Bill of Rights »)." },
    { h: "⚠️ Piège à éviter", p: "Ne pas confondre **s.3** (interpret compatibly) and **s.4** (declaration of incompatibility). A declaration **leaves the Act in force and binding** — UK courts **cannot strike down** primary legislation (contrast pre-Brexit EU law via *Factortame*)." }
  ]
},

{
  part: "Sources of law",
  title: "Brexit & le droit de l'UE au Royaume-Uni",
  sub: "EUWA 2018 · retained / assimilated law · Article 50",
  exam: true,
  refs: "Sujet 1 Q5 · Sujet 10 Q2",
  blocks: [
    { h: "L'essentiel", p: "**Article 50 TEU** sets out a Member State's voluntary withdrawal. The UK triggered it after the **June 2016 referendum** (51.9% leave), notifying on **29 March 2017**, and left on **31 January 2020**. Domestically, withdrawal was organised by the **EU (Withdrawal) Act 2018**." },
    { h: "À retenir", l: [
      "**EU (Withdrawal) Act 2018 — s.1** repealed the **European Communities Act 1972** (the conduit through which EU law took effect), so EU law ceased to apply of its own force.",
      "To avoid a legislative vacuum, the Act **converted** existing EU law into **retained EU law**: EU-derived domestic legislation (s.2), direct EU legislation e.g. regulations (s.3), directly effective rights (s.4). It was given a limited **supremacy** over pre-exit law (s.5) and retained **CJEU case law** continued to bind (s.6, subject to higher courts departing).",
      "**Retained EU Law (Revocation and Reform) Act 2023** — **renamed** it **assimilated law** and, from **31 Dec 2023**, **abolished the supremacy** of EU law and the general status of retained law. Parliament may now freely **amend/repeal** it; courts may more readily depart from retained CJEU case law; **no more preliminary references** to the CJEU.",
      "Overall trajectory: **continuity (2018) → divergence (2023)**, restoring the **full sovereignty of Parliament** over this field."
    ]},
    { h: "Parlement & juge dans le Brexit", l: [
      "*R (Miller) v SoS for Exiting the EU* (**Miller I**, 2017) — Art. 50 could **not** be triggered by the **royal prerogative** alone; only an **Act of Parliament** could authorise notification → EU (Notification of Withdrawal) Act 2017.",
      "*R (Miller) v The Prime Minister; Cherry* (**Miller II**, 2019) — the **prorogation** of Parliament was **unlawful** (it frustrated Parliament's constitutional functions)."
    ]},
    { h: "Plan-type (« role of Parliament & the courts in Brexit »)", p: "**I. Article 50 + the referendum / withdrawal** (notification 2017, exit 31 Jan 2020). **II. The constitutional role of Parliament & the courts** — Miller I (prerogative), EUWA 2018/2020, Miller II (prorogation) — reaffirming **parliamentary sovereignty**." },
    { h: "⚠️ Piège à éviter", p: "« Retained EU law » was **renamed** « assimilated law » by the 2023 Act (not wholesale abolished). The **ECA 1972 was repealed** (not « amended »). Article 50 was **triggered in 2017**, withdrawal **effective 31 Jan 2020**." }
  ]
},

{
  part: "Sources of law",
  title: "L'Equity",
  sub: "Corriger la rigidité de la common law",
  exam: true,
  refs: "Sujet 3 Q5",
  blocks: [
    { h: "L'essentiel", p: "**Equity** is the body of rules developed in the **Court of Chancery** by the Lord Chancellor — the « keeper of the King's conscience » — to mitigate the **rigidity and the gaps** of the common law. « The price to pay for certainty is sometimes injustice. »" },
    { h: "À retenir", l: [
      "Origin: a rigid system of **writs** and a single remedy (**damages**) produced injustice → a disappointed litigant could petition the Chancellor for relief based on **conscience**.",
      "**The Earl of Oxford's Case (1615)** — where common law and equity **conflict, equity prevails** (now **s.49 Senior Courts Act 1981**).",
      "**Judicature Acts 1873–1875** — **fused the administration** of law and equity into a single court structure; the two bodies of rules remain **conceptually distinct**, and in conflict **equity still prevails**.",
      "Equity supplements the common law with new **remedies** (discretionary, only where damages are inadequate): **injunction, specific performance, rescission, rectification** — and new **rights**, above all the **trust**.",
      "**Equitable maxims:** « he who comes to equity must come with clean hands » (*D&C Builders v Rees*) · « delay defeats equity » (*Leaf v International Galleries*) · « equity is equality »."
    ]},
    { h: "Plan-type (« Equity developed because of the rigidity of the common law »)", p: "**I. Origins & the conflict resolved** — Chancery, conscience, *Earl of Oxford's Case*, the Judicature Acts. **II. One way it supplements the common law** — e.g. equitable **remedies** (or the **trust**) where damages are inadequate + the **maxims**." },
    { h: "⚠️ Piège à éviter", p: "The Judicature Acts merged the **administration** (the courts), **not** the two bodies of rules, which remain distinct. Equity does not **abolish** the common law — it **completes** it; it acts *in personam* and is **discretionary**." }
  ]
},

{
  part: "Sources of law",
  title: "Le law reporting (recueils de jurisprudence)",
  sub: "Sans report fiable, pas de précédent",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "Because precedent depends on **knowing** past decisions, the law must be **reported**. A **law report** records a judicial decision on a point of law that **sets a precedent**." },
    { h: "À retenir", l: [
      "**Before 1865** — **Year Books** (13th c.–1535: few, important cases); private **« nominate reports »** (named after the reporter, 16th–early 19th c.) with quality issues and possible conflicts — e.g. *Stilk v Myrick* (1809) reported differently by **Espinasse** (public policy) and **Campbell** (consideration). All now collected in the **English Reports** (178 volumes).",
      "**After 1865** — the **Incorporated Council of Law Reporting (ICLR)**, a **charity** (not a state body), publishes the official **Law Reports** (written by qualified lawyers, **checked by judges**). Inclusion criteria: a new principle/rule, a modified rule, a doubt settled, or a specially instructive case.",
      "The **Law Reports — four series:** **Appeal Cases (AC)** (UKSC & Privy Council), **Chancery (Ch)**, **King's/Queen's Bench (KB/QB)**, **Family (Fam)**. The **Weekly Law Reports (WLR)** are faster but **not checked by judges**. Main private series: **All England Law Reports (All ER)**.",
      "**Citation:** *Horton v Sadler* [2007] 1 AC 307 = year · volume · series · page. **Neutral citation:** [2005] EWCA Civ 101 ; [2025] UKSC 10 (court-based, medium-neutral)."
    ]},
    { h: "⚠️ À savoir", p: "« AC » does **not** contain Court of Appeal cases; the **WLR is not judge-checked** (unlike the Law Reports)." }
  ]
},

{
  part: "Sources of law",
  title: "Le Parlement & l'adoption des lois",
  sub: "The law-making process",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "**Legislation** is law made **by**, or **under powers granted by**, the UK Parliament. **Primary** legislation = **Acts of Parliament**; **secondary (delegated)** legislation is made by other bodies under statutory powers — and, unlike Acts, **can be judicially reviewed**." },
    { h: "À retenir", l: [
      "Parliament's **three functions:** legislate · deal with public finance · provide a **forum** to scrutinise the government. Composed of the **House of Commons** (650 elected MPs), the **House of Lords** (unelected — Lords Temporal: hereditary (92 remain), life & judicial peers + 24 **Lords Spiritual**), and **the Crown** (**Royal Assent**).",
      "**A Bill → an Act.** Types: **Public Bill**, **Private Member's Bill**, **Private Bill**. Stages in each House: **1st reading** (formal) → **2nd reading** (principles + vote) → **Committee stage** (detailed scrutiny/amendments) → **3rd reading** → the **other House** → **Royal Assent**. Pre-legislative input: the **Law Commission** (est. 1965); **Green Paper** (consultation) / **White Paper** (policy).",
      "**Parliament Acts 1911 & 1949** — limit the (unelected) **Lords'** power to block legislation: a Bill can reach Royal Assent **without** the Lords after a period. *R (Jackson) v AG* (2005): the **Hunting Act 2004**, passed under the Parliament Acts, held lawful.",
      "**Acts are immune from challenge in the courts** — *British Railways Board v Pickin* [1974] (courts cannot examine parliamentary proceedings). A facet of **parliamentary sovereignty** (pre-Brexit exception: *Factortame*)."
    ]},
    { h: "⚠️ À savoir", p: "Primary legislation is **not automatically « more important »** than secondary; **secondary** legislation **can be judicially reviewed**, **Acts cannot**." }
  ]
},

{
  part: "Sources of law",
  title: "La coutume & la soft law",
  sub: "Sources mineures mais réelles",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "Besides case law and statute, the minor sources of law include **custom** and **soft law**." },
    { h: "À retenir", l: [
      "**Custom** plays a **very small part** today, typically invoked when a **local tradition is challenged**. Criteria for a legally enforceable custom: existed since **« time immemorial »**; **certain and clear**; not conflicting with fundamental principles or **with a statute**; **local**; **continuous**; exercised **peaceably, openly and as of right**. *Tanistry* case (1608); *Egerton v Harding* [1975] (customary **duty to fence** land against the common).",
      "**Soft law** — documents **not legally binding** but intended to influence: **guidelines, recommendations, codes** (e.g. the **UK Corporate Governance Code**). Contrast **hard law** (primary / delegated legislation)."
    ]},
    { h: "⚠️ À savoir", p: "Custom must be **local & immemorial** and **cannot conflict with a statute**; soft law is **persuasive, not binding**." }
  ]
},

/* =================================================================
   PARTIE II — THE COURTS
   ================================================================= */

{
  part: "The courts",
  title: "Structure des juridictions & classification des infractions",
  sub: "Quelle juridiction · quelle infraction · qui décide ?",
  exam: true,
  refs: "Sujet 2 Q6 · Sujet 7 Q3 · Sujet 10 Q3",
  blocks: [
    { h: "L'essentiel", p: "The court structure is **hierarchical**: **Supreme Court** → **Court of Appeal** (Criminal / Civil) → **High Court** (King's Bench, Chancery, Family) → **Crown & County Courts** → **Magistrates' Courts**. Criminal offences are **classified by seriousness**, which decides the trial court." },
    { h: "Classification des infractions", l: [
      "**Summary offences** (~97%, least serious — e.g. most motoring offences) — tried **only** in the **magistrates' court** (fines, up to 6 months, community orders).",
      "**Either-way offences** (e.g. theft; ABH — s.47 OAPA 1861) — magistrates' **or** Crown Court; the magistrates first decide jurisdiction, and the **defendant may elect** trial by **jury** in the Crown Court.",
      "**Indictable-only offences** (the most serious — **murder, rape, robbery** s.8 Theft Act 1968) — sent to, and **tried on indictment in the Crown Court** (up to **life**)."
    ]},
    { h: "Crown Court — judge & jury", l: [
      "The **jury** (normally **12**) decides the **verdict** = the question of **fact** (guilty / not guilty, **beyond reasonable doubt**).",
      "The **judge** decides questions of **law**, rules on **admissibility** of evidence, **directs** the jury, and — on a guilty verdict — passes the **sentence**.",
      "Magistrates' court: **3 lay magistrates** (JPs, no formal legal qualifications) or a **district judge** — a tribunal of **both law and fact**. Burden on the **prosecution** (*Woolmington v DPP* [1935] — « one golden thread »)."
    ]},
    { h: "Plan-type (« Which court tries an indictable offence; who decides the verdict? »)", p: "1) the **three categories**; 2) indictable-only → **Crown Court**; 3) **jury = verdict** (fact, beyond reasonable doubt) **vs judge = sentence** (law)." },
    { h: "⚠️ Piège à éviter", p: "Distinguish the **verdict** (jury, on guilt) from the **sentence** (judge, the punishment). The **Crown Court is a superior court** (not inferior). Criminal standard = **beyond reasonable doubt** (≠ civil « balance of probabilities »)." }
  ]
},

{
  part: "The courts",
  title: "Le Crown Prosecution Service & le Code for Crown Prosecutors",
  sub: "Séparer l'enquête (police) et la décision de poursuivre",
  exam: true,
  refs: "Sujet 3 Q7",
  blocks: [
    { h: "L'essentiel", p: "The **Crown Prosecution Service (CPS)** is the principal **public prosecuting authority** for England & Wales, created by the **Prosecution of Offences Act 1985** (operational **1986**), headed by the **Director of Public Prosecutions (DPP)** under the superintendence of the **Attorney General**. It conducts **most prosecutions** after a police investigation." },
    { h: "À retenir", l: [
      "Created to **separate the investigation (police) from the decision to prosecute** — the police should not be both investigator and prosecutor (before 1985: heterogeneity, no independent review of the evidence, ~50% acquittals).",
      "**The Full Code Test — two successive stages:** (1) **Evidential stage** — is there enough evidence for a **« realistic prospect of conviction »** (objective: would a properly directed, impartial tribunal be more likely than not to convict)? If not met, the case **stops**, however serious. (2) **Public interest stage** — even with sufficient evidence, prosecution must be **in the public interest** (seriousness, culpability, impact on the victim, proportionality…).",
      "The **police retain** charging of some low-level offences (summary-only; low-value shoplifting / criminal damage < £5,000).",
      "**Accountability:** *R v Killick* [2011] — a **victim** may seek a **review** of a CPS decision **not** to prosecute → the **Victims' Right to Review Scheme**."
    ]},
    { h: "Plan-type (« role of the CPS; the two tests; illustrate »)", p: "**I. Role & creation** — POA 1985, DPP, separation from the police. **II. The two tests of the Code** — evidential then public interest — + accountability (*Killick*)." },
    { h: "⚠️ Piège à éviter", p: "The two tests are **successive** (evidential **first**, then public interest). The CPS **prosecutes** — it does **not investigate** (that is the police), and it is **distinct from the CCRC**." }
  ]
},

{
  part: "The courts",
  title: "La procédure civile : les CPR & l'overriding objective",
  sub: "Les réformes Woolf — « justly and at proportionate cost »",
  exam: true,
  refs: "Sujet 4 Q6",
  blocks: [
    { h: "L'essentiel", p: "The **Civil Procedure Rules 1998** (in force **26 April 1999**), following **Lord Woolf's** *Access to Justice* reforms, govern **all** civil proceedings. They are steered by an **overriding objective (r.1.1): to deal with cases justly and at proportionate cost**." },
    { h: "À retenir", l: [
      "**Pre-CPR defects:** cost often **exceeded the value** of the claim; wealthier litigants favoured; cost and delay **unpredictable**; separate rules per court (**« writ »** in the High Court vs **« summons »** in the County Court).",
      "The **overriding objective** includes: parties on an **equal footing**, saving expense, **proportionality** (to value/complexity), expedition and fairness, an appropriate share of the court's resources. *May v Wavell* [2018]: costs cut to what was **proportionate**.",
      "**Active case management** by the judge (« the trial judge as trial manager »): allocating the **track**, ensuring **ADR** is considered, controlling the evidence. The **four tracks:** **small claims** (< £10k) · **fast track** (£10k–25k) · **intermediate track** (£25k–100k, new 2023) · **multi-track** (> £100k / complex, High Court).",
      "**Non-compliance → sanctions:** *Mitchell v News Group* (2013) — the « **Plebgate** » case: the solicitors **missed the costs-budget deadline**, so the claimant was treated as having filed a budget limited to **court fees** and could recover almost **nothing**; relief was **refused**. Refined in *Denton v TH White* (2014): a **three-stage test** — seriousness of the breach, the reason for it, all the circumstances."
    ]},
    { h: "Plan-type (« overriding objective; one consequence of non-compliance; illustrate »)", p: "1) the **overriding objective** (r.1.1 + Woolf context, proportionality); 2) **sanctions** for non-compliance; 3) *Mitchell* / *Denton*." },
    { h: "⚠️ Piège à éviter", p: "*Mitchell* was **refined** (not overruled) by *Denton*. The overriding objective is « justly **and at proportionate cost** » — **proportionality** is central, not just « justice »." }
  ]
},

{
  part: "The courts",
  title: "Les appels en matière pénale & la CCRC",
  sub: "Réviser la « safety » d'une condamnation · corriger les erreurs judiciaires",
  exam: true,
  refs: "Sujet 1 Q7 · Sujet 9 Q3",
  blocks: [
    { h: "L'essentiel", p: "A defendant convicted in the **Crown Court** may appeal to the **Court of Appeal (Criminal Division)**. The Court does **not** conduct a retrial: it **reviews the safety** of the conviction on the trial record." },
    { h: "À retenir", l: [
      "**Ground (s.2 Criminal Appeal Act 1968, as amended by the CAA 1995):** the Court must allow the appeal if it thinks the conviction is **« unsafe »** — e.g. a **material misdirection**, the wrongful **admission/exclusion of evidence**, a serious **procedural irregularity**, or **fresh evidence** undermining the verdict (received where in the interests of justice — *R v Young*). It may **quash** the conviction and order a **retrial**.",
      "**No automatic right** of appeal on indictment: needs the **leave** of the CA or the trial judge's **certificate**. From the CA → the **UK Supreme Court**, only if a **point of law of general public importance** is certified.",
      "**The Criminal Cases Review Commission (CCRC):** an **independent** public body, **created by the Criminal Appeal Act 1995, operational 1997**, which reviews suspected **miscarriages of justice** (after an unsuccessful appeal). It may **refer** a conviction/sentence back to the Court of Appeal where there is a **« real possibility »** it would not be upheld, normally on **fresh evidence** or a fresh argument.",
      "**Why created:** the 1970s–90s miscarriages — the **Birmingham Six**, **Guildford Four**, **Maguire Seven** — and the **Runciman Royal Commission (1993)**; previously, references depended on the **Home Secretary** (too slow and political). Illustrations: the **Birmingham Six** (convicted 1975, acquitted **1991**); the **Barry George / Jill Dando** case (referred 2007, quashed)."
    ]},
    { h: "Plan-type (« role of the CCRC / appeal against conviction »)", p: "**I. The CA reviews safety** — s.2, « unsafe », fresh evidence, possible retrial. **II. The CCRC** — independent **post-appeal** review (« real possibility »); **why** created (Birmingham Six, Runciman 1993)." },
    { h: "⚠️ Piège à éviter", p: "The CCRC is **independent** and is **NOT headed by the DPP** (the DPP leads the separate **CPS**). The Court of Appeal **reviews** the safety of the conviction — it does **not** re-hear the whole case." }
  ]
},

{
  part: "The courts",
  title: "Le système civil & les juridictions civiles",
  sub: "County Court & High Court of Justice",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "The **civil justice system** lets individuals and organisations settle **private disputes** (**claimant v defendant**; standard = **balance of probabilities**; remedies = **damages or injunctions**). Two main first-instance civil courts." },
    { h: "À retenir", l: [
      "**County Court** — an **inferior** court of **limited (statutory)** jurisdiction (County Courts Act 1984): contract, tort, personal injury, land, debt recovery. **Concurrent** jurisdiction with the High Court (which takes higher-value claims).",
      "**High Court of Justice** — **unlimited** jurisdiction, complex / high-value cases (Royal Courts of Justice). **Three divisions:** **King's Bench** (largest — contract, tort, personal injury, libel), **Chancery** (tax, bankruptcy, land, company — now the **Business & Property Courts**), **Family**.",
      "**Commencing a claim:** a **claim form** issued by the court; **Money Claim Online** for disputes < £100k. **Settlement:** **CPR Part 36** offers carry **costs consequences**. Civil **jury** trials are now rare (s.69 Senior Courts Act 1981 — fraud, malicious prosecution, false imprisonment; **defamation removed in 2013** — the *McLibel* case)."
    ]},
    { h: "⚠️ À savoir", p: "The civil burden is on the **claimant**, standard **« balance of probabilities »** (≠ criminal: prosecution / « beyond reasonable doubt »). A **failed criminal case** can still **succeed civilly** because of the lower standard." }
  ]
},

{
  part: "The courts",
  title: "Les voies d'appel en matière civile",
  sub: "Routes of appeal · leapfrog · second appeals",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "An unsuccessful party may **challenge** a decision before a superior court; the appeal system is **hierarchical**. **Permission** is required and is given only where the appeal has a **real prospect of success** or there is some other **compelling reason**." },
    { h: "À retenir", l: [
      "**Avenues:** district judge (County Court) → circuit judge (County Court) → **High Court** → **Court of Appeal (Civil Division)**; a final **multi-track** decision goes straight to the **Court of Appeal**.",
      "**« Leapfrog » appeals:** County Court → Court of Appeal (important point of principle/practice); High Court → **UK Supreme Court** (certified **point of law of general public importance**).",
      "**Second appeals:** only with the **permission of the Court of Appeal**, and **only to it**. From the CA → UKSC: **leave** required (**s.40 Constitutional Reform Act 2005**)."
    ]},
    { h: "⚠️ À savoir", p: "An appeal may concern a **final** decision **or** a **pre-trial (case-management)** decision; **permission** is the gatekeeper throughout." }
  ]
},

/* =================================================================
   PARTIE III — PEOPLE IN COURTS
   ================================================================= */

{
  part: "People in courts",
  title: "Le jury",
  sub: "« Bulwark of the liberties » — jury equity & garanties",
  exam: true,
  refs: "Sujet 2 Q7 · Sujet 3 Q6 · Sujet 10 Q3",
  blocks: [
    { h: "L'essentiel", p: "The **jury** (**12** people, randomly selected) decides issues of **fact** in the **Crown Court**. It is called the **« bulwark of the liberties »** of the individual, largely because of **jury equity**." },
    { h: "Jury equity & independence", l: [
      "**Jury equity / nullification:** the jury may **acquit according to its conscience**, against the evidence or the judge's direction — possible because it returns a **general verdict without reasons** and an **acquittal cannot be appealed** by the prosecution. *R v Ponting* (1985): acquittal under the **Official Secrets Act** (Belgrano / Falklands) despite a direction of « no defence ».",
      "The **judge may not direct the jury to convict** (*R v Wang* [2005]); a juror **cannot be punished** for the verdict (*Bushell's Case* (1670))."
    ]},
    { h: "Selection — s.1 Juries Act 1974", l: [
      "Aged **18–75** (upper limit raised from 70 in **2015**); registered **elector**; **ordinarily resident** in the UK 5 years since age 13; **not a « mentally disordered person »**.",
      "Eligibility ≠ **disqualification** (criminal record) ≠ **excusal / deferral**. The **Criminal Justice Act 2003** abolished most former **ineligibility** (judges, lawyers, police now eligible) — raising bias concerns: *R v Abdroikof* [2007]. **Majority verdicts** (10:2) — **s.17 Juries Act 1974**."
    ]},
    { h: "Confidentiality & weaknesses", l: [
      "**Confidentiality: s.8 Contempt of Court Act 1981** — deliberations are **secret**, protecting frank deliberation; held compatible with **Art. 6** in *Gregory v UK* (1997).",
      "**Weakness:** secret, no-reasons verdicts can rest on prejudice, misunderstanding or misconduct — *R v Fraill* (2011) (juror researched the case online / contacted a defendant → contempt); *R v Young* (1995) (Ouija board). **Research** during trial is an offence (**s.20 Juries Act 1974**). Other weaknesses: bias, lack of competence, **jury tampering** (→ judge-alone trial, **s.44 CJA 2003**, *R v Twomey*), cost and time."
    ]},
    { h: "Plan-type (« the jury — bulwark of liberties; explain jury equity; one weakness »)", p: "**I. Jury equity** — general verdict + no prosecution appeal (*Ponting*; *Wang*). **II. One weakness** — secrecy / competence / bias (*Fraill*; *Abdroikof*)." },
    { h: "⚠️ Piège à éviter", p: "Juries are **not told** they may acquit on conscience, but they are **allowed** to. Conviction is **always** « beyond reasonable doubt ». Distinguish **eligibility** from **disqualification** and **excusal**." }
  ]
},

{
  part: "People in courts",
  title: "L'indépendance de la justice",
  sub: "« Justice must not only be done, it must be seen to be done »",
  exam: true,
  refs: "Sujet 1 Q6",
  blocks: [
    { h: "L'essentiel", p: "**Judicial independence** means judges decide cases **impartially, according to law, free from pressure** from the executive, the legislature or the parties — an **institutional** and an **individual** dimension. It underpins the **separation of powers** (Montesquieu) and the **rule of law**. *R v Sussex Justices, ex p McCarthy* [1924]: « justice must be seen to be done »." },
    { h: "Les garanties (safeguards)", l: [
      "**Security of tenure:** since the **Act of Settlement 1701**, senior judges hold office **« during good behaviour »** and may be removed only by the monarch on an **address of both Houses**; salaries are charged on the **Consolidated Fund** (no annual political vote). In practice **no senior English judge** has been removed under the 1701 procedure.",
      "**Constitutional Reform Act 2005:** a statutory duty on ministers — esp. the **Lord Chancellor** — to **uphold judicial independence** and not to seek to influence decisions (**s.3**); created an independent **UK Supreme Court** (2009) and a **Judicial Appointments Commission**. The Lord Chancellor is no longer Speaker of the Lords or head of the judiciary.",
      "**Immunity** from being sued for acts done in the exercise of jurisdiction.",
      "**Appearance of impartiality** — disqualification for a **pecuniary interest** (*Dimes v Grand Junction Canal* (1852)) or a relevant **non-pecuniary** connection (*R v Bow Street Magistrate, ex p Pinochet (No 2)* [2000] — Lord Hoffmann's link to Amnesty International)."
    ]},
    { h: "Plan-type (« judicial independence; one safeguard; illustrate »)", p: "**I. Meaning + rationale** — separation of powers, rule of law, « seen to be done ». **II. One safeguard** — e.g. **security of tenure** (Act of Settlement 1701 / CRA 2005) + the bias rules (*Dimes*, *Pinochet*)." },
    { h: "⚠️ Piège à éviter", p: "Security of tenure dates from the **Act of Settlement 1701**; the **CRA 2005 reinforced** independence (Lord Chancellor reform). « Seen to be done » = the **appearance** of independence matters **as much as** its reality." }
  ]
},

{
  part: "People in courts",
  title: "La nomination des juges & la diversité",
  sub: "La JAC & le débat sur la composition de la magistrature",
  exam: true,
  refs: "Sujet 9 Q2",
  blocks: [
    { h: "L'essentiel", p: "Since the **Constitutional Reform Act 2005**, judges in England & Wales are selected by the **Judicial Appointments Commission (JAC)** — an independent body created to take appointments **out of the Lord Chancellor's hands** and make the process **open and transparent**." },
    { h: "À retenir", l: [
      "The JAC selects **solely on merit** (s.63 CRA) and good character, under a statutory **duty to encourage diversity** (s.64) — positive action **only where merit is equal**; it then **recommends** a candidate to the Lord Chancellor, whose power to reject is **limited**. UKSC appointments use a **separate** selection commission. 15 members incl. **lay** commissioners; all posts **advertised**; the old « right of audience » requirement replaced by post-qualification experience (widening the pool).",
      "**The old system** was criticised: only barristers, no advertisement, secret « soundings », an « old boys' network » — « **opaque, outdated and not demonstrably based on merit** » (Commission for Judicial Appointments, 2003).",
      "**Diversity criticism:** the senior judiciary has long been overwhelmingly **male, white, privately/Oxbridge-educated** — it does **not reflect society**, which affects public confidence. Progress but **slow**: **Brenda Hale** (first female UKSC Justice; first female **President**, 2017); **Baroness Carr** (first **Lady Chief Justice**, 2023). Women and ethnic-minority judges remain under-represented at the most senior levels; an undefined « merit » may perpetuate a narrow profile.",
      "**Removal:** High Court & above — only the monarch on an **address of both Houses** (Act of Settlement 1701); retirement usually **70** (extendable to 75)."
    ]},
    { h: "Plan-type (« how judges are appointed; one criticism of composition »)", p: "**I. The JAC** — CRA 2005, **merit + duty to encourage diversity**, transparency, advertised posts. **II. The lack of diversity** — composition, slow progress (Hale, Carr), the « merit » debate." },
    { h: "⚠️ Piège à éviter", p: "The JAC selects on **merit** with a **duty to encourage diversity** — **not quotas** (positive action only at **equal merit**). **Lady Carr** = **Lady Chief Justice** (2023), **not** « Lady Chancellor »." }
  ]
},

{
  part: "People in courts",
  title: "Les professions juridiques : solicitors & barristers",
  sub: "Deux branches · la « cab-rank rule »",
  exam: true,
  refs: "Sujet 4 Q7",
  blocks: [
    { h: "L'essentiel", p: "The legal profession in England & Wales is divided into **two branches**: **solicitors** and **barristers**." },
    { h: "Les deux branches", l: [
      "**Solicitors** — broad **day-to-day** legal work (conveyancing, wills & probate, family, drafting, advice); usually the client's **first point of contact**; rights of audience in the **lower courts** (magistrates'/county), with **higher rights** as **solicitor-advocates** (Courts and Legal Services Act 1990); work in **high-street** or large **« Magic Circle »** firms; may be **in-house**. Qualify now via the **SQE** (since 2021) + **2 years' qualifying work experience**, regulated by the **SRA**.",
      "**Barristers** — **specialist advocates** and expert opinions, chiefly in the **higher courts**; traditionally **self-employed** in a **« set of chambers »** (the **clerk** allocates work); historically instructed **only through a solicitor**, but **direct/public access since 2004**. **« Called to the Bar »** by one of the **four Inns of Court** (Gray's Inn, Lincoln's Inn, Middle Temple, Inner Temple); qualify via Bar training + **pupillage**; senior barristers may become **KC** (« silks ») after ~15 years."
    ]},
    { h: "La cab-rank rule", l: [
      "Under the **Bar Standards Board** Code, a **self-employed barrister must accept any case** within their **field of practice** — whatever the client and whatever the nature of the case — provided it is within their **competence**, they are **available**, and a **proper fee** is offered.",
      "**Rationale:** it secures **representation for all, even the most unpopular defendant**, and protects the barrister from being **identified with the client's cause** — reflecting the principle that every person is entitled to a defence."
    ]},
    { h: "Plan-type (« difference solicitor/barrister; one rule governing barristers; illustrate »)", p: "**I. The two branches** — roles, courts, organisation, qualification. **II. The cab-rank rule** — content + **rationale** (access to representation for all)." },
    { h: "⚠️ Piège à éviter", p: "The **cab-rank rule** binds **barristers** (not solicitors), ensuring even an **unpopular** defendant can be represented. Do not confuse it with **public / direct access** (the 2004 reform)." }
  ]
},

{
  part: "People in courts",
  title: "Les grands offices judiciaires",
  sub: "Lord Chancellor · Lord Chief Justice · Master of the Rolls · UKSC",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "A few **top offices** structure the judiciary, profoundly **reshaped by the Constitutional Reform Act 2005**." },
    { h: "À retenir", l: [
      "**Lord Chancellor** (now combined with the **Secretary of State for Justice**): historically straddled **all three branches** — Speaker of the Lords (legislature), minister (executive), head of the judiciary & a judge (judiciary) — a breach of the **separation of powers**. The **CRA 2005** stripped the judicial roles: **no longer** Speaker of the Lords, **no longer** head of the judiciary or a judge; now heads the **Ministry of Justice** (since 2007: courts, prisons, legal aid).",
      "**Lord/Lady Chief Justice** — the judge at the **top of the hierarchy**: **President of the Courts** of England & Wales and **Head of the judiciary**; President of the **Court of Appeal (Criminal Division)**. Holder: **Baroness Carr** (since 2023).",
      "**Master of the Rolls** — President of the **Court of Appeal (Civil Division)**.",
      "**UK Supreme Court** — the **highest appeal court** (civil & criminal), which **replaced the House of Lords in 2009**; **12 Justices**; President **Lord Reed**."
    ]},
    { h: "⚠️ À savoir", p: "The **CRA 2005** is the key reform (the Lord Chancellor's roles split; the UKSC created) — it underpins both **judicial independence** and the modern **appointments** system." }
  ]
}

];
